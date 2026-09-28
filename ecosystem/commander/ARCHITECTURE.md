# Commander OS Architecture

## Repository role

**Supporting operational control surface.**

Commander is a user-facing application layer over the Convertible Cranium ecosystem.
It is not an authority implementation.

## Canonicality

- Canonical authority: `cranium-kernel`
- Canonical attestation contract: `cranium-synapse`
- Continuity/memory surface: `miracle-memory`
- Operational surface: `commander`
- Creative application: `worthwyl-forge`
- Historical/supporting metacognitive material: `cranium-metacognitive-mapper`

Commander must never create a competing authority store or canonical receipt format.

## Runtime flow

1. User input enters through Commander UI or voice input.
2. Commander builds bounded application context.
3. Convertible Cranium AI may propose navigation, generation, or other actions.
4. Session protection controls repeated asynchronous execution.
5. Proposed authority-changing work must cross the Kernel boundary.
6. Kernel evaluates the request against canonical state, evidence, replay rules,
   constitutional constraints, and transition semantics.
7. Only Kernel persistence establishes canonical state and receipt status.

## Session Circuit Breaker

The session circuit has three states:

- `CLOSED`: normal operation.
- `OPEN`: repeated async failures have triggered a temporary execution block.
- `HALF_OPEN`: cooldown elapsed; one operation may probe recovery.

The circuit is a runtime guard, not a governance authority.

On operation failure, the configured rollback callback executes before the failure is
recorded. Once the threshold is reached, subsequent operations fail closed until the
cooldown expires.

## Non-canonical state

The following are explicitly non-canonical:

- React component state
- browser history/hash navigation
- local UI metrics
- model output
- demo fixtures
- client-side memory
- session circuit state

These can inform or drive a request, but none can independently grant authority.

## Lineage migration

The Commander source was migrated from the archived `cranium-operator-os` Git
repository. The migration preserves its functional application surfaces while
updating identity and architecture language to the current Convertible Cranium
model.

The historical repository remains evidence of provenance; it is not silently
rewritten into a claim that it was originally the current Commander architecture.
