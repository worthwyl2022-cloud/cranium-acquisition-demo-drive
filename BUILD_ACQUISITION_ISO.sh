#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist"
WORK="$ROOT/.live-build"
ISO="$DIST/cranium-acquisition-demo.iso"
mkdir -p "$DIST"
command -v lb >/dev/null || { echo 'Missing live-build. Install the packages listed in README.md.' >&2; exit 1; }
command -v xorriso >/dev/null || { echo 'Missing xorriso. Install the packages listed in README.md.' >&2; exit 1; }
rm -rf "$WORK"
mkdir -p "$WORK/config/includes.chroot/opt/cranium-acquisition-demo"
cp -a "$ROOT/demo" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/"
cp -a "$ROOT/ecosystem" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/"
cp -a "$ROOT/README.md" "$ROOT/CONSTITUTION.md" "$ROOT/ACQUISITION_PACKAGE.md" "$ROOT/ECOSYSTEM_ARCHITECTURE.md" "$WORK/config/includes.chroot/opt/cranium-acquisition-demo/"
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
lb config --distribution noble --debian-installer live --archive-areas 'main restricted universe multiverse' --binary-images iso-hybrid --bootappend-live 'boot=live components username=live hostname=cranium-demo'
lb build
cp -f live-image-amd64.hybrid.iso "$ISO"
printf 'Built %s\n' "$ISO"
