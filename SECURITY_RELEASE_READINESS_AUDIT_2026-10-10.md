# Convertible Cranium Security and Release-Readiness Audit

**Evidence cutoff:** 2026-10-10 UTC  
**Purpose:** Internal engineering and acquisition-readiness record. This is not an independent security assessment, signed release attestation, or legal opinion.

## Executive summary

**Release status: NOT RELEASE-ELIGIBLE.** Local engineering checks and several GitHub Actions checks pass, but both ISO build jobs are skipped. No clean-host Linux build, actual bootable-image boot test, live-provider verification, independent security review, or attorney-verified IP chain-of-title review has been completed.

Three review branches are open in the commercial Boot Drive repository:

- [PR #17: Commander runtime/build hardening](https://github.com/worthwyl2022-cloud/cranium-boot-drive/pull/17)
- [PR #18: AI dependency remediation](https://github.com/worthwyl2022-cloud/cranium-boot-drive/pull/18)
- [PR #19: OS dependency and hardened-core test-tooling remediation](https://github.com/worthwyl2022-cloud/cranium-boot-drive/pull/19)

The acquisition demo work remains in [PR #18](https://github.com/worthwyl2022-cloud/cranium-acquisition-demo-drive/pull/18). No PR has been merged by this work.

The $20 million figure remains a proposed opening negotiation position only, not an independently supported fair-market valuation.

## Verified local results

| Area | Observed result | Scope and caveat |
|---|---|---|
| Commercial Boot Drive health check | PASS | Appliance structure, launcher smoke test, manifest checks, and required product inventory passed on the current security branch. |
| Convertible Cranium OS | Typecheck PASS; 2/2 tests PASS; production build PASS; npm audit reports 0 vulnerabilities | Executed in the connected Android/Termux workspace, not a clean Linux host. |
| Hardened authority core | 6/6 unit tests PASS; 6/6 adversarial cases PASS; build PASS; npm audit reports 0 vulnerabilities | Unit tests now use Node's built-in test runner through the existing `tsx` package. This removes the Jest/ts-jest dependency chain that pulled in an unpatched `sprintf-js` advisory. |
| Demo Commander and legacy Commander | Lint/build PASS; each local npm audit reported 0 vulnerabilities | Applies to those two package trees, not every repository dependency. |
| Commercial Commander at PR #17 head 91d8a5b | Isolated exact-head npm audit: 0 vulnerabilities | Audited from a detached worktree at the PR's current head. This does not cover the OS/AI manifests. |
| Architecture contract | PASS: 30 registered boxes | Confirms the repository's architecture-contract and executable-architecture gates, not an independent proof of every runtime deployment scenario. |
| Demo branch GitHub Actions | Pass: validation, stress suite, CodeQL, dependency audit/review, CycloneDX SBOM generation, Trivy scan, Kernel authority-path proof, and pnpm dependency audit | The ISO build job is skipped. A generated SBOM is not a completed license/legal review. |
| AI dependency remediation branch | Updated lockfile's local `pnpm audit`: 0 vulnerabilities | The full package installation/build/test sequence was not completed locally on Android/Termux. GitHub Actions must validate this PR before merge. |
| Malwarebytes URL reputation | Verdict `unknown` for the two GitHub PR URLs and demo repository URL | Unknown is not a “safe” verdict. Malwarebytes did not return a malicious verdict, but this is not a substitute for repository security checks. |

## Default-branch Dependabot inventory

GitHub reported **9 open alerts on the commercial repository's default branch: 6 high, 2 medium, and 1 low**. Those counts describe the default branch at the time checked. They do not mean the remediation branches have failed, and they will not be reflected as resolved on the default branch until changes are merged and alerts are recalculated.

| Alert(s) | Package and affected manifest | Finding | Remediation branch |
|---|---|---|---|
| #164, #163 | `braces`, OS and hardened-core package locks | High-severity stack-exhaustion denial of service through deeply nested patterns | PR #19 updates the OS/core dependency trees and lockfiles; CI is required before merge. |
| #162, #161, #160, #159, #158, #157 | `brace-expansion`, hardened-core package lock | Four high and two medium alerts across vulnerable 1.x/2.x ranges | PR #19 pins the affected 1.x/2.x ranges to patched versions and verifies the local npm audit. |
| #156 | `dompurify`, `cranium-ai/pnpm-lock.yaml` | Low-severity XSS-related issue in affected DOMPurify releases | PR #18 updates the override and lockfile to DOMPurify 3.4.16. |

## Additional pnpm audit findings and fixes

A local pnpm audit of the AI package found four additional advisories beyond the single open Dependabot alert returned for that manifest. The AI remediation branch adds narrowly targeted overrides and regenerates the lockfile. The updated lockfile audit reported zero vulnerabilities.

| Package | Observed vulnerable version | Remediation in AI PR #18 | Advisory |
|---|---:|---|---|
| `proxy-addr` | 2.0.7 | 2.0.8 | [GHSA-jqcg-44mw-7w3h](https://github.com/advisories/GHSA-jqcg-44mw-7w3h), critical IP-spoofing risk when a vulnerable trust-subnet configuration is used. |
| `source-map-js` | 1.2.1 | 1.2.2 | [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q), high-severity event-loop denial of service through indexed source maps. |
| `postcss-selector-parser` | 6.0.10 | 7.1.6 scoped to `@tailwindcss/typography` | [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf), moderate CPU-exhaustion issue. This major-version override still requires CI compatibility validation. |
| `katex` | 0.16.25 and 0.16.47 | 0.18.2 | [GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7), low-severity prototype-pollution interaction that can bypass trust restrictions in affected rendering contexts. |
| `dompurify` | 3.4.13 | 3.4.16 | GitHub alert #156; the patched version is reflected in the regenerated lockfile. |

### The unpatched `sprintf-js` advisory

The hardened-core npm audit initially reported 20 moderate findings through the Jest/ts-jest dependency tree, all tracing to the `sprintf-js` advisory [GHSA-hp3w-g68c-fv3c](https://github.com/advisories/GHSA-hp3w-g68c-fv3c). As of the audit cutoff, the advisory listed no patched release. npm's forced fix proposed a breaking downgrade of `ts-jest`, so that route was rejected. Instead, PR #19 removes the Jest/ts-jest chain, runs the six unit tests through Node's built-in test runner and the existing `tsx` dependency, and obtains a zero-vulnerability npm audit. This is dependency-path removal, not a claim that upstream `sprintf-js` itself has been patched.

## Pull-request check status at the last captured poll

| Repository / PR | Checks observed | Remaining issue |
|---|---|---|
| Commercial Boot Drive #17 | Appliance contract/launcher smoke test PASS; Convertible Cranium AI checks PASS; exact-head Commander npm audit reports 0 vulnerabilities | Commercial ISO job SKIPPED. |
| Commercial Boot Drive #18 | Appliance contract/launcher smoke test PASS; Convertible Cranium AI checks PASS | Commercial ISO job SKIPPED. |
| Commercial Boot Drive #19 | Appliance contract/launcher smoke test PASS; Convertible Cranium AI checks PASS | Commercial ISO job SKIPPED. Local OS/core typecheck, tests, builds, and npm audits passed; the CI workflow does not replace those release gates. |
| Acquisition Demo Drive #18 | Validation, dependency audit, SBOM, Trivy, and pnpm audit PASS; stress suite, CodeQL, dependency review, and one Kernel authority-path proof PENDING | Acquisition ISO job SKIPPED. |

Statuses can change after this snapshot. Recheck the live PR pages before making a merge decision.

## Runtime hardening applied to the demo branch

The Commander current and legacy server paths now include global and API-specific rate limits, a JSON request-size limit, and safer handling of contextual metadata so it is treated as untrusted data rather than instruction authority. These changes passed local lint/build/audit checks. They do not prove resistance to every prompt-injection, denial-of-service, or deployment-configuration scenario; additional adversarial testing is still warranted.

## Product Design and workflow-tool limitations

- **Screenshot-based Product Design audit not completed.** The connected Termux/Android host had Puppeteer installed but no compatible Chromium executable; Puppeteer's browser resolver reported that it cannot download a binary for Android/arm64. No accepted screenshots were captured, so no visual design or screenshot-based accessibility verdict is claimed. The Product Design plugin's full screenshot workflow needs a supported Work-mode browser/capture surface.
- **ZzzOps policy/goal loop not executed.** ZzzOps workflow skills are present in the skill catalog, but ZzzOps action tools and the required policy-support files were not available through this session. A bounded search of the project tree found no local `.zzzops`, `PROJECT.md`, or `AGENTS.md` files at the searched depth. This does not prove no policy exists elsewhere; it means policy approval and the official ZzzOps queue remain unverified here.
- **Data report app not created.** Data-analytics action tools were not exposed in this session. This Markdown audit is the durable evidence artifact, not a Data dashboard/report app.

## Release gates still open

1. Confirm CI on the exact heads of PRs #18 and #19, then perform reviewer-led PR review. Do not merge automatically just because a check passes.
2. Build the commercial and acquisition ISO artifacts on a clean supported Linux host; both ISO jobs are currently skipped.
3. Boot the actual images and exercise startup, restart, failure, network-offline, and authority-denial/receipt paths.
4. Validate AI provider success and failure paths with approved test credentials; do not imply a live-provider run occurred.
5. Complete full dependency/license review and archive the exact SBOMs for the release candidate.
6. Obtain independent security review and attorney-verified IP chain-of-title/contributor/third-party-rights review.
7. Regenerate and verify the release-candidate manifest at the final reviewed source heads.

**Release decision:** keep all changes in review branches. Do not label the product production-ready or release-eligible until the open gates above have evidence.
