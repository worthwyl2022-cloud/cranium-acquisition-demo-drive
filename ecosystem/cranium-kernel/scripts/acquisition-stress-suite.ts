#!/usr/bin/env node
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AdversarialSuite } from '../src/kernel/adversarial.ts';
import { InMemoryReplayGuard } from '../src/kernel/replayGuard.ts';
import { DefaultAuthorityTransitionEngine } from '../src/kernel/engine.ts';
import { createInitialKernelState } from '../src/data/initialState.ts';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const kernelRoot = join(scriptDir, '..');
const manifestPath = join(kernelRoot, 'evidence', 'acquisition-stress-suite-manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as {
  schema: string;
  version: string;
  authority: string;
  cases: Array<{
    id: string;
    name: string;
    type: 'adversarial' | 'script';
    adversarialId?: string;
    script?: string;
    expectedDecision?: string;
    expectedViolation?: string;
    expectedMarker?: string;
  }>;
};

assert.equal(manifest.cases.length, 14, 'Acquisition suite must contain exactly 14 cases');
assert.equal(manifest.authority, 'cranium-kernel');

const tsxCli = join(kernelRoot, 'node_modules', 'tsx', 'dist', 'cli.mjs');

function runKernelScript(script: string) {
  const result = spawnSync(process.execPath, [tsxCli, script], {
    cwd: kernelRoot,
    encoding: 'utf8',
    timeout: 120000,
    maxBuffer: 2 * 1024 * 1024,
  });
  return {
    exitCode: result.status ?? 1,
    timedOut: result.error?.code === 'ETIMEDOUT',
    output: `${result.stdout ?? ''}${result.stderr ?? ''}`,
  };
}

const startedAt = Date.now();
const results: Array<{
  id: string;
  name: string;
  passed: boolean;
  durationMs: number;
  detail: string;
}> = [];

const sharedReplayGuard = new InMemoryReplayGuard();
const adversarialResults = AdversarialSuite.runAll(
  createInitialKernelState(),
  sharedReplayGuard,
  new DefaultAuthorityTransitionEngine(sharedReplayGuard)
).results;

for (const spec of manifest.cases) {
  const started = process.hrtime.bigint();
  let passed = false;
  let detail = '';

  if (spec.type === 'adversarial') {
    const observed = adversarialResults.find((result) => result.id === spec.adversarialId);
    assert.ok(observed, `Missing adversarial result ${spec.adversarialId}`);
    passed =
      observed.passed === true &&
      observed.actualDecision === spec.expectedDecision &&
      observed.details.includes(spec.expectedViolation ?? '');
    detail = JSON.stringify({
      decision: observed.actualDecision,
      expectedViolation: spec.expectedViolation,
      observedDetails: observed.details,
      requestHash: observed.hashGenerated,
      executionTimeMs: observed.executionTimeMs,
    });
  } else {
    assert.ok(spec.script, `${spec.id} is missing its executable script`);
    assert.ok(spec.expectedMarker, `${spec.id} is missing its expected evidence marker`);
    const run = runKernelScript(spec.script);
    passed = run.exitCode === 0 && !run.timedOut && run.output.includes(spec.expectedMarker);
    detail = JSON.stringify({
      exitCode: run.exitCode,
      timedOut: run.timedOut,
      expectedMarker: spec.expectedMarker,
      outputTail: run.output.slice(-4000),
    });
  }

  const durationMs = Number(process.hrtime.bigint() - started) / 1_000_000;
  const result = {
    id: spec.id,
    name: spec.name,
    passed,
    durationMs: Number(durationMs.toFixed(3)),
    detail,
  };
  results.push(result);

  console.log(`${passed ? 'PASS' : 'FAIL'} ${spec.id} ${spec.name}`);
  if (!passed) console.error(detail);
}

const failures = results.filter((result) => !result.passed);
const report = {
  schema: manifest.schema,
  suiteVersion: manifest.version,
  generatedAt: new Date().toISOString(),
  repository: process.env.GITHUB_REPOSITORY ?? 'local',
  revision: process.env.GITHUB_SHA ?? 'workspace',
  node: process.version,
  platform: process.platform,
  architecture: process.arch,
  elapsedMs: Date.now() - startedAt,
  total: results.length,
  passed: results.length - failures.length,
  failed: failures.length,
  cases: results,
};

const artifactDir = join(kernelRoot, 'artifacts');
mkdirSync(artifactDir, { recursive: true });
writeFileSync(
  join(artifactDir, 'acquisition-stress-suite-report.json'),
  `${JSON.stringify(report, null, 2)}\n`,
  'utf8'
);
writeFileSync(
  join(artifactDir, 'acquisition-stress-suite-report.md'),
  [
    '# Acquisition Stress Suite Evidence',
    '',
    `- Generated: ${report.generatedAt}`,
    `- Revision: ${report.revision}`,
    `- Runtime: ${report.node}`,
    `- Result: ${report.passed}/${report.total} passed`,
    '',
    '| Case | Result | Duration (ms) |',
    '| --- | --- | ---: |',
    ...results.map((result) => `| ${result.id} | ${result.passed ? 'PASS' : 'FAIL'} | ${result.durationMs.toFixed(3)} |`),
    '',
    'This artifact records repository-executable behavior only. It is not an independent security audit or a guarantee of absence of vulnerabilities.',
    '',
  ].join('\n'),
  'utf8'
);

console.log(`ACQUISITION_STRESS_SUITE_SUMMARY total=${report.total} passed=${report.passed} failed=${report.failed}`);
if (failures.length > 0) {
  console.error(`ACQUISITION_STRESS_SUITE_FAIL ids=${failures.map((failure) => failure.id).join(',')}`);
  process.exit(1);
}
console.log('ACQUISITION_STRESS_SUITE_PASS');
