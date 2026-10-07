# Convertible Cranium Integration Test Plan
Derived from: CANONICAL_ARCHITECTURE.md

## Test layers

1. Unit tests for every executable box.
2. Contract tests for every boundary.
3. Engine-local integration tests.
4. Cross-engine convergence tests.
5. Replay and lineage tests.
6. Negative/denial semantics.
7. Adversarial multi-vector testing.
8. Memory lifecycle tests.
9. Metabolic pressure/eviction/subsidy tests.
10. Runtime safety/COMA tests.
11. Boot-binder release tests.
12. Acquisition reproducibility tests.

## Quad Engine tests

### Engine 1
Verify proposal construction, context derivation, evidence binding, attestation, malformed-input rejection.

### Engine 2A
Verify constitutional admissibility, policy boundaries, A1/A2 independence, version binding, disagreement handling, and fail-closed behavior.

### Engine 2B
Verify evidence provenance, integrity, freshness, contradiction handling, B1/B2 independence, version binding, and fail-closed behavior.

### Engine 3
Verify authorization, proposal hash, evidence digest, version binding, replay resistance, convergence, transition construction, durable commit, receipt, and recovery.

## Cross-substrate tests

- same proposal with different A/B policy states;
- A accepts/B rejects;
- A rejects/B accepts;
- both accept;
- both reject;
- stale A;
- stale B;
- forged evidence;
- forged approval;
- replayed proposal;
- mutated proposal after substrate evaluation;
- mutated substrate finding;
- mismatched formulas;
- mismatched constitution versions;
- Kernel state changed between evaluation and commit.

## Memory tests

Verify identity protection, quarantine, provenance, retrieval/update behavior, snapshot/recovery, and canonical/provisional separation.

## Metabolic tests

Verify rate calculation, flux budget, deterministic residency priority, protected atoms, overflow eviction, residual over-capacity behavior, reservoir generation, subsidy authorization, reservoir accounting, ledger integrity, and cycle integration.

## Acceptance

A test is not evidence merely because a test file exists. Record:
- test exists;
- test executed;
- test passed;
- behavior demonstrated;
- deployment control demonstrated.

These are separate claims.
