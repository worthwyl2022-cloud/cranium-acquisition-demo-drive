import assert from 'node:assert/strict';
import { normalizeListenerIngress } from '../src/kernel/listener';
import { createInitialKernelState } from '../src/data/initialState';
import { AuthorityClass } from '../src/kernel/types';
import type { AuthorityTransitionRequest } from '../src/kernel/types';
import { sha256 } from '../src/kernel/sha256';
import { ConstitutionalSubstrateA } from '../src/substrates/substrateA';
import { EvidenceGroundingSubstrateB } from '../src/substrates/substrateB';
import { KernelConvergenceGate } from '../src/substrates/convergence';
import { QuadEngineAuthorityPath } from '../src/substrates/quadEngine';
import { createAuthorityProof, verifyAuthorityProof } from '../src/kernel/proofLayer';
import { verifyAuthorityReceipt } from '../src/kernel/authorityReceipt';
import { KernelStateReducer } from '../src/kernel/engine';
import { InMemoryReplayGuard } from '../src/kernel/replayGuard';

const receivedAt = 1759800000000;
const ingress = normalizeListenerIngress({
  source: 'convertible-cranium-e2e-test',
  receivedAt,
  payload: {
    action: 'read',
    target: 'repository',
    scope: 'workspace',
    requestedEffect: 'inspect repository evidence',
    riskClass: 'LOW',
  },
});
assert.equal(ingress.accepted, true);
if (!ingress.accepted) throw new Error(ingress.reason);
assert.equal(ingress.normalized.authority, 'NONE');

const input = ingress.normalized.payloadJson as string;
const payload = JSON.parse(input) as Record<string, string>;
const proposal = {
  proposalId: 'synapse-e2e-001',
  action: payload.action,
  target: payload.target,
  scope: payload.scope,
  riskClass: payload.riskClass as 'LOW',
  requestedEffect: payload.requestedEffect,
  timestamp: receivedAt,
};

const substrateA = new ConstitutionalSubstrateA(
  {
    version: 'A-1.0.0',
    prohibitedActions: ['delete'],
    protectedScopes: ['identity'],
    maxRiskClass: 'HIGH',
  },
  {
    version: 'A-P-1.0.0',
    allowedScopes: ['workspace'],
    requireHumanApprovalAbove: 'HIGH',
  },
  { version: 'A-F-1.0.0', digest: sha256('formula-a') },
);
const substrateB = new EvidenceGroundingSubstrateB({
  version: 'B-F-1.0.0',
  digest: sha256('formula-b'),
});
const evidence = [{
  id: 'e2e-repository',
  uri: 'urn:test:repository',
  sha256Digest: sha256('repository'),
  verified: true,
  description: 'verified repository evidence',
  observedAt: receivedAt,
  sourceType: 'test-fixture',
  relevance: 1,
}];

const state = createInitialKernelState();
const subjectId = 'atom-hypo-004';
const request: Omit<AuthorityTransitionRequest, 'assessmentDisposition' | 'evidence'> = {
  requestId: 'e2e-request-001',
  idempotencyKey: 'e2e-idem-001',
  subjectId,
  requestedAuthority: { authorityClass: AuthorityClass.WORKING, weight: 0.45 },
  justification: 'End-to-end governed promotion from verified evidence.',
  requesterId: 'CONVERTIBLE_CRANIUM_SYNAPSE',
  timestamp: receivedAt,
  targetAuthorityVersion: state.authorityVersion,
  namespace: 'convertible-cranium-e2e',
};

const path = new QuadEngineAuthorityPath(
  substrateA,
  substrateB,
  new KernelConvergenceGate(),
);
const transition = path.evaluate(proposal, evidence, request, state);

assert.equal(transition.boundary.passed, true, 'Kernel boundary must pass after independent convergence');
assert.equal(transition.decision.type, 'Granted', 'converged authority path should grant the requested bounded transition');
assert.equal(transition.evidenceRefs.includes('e2e-repository'), true);
assert.ok(transition.authorityReceipt);
assert.equal(verifyAuthorityReceipt(transition.authorityReceipt!), true);

const proof = createAuthorityProof(transition, transition.authorityReceipt!);
assert.equal(verifyAuthorityProof(proof, transition, transition.authorityReceipt!), true);

const replayGuard = new InMemoryReplayGuard();
const committed = KernelStateReducer.reduce(
  state,
  transition,
  replayGuard,
  { ...request, evidence, assessmentDisposition: 'allow' },
  { type: 'New' },
);
assert.equal(committed.transitions.length, 1);
assert.equal(committed.atomsById[subjectId].authority.authorityClass, AuthorityClass.WORKING);

let executed = 0;
if (transition.decision.type === 'Granted' && verifyAuthorityProof(proof, transition, transition.authorityReceipt!)) {
  executed += 1;
}
assert.equal(executed, 1, 'governed execution requires a verified Kernel proof');

const deniedIngress = normalizeListenerIngress({
  source: 'convertible-cranium-e2e-test',
  receivedAt,
  payload: { action: 'delete', target: 'repository', scope: 'workspace', requestedEffect: 'delete data', riskClass: 'LOW' },
});
assert.equal(deniedIngress.accepted, true);

const deniedProposal = {
  ...proposal,
  proposalId: 'synapse-e2e-denied',
  action: 'delete',
  requestedEffect: 'delete data',
};
const denied = path.evaluate(deniedProposal, evidence, { ...request, requestId: 'e2e-request-denied', idempotencyKey: 'e2e-idem-denied' }, state);
assert.equal(denied.decision.type, 'Denied', 'prohibited action must never acquire authority');
assert.equal(denied.authorityReceipt?.decision, 'Denied');

console.log('CONVERTIBLE CRANIUM END-TO-END AUTHORITY PATH: PASS');
console.log('listener=NONE synapse=proposal substrateA=MAY-WE substrateB=IS-IT-SO kernel=GRANTED execution=proof-gated receipt=verified');
console.log('negative-path=prohibited-action-denied');
