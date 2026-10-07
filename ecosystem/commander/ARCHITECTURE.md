# Convertible Cranium Commander

## Canonical status

This directory is the **current canonical Commander operating surface** for the new Convertible Cranium architecture.

The prior Commander implementation is preserved unchanged as `ecosystem/commander-legacy/`. It is historical/reference material and is not the canonical runtime path.

## Authority path

`Listener → Synapse → Dual Independent Substrate Authority → Convertible Cranium Kernel → Governed Execution → Receipt / Lineage`

Commander is an operating surface. It is not a source of canonical authority.

## Boundary rules

- Listener ingress is untrusted and receives `NONE` authority.
- Synapse proposes cognition; it does not grant authority.
- Substrate A independently evaluates constitutional permissibility.
- Substrate B independently evaluates evidence grounding.
- The two assessments are sealed before convergence.
- Convertible Cranium Kernel is the sole canonical authority boundary.
- Commander cannot mint, elevate, or forge authority.
- Legacy Commander code is excluded from the current architecture path.

## Product boundary

This implementation is the foundation for the bootable **Convertible Cranium Chromium Edition**. Bootable packaging must consume this current architecture, not the legacy Commander tree.
