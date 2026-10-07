# Convertible Cranium Executable Architecture Map
Version: 2.0.0
Status: GENERATED FROM EXECUTABLE INVENTORY

This map is derived from repository implementation, contracts, verification commands, and executed evidence. It is not an aspirational architecture diagram.

## Hard rule

No box without code.
No code without a contract.
No contract without a test.
No authority claim without a demonstrated authority path.

## Verified executable spine

UNTRUSTED / VERIFIED UPSTREAM MATERIAL
  |
  v
ENGINE 1 / SYNAPSE
  |
  +---------------------------+
  |                           |
  v                           v
ENGINE 2A / SUBSTRATE A   ENGINE 2B / SUBSTRATE B
  |                           |
  +---- A1 + A2               +---- B1 + B2
  |                           |
  +-------------+-------------+
                v
ENGINE 3 / CRANIUM KERNEL
  |
  v
QUAD ENGINE AUTHORITY PATH
  |
  v
AUTHORIZED KERNEL TRANSITION

### Engine 1
- engine-1-synapse
- synapse-contract

### Engine 2A: Constitutional Authority
- engine-2a-substrate-a
- substrate-a-jury-a1
- substrate-a-jury-a2

A asks: MAY WE?
A1 evaluates constitutional/policy admissibility.
A2 performs adversarial governance examination.
A does not issue canonical authority.

### Engine 2B: Evidence Grounding
- engine-2b-substrate-b
- substrate-b-jury-b1
- substrate-b-jury-b2

B asks: IS IT SO?
B1 evaluates supporting evidence and sufficiency.
B2 searches for contradiction, stale or invalid evidence, and provenance failure.
B does not issue canonical authority.

### Engine 3
- kernel-convergence-gate
- quad-engine-authority-path
- engine-3-kernel
- kernel-authority-proxy
- kernel-capability-authority
- kernel-replay-guard
- kernel-coma

The Kernel remains the sole canonical authority issuer.

## Verified governed memory / metabolic layer

- miracle-memory
- forge-substrate
- metabolic-governance
- metabolic-ledger
- metabolic-rate
- residency-priority
- metabolic-reconciliation
- metabolic-subsidy
- metabolic-cycle-integration
- metabolic-contract

Metabolic Memory is resource governance. It cannot mint authority. Authority-bearing state transitions remain Kernel-governed.

## Verified operational surfaces

- commander-surface
- cranium-ai-surface
- ultra-surface

These are operational surfaces. Their presence does not confer canonical authority.

## Verification contract

Every registered box has:
- executable entry path;
- contract reference;
- test reference;
- verification command;
- declared status.

The machine-readable source is EXECUTABLE_ARCHITECTURE.json.
The contract index is ARCHITECTURAL_COMPONENT_CONTRACTS.md.
The test matrix is ARCHITECTURAL_COMPONENT_TEST_MATRIX.md.

## Explicit non-box rule

A conceptual capability may be described elsewhere, but it is not an executable architecture box until it has the same evidence fields above.

Therefore Listener, generic "Cranium AI reasoning", generic execution, generic receipt lifecycle, generic lineage, generic boot, and generic recovery descriptions must not be treated as independently verified boxes merely because documentation names them. Their executable descendants must be registered before an implementation claim is made.

## Current gate

28 executable architecture boxes are registered and verified by the repository gate.

Quad Engine / Dual Substrate implementation is now executable and integration-tested through the Kernel authority path.

The gate does not claim that every conceptual noun in the broader ecosystem is independently implemented. That distinction is intentional and acquisition-grade.
