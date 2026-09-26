#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DIST="$ROOT/dist"
WORK="$ROOT/.live-build"
ISO="$DIST/cranium-ecosystem-linux.iso"
mkdir -p "$DIST"
command -v lb >/dev/null || { echo 'Missing live-build. Install the packages listed in DEPLOYMENT.md.' >&2; exit 1; }
command -v xorriso >/dev/null || { echo 'Missing xorriso. Install the packages listed in DEPLOYMENT.md.' >&2; exit 1; }
rm -rf "$WORK"
mkdir -p "$WORK/config/includes.chroot/opt/cranium-ecosystem-drive"
cp -a "$ROOT/launcher" "$WORK/config/includes.chroot/opt/cranium-ecosystem-drive/"
cp -a "$ROOT/README.md" "$ROOT/ECOSYSTEM_ARCHITECTURE.md" "$ROOT/CONSTITUTION.md" "$ROOT/DEPLOYMENT.md" "$ROOT/HEALTH_CHECK.sh" "$WORK/config/includes.chroot/opt/cranium-ecosystem-drive/"
for d in cranium-ai cranium-kernel cranium-synapse cranium-ultra miracle-memory cognitive-tracker worthwyl-forge; do
  [ -e "$ROOT/$d" ] && cp -a "$ROOT/$d" "$WORK/config/includes.chroot/opt/cranium-ecosystem-drive/" || true
done
mkdir -p "$WORK/config/includes.chroot/usr/local/bin" "$WORK/config/includes.chroot/etc/systemd/system" "$WORK/config/includes.chroot/etc/xdg/autostart"
cat > "$WORK/config/includes.chroot/usr/local/bin/cranium-welcome" <<'EOF'
#!/usr/bin/env bash
set -Eeuo pipefail
cd /opt/cranium-ecosystem-drive
exec python3 launcher/launcher.py
EOF
chmod +x "$WORK/config/includes.chroot/usr/local/bin/cranium-welcome"
cat > "$WORK/config/includes.chroot/etc/systemd/system/cranium-welcome.service" <<'EOF'
[Unit]
Description=Cranium Ecosystem Welcome Center
After=graphical.target
[Service]
Type=simple
User=live
Environment=CRANIUM_PORT=8765
ExecStart=/usr/local/bin/cranium-welcome
Restart=on-failure
[Install]
WantedBy=graphical.target
EOF
cat > "$WORK/config/includes.chroot/etc/xdg/autostart/cranium-welcome.desktop" <<'EOF'
[Desktop Entry]
Type=Application
Name=Cranium AI Welcome Center
Exec=xdg-open http://127.0.0.1:8765/
X-GNOME-Autostart-enabled=true
EOF
cd "$WORK"
lb config --distribution noble --debian-installer live --archive-areas 'main restricted universe multiverse' --binary-images iso-hybrid --bootappend-live 'boot=live components username=live hostname=cranium'
lb build
cp -f live-image-amd64.hybrid.iso "$ISO"
printf 'Built %s\n' "$ISO"
