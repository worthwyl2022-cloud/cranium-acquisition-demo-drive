# Authority Convergence Contract v1

**Status:** Canonical architecture contract  
**Scope:** Convertible Cranium Quad Engine authority path  
**Evidence rule:** Rows without a named test are gaps, not claims.

## 1. Purpose

This contract makes the implemented Quad Engine convergence boundary explicit and testable without changing the architecture.

The four engines are:

1. **Engine 1: Synapse** — proposal and context derivation.
2. **Engine 2A: Constitutional Substrate A** — independent constitutional admissibility ("MAY WE?").
3. **Engine 2B: Evidence Substrate B** — independent evidence grounding ("IS IT SO?").
4. **Engine 3: Convertible Cranium Kernel** — convergence, canonical authority, receipt, proof, and governed state transition.

Substrates A and B derive independently:

**A ∥ B → Kernel**

The Kernel does not vote between A and B and does not substitute for a missing assessment.

## 2. Core invariants

- A and B receive the same proposal identity but different governing/input domains.
- A does not receive B's evidence or assessment.
- B does not receive A's policy or assessment.
- A and B produce sealed assessments before Kernel convergence.
- Assessment bindings include the proposal identity and required version information.
- A constitutional prohibition denies authority.
- A grounding contradiction denies authority.
- Unresolved or escalated conditions cannot grant authority.
- Invalid or unmatched convergence inputs fail closed.
- Only the Kernel can create canonical authority.
- Canonical receipt/proof artifacts cannot independently mint authority.

## 3. Semantic dispositions

### Substrate A

- PERMITTED
- PROHIBITED
- ESCALATED
- UNRESOLVED

### Substrate B

- GROUNDED
- CONTRADICTED
- UNRESOLVED

## 4. Convergence truth table

| A \ B | GROUNDED | CONTRADICTED | UNRESOLVED |
|---|---|---|---|
| PERMITTED | CONVERGED | DENIED | ESCALATED |
| PROHIBITED | DENIED | DENIED | DENIED |
| ESCALATED | ESCALATED | DENIED | ESCALATED |
| UNRESOLVED | ESCALATED | DENIED | ESCALATED |

**Precedence:** DENIED > ESCALATED > CONVERGED > QUARANTINED.

A contradiction therefore defeats an otherwise admissible proposal. A constitutional prohibition defeats otherwise supporting evidence.

## 5. Binding and fail-closed rules

Binding failures are checked before semantic convergence is accepted.

The convergence boundary requires:

- sealed assessments;
- matching proposal hash;
- required constitution/policy/formula version bindings;
- structurally valid assessment dispositions.

A failed binding does not become a semantic approval.

The convergence gate is not itself the complete cryptographic authority boundary. Downstream Kernel checks remain responsible for canonical request hashing, replay/idempotency, authority-state validation, receipt creation, proof binding, and durable authority lineage.

## 6. QUARANTINED

QUARANTINED is the fail-closed outcome for invalid, incomplete, unmatched, or otherwise non-legitimate convergence conditions that do not qualify as a semantic denial or escalation.

Unknown/malformed dispositions must never be interpreted as approval.

Binding failures are not silently converted into CONVERGED.

## 7. ESCALATED

ESCALATED means authority is unavailable from the current assessment state.

The Quad Engine maps non-converged/non-denied assessment outcomes to an unavailable disposition for the downstream Kernel authority path. Therefore escalation cannot itself grant authority.

A formal human-resolution lifecycle is **not currently claimed**. Re-evaluation through a subsequent request may exist operationally, but a dedicated escalation state machine requires its own implementation and named tests.

## 8. DENIED and replay/idempotency

A denial is authoritative for the evaluated transition, but the contract does not claim that every future request containing the same semantic proposal is globally immutable.

The Kernel canonicalizes the authority request and computes a SHA-256 request hash.

The replay guard binds:

idempotencyKey → canonicalRequestHash

Therefore:

- same idempotency key + same canonical request hash returns the existing transition;
- same idempotency key + different canonical request hash is ConflictingReuse;
- changed evidence changes the canonical request hash;
- conflicting reuse is denied by the Kernel boundary;
- a genuinely new idempotency identity is a new request that must pass the authority path again.

## 9. Independence mechanism

The currently implemented independence claim is **functional/input-domain independence**, not process isolation or separate-key cryptographic independence.

Implemented boundary:

**Substrate A**
- proposal;
- constitutional rules;
- policy;
- formula;
- protected scopes/risk constraints.

**Substrate B**
- proposal;
- evidence records;
- evidence verification state;
- grounding formula.

Neither substrate receives the other substrate's result before its own assessment is derived.

Current adversarial verification covers:

- input isolation;
- policy isolation;
- evidence isolation;
- evidence ordering normalization;
- mismatch quarantine.

The following stronger mechanisms are not claimed unless separately implemented and tested:

- separate signing keys for A and B;
- process/environment isolation;
- formal escalation lifecycle with human resolution and re-evaluation;
- versioned contract identifier referenced by receipts.

## 10. Authority handoff

The authority path is:

**Listener → Synapse → (Substrate A ∥ Substrate B) → Convergence → Convertible Cranium Kernel → Authority Transition → Canonical Receipt → Proof → Governed Execution**

The Kernel does not manufacture missing A/B assessments.

A legitimate convergence result permits the downstream authority path to be considered. Canonical authority still requires the Kernel's complete boundary evaluation and transition machinery.

## 11. Invariant-to-test map

| Invariant | Named verification |
|---|---|
| Listener rejects malformed/oversized/unserializable ingress and emits no authority | verify:listener-boundary |
| A/B independent boundary behavior | verify:dual-independence |
| Input/policy/evidence isolation and mismatch quarantine | verify:dual-independence-adversarial |
| Canonical durable receipt remains the authority lineage artifact | verify:receipt-lineage |
| Authority proof binds request/transition/receipt and blocks forgery | verify:proof-layer |
| Full Listener → Synapse → A/B → Kernel → execution path | verify:end-to-end |
| Request replay/idempotency conflict handling | Kernel replay/boundary tests; named test coverage must remain explicit in the verification package |
| Exact full convergence grid | Named convergence test required; absence of such a test is a gap, not a claim |
| Separate A/B signing keys | Not implemented/claimed |
| Process/environment isolation | Not implemented/claimed |
| Formal escalation lifecycle | Not implemented/claimed |
| Versioned convergence-contract identifier in receipts | Not implemented/claimed |

## 12. Evidence discipline

A passing test run means only that the committed tests passed under the declared environment.

It is **not** proof of:

- security;
- complete correctness;
- uniqueness or novelty;
- absence of vulnerabilities;
- enterprise readiness;
- production readiness;
- freedom to operate;
- patentability;
- market leadership.

Architecture status must remain separated into:

- **IMPLEMENTED** — executable code exists and the named verification passes.
- **ARCHITECTURALLY DEFINED** — the contract/design exists but implementation or verification is incomplete.
- **UNVERIFIED / GAP** — the claim requires a named test or evidence that does not yet exist.

## 13. Declared extensions (not claims)

- Separate signing keys for substrates A and B
- Process- or environment-level isolation of A and B
- Formal escalation lifecycle with human resolution and re-evaluation
- Versioned contract identifier (for example authority-convergence-contract-v1) referenced by receipts

## 14. Verification disclaimer

A passing test run means only that committed tests passed under the declared environment. It is not proof of security, correctness, uniqueness or absence of vulnerabilities.
