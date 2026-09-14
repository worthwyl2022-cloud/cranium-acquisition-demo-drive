# Contract Alignment

**Canonical semantic contract:** [`cranium-kernel/docs/CANONICAL_SEMANTIC_CONTRACT.json`](https://github.com/worthwyl2022-cloud/cranium-kernel/blob/main/docs/CANONICAL_SEMANTIC_CONTRACT.json)

Cranium Synapse is the **bounded attestation and evidence adapter**. It may assess inputs and emit a hash-bound attestation, but it may not grant authority, mutate canonical state, authorize tools, issue canonical receipts, or replace the Kernel evaluator. The reference implementation and integration proof remain in `cranium-kernel/src/governance/SynapseRuntimeAdapter.ts` and `cranium-kernel/scripts/synapse-integration-check.ts`.

The local public type surface mirrors the Kernel-owned attestation fields and validates model provenance, policy binding, bounded risk and confidence, intervention, trace commitment, and disposition. This is a compatibility boundary, not a second canon. Changes to semantics originate in `cranium-kernel` and propagate here.

Evidence must be reported as **implemented and verified** only when the real Kernel integration path and verification corpus have run. Static examples are `fixture` or `test-only` and are never authority evidence.
