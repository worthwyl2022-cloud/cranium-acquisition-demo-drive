# Convertible Cranium Governance Contract
Derived from: CANONICAL_ARCHITECTURE.md

## Authority invariant

Models, tools, memory, substrates, surfaces, and operators may propose or evaluate. Only the Cranium Kernel canonical authority path may create canonical authority.

## Four-engine contract

### E1 Synapse
Produces proposal/evidence/attestation material only.

### E2A Constitutional Authority
Produces an independently versioned constitutional finding only.

### E2B Evidence Grounding
Produces an independently versioned grounding finding only.

### E3 Kernel
Verifies the proposal and required A/B inputs, binds versions and lineage, applies authorization/replay/state checks, and alone commits the canonical transition.

## Convergence

The Kernel must reject/quarantine when:
- required substrate finding is absent;
- required finding is invalid or stale;
- proposal hash does not match bound material;
- evidence lineage fails;
- version bindings fail;
- authorization fails;
- replay is detected;
- current-state preconditions fail;
- convergence requirements are not satisfied.

A disagreement is not a vote. It is a governance condition requiring the Kernel's defined rejection/quarantine semantics.

## Memory governance

Memory persistence does not confer authority.

Metabolic resource governance does not confer authority.

A subsidy is a resource transfer, not a permission grant.

## Version binding

Governance decisions bind:
- Constitution A version;
- Policy A version;
- formula A version;
- Constitution B version;
- Policy B version;
- formula B version;
- proposal hash;
- evidence digest;
- relevant Kernel policy/version;
- authorization context.

## Human approval

A caller-controlled boolean is not equivalent to cryptographic proof of human approval. The canonical implementation must eventually bind consequential approval to an authenticated approval artifact/receipt. Until then, documentation must not claim stronger semantics than the implementation demonstrates.

## Change control

Any constitutional, policy, formula, authority-path, or memory-governance change requires versioning, tests, evidence, and rollback/recovery treatment.
