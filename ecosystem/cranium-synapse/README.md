# Cranium Synapse

Cranium Synapse is the evidence-producing half of the Cranium architecture.
It assesses a proposed cognitive action and emits a deterministic, hash-bound
attestation. It does not grant authority, mutate Core state, or execute tools.

## Boundary

- Synapse produces evidence, risk disposition, and an attestation hash.
- Cranium Kernel / Core validates the attestation, decides authority, commits
  state, and produces the authoritative receipt.
- A valid Synapse attestation is necessary evidence in a governed flow; it is
  never an authority grant by itself.

## Status

This repository establishes the standalone public contract and integration
boundary. The current reference implementation remains in the governed
`cranium-kernel` repository until extraction is complete.

See `CONTRACT.md` and `EVIDENCE.md`.
