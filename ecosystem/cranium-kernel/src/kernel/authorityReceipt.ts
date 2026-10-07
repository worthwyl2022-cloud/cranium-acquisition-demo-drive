import type { AuthorityLevel, AuthorityReceipt, AuthorityTransition } from "./types";
import { sha256 } from "./sha256";

function canonicalReceipt(receipt: Omit<AuthorityReceipt, "receiptDigest">): string {
  return [
    "receiptVersion=" + receipt.receiptVersion,
    "issuer=" + receipt.issuer,
    "transitionId=" + receipt.transitionId,
    "subjectAtomId=" + receipt.subjectAtomId,
    "authorityClass=" + receipt.authority.authorityClass,
    "authorityWeight=" + receipt.authority.weight.toFixed(6),
    "authorityVersion=" + receipt.authorityVersion,
    "constitutionalVersion=" + receipt.constitutionalVersion,
    "requestHash=" + receipt.requestHash.hexDigest,
    "evidenceRefs=" + receipt.evidenceRefs.slice().sort().join(","),
    "decision=" + receipt.decision,
    "issuedAt=" + receipt.issuedAt,
  ].join("|");
}

export function createAuthorityReceipt(transition: AuthorityTransition, constitutionalVersion: string): AuthorityReceipt {
  const authority: AuthorityLevel = transition.decision.type === "Granted"
    ? transition.decision.grantedAuthority
    : transition.requestedAuthority;
  const unsigned: Omit<AuthorityReceipt, "receiptDigest"> = {
    receiptVersion: "1.0",
    issuer: "CRANIUM_KERNEL",
    transitionId: transition.id,
    subjectAtomId: transition.subjectAtomId,
    authority,
    authorityVersion: transition.evaluatedAuthorityVersion,
    constitutionalVersion,
    requestHash: transition.requestHash,
    evidenceRefs: transition.evidenceRefs.slice().sort(),
    decision: transition.decision.type,
    issuedAt: transition.timestamp,
  };
  return { ...unsigned, receiptDigest: sha256(canonicalReceipt(unsigned)) };
}

export function verifyAuthorityReceipt(receipt: AuthorityReceipt): boolean {
  const { receiptDigest, ...unsigned } = receipt;
  return receipt.receiptVersion === "1.0"
    && receipt.issuer === "CRANIUM_KERNEL"
    && receipt.requestHash.algorithm === "SHA-256"
    && receiptDigest === sha256(canonicalReceipt(unsigned));
}
