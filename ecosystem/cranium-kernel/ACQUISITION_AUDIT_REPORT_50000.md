# CRANIUM CORE — 50,000-CYCLE ADVERSARIAL STRESS TEST & DILIGENCE DOSSIER

**Document Type:** Cryptographic Verification Receipt & Diligence Artifact
**Date:** 2026-09-26
**Campaign ID:** `CRANIUM-STRESS-50K-MUIJ3I8Z`
**Execution Mode:** Deterministic In-Kernel State Reducer + Pure SHA-256 (Live Execution, No Test Doubles)
**Status:** **PASSED (all campaign assertions satisfied)**
**Master Merkle Root:** `417e3899b420c5c7df8df1edb64eb1068a99e3505bc335b117d9fb47d5c16ff3`

---

## 1. Executive Summary for Acquirers

This report records that the **Cranium Core Directive-Governed Substrate Kernel** completed a continuous **50,000-cycle deterministic adversarial stress campaign** using the in-kernel boundary engine and deterministic request generation.

The test suite systematically attacked all eight structural boundaries defined in the Cranium behavioral contract:
1. **Identity & Subject Substitution:** Injected shadow, uncommitted, and malformed subject identifiers.
2. **Privilege Escalation & Evidence Tampering:** Corrupted cryptographic SHA-256 hashes, bypassed verification flags, and attempted prohibited multi-rank jurisdictional jumps.
3. **High-Frequency Replay Collisions:** Replayed committed idempotency keys with mutated payloads, verifying cryptographic rejection.
4. **State Desynchronization & Concurrency Skew:** Submitted requests across stale, negative, and future authority epochs to test optimistic concurrency controls.
5. **Arbitrary Demotion & Silent Erasure:** Tested silent authority stripping without audit justification.
6. **Constitutional Quorum Bypasses:** Attempted single-party escalation to SYSTEM class without multi-signature council authorization.
7. **Canon Lane & NLI Contradiction Injections:** Tested adversarial prompt texts asserting unverified RAG superiority and identity dilution against immutable canon.
8. **Legitimate State Progression:** Tested valid jurisdictional promotions with verified cryptographic evidence chains to ensure zero false positives.

### Key Audit Metrics
| Metric | Value | Diligence Note |
| :--- | :--- | :--- |
| **Total Test Cycles** | **50,000** | Live in-memory execution of the TypeScript boundary engine |
| **Adversarial Cases Denied** | **45,000 (100.0%)** | Every generated attack case in the campaign was denied |
| **Authorized Cases Granted** | **5,000 (100.0%)** | Every generated authorized case in the campaign was granted |
| **Total Duration** | **10.94 seconds** | Continuous microsecond execution |
| **Throughput** | **4,571.2 ops/sec** | Zero external network bottlenecks |
| **Cryptographic Root** | `417e3899b420c5c7df8df1edb64eb1068a99e3505bc335b117d9fb47d5c16ff3` | 50 Merkle batch roots aggregated |
| **Replay Invariant** | **Strictly Preserved** | Zero collision state corruptions |

---

## 2. Threat Vector Breakdown & Invariant Defense Matrix

```
IDENTITY_SPOOFING         | Total:   7500 | Blocked:   7500 | Granted:      0 | Defense: 100.0%
EVIDENCE_TAMPERING        | Total:   7500 | Blocked:   7500 | Granted:      0 | Defense: 100.0%
REPLAY_COLLISION          | Total:   7500 | Blocked:   7500 | Granted:      0 | Defense: 100.0%
EPOCH_DESYNC              | Total:   7500 | Blocked:   7500 | Granted:      0 | Defense: 100.0%
ARBITRARY_DEMOTION        | Total:   5000 | Blocked:   5000 | Granted:      0 | Defense: 100.0%
CONSTITUTIONAL_BYPASS     | Total:   5000 | Blocked:   5000 | Granted:      0 | Defense: 100.0%
CANON_NLI_INJECTION       | Total:   5000 | Blocked:   5000 | Granted:      0 | Defense: 100.0%
AUTHORIZED_VALID          | Total:   5000 | Blocked:      0 | Granted:   5000 | Defense: 0.0%
```

---

## 3. Boundary Violations Tripped & Recorded

Every attempted breach generated an explicit, typed `BoundaryViolation` logged to the immutable audit ledger:

| Violation Code | Occurrences | Kernel Rule Enforced |
| :--- | :--- | :--- |
| `MISSING_SUBJECT` | **7,500** | Boundary Guard Enforced |
| `INVALID_AUTHORITY_JUMP` | **7,500** | Boundary Guard Enforced |
| `INSUFFICIENT_EVIDENCE` | **13,144** | Boundary Guard Enforced |
| `REPLAY_CONFLICT` | **7,500** | Boundary Guard Enforced |
| `UNAUTHORIZED_REQUESTER` | **7,500** | Boundary Guard Enforced |
| `STALE_AUTHORITY_VERSION` | **7,500** | Boundary Guard Enforced |
| `DEGRADATION_WITHOUT_REASON` | **5,000** | Boundary Guard Enforced |
| `CONSTITUTION_VIOLATION` | **5,000** | Boundary Guard Enforced |
| `CANON_CONTRADICTION_QUARANTINE` | **5,000** | Boundary Guard Enforced |

---

## 4. Latency & Microsecond Timing Distribution

The Cranium state reduction pipeline is non-blocking and deterministic:
- **Mean Latency:** ~255 &mu;s per transaction
- **p50 (Median):** ~106 &mu;s
- **p95:** ~605 &mu;s
- **p99:** ~4054 &mu;s
- **Max Latency:** ~14971 &mu;s

---

## 5. Merkle Root Verification Proof

The Master Merkle Root (`417e3899b420c5c7df8df1edb64eb1068a99e3505bc335b117d9fb47d5c16ff3`) is a SHA-256 commitment over the 50 batch roots. It provides tamper-evident integrity for the generated campaign report; it is not a non-repudiation service or an independent security certification.

### Sample Batch Merkle Roots (Batches 0 to 4):
- **Batch #0 (Tests 0–999):** Root = `e6e1a3c82dfa4390b629e0a0b0b3ac64914ad7b0347baeaa3304e0088d72db69` (Granted: 0, Denied: 1000)
- **Batch #1 (Tests 1000–1999):** Root = `75d6ee257b28ede4f62abd70c4408518aa75e281ed25ca470ff656e5cbe0d513` (Granted: 0, Denied: 1000)
- **Batch #2 (Tests 2000–2999):** Root = `19ca6d8b351712b85c03d857d77f07366f86cb52d602277ea29d5c589b45f14e` (Granted: 0, Denied: 1000)
- **Batch #3 (Tests 3000–3999):** Root = `e8f01c2b398ddfdc6614a2e7dcf8fffa251367c57c5fc46aa1841a5c0d7d191b` (Granted: 0, Denied: 1000)
- **Batch #4 (Tests 4000–4999):** Root = `808d68ba7b57d4a5c9161aed824cb26988c7a5928a25442f4b933067889b278d` (Granted: 0, Denied: 1000)

---

## 6. Honest Diligence Disclosures (Acquisition Framing)

1. **Substrate Nature:** This benchmark measures the **in-memory TypeScript/JavaScript Kernel boundary engine**. It does not establish behavioral equivalence with the Android Kotlin implementation; that remains a separate validation target.
2. **Canon Recall vs RAG:** As disclosed in `ACQUISITION_ONE_PAGER.md`, Cranium Core does **not** claim superior benchmark recall over naive RAG until the frozen real-model harness completes. What Cranium **does prove** in this 50,000-run is that **unauthorized RAG superiority claims are actively rejected by the Canon Lane quarantine**.
3. **Replay behavior:** The in-memory Replay Guard rejected all 7,500 generated collision cases in this campaign. This is bounded test evidence, not a guarantee across arbitrary deployments.

---
*Generated automatically by Cranium Core Test Harness v1.0. All report entries are hashed with SHA-256 and the batch roots are aggregated into a SHA-256 Merkle root.*
