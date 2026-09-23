# Reviewer Path — Cranium Acquisition Demo Drive

**Goal:** Evaluate the current evidence surface in under 10 minutes.

## 1. Open the static demo

```bash
python3 -m http.server 8765 --directory demo
# open http://127.0.0.1:8765/
```

## 2. Walk the tabs

- Current status — what is implemented vs foundation vs concept
- Standalone products — product cards and status labels
- Dual engine — cognition proposes, governance decides
- Cranium Coma — controlled stop / resume boundary
- Portable editions — this drive vs commercial boot drive
- Evidence rules — no synthetic success, no credentials

## 3. Read the acquisition narrative

Open `ACQUISITION_PACKAGE.md` and confirm the standalone-vs-ecosystem positioning.

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

This drive does not claim live model inference, provider connectivity, or full production certification. It is an evidence and diligence surface.
