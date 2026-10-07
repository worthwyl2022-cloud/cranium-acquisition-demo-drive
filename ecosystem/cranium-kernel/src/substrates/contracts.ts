import type { EvidenceRef } from "../kernel/types";

export type GovernanceFinding = "PERMITTED" | "PROHIBITED" | "CONDITIONAL" | "ESCALATED" | "UNRESOLVED";
export type GroundingVerdict = "GROUNDED" | "CONTRADICTED" | "INSUFFICIENT" | "UNRESOLVED";

export interface SubstrateProposal {
  proposalId: string; action: string; target: string; scope: string;
  riskClass: "LOW" | "ELEVATED" | "HIGH" | "CRITICAL";
  requestedEffect: string; timestamp: number;
}

export interface ConstitutionA {
  version: string; prohibitedActions: string[]; protectedScopes: string[];
  maxRiskClass: "LOW" | "ELEVATED" | "HIGH" | "CRITICAL";
}
export interface PolicyA {
  version: string; allowedScopes: string[];
  requireHumanApprovalAbove: "LOW" | "ELEVATED" | "HIGH" | "CRITICAL";
}
export interface FormulaA { version: string; digest: string; }
export interface EvidenceRecord extends EvidenceRef {
  observedAt: number; sourceType: string; relevance: number;
}

export interface ConstitutionFinding {
  substrate: "A"; proposalHash: string; sealed: true;
  constitutionVersion: string; policyVersion: string; formulaVersion: string;
  a1: GovernanceFinding; a2: GovernanceFinding; finding: GovernanceFinding;
  reasons: string[]; digest: string;
}
export interface GroundingFinding {
  substrate: "B"; proposalHash: string; sealed: true;
  constitutionVersion: string; policyVersion: string; formulaVersion: string;
  b1: GroundingVerdict; b2: GroundingVerdict; finding: GroundingVerdict;
  evidenceDigests: string[]; reasons: string[]; digest: string;
}
export interface DualSubstrateDecision {
  status: "CONVERGED" | "DENIED" | "QUARANTINED" | "ESCALATED";
  constitutional: ConstitutionFinding; grounding: GroundingFinding;
  authorityMayBeConsidered: boolean; reason: string; convergenceDigest?: string;
}
