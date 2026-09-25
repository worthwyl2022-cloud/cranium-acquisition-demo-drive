#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist"
WORK="$ROOT/.live-build"
ISO="$DIST/cranium-acquisition-demo.iso"

mkdir -p "$DIST"
command -v lb >/dev/null || { echo 'Missing live-build. Install packages listed in README.md / DEPLOYMENT.md.' >&2; exit 1; }
command -v xorriso >/dev/null || { echo 'Missing xorriso.' >&2; exit 1; }

rm -rf "$WORK"
mkdir -p "$WORK/config/includes.chroot/opt/cranium-acquisition-demo"

# Record the exact source revision used for this appliance build.
REVISION="$(git -C "$ROOT" rev-parse HEAD 2>/dev/null || printf 'unversioned')"
CORE_SNAPSHOT_SHA256="$(find "$ROOT/ecosystem/cranium-core" -type f -print0 | sort -z | xargs -0 sha256sum | sha256sum | awk '{print $1}')"
cat > "$ROOT/RELEASE_LINEAGE.json" <<EOF
{
  "product": "Convertible Cranium Acquisition Demonstration Drive",
  "source_repository": "worthwyl2022-cloud/cranium-acquisition-demo-drive",
  "source_revision": "$REVISION",
  "authority_source": "cranium-kernel",
  "authority_source_snapshot_sha256": "$CORE_SNAPSHOT_SHA256",
  "architecture_boundaries": ["cognition", "authority", "execution"],
  "generated_by": "BUILD_ACQUISITION_ISO.sh"
}
EOF
cp -a "$ROOT/RELEASE_LINEAGE.json" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/"

cp -a "$ROOT/demo" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/"
[[ -d "$ROOT/ecosystem" ]] && cp -a "$ROOT/ecosystem" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/" || true
for f in README.md CONSTITUTION.md ACQUISITION_PACKAGE.md ECOSYSTEM_ARCHITECTURE.md DEPLOYMENT.md REVIEWER_PATH.md HEALTH_CHECK.sh; do
  [[ -e "$ROOT/$f" ]] && cp -a "$ROOT/$f" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/" || true
done

mkdir -p "$WORK/config/includes.chroot/usr/local/bin" "$WORK/config/includes.chroot/etc/xdg/autostart"

cat > "$WORK/config/includes.chroot/usr/local/bin/cranium-acquisition-demo" <<'EOF'
#!/usr/bin/env bash
set -Eeuo pipefail
cd /opt/cranium-acquisition-demo
echo 'Cranium Acquisition Demo Drive is installed at /opt/cranium-acquisition-demo'
exec python3 -m http.server 8765 --directory demo
EOF
chmod +x "$WORK/config/includes.chroot/usr/local/bin/cranium-acquisition-demo"

cat > "$WORK/config/includes.chroot/etc/xdg/autostart/cranium-acquisition-demo.desktop" <<'EOF'
[Desktop Entry]
Type=Application
Name=Cranium Acquisition Demonstration
Exec=sh -c 'cranium-acquisition-demo >/tmp/cranium-acquisition-demo.log 2>&1 & sleep 2; xdg-open http://127.0.0.1:8765/'
X-GNOME-Autostart-enabled=true
EOF

cd "$WORK"
lb config \
  --distribution noble \
  --debian-installer live \
  --archive-areas 'main restricted universe multiverse' \
  --binary-images iso-hybrid \
  --bootappend-live 'boot=live components username=live hostname=cranium-demo'

lb build

if [[ -f live-image-amd64.hybrid.iso ]]; then
  cp -f live-image-amd64.hybrid.iso "$ISO"
elif [[ -f binary.hybrid.iso ]]; then
  cp -f binary.hybrid.iso "$ISO"
elif [[ -f binary.iso ]]; then
  cp -f binary.iso "$ISO"
  echo 'WARNING: non-hybrid ISO produced' >&2
else
  echo 'ERROR: no ISO artifact found' >&2
  exit 1
fi

printf 'Built %s\n' "$ISO"
