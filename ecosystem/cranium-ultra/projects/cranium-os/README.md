# Convertible Cranium OS

**Cognitive operating environment governed by Convertible Cranium Kernel.**

> Authority is not claimed by the interface. It is granted only through Convertible Cranium Kernel.

Convertible Cranium OS provides the cognitive workspace and operator surfaces through which humans and agents prepare requests, inspect the local interface, and submit intentions. The browser is not an authority engine and cannot grant authority by itself.

## Architecture boundary

| Component | Responsibility |
|---|---|
| **Convertible Cranium OS** | Human/operator interface: Substrate Terminal, Canonical Ledger view, and Authority Dashboard |
| **Convertible Cranium Kernel** | Canonical authority and convergence boundary. Any real grant must be validated, scoped, versioned, and receipted by the authenticated Kernel service. |

The interface must not represent simulated steps as real constitutional evaluation, evidence grounding, Kernel approval, or canonical receipt. If an authenticated Kernel endpoint is unavailable, a request remains **not evaluated** and no grant or receipt is claimed.

## Included surfaces

- **Substrate Terminal**: prepares an authority-transition request and submits it to the configured Kernel adapter.
- **Canonical Ledger**: presents only data actually supplied by the configured source; browser-local state is not the canonical ledger.
- **Authority Dashboard**: presents the local adapter's observable status, not a claim that a remote Kernel is live.

## Development

Run `npm ci`, `npm run typecheck`, `npm test`, and `npm run build` to validate the project. Use `npm run dev` for local development.

The package scripts call the local TypeScript, Vitest, and Vite JavaScript entrypoints directly to avoid executable-shim issues in some Android/Termux shells.

## Current verification boundary

The local TypeScript check, production frontend build, and targeted authority-bridge tests have passed in the connected workspace. That does not establish a live authenticated Kernel connection, successful authority issuance, clean-host reproducibility, a bootable ISO, or independent production/security certification. Those remain separate validation gates.

## Ownership and licensing

© 2026 Wyl Mathes · WorthWyl Media. All rights reserved. No license is granted without explicit written permission.
