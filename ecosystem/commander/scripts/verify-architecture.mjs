import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'src/main.tsx', 'src/styles.css', 'server.ts', 'ARCHITECTURE.md', 'ARCHITECTURE.json',
  '../cranium-kernel/src/kernel/listener.ts', '../cranium-kernel/src/substrates/quadEngine.ts',
  '../cranium-kernel/src/substrates/convergence.ts', '../cranium-kernel/src/kernel/engine.ts'
];
for (const rel of required) if (!fs.existsSync(path.resolve(root, rel))) throw new Error(`Missing architecture artifact: ${rel}`);
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'ARCHITECTURE.json'), 'utf8'));
if (manifest.status !== 'CURRENT_CANONICAL') throw new Error('Commander is not marked current canonical');
if (!fs.existsSync(path.resolve(root, '../commander-legacy'))) throw new Error('Legacy Commander baseline is not preserved');
if (!manifest.path.includes('dual-independent-substrate-authority')) throw new Error('Dual Independent Substrate Authority missing');
if (!manifest.path.includes('engine-3-kernel')) throw new Error('Kernel authority boundary missing');
console.log('CONVERTIBLE CRANIUM COMMANDER ARCHITECTURE: PASS');
console.log(`canonical=${manifest.status} legacy-isolated=1 authority=${manifest.authority} path=${manifest.path.length}-stage`);
