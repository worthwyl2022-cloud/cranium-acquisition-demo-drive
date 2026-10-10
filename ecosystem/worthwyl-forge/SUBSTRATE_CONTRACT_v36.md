# SUBSTRATE_CONTRACT_v36

## I6b: Metabolic Memory v2

**Status:** normative contract for the WorthWyl Forge substrate simulation surface.
**Version:** 36
**Implementation marker:** `3.6.1-metabolic-v2`

### Scope
Metabolic Memory v2 is a resource-governance mechanism only. It does not grant authority, issue canonical receipts, mutate Kernel authority state, or replace the Cranium Kernel.

### Required behavior
1. Every reconciliation cycle computes metabolic demand against configurable `flux_capacity`.
2. Default `flux_capacity` is `1.85`.
3. Only non-locked, non-identity atoms may be flux-evicted.
4. Eviction order is ascending `residencyPriority`.
5. Residency priority is mass × lock multiplier × (1 + bounded human importance) × non-negative energy.
6. Locked and identity atoms are never flux-evicted.
7. Locked/identity atoms may generate a constitutional subsidy reservoir.
8. Subsidies only flow from locked/identity sources to non-locked/non-identity targets.
9. Subsidies require explicit approval evidence at this substrate API boundary. The public wrapper defaults approval to false. A caller-provided boolean is an input assertion, not proof of human identity or Kernel authorization.
10. Subsidy amount must be finite, positive, and no greater than the available reservoir.
11. Every cycle exposes a metabolic ledger with demand, capacity, status, evictions, reservoir, subsidies, and cumulative counters.
12. The metabolic ledger is recorded in the substrate event log.
13. Metabolism cannot itself confer authority.

### Verification requirements
Executable tests must cover capacity overflow and deterministic eviction; locked/identity non-eviction; residency-priority ordering; subsidy refusal without explicit approval; insufficient reservoir refusal; approved subsidy with ledger accounting; implementation version marker; and execution through the substrate field-step path.

### Evidence classification
Passing these tests demonstrates substrate behavior only. It does not establish Kernel authorization, cryptographic human identity, production deployment controls, HSM/KMS custody, or enterprise operational readiness.
