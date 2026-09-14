/**
 * Cranium Synapse public evidence contract.
 *
 * Authority source: cranium-kernel/docs/CANONICAL_SEMANTIC_CONTRACT.json
 * Synapse may emit bounded evidence; it never grants authority or writes
 * canonical state.
 */

export const CANONICAL_AUTHORITY_SOURCE = 'cranium-kernel' as const;

export type SynapseRiskClass = 'LOW' | 'ELEVATED' | 'HIGH' | 'CRITICAL';
export type SynapseIntervention = 'NONE' | 'STEER' | 'RESTRICT' | 'ABSTAIN' | 'ESCALATE';
export type SynapseDisposition = 'ALLOW' | 'RESTRICT' | 'ESCALATE' | 'BLOCK';

export interface SynapseAttestationV1 {
  assessmentId: string;
  correlationId: string;
  modelId: string;
  modelWeightsHash: string;
  inferenceRuntime: string;
  policyPackVersion: string;
  controllerConfigHash: string;
  riskClass: SynapseRiskClass;
  riskScore: number;
  confidence: number;
  intervention: SynapseIntervention;
  traceCommitment: string;
  disposition: SynapseDisposition;
}

export function isBoundedRiskScore(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 1;
}

export function isSynapseAttestationV1(value: unknown): value is SynapseAttestationV1 {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<SynapseAttestationV1>;
  return typeof candidate.assessmentId === 'string'
    && typeof candidate.correlationId === 'string'
    && typeof candidate.modelId === 'string'
    && typeof candidate.modelWeightsHash === 'string'
    && typeof candidate.inferenceRuntime === 'string'
    && typeof candidate.policyPackVersion === 'string'
    && typeof candidate.controllerConfigHash === 'string'
    && (candidate.riskClass === 'LOW' || candidate.riskClass === 'ELEVATED' || candidate.riskClass === 'HIGH' || candidate.riskClass === 'CRITICAL')
    && typeof candidate.riskScore === 'number'
    && isBoundedRiskScore(candidate.riskScore)
    && typeof candidate.confidence === 'number'
    && isBoundedRiskScore(candidate.confidence)
    && (candidate.intervention === 'NONE' || candidate.intervention === 'STEER' || candidate.intervention === 'RESTRICT' || candidate.intervention === 'ABSTAIN' || candidate.intervention === 'ESCALATE')
    && typeof candidate.traceCommitment === 'string'
    && candidate.traceCommitment.length > 0
    && (candidate.disposition === 'ALLOW' || candidate.disposition === 'RESTRICT' || candidate.disposition === 'ESCALATE' || candidate.disposition === 'BLOCK');
}
