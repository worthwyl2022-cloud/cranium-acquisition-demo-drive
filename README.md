# Convertible Cranium Acquisition Demo Drive

**Status: Buyer-facing offline demonstration & diligence surface — Non-canonical**

The sole canonical authority source is [`cranium-kernel`](https://github.com/worthwyl2022-cloud/cranium-kernel).

The **Convertible Cranium Acquisition Demo Drive** is a Linux-first, offline, buyer-facing demonstration of the WorthWyl / Convertible Cranium multi-plane cognitive governance substrate. It boots into an interactive Convertible Cranium AI presentation rather than an ordinary file browser.

## Core invariant

> Cognition may come from anywhere.  
> Authority comes only through Convertible Cranium.

## What a buyer sees on boot

The drive opens a visual executive overview with a guided tour, ecosystem architecture map, standalone product cards, governance and trust controls, COMA containment, and a safe deployment rehearsal. The interface is read-only by default. It does not contain credentials and does not perform external actions.

## Ecosystem included

The payload contains the assembled local source and documentation surfaces for Convertible Cranium AI, Convertible Cranium Kernel, Synapse, Ultra, Miracle Meta Memory, Cognitive Tracker, WorthWyl Forge, the acquisition package, the Constitution, architecture documentation, deployment guidance, and health checks.

Each product is presented as independently valuable. The demonstration also explains how the products compose into the Cognitive Substrate Governance Ecosystem.

## Run the interactive demo without booting

```bash
python3 -m http.server 8765 --directory demo
# open http://127.0.0.1:8765/
```

The demo is fully static and works offline.

## Build the bootable ISO

Requires a Linux host with `live-build`, `xorriso`, `debootstrap`, `squashfs-tools`, and GRUB live-image packages:

```bash
sudo ./BUILD_ACQUISITION_ISO.sh
```

Output: `dist/cranium-acquisition-demo.iso`

## Security and scope

This is a demonstration and diligence surface, not a production autonomous agent. It intentionally separates explanation from authority. Passcodes, encryption, Android Factory Reset Protection, Apple Activation Lock, MDM controls, and equivalent security boundaries are not bypassed. Any real deployment requires a separate approved implementation plan, credentials supplied at deployment time, and human review.

## Ownership

© 2026 Wyl Mathes · WorthWyl Media. All rights reserved.
