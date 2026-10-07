# Convertible Cranium Commander Architecture Split

## Effective baseline

The repository now contains two deliberately separated Commander generations:

| Path | Status | Purpose |
|---|---|---|
| `ecosystem/commander/` | **CURRENT CANONICAL** | New Commander operating surface for the current Convertible Cranium architecture |
| `ecosystem/commander-legacy/` | **LEGACY / FROZEN REFERENCE** | Preserved prior Commander implementation and historical evidence |

## Authority boundary

The current Commander does not become an authority source merely because it presents an interface. Canonical authority remains with `ecosystem/cranium-kernel`.

Current architecture target:

`Listener → Synapse → Dual Independent Substrate Authority → Convertible Cranium Kernel → Governed Execution → Receipt / Lineage`

## Preservation rule

The legacy tree is preserved by repository rename rather than rewritten or deleted. Its tracked contents remain available for historical comparison, reproducibility, and controlled migration.

## Bootable target

The future **Convertible Cranium Chromium Edition** must consume the current Commander path and current authority architecture. It must not make the legacy Commander a hidden runtime dependency.

## Evidence discipline

The new Commander architecture is verified as a canonical operating surface and buildable application. Full end-to-end authority integration is a separate verification milestone and must not be inferred from this split alone.
