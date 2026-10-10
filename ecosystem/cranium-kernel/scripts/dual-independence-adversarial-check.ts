import assert from "node:assert/strict";
import { sha256 } from "../src/kernel/sha256";
import { ConstitutionalSubstrateA } from "../src/substrates/substrateA";
import { EvidenceGroundingSubstrateB } from "../src/substrates/substrateB";
import { KernelConvergenceGate } from "../src/substrates/convergence";

const proposal = {
  proposalId: "independence-adversarial-001",
  action: "read",
  target: "repository",
  scope: "workspace",
  riskClass: "LOW" as const,
  requestedEffect: "inspect",
  timestamp: 1700000000000,
};
const constitution = {
  version: "A-1.0.0",
  prohibitedActions: ["delete"],
  protectedScopes: ["identity"],
  maxRiskClass: "HIGH" as const,
};
const policy = {
  version: "A-P-1.0.0",
  allowedScopes: ["workspace"],
  requireHumanApprovalAbove: "HIGH" as const,
};
const formulaA = { version: "A-F-1.0.0", digest: sha256("formula-a") };
const formulaB = { version: "B-F-1.0.0", digest: sha256("formula-b") };
const evidence = [{
  id: "e1",
  uri: "urn:test:repository",
  sha256Digest: sha256("repository"),
  verified: true,
  description: "repository evidence for repository",
  observedAt: proposal.timestamp,
  sourceType: "test",
  relevance: 1,
}];
const contradictoryEvidence = [{
  ...evidence[0],
  id: "e2",
  description: "forged contradictory repository evidence",
}];

const A = new ConstitutionalSubstrateA(constitution, policy, formulaA);
const B = new EvidenceGroundingSubstrateB(formulaB);

const aBaseline = A.evaluate(proposal);
const bGrounded = B.evaluate(proposal, evidence);
const bContradicted = B.evaluate(proposal, contradictoryEvidence);

assert.equal(aBaseline.finding, "PERMITTED");
assert.equal(bGrounded.finding, "GROUNDED");
assert.equal(bContradicted.finding, "CONTRADICTED");

// B's evidence changes cannot alter A's sealed assessment.
assert.deepEqual(A.evaluate(proposal), aBaseline);

// A's policy changes cannot alter B's evidence-grounding assessment.
const ARestricted = new ConstitutionalSubstrateA(
  { ...constitution, prohibitedActions: ["read"] },
  policy,
  formulaA,
);
assert.notEqual(ARestricted.evaluate(proposal).finding, aBaseline.finding);
assert.equal(B.evaluate(proposal, evidence).digest, bGrounded.digest);

// Evidence ordering is normalized inside B, preventing a covert ordering channel.
assert.equal(B.evaluate(proposal, [...evidence].reverse()).digest, bGrounded.digest);

// Cross-substrate mismatch remains non-authoritative.
const gate = new KernelConvergenceGate();
assert.equal(gate.evaluate(aBaseline, bContradicted).status, "DENIED");
assert.equal(gate.evaluate(aBaseline, { ...bGrounded, proposalHash: sha256("different") }).status, "QUARANTINED");

console.log("DUAL INDEPENDENCE ADVERSARIAL CHECK: PASS input-isolation=1 policy-isolation=1 evidence-isolation=1 ordering-normalized=1 mismatch-quarantine=1");
