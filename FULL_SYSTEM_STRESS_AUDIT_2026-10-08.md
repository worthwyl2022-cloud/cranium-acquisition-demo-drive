# Convertible Cranium Full-System Stress Audit
**Run date:** 2026-10-08
**Environment:** Android / Termux, arm64, Node v24.18.0, npm 11.19.1
**Scope:** Current local checkouts only. This is not an independent third-party security audit or production deployment certification.

## Executive result

- The acquisition demo checkout's hardened executable architecture gate passed **30/30 boxes** after the declared behavioral test commands were added to the gate's execution path and a stale Commander entrypoint expectation was corrected.
- Dedicated dual-substrate and end-to-end governance checks passed in the acquisition demo checkout.
- Metabolic Memory v2 dedicated tests passed **8/8**.
- The final integrated live Kernel `npm run verify` completed with exit code **0** after the signed-capability requirement was propagated into the durable, lifecycle, conformance, cognitive-subconscious, and denial-semantics test harnesses and the acquisition stress suite was converted from descriptor-only output to real executable test entrypoints.
- The real acquisition stress suite v2 passed **14/14** on its focused run.
- Wave V reports **26 PASS**, **0 vulnerabilities found**, and **3 EVIDENCE_PENDING** items. Pending items are not passes.

## Checkouts and provenance

### Acquisition demo checkout
- Path: `~/projects/cranium-acquisition-demo-drive`
- Branch: `feat/metabolic-memory-v2`
- HEAD at inspection: `2be12190366f50d101db97a9cc460160de75f96a`
- Working tree was clean before the audit fixes.
- Local, uncommitted audit fixes:
  - `scripts/verify-executable-architecture.mjs`: now executes both the structural `verify` and declared behavioral `testCommand`, with command-result caching.
  - `scripts/surface-smoke-check.mjs`: removed stale expectation for `ecosystem/commander/src/App.tsx`; the actual surface entrypoint is `src/main.tsx`.

### Live Kernel checkout
- Path: `~/projects/cranium-kernel`
- Branch: `fix/phase3-main-verification`
- HEAD at inspection: `33df8953580bc211b512ba3ee0f68f5dcdbabb1a`
- The working tree already contained uncommitted security/Phase 10 work before this audit. It was not reset or overwritten.
- Audit additions include signed-capability test fixtures and test-harness updates plus a real executable acquisition stress runner. These changes remain uncommitted.

## Executed verification

### Acquisition demo architecture gate
- Architectural contract gate: PASS, 30 boxes.
- Hardened structural + behavioral gate: PASS, 30/30.
- The gate runs each unique declared verification and behavioral command, caching duplicate commands. This corrects the prior implementation, which only ran `box.verify` and could mark a component passed without running its declared `testCommand`.

### Dual-substrate and governance checks
All passed in `cranium-acquisition-demo-drive/ecosystem/cranium-kernel`:
- `verify:dual-substrate`
- `verify:dual-independence`
- `verify:dual-independence-adversarial`
- `verify:listener-boundary`
- `verify:proof-layer`
- `verify:receipt-lineage`
- `verify:end-to-end`

Observed assertions include A/B finding independence, input/policy/evidence isolation, evidence-order normalization, mismatch quarantine, malformed/oversized ingress rejection, forged-proof rejection, receipt lineage checks, and proof-gated governed execution.

### Metabolic Memory v2
- Dedicated test count: 8.
- Passed: 8.
- Failed: 0.
- Covered protected atoms, overflow, reservoir behavior, approval/ratification gating, provenance, and insufficient-reservoir rejection.

### Live Kernel
Focused checks passed after updating legacy harnesses to use ephemeral Ed25519-signed capabilities:
- TypeScript lint.
- Phase 10 composition smoke.
- Command execution gate.
- Cognitive subconscious bounded cognition/recovery.
- Denial semantics V-006 through V-008.
- Durable authority receipt/restart/tamper checks.
- Lifecycle matrix: grant, restart replay, conflict, stale version, tamper.
- Conformance vectors: 8/8.

The full `npm run verify` passed after the test-harness compatibility repair. The integrated full run was started again after replacing the acquisition stress descriptor generator with executable checks.

### Acquisition stress suite v2
The former `scripts/acquisition-stress-suite.mjs` only emitted 14 names/objectives and a digest; it did not execute those cases. It has been changed to execute actual repository test entrypoints and capture exit codes.

Focused result:
- Total: 14
- Passed: 14
- Failed: 0

Coverage includes denial semantics, 8 conformance vectors, Synapse adapter/integration, bounded subconscious behavior, constitutional runtime, Wave V burn suite, lifecycle, atomic recovery, proofing, durable authority, command execution gate, and distributed-session fencing.

## Findings and limitations

### Critical unresolved authorization integration gap
Code inspection found that `AsyncKernelAuthorityProxy` does not apply the new `KernelCapabilityVerifier` requirement that the synchronous `KernelAuthorityProxy` now enforces. The enterprise gateway constructs the async proxy without a verifier and calls `commit(kernelRequest)` without a signed capability context. This path requires a dedicated security design and adversarial integration test before enterprise authority writes can be claimed as capability-gated. The current `verify:enterprise-integration` result is a protocol/contract check, not proof that the running enterprise gateway write path is safe.

### Production/runtime evidence still pending
Wave V explicitly leaves these pending:
- Live verified-boot rootfs poisoning on a real ChromiumOS boot environment.
- Runtime UI-language authority-creep testing.
- Full external-process Kernel outage/fallback behavior.

Wave V's hostile-looking multi-agent consensus case is a fixture/assertion, not a complete end-to-end multi-agent attack.

### 400,000-case forged-evidence script not run
`scripts/red-team-forged-evidence-400k.ts` creates a new temporary directory and SQLite database for every iteration (400,000 directories/databases). Running it as-is on this Termux device risks excessive disk use and runtime. It should be redesigned to use bounded, reusable isolated storage, controlled cleanup, and sampled or batched execution before being run.

### Scope of claims
Passing local tests demonstrates only the tested behaviors under this runtime and these checkouts. It does not establish independent security certification, HSM/KMS key custody, production TLS/backup/DR readiness, verified boot, or full distributed outage safety.

## Recommended next actions

1. Repair and test the asynchronous Kernel capability boundary before any enterprise write-path readiness claim.
2. Add an end-to-end test proving the enterprise gateway maps an authenticated principal and approved scope to a signed, bounded Kernel capability, and that absent/forged/expired/wrong-scope capabilities fail closed.
3. Redesign the 400k forged-evidence harness for bounded disk and reproducible batches, then run it in a suitable isolated environment.
4. Run live Chromium verified-boot and external Kernel-outage tests in the actual target runtime.
5. Preserve the current dirty worktrees, review the audit diffs, then commit the audit runner and test-harness fixes in deliberate, separate commits.
