# Convertible Cranium Ecosystem Architecture

The boot drive is a distribution surface for the current Convertible Cranium substrate. Its architecture follows the substrate itself rather than treating the appliance as a separate product architecture.

## Substrate model

```text
                         HUMAN / EXTERNAL INTENT
                                   |
                                   v
                              COGNITION
                     models • research • tools • input
                                   |
                                   v
                       COGNITIVE SUBCONSCIOUS
                 observe • associate • hypothesize • challenge
                 contradiction • risk • candidate action
                                   |
                       proposal / evidence only
                                   |
             +---------------------+---------------------+
             |                                           |
             v                                           v
       SYNAPSE PLANE                              MIRACLE MEMORY
 capabilities • providers                    identity • continuity
 tools • connectors • evidence               canon • provisional
 attestations • provenance                   quarantine • recovery
             |                                           |
             +---------------------+---------------------+
                                   |
                                   v
                         +-------------------+
                         |   CRANIUM CORE    |
                         | / CRANIUM KERNEL  |
                         |                   |
                         | Constitution     |
                         | authority        |
                         | scope/capability |
                         | durable state    |
                         | replay           |
                         | receipts         |
                         | recovery         |
                         +---------+---------+
                                   |
                                authority
                                   |
                                   v
                           GOVERNED EXECUTION

              COMA crosses the architecture as the
              containment / operational-state boundary:
              freeze • quarantine • evidence • recovery • resume.
```

## Architectural invariants

1. `cranium-kernel` is the canonical authority implementation.
2. Cognition and the Cognitive Subconscious may generate or refine proposals, but cannot grant themselves authority.
3. Synapse supplies bounded capability and evidence. Synapse is not an authority issuer.
4. Miracle Memory supplies governed continuity. Memory does not become permission merely because something was remembered.
5. COMA provides containment and recovery behavior across operational state. It is not a competing authority engine.
6. The appliance, UI, launcher, demo, Forge, Ultra, and diligence surfaces remain supporting clients or composition layers unless a specific implementation proves otherwise.
7. Canonical authority is created only through the Kernel's governed transition and durable commit path.

## Appliance layers

- Linux boot and recovery environment.
- Convertible Cranium AI welcome/operator surface.
- Product and ecosystem launcher.
- Canonical Kernel snapshot and contracts.
- Synapse capability and provider surfaces.
- Cognitive Subconscious, Miracle Memory, and COMA surfaces where bundled and evidenced.
- Product demonstrations, tests, documentation, and diligence artifacts.

The appliance demonstrates the ecosystem. It does not create a second ecosystem authority boundary.

## Standalone versus ecosystem value

The appliance should show both views:

**Standalone:** Core/Kernel, Synapse, AI, Memory, COMA, Forge, Ultra, and other products retain their own boundaries and value where the implementation is real.

**Composed:** those products become more useful when connected through explicit contracts, with Core/Kernel remaining the canonical authority boundary.

## Operating modes

| Mode | Default behavior | Authority rule |
|---|---|---|
| Explore | Offline inspection and documentation | No external authority effects |
| Develop | Local source/tests | Local work remains non-canonical unless committed through Kernel |
| Connect | Explicit provider/connector configuration | Capability does not imply permission |
| Deploy | Governed external execution | Requires applicable authority and approval |
| Recover | Inspect, verify, export, restore | Resume requires the appropriate governed transition |
