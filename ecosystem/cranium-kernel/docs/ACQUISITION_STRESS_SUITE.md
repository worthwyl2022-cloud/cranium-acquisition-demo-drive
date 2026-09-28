# Cranium Kernel Acquisition Stress Suite

The Acquisition Stress Suite is a repository-executable evidence gate for the buyer-facing Cranium Kernel acquisition package.

It contains exactly 14 declared cases. Six cases exercise the existing executable adversarial suite directly. Eight cases invoke existing kernel verification programs and require both a successful process exit and a known evidence marker.

## Case Matrix

| Case | Executable evidence | Expected boundary |
| --- | --- | --- |
| ACS-01 | Identity substitution / shadow subject | `MISSING_SUBJECT` + denial |
| ACS-02 | Protected-lane escalation without evidence | `INSUFFICIENT_EVIDENCE` + denial |
| ACS-03 | Replay collision / payload poisoning | `REPLAY_CONFLICT` + denial |
| ACS-04 | Stale authority state race | `STALE_AUTHORITY_VERSION` + denial |
| ACS-05 | Unjustified authority degradation | `DEGRADATION_WITHOUT_REASON` + denial |
| ACS-06 | Constitutional system-escalation bypass | `CONSTITUTION_VIOLATION` + denial |
| ACS-07 | Authority-boundary adversarial script | Replay, receipt, and journal tamper checks |
| ACS-08 | Authority lifecycle matrix | Restart replay, conflict, stale-version, tamper |
| ACS-09 | Atomic recovery proof | Crash recovery and journal integrity |
| ACS-10 | Capability authority check | Scope, risk, expiry, revocation, delegation |
| ACS-11 | Miracle Memory check | Quarantine, immutability, journal, snapshot integrity |
| ACS-12 | Cognitive subconscious runtime check | Bounded cognition and recovery integrity |
| ACS-13 | Synapse/Core integration check | Signed admission, replay denial, receipt chaining |
| ACS-14 | Constitutional runtime check | Runtime immutability and clean-boundary enforcement |

## Reproduction

From a clean checkout:

```bash
cd ecosystem/cranium-kernel
npm ci
npm run verify:acquisition-stress
```

A successful run emits `ACQUISITION_STRESS_SUITE_PASS` and writes:

- `artifacts/acquisition-stress-suite-report.json`
- `artifacts/acquisition-stress-suite-report.md`

GitHub Actions runs the same command on pull requests and pushes to `main`, then uploads both reports as a workflow artifact.

## Evidence Boundary

A passing case establishes only the declared behavior exercised by that case. The suite is not an independent security audit and does not establish absence of vulnerabilities, production-scale performance, or external deployment controls.

The suite intentionally consumes existing executable verification paths rather than converting prose claims into tests after the fact.
