# Acquisition Demo Drive — Deployment

## Purpose

Buyer-facing, offline, read-only demonstration of the WorthWyl / Convertible Cranium ecosystem. It boots into an interactive presentation rather than a generic file browser.

## Static demo (no ISO required)

```bash
python3 -m http.server 8765 --directory demo
# open http://127.0.0.1:8765/
```

## Build hybrid ISO

```bash
sudo apt-get update
sudo apt-get install -y live-build xorriso grub-pc-bin grub-efi-amd64-bin mtools squashfs-tools debootstrap qemu-system-x86
./BUILD_ACQUISITION_ISO.sh
```

Output: `dist/cranium-acquisition-demo.iso`

Test:

```bash
qemu-system-x86_64 -m 4096 -enable-kvm -cdrom dist/cranium-acquisition-demo.iso
```

## Validation

```bash
./HEALTH_CHECK.sh
```

## Security posture

- Offline
- Read-only by default
- No credentials
- No external actions
- Does not bypass device locks, MDM, FRP, or Activation Lock
