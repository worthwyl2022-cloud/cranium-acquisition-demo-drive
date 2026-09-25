#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"

fail() { printf 'FAIL\t%s\n' "$1" >&2; exit 1; }
pass() { printf 'PASS\t%s\n' "$1"; }

for f in README.md CONSTITUTION.md ACQUISITION_PACKAGE.md ECOSYSTEM_ARCHITECTURE.md DEPLOYMENT.md REVIEWER_PATH.md demo/index.html; do
  [[ -s "$ROOT/$f" ]] && pass "$f" || fail "required file missing or empty: $f"
done

[[ -d "$ROOT/demo" ]] && pass "demo/" || fail "demo directory missing"
[[ -d "$ROOT/ecosystem" ]] && pass "ecosystem/" || fail "ecosystem directory missing"

if [[ -f "$ROOT/BUILD_ACQUISITION_ISO.sh" ]]; then
  pass "BUILD_ACQUISITION_ISO.sh present"
else
  fail "BUILD_ACQUISITION_ISO.sh missing"
fi

printf '\nPASS\tacquisition demo structure\n'
printf 'INFO\tStatic demo: python3 -m http.server 8765 --directory demo\n'
