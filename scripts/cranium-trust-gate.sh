#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="${1:-/opt/cranium-acquisition-demo}"
MANIFEST="$ROOT/RELEASE_LINEAGE.json"
SIG="$ROOT/RELEASE_LINEAGE.json.sig"
PUB="$ROOT/release-root.pub.pem"
LAW="$ROOT/CRANIUM_COMMAND_LAW.json"
EXPECTED_LAW_DIGEST="84daf39234d6fd9c962da9772309a3d26b343d5fa15be08e09a27321bc2a1d05"
[[ -s "$MANIFEST" && -s "$SIG" && -s "$PUB" ]] || { echo 'CRANIUM TRUST GATE: missing signed release artifacts' >&2; exit 41; }
[[ -s "$LAW" ]] || { echo 'CRANIUM TRUST GATE: Cranium Command law missing' >&2; exit 45; }
grep -q '"canonical_authority": "cranium-kernel"' "$LAW" || { echo 'CRANIUM TRUST GATE: canonical authority mismatch' >&2; exit 46; }
grep -q "\"law_digest\": \"$EXPECTED_LAW_DIGEST\"" "$LAW" || { echo 'CRANIUM TRUST GATE: Command law digest mismatch' >&2; exit 47; }
openssl pkeyutl -verify -rawin -pubin -inkey "$PUB" -sigfile "$SIG" -in "$MANIFEST" >/dev/null || { echo 'CRANIUM TRUST GATE: RELEASE SIGNATURE INVALID' >&2; exit 42; }
if [[ "${CRANIUM_REQUIRE_SECURE_BOOT:-0}" == "1" ]]; then
  [[ -r /sys/firmware/efi/efivars/SecureBoot-* ]] || { echo 'CRANIUM TRUST GATE: UEFI Secure Boot required but EFI variables unavailable' >&2; exit 43; }
  SB="$(od -An -t u1 /sys/firmware/efi/efivars/SecureBoot-* 2>/dev/null | tail -n 1 | tr -d ' ' || true)"
  [[ "$SB" == *1 ]] || { echo 'CRANIUM TRUST GATE: UEFI Secure Boot is not enabled' >&2; exit 44; }
fi
printf '%s\n' 'CRANIUM TRUST GATE: PASS'
