# Acquisition Readiness Gap Register

**Purpose:** Track what must be evidenced before the Convertible Cranium Commander OS package is represented as ready for serious buyer diligence.
**Status date:** 2026-10-10
**Rule:** A gap is not closed by narrative alone. Attach a reproducible artifact or legal document.

## P0: Required before representing the package as release-ready

| Gap | Current evidence | Required closure evidence | Status |
|---|---|---|---|
| Standard Commander build portability | Frontend built; server bundle built using Android-compatible esbuild binary; standard wrapper path failed in Termux | Portable build script succeeds in target environment and clean supported Linux/CI environment; captured exit codes | Open |
| Commander runtime / AI flow | Health returns 200; missing-key chat and generation return explicit 503 | Browser-to-server smoke test; valid-provider smoke test with secret redacted; error-state tests | Open |
| Two-drive architecture consistency | Both structural health suites pass; demo architecture gate reports 30 registered boxes | Automated cross-drive name/path/manifest comparison; resolve stale product labels and claims | Open |
| Release identity | Local branches contain uncommitted changes in both repositories | Freeze release branch and commit SHAs; record dirty/clean state and artifact hashes | Open |
| Bootable deliverables | Build scripts present | Build each intended ISO on supported Linux host; boot test; SHA-256; record host/tool versions | Open |
| IP chain of title | Qualified provenance statement exists | Contributor inventory, assignment/permission evidence, third-party rights review, counsel sign-off | Open |
| Open-source and dependency compliance | Lockfiles exist and some dependency remediation is present | SBOM, license notices, advisory scan, remediation/exceptions report | Open |

## P1: Required for a credible diligence room

| Gap | Required evidence | Status |
|---|---|---|
| Asset boundary | Included/excluded repository and directory schedule; exact commit SHAs; excluded third-party assets | Open |
| Claim-to-evidence index | Each material technical claim mapped to source, test, artifact, date, and limitation | Open |
| Security posture | Threat model, data-flow map, secrets inventory process, authentication/authorization boundaries, known limitations | Open |
| Known issues | Prioritized issue register with severity, impact, workaround, owner, and resolution evidence | Open |
| Demo reliability | Clean-host runbook and reviewer path tested by someone other than the author | Open |
| Commercial terms | Draft asset-purchase and license alternatives; scope, support, escrow, warranties, liability, payment conditions | Open |
| IP exceptions | Domains, marks, contributor-created assets, external APIs, model-provider terms, licenses, and possible encumbrances | Open |

## P2: Value support and buyer readiness

| Gap | Required evidence | Status |
|---|---|---|
| Buyer-specific strategic thesis | Named buyer categories and documented build-versus-buy rationale | Open |
| Price support | Scope-based deal comparables where available, buyer feedback, cost/time replacement analysis, defensible differentiation | Open |
| Product maturity map | Per-component maturity label: verified, partial, prototype, documented design, or planned | Open |
| Demonstration package | Recorded guided demo, architecture walkthrough, sample receipts, and safe failure demonstration | Open |
| Transition plan | Realistic knowledge-transfer, support, documentation, and handover options | Open |

## Release rules

1. Do not claim revenue, ARR, paying users, production customers, patent grants, certifications, or independent security validation without documentary evidence.
2. Do not equate a passing structural or contract gate with whole-system production readiness.
3. Do not describe the Gemini-powered features as live until a successful real-provider test is captured.
4. Do not say the ISOs are bootable until each intended artifact has been built and boot-tested.
5. Do not assert legal ownership solely from GitHub account ownership, commit history, or this register.
6. Preserve pre-existing work; review diffs before staging, committing, or publishing.
7. No push to a default branch and no external distribution until the release candidate is reviewed and approved.

## Immediate work order

1. Repair the portable Commander build command without hardcoding a single operating system's binary path.
2. Capture explicit exit codes for lint and both architecture gates.
3. Add a repeatable cross-drive consistency check and reconcile outdated package narratives.
4. Generate a release manifest with exact SHAs and file hashes.
5. Assemble a counsel-ready ownership and dependency schedule.

## Verification update: 2026-10-10

- **Commander portable package build:** npm run build now completes successfully in the connected Android/Termux workspace. Vite built 1,699 modules and scripts/build-server.mjs produced dist/server.cjs; process exit code 0. This closes the immediate Termux wrapper failure, but a clean supported Linux/CI build is still required before marking portability fully closed.
- **Commander TypeScript check:** npm run lint completed with exit code 0 in the connected workspace.
- **Commander runtime configuration behavior:** /api/health returned HTTP 200 with hasGeminiKey:false; /api/chat and /api/novel/generate returned HTTP 503 with explicit NO_API_KEY responses. This is a successful safe-failure check, not a live-provider success.
- **Architecture contract gate:** the demo-drive gate passed for 30 registered boxes. This does not establish complete end-to-end correctness or production readiness.
- **Release evidence snapshot:** RELEASE_CANDIDATE_MANIFEST.json records both repository HEAD SHAs, branch names, dirty-worktree status, and SHA-256 hashes for selected evidence files. It explicitly marks the candidate ineligible for release while required gates remain open.
- **Commander OS naming consistency:** the demo OS package and lockfile identity were corrected from cranium-os to convertible-cranium-os. The existing directory path still contains cranium-os; path renaming is deferred because scripts and references must be mapped before safely changing it.
- **Demo OS checks:** package scripts now invoke the TypeScript, Vite, and Vitest JavaScript entrypoints directly instead of relying on the broken Termux executable shims. npm run typecheck passed; npm run build passed (TypeScript plus Vite 8.2.2, 1,918 modules); targeted npm test passed (tests/authority-bridge.test.ts, 2/2 tests). These are local workspace checks; clean-host reproduction remains open.
- **Repository hygiene:** git diff --check passed in both repositories during this run. Both worktrees remain dirty with existing and newly created changes; nothing was committed or pushed.


## Consistency-audit update: 2026-10-10

- Commander identity and CI workflow title now use **Convertible Cranium Commander OS**; the Commander source README already uses that canonical name.
- The demo OS package identity, lockfile root identity, page title, visible UI labels, and current README now use **Convertible Cranium OS** and **Convertible Cranium Kernel**. The request trace was corrected so the browser no longer presents simulated constitutional/hash/evaluation steps as if a real Kernel evaluation occurred. The current interface explicitly reports “not evaluated” when the authenticated Kernel endpoint is absent.
- Buyer-facing demo catalog and the nested portfolio package had stale “Convertible Cranium Core” and unprefixed component names; current labels were normalized to the Kernel/product naming contract. Historical/archive material was not mass-renamed because it must remain identifiable as historical provenance.
- Post-correction checks: Commander lint + production build passed (Vite 6.4.3, 1,699 modules; server bundle produced). Demo OS typecheck + production build passed (Vite 8.2.2, 1,918 modules); targeted AuthorityBridge tests passed (2/2). Both repository health checks passed, and the architecture contract gate passed for 30 registered boxes.
- The full executable-architecture verifier subsequently completed with exit code 0: all 30 registered boxes passed. The verifier had stalled because the Ultra surface checker used brittle executable shims and lacked subprocess timeouts; that checker was repaired to call JavaScript entrypoints directly and enforce bounded timeouts.
- **Still open:** no clean-host Linux/CI reproduction of these uncommitted changes; no ISO build/boot; no successful live-provider flow; no completed full executable-architecture verifier; no completed SBOM/license/security review; no attorney-verified IP chain of title. Both repositories remain dirty and nothing was committed or pushed.
- Convertible Cranium Ultra surface check: after the checker was repaired to use direct JavaScript tool entrypoints and bounded subprocess timeouts, the full Ultra surface check passed locally. OS typecheck, OS tests 2/2, OS production build, Kernel typecheck, Kernel unit tests 6/6, adversarial Kernel cases 6/6, and Kernel build typecheck all passed. This is local Android/Termux evidence, not independent clean-host or release certification.
