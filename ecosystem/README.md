# Cranium Ecosystem Drive — Linux Edition

This directory is the source package for a bootable Linux appliance that opens directly into **Cranium AI**, with the WorthWyl/Cranium product family available beneath it.

## Product promise

Each product can operate independently. Together, Cranium AI, Core, Synapse, Ultra, Miracle Memory, Cognitive Tracker, and WorthWyl Forge form the **Cognitive Substrate Governance Ecosystem**.

## Modes

- **Live appliance:** boot a Linux image and open the Cranium AI welcome center.
- **Persistent mode:** store approved configuration and local work on an encrypted writable partition.
- **Recovery mode:** inspect files and repair configuration without starting external actions.
- **Offline mode:** browse documentation, inspect source, run local tests, and use local capabilities that do not require network access.
- **Connected mode:** enable explicitly configured providers and connectors after the user reviews permissions.

`CAPABILITY_MANIFEST.json` is the source of truth for what this drive can actually do in its current offline acquisition-demo build. It explicitly reports that documentation, source inspection, and health checks are available, while local inference, hosted inference, external connectors, external actions, and encrypted persistence require additional runtime configuration.

## Safety defaults

The appliance is read-only by default. It contains no live credentials. External actions require a visible approval step. The system must not change repository visibility, modify permissions, publish, spend money, delete data, or deploy infrastructure without explicit authorization.

## Build

See `DEPLOYMENT.md` for the Linux image build path. The repository is deliberately separated into an appliance shell, product payload, governance documents, and deployment scripts so the same content can be used as a USB folder, a live image, or a persistent installation.
