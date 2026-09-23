#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
for f in README.md ECOSYSTEM_ARCHITECTURE.md CONSTITUTION.md DEPLOYMENT.md CAPABILITY_MANIFEST.json launcher/index.html launcher/launcher.py; do
  test -s "$ROOT/$f" && printf 'PASS\t%s\n' "$f" || { printf 'FAIL\t%s\n' "$f"; exit 1; }
done
for d in cranium-ai cranium-core cranium-synapse cranium-ultra miracle-memory cognitive-tracker worthwyl-forge; do
  test -d "$ROOT/$d" && printf 'PASS\tproduct:%s\n' "$d" || printf 'INFO\tproduct:%s\tplaceholder-or-missing\n' "$d"
done
printf 'PASS\tappliance structure\n'
