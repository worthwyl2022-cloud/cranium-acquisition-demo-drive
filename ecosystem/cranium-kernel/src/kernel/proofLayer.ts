import { sha256 } from './sha256';
import type { AuthorityReceipt, AuthorityTransition } from './types';
import { verifyAuthorityReceipt } from './authorityReceipt';

export interface AuthorityProof {
  proofVersion: '1.0';
  transitionId: string;
  requestDigest: string;
  decision: AuthorityTransition['decision']['type'];
  boundaryPassed: boolean;
  receiptDigest: string;
  proofDigest: string;
}

function canonicalProofInput(input: Omit<AuthorityProof, 'proofDigest'>): string {
  return [
    input.proofVersion,
    input.transitionId,
    input.requestDigest,
    input.decision,
    String(input.boundaryPassed),
    input.receiptDigest,
  ].join('|');
}

export function createAuthorityProof(
  transition: AuthorityTransition,
  receipt: AuthorityReceipt,
): AuthorityProof {
  if (transition.id !== receipt.transitionId) throw new Error('PROOF_TRANSITION_MISMATCH');
  if (transition.requestHash.hexDigest !== receipt.requestHash.hexDigest) throw new Error('PROOF_REQUEST_HASH_MISMATCH');
  if (transition.decision.type !== receipt.decision) throw new Error('PROOF_DECISION_MISMATCH');
  if (!verifyAuthorityReceipt(receipt)) throw new Error('PROOF_RECEIPT_INVALID');
  const unsigned = {
    proofVersion: '1.0' as const,
    transitionId: transition.id,
    requestDigest: transition.requestHash.hexDigest,
    decision: transition.decision.type,
    boundaryPassed: transition.boundary.passed,
    receiptDigest: receipt.receiptDigest,
  };
  return { ...unsigned, proofDigest: sha256(canonicalProofInput(unsigned)) };
}

export function verifyAuthorityProof(
  proof: AuthorityProof,
  transition: AuthorityTransition,
  receipt: AuthorityReceipt,
): boolean {
  try {
    if (proof.proofVersion !== '1.0') return false;
    if (proof.transitionId !== transition.id || receipt.transitionId !== transition.id) return false;
    if (proof.requestDigest !== transition.requestHash.hexDigest || receipt.requestHash.hexDigest !== transition.requestHash.hexDigest) return false;
    if (proof.decision !== transition.decision.type || receipt.decision !== transition.decision.type) return false;
    if (proof.boundaryPassed !== transition.boundary.passed) return false;
    if (!verifyAuthorityReceipt(receipt)) return false;
    if (proof.receiptDigest !== receipt.receiptDigest) return false;
    const unsigned = { ...proof };
    delete (unsigned as Partial<AuthorityProof>).proofDigest;
    return sha256(canonicalProofInput(unsigned as Omit<AuthorityProof, 'proofDigest'>)) === proof.proofDigest;
  } catch {
    return false;
  }
}
