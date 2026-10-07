# Acquisition-Grade Executable Architecture Map
Derived from: CANONICAL_ARCHITECTURE.md

## Core path

```
Listener [EXECUTABLE]
  -> Synapse [EXECUTABLE]
  -> Substrate A [VERIFIED: executable A1/A2 implementation]
  -> Substrate B [VERIFIED: executable B1/B2 implementation]
  -> Kernel convergence [EXECUTABLE]
  -> Governed execution [EXECUTABLE PATH]
  -> Receipt / lineage [EXECUTABLE CONTROLS]
```

## Executable supporting systems

- Kernel authority proxy
- Kernel capability authority
- Replay guard
- COMA
- Miracle Memory
- Synapse contract
- WorthWyl Forge substrate
- Metabolic Governance v2
- Metabolic Ledger
- Metabolic Rate
- Residency Priority
- Metabolic Reconciliation
- Constitutional Subsidy Transfer
- Metabolic Field-Step Integration
- Commander surface
- Cranium AI surface
- Cranium Ultra surface

These are registered in EXECUTABLE_ARCHITECTURE.json and checked by scripts/verify-executable-architecture.mjs.

## Quad Engine acceptance gate

Engine 2A cannot become IMPLEMENTED merely because juror-like functions exist.

Engine 2A requires:
- independent executable substrate;
- executable Constitution A;
- executable Policy A;
- executable formula/version binding;
- A1 and A2 executable evaluators;
- deterministic finding contract;
- independent tests;
- adversarial tests;
- integration into Engine 3.

Engine 2B requires the equivalent evidence-grounding components.

## Status vocabulary

IMPLEMENTED = executable and verified.
ASSERTED = described but not demonstrated.
UNVERIFIED = implementation exists or is claimed but required evidence is absent.
BLOCKED = execution cannot currently be demonstrated.
REQUIRED GAP = canonical component intentionally not yet represented as implemented.

No acquisition claim may silently convert one status into another.
