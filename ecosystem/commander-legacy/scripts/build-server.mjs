import { mkdir } from "node:fs/promises";
import { build } from "esbuild";

await mkdir("dist", { recursive: true });
await build({
  entryPoints: ["server.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  packages: "external",
  sourcemap: true,
  outfile: "dist/server.cjs",
});
console.log("Commander server bundle built: dist/server.cjs");
