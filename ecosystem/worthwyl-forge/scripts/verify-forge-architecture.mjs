import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const architecture = JSON.parse(fs.readFileSync(path.join(root, 'FORGE_ARCHITECTURE.json'), 'utf8'));
const lock = fs.readFileSync(path.join(root, 'FORGE_ARCHITECTURE_LOCK.md'), 'utf8');

const requiredLayers = ['L0','L1','L2','L2.5','L3','L4','L5','L6','L7'];
const failures = [];

if (architecture.architectureStatus !== 'LOCKED_BASELINE') failures.push('architecture status is not LOCKED_BASELINE');
if (architecture.coreStackComponent !== false) failures.push('Forge is marked as a core-stack component');
if (architecture.independentlyDeployable !== true) failures.push('Forge is not independently deployable');
if (architecture.independentlyLicensable !== true) failures.push('Forge is not independently licensable');
if (architecture.canonicalAuthority !== false) failures.push('Forge is marked as canonical authority');
for (const layer of requiredLayers) {
  if (!architecture.layers.some(item => item.id === layer)) failures.push(`missing layer ${layer}`);
}
for (const phrase of [
  'Independent capability first',
  'product-local governance is not Convertible Cranium authority',
  'Decision identity',
  'Two clocks',
  'Agents may propose',
  'L6 — Verification & Review Ladder',
  'FREEZE'
]) {
  if (!lock.includes(phrase)) failures.push(`locked architecture missing: ${phrase}`);
}

if (failures.length) {
  console.error('FORGE ARCHITECTURE LOCK: FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('FORGE ARCHITECTURE LOCK: PASS');
console.log('standalone=1 independently-licensable=1 core-stack-component=0 canonical-authority=0 layers=9');
