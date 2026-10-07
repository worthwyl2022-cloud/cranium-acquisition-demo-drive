import assert from 'node:assert/strict';
import { AuthorityClass, type AuthorityTransitionRequest } from '../src/kernel/types';
import { createInitialKernelState } from '../src/data/initialState';
import { DefaultAuthorityTransitionEngine } from '../src/kernel/engine';
import { InMemoryReplayGuard } from '../src/kernel/replayGuard';
import { createAuthorityProof, verifyAuthorityProof } from '../src/kernel/proofLayer';

const state = createInitialKernelState();
const request: AuthorityTransitionRequest = {
  requestId: 'proof-layer-check', idempotencyKey: 'proof-layer-check', subjectId: 'atom-hypo-004',
  requestedAuthority: { authorityClass: AuthorityClass.WORKING, weight: 0.45 }, evidence: [],
  justification: 'Independent proof-layer verification', requesterId: 'PROOF_CHECK',
  timestamp: 1760000000000, targetAuthorityVersion: state.authorityVersion,
};
const transition = new DefaultAuthorityTransitionEngine(new InMemoryReplayGuard()).evaluate(request, state).transition;
assert.ok(transition.authorityReceipt);
const receipt = transition.authorityReceipt!;
const proof = createAuthorityProof(transition, receipt);
assert.equal(verifyAuthorityProof(proof, transition, receipt), true);
assert.equal(verifyAuthorityProof({ ...proof, proofDigest: 'forged' }, transition, receipt), false);
assert.equal(verifyAuthorityProof(proof, { ...transition, requestHash: { ...transition.requestHash, hexDigest: 'forged' } }, receipt), false);
assert.throws(() => createAuthorityProof({ ...transition, id: 'forged-transition' }, receipt), /PROOF_TRANSITION_MISMATCH/);
console.log('AUTHORITY PROOF LAYER: PASS valid=1 forged-proof=blocked forged-request=blocked transition-binding=blocked');
