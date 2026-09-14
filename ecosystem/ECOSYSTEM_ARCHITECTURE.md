# Linux Appliance Architecture

## Layers

```text
Bootloader / Linux live environment
        ↓
Cranium AI Welcome Center
        ↓
Product launcher and local service supervisor
        ↓
Cranium Ultra — intertwined Core–Synapse runtime
        ↓
Miracle Memory · Cognitive Tracker · WorthWyl Forge
        ↓
Local repositories, tests, evidence, and deployment tools
```

## Standalone behavior

Each product directory contains its own source payload, documentation, and launch boundary. The appliance can open a product independently without requiring the entire ecosystem. If a product is not yet mapped to a dedicated repository, its directory contains an explicit integration placeholder rather than pretending that an implementation is present.

## Combined behavior

The ecosystem mode uses explicit contracts for identity, capability, permission, action request, approval, provenance, memory, event, and audit records. Cranium AI guides the user. Ultra governs integrated execution. Miracle Memory supplies approved context. Cognitive Tracker evaluates outcomes. Forge provides the workspace.

## Operating modes

| Mode | Network | Writes | Purpose |
|---|---|---|---|
| Explore | Off or on | None by default | Browse products and documentation |
| Develop | Optional | Local workspace | Run tests and build products |
| Connect | On | Scoped configuration | Configure providers and connectors |
| Deploy | On | External effects possible | Prepare and execute approved deployments |
| Recover | Off | Recovery partition only | Repair, export, and restore |
