# Reviewer Path — Cranium Acquisition Demo Drive

**Goal:** Evaluate the current evidence surface in under 10 minutes.

## 0. Canonical authority source

The sole canonical authority source is [`cranium-kernel`](https://github.com/worthwyl2022-cloud/cranium-kernel).  
This drive is a demonstration and diligence surface only.

## 1. Open the static demo

```bash
python3 -m http.server 8765 --directory demo
# open http://127.0.0.1:8765/
```

Cranium AI acts as the host and guides the visitor.

## 2. Walk the experience

- Multi-plane architecture overview
- Dual engines (Synapse + Kernel)
- Standalone product cards and honest maturity labels
- COMA containment boundary
- Portable editions (this drive vs commercial boot drive)
- Evidence rules — no synthetic success, no credentials

## 3. Read the acquisition narrative

Open `ACQUISITION_PACKAGE.md` and confirm the standalone-vs-ecosystem positioning. Note that the Kernel remains the sole authority source even when products are presented as a family.

## 4. Validate structure

```bash
./HEALTH_CHECK.sh
```

## 5. Optional ISO

```bash
./BUILD_ACQUISITION_ISO.sh
qemu-system-x86_64 -m 4096 -enable-kvm -cdrom dist/cranium-acquisition-demo.iso
```

## Explicit non-claims

This drive does not claim live model inference, provider connectivity, full production certification, or canonical authority. It is an evidence and diligence surface hosted by Cranium AI.
