# Convertible Cranium Acquisition Demo Drive

**Status: Buyer-facing offline demonstration & diligence surface — Non-canonical**

The sole canonical authority source is [`cranium-kernel`](https://github.com/worthwyl2022-cloud/cranium-kernel).

This drive is a Linux-first, offline, buyer-facing demonstration of the WorthWyl / Convertible Cranium multi-plane cognitive governance substrate. It boots into an interactive experience hosted by **Cranium AI**, which guides the visitor through the architecture, products, governance controls, and evidence.

---

## Core invariant

> Cognition may come from anywhere.  
> Authority comes only through Convertible Cranium.

## What a buyer sees on boot

The drive opens a visual executive overview hosted by Cranium AI. The visitor is guided through:

- The multi-plane architecture (Cognition → Subconscious → Memory → Synapse → Capability → Authority Plane → Kernel → Execution → Verification → Receipts/Audit → Recovery/COMA)
- The dual foundational engines (Synapse + Kernel)
- Standalone product cards and their current maturity
- Governance and trust controls
- COMA containment
- A safe, read-only deployment rehearsal

The interface is read-only by default. It contains no credentials and performs no external actions.

## Ecosystem included

The payload assembles local source and documentation for the major surfaces (Kernel, Synapse, Ultra, Miracle Memory, Cognitive Tracker, Forge, Constitution, architecture docs, health checks). Each is presented with honest status. Cranium AI acts as the host and intelligence interface that shows the visitor around the system.

## Run the interactive demo without booting

```bash
python3 -m http.server 8765 --directory demo
# open http://127.0.0.1:8765/
```

Fully static and offline.

## Build the bootable ISO

Requires a Linux host with `live-build`, `xorriso`, `debootstrap`, `squashfs-tools`, and GRUB live-image packages:

```bash
sudo ./BUILD_ACQUISITION_ISO.sh
```

Output: `dist/cranium-acquisition-demo.iso`

## Security and scope

This is a demonstration and diligence surface, not a production autonomous agent. It intentionally separates explanation from authority. Passcodes, encryption, FRP, Activation Lock, MDM, and equivalent boundaries are never bypassed. Real deployment requires a separate approved plan, credentials at deployment time, and human review.

## Ownership

© 2026 Wyl Mathes · WorthWyl Media. All rights reserved.
