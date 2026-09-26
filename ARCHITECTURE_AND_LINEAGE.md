# Convertible Cranium Acquisition Demo Drive: Current Architecture and Lineage

The acquisition appliance is a **buyer-facing distribution and evidence surface for the Convertible Cranium substrate**. It is not a separate governance system and does not redefine canonical authority.

## Canonical substrate model

```text
Human / external intent
        |
        v
Cognition
        |
        v
Cognitive Subconscious
observe -> associate -> hypothesize -> challenge -> quarantine/propose
        |
        +------------------- evidence / proposal -------------------+
                                                                     |
                                                                     v
                 +-----------------------------------------------+
                 |              CRANIUM KERNEL                    |
                 | Constitution -> boundary -> authority ->      |
                 | durable commit -> canonical receipt            |
                 +----------------------+------------------------+
                                        |
                                    authority
                                        |
                                        v
                                  Governed action
                                        |
                                        v
                                  Miracle Memory

Synapse = bounded capability/evidence plane.
COMA = cross-cutting containment and operational-state boundary.
```

## Buyer-facing layers

- **Presentation:** offline executive overview and guided tour.
- **Architecture:** current Core/Synapse, cognition, subconscious, memory, COMA, and authority model.
- **Evidence:** source snapshots, tests, receipts, manifests, and reproducibility material.
- **Products:** independently identifiable product surfaces and their integration boundaries.
- **Deployment:** Linux appliance build and safe operating modes.

The demo explains composition without claiming that presentation code itself is canonical authority.

## Canonicality rule

`cranium-kernel` is the sole canonical authority source. Supporting repositories and bundled snapshots may submit proposals, evidence, requests, or presentation state, but may not issue canonical authority independently.

## Snapshot and evidence rule

Every bundled canonical component must identify its source repository and pinned revision. A demonstration artifact is evidence of the demonstration unless separately reproduced as executable technical evidence. Synthetic fixtures and hypothetical scenarios must remain explicitly labeled.

## Security boundary

The acquisition drive is read-only by default and contains no live credentials. It demonstrates architecture and evidence without pretending that an offline demo is itself a production autonomous deployment.
