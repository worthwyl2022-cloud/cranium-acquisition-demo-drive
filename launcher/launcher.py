#!/usr/bin/env python3
import http.server
import json
import os
import pathlib
import socketserver
import webbrowser

ROOT = pathlib.Path(__file__).resolve().parents[1] / "ecosystem"
PORT = int(os.environ.get("CRANIUM_PORT", "8765"))
MANIFEST = ROOT / "CAPABILITY_MANIFEST.json"

PRODUCTS = [
    ("Cranium AI", "Intelligence interface and collaborative guide", "cranium-ai"),
    ("Cranium Core", "Governance, authority, policy, provenance, and recovery", "cranium-core"),
    ("Cranium Synapse", "Providers, connectors, tools, and extensions", "cranium-synapse"),
    ("Cranium Ultra", "Integrated Core–Synapse governed runtime", "cranium-ultra"),
    ("Miracle Memory", "Consent-based continuity and persistent context", "miracle-memory"),
    ("Cognitive Tracker", "Evaluation, uncertainty, progress, and improvement", "cognitive-tracker"),
    ("WorthWyl Forge", "Creation, workspace, and operator environment", "worthwyl-forge"),
]

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/status":
            manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
            body = {
                "root": str(ROOT),
                "mode": manifest["mode"],
                "truthPolicy": manifest["truthPolicy"],
                "capabilities": manifest["capabilities"],
                "products": [{"name": n, "folder": f, "present": (ROOT / f).exists()} for n, _, f in PRODUCTS],
            }
            raw = json.dumps(body).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(raw)))
            self.end_headers()
            self.wfile.write(raw)
            return
        return super().do_GET()

os.chdir(ROOT / "launcher")
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as server:
    url = f"http://127.0.0.1:{PORT}/"
    print(f"Cranium Ecosystem Drive running at {url}")
    try:
        webbrowser.open(url)
    except Exception:
        pass
    server.serve_forever()
