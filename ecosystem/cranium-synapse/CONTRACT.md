# Synapse evidence contract v1

## Purpose

Synapse converts an assessment into evidence that Core may validate. The
contract is deliberately narrow: inference evidence is not decision authority.

## Attestation fields

A v1 attestation must contain:

- `assessmentId`: unique assessment identifier
- `correlationId`: request/cycle correlation identifier
- `modelId`: identifier of the producing model or adapter
- `policyVersion`: policy evaluated by Synapse
- `riskScore`: bounded risk score from 0 through 1
- `disposition`: `CONTINUE`, `ELEVATED_RISK`, `RESTRICT_TOOLS`, `ABSTAIN`,
  `ESCALATE`, or `INTEGRITY_FAILURE`
- `intervention`: allowed intervention evidence
- `attestationHash`: canonical SHA-256 binding of the preceding material

## Core requirements

Core must reject an attestation when canonical binding, correlation binding, or
policy binding fails; when a protected action conflicts with disposition; or
when the attestation has changed after its hash was computed.

## Non-authority rule

No Synapse output can increment authority version, write authoritative state,
or authorize external tool execution. Only the Core authority engine may do
those things.
