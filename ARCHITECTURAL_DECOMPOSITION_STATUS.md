# Convertible Cranium — Exhaustive Architectural Decomposition Status

Version: 1.0
Source of truth: `EXECUTABLE_ARCHITECTURE.json`
Enforcement: `scripts/verify-architecture-contracts.mjs` and `scripts/verify-executable-architecture.mjs`

## Governing rule

> No box without code. No code without a contract. No contract without a test. No authority claim without a demonstrated authority path.

A box is not considered verified because documentation names it. It must have:

- executable entry;
- machine-readable contract;
- executable test reference;
- executable verification command;
- integration evidence;
- explicit authority classification;
- implementation status.

## Current executable inventory

The current machine-checked inventory contains 28 verified executable boxes.

### Verified authority spine

1. Engine 1 / Synapse
2. Engine 2A / Constitutional Substrate A
3. Jury A1
4. Jury A2
5. Engine 2B / Evidence Grounding Substrate B
6. Jury B1
7. Jury B2
8. Engine 3 / Cranium Kernel
9. Kernel Convergence Gate
10. Quad Engine Authority Path
11. Kernel Authority Proxy
12. Kernel Capability Authority
13. Kernel Replay Guard

### Verified continuity and safety

14. Miracle Memory
15. Kernel COMA
16. WorthWyl Forge Substrate
17. Metabolic Governance v2
18. Metabolic Ledger
19. Metabolic Rate
20. Residency Priority
21. Metabolic Reconciliation
22. Constitutional Subsidy Transfer
23. Metabolic Field-Step Integration
24. Metabolic Contract I6b

### Verified operational surfaces

25. Commander Surface
26. Cranium AI Surface
27. Cranium Ultra Surface

### Verified contract boundary

28. Synapse Contract

## Explicitly not promoted to verified boxes

The broader conceptual decomposition contains additional nouns and processes that are not automatically promoted merely because source code exists somewhere in the ecosystem.

These include:

- Listener / ingress normalization as an independently verified boundary;
- generic Cranium AI reasoning/proposal orchestration as an authority-bearing engine;
- a standalone execution gate distinct from the existing Kernel/governance execution paths;
- standalone receipt lifecycle and lineage services where the existing Kernel transaction/journal implementation is the actual implementation;
- boot/runtime/appliance delivery as independently verified authority components;
- Creator Studio, Cognitive Tracker, Forge UI, and other product surfaces as independent authority components;
- every individual sub-operation inside Metabolic Memory v2 as a separately verified architectural box.

These remain documentation-level decomposition or supporting implementation until they receive their own code, contract, test, integration evidence, and registry entry.

## Status semantics

### VERIFIED
Code, contract, executable test, integration reference, and authority classification are registered and the architecture gate accepts the box.

### IMPLEMENTED
Code exists and is intentionally registered, but the evidence standard is weaker than VERIFIED. This status must not be used to imply complete behavioral proof.

### ARCHITECTURALLY DEFINED
The behavior is specified by the canonical architecture but is not yet registered as an independently verified executable boundary.

### UNVERIFIED
A claim or implementation exists, but the required evidence has not been established.

## Authority invariant

Only the Cranium Kernel may create canonical authority.

Synapse may propose and attest.
Substrate A may evaluate constitutional admissibility.
Substrate B may evaluate evidence grounding.
Metabolic Memory may govern resource residency and memory pressure.
Miracle Memory may preserve governed continuity.
COMA and Circuit Breaker behavior may contain runtime risk.

None of those surfaces may mint canonical authority.

## Evidence chain

The executable architecture now follows:

Listener / external material
→ cognitive proposal
→ Synapse
→ Substrate A + Substrate B
→ Kernel convergence
→ Kernel authority evaluation
→ canonical transition
→ receipt/journal/lineage
→ governed execution
→ observation
→ governed memory

Where an upstream box is not yet independently verified, the documentation must say so rather than manufacture an implementation claim.

## Next decomposition rule

When a conceptual box is promoted into the executable registry, descend one level:

parent → child boundary → input/output contract → failure semantics → test → integration → evidence → authority.

Do not add a new architectural box merely to make the diagram look complete. Add it only when the repository can prove it.
