# Convertible Cranium Runtime Safety Envelope
Derived from: CANONICAL_ARCHITECTURE.md

## Safety boundary

The runtime must fail closed whenever an authority prerequisite cannot be established.

## States

```
NORMAL
  -> EVALUATING
  -> AUTHORIZED
  -> EXECUTING
  -> VERIFIED
  -> RECEIPTED

Any critical safety fault:
  -> COMA / CONTAINED
  -> QUARANTINED
  -> RECOVERY
  -> VERIFIED
  -> RESUME
```

## Mandatory controls

- untrusted ingress isolation;
- explicit authorization;
- positive identity/capability semantics;
- proposal integrity;
- evidence integrity/provenance;
- replay resistance;
- version binding;
- atomic/durable transition behavior;
- receipt generation;
- quarantine;
- recovery;
- controlled resume;
- metabolic resource limits.

## Metabolic safety

Metabolic governance may:
- measure demand;
- compare demand to capacity;
- evict eligible non-protected material;
- generate resource reservoir;
- perform an explicitly permitted subsidy.

Metabolic governance may not:
- authorize a command;
- modify constitutional authority;
- bypass Kernel;
- turn memory into permission;
- evict protected identity/locked atoms through flux pressure.

## Residual pressure

If eviction cannot reduce demand below capacity, the runtime must not silently label the state healthy. The residual condition must remain visible and must trigger the applicable safety response.

## Evidence preservation

Safety faults preserve sufficient state, ledger, lineage, and receipt material for diagnosis and recovery.

## Release boundary

The safety envelope describes runtime obligations. It does not imply that every obligation has already been independently demonstrated in production.
