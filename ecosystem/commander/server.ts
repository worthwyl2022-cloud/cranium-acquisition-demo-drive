import express from 'express';
import path from 'node:path';

const app = express();
const port = Number(process.env.PORT || 3000);
const root = process.cwd();

app.use(express.json({ limit: '256kb' }));

app.get('/api/architecture/status', (_req, res) => {
  res.json({ ok: true, architecture: 'Listener → Synapse → Dual Independent Substrate Authority → Convertible Cranium Kernel → Governed Execution → Receipt / Lineage', path: 'canonical-current', legacyIsolated: true });
});

app.post('/api/ingress', (req, res) => {
  const input = req.body;
  if (!input || typeof input !== 'object' || Array.isArray(input)) return res.status(400).json({ status: 'QUARANTINED', message: 'Malformed ingress blocked before authority evaluation.' });
  if (typeof input.source !== 'string' || !input.source || input.source.length > 256) return res.status(400).json({ status: 'QUARANTINED', message: 'Invalid source blocked at Listener boundary.' });
  if (!Object.prototype.hasOwnProperty.call(input, 'payload')) return res.status(400).json({ status: 'QUARANTINED', message: 'Missing payload blocked at Listener boundary.' });
  res.json({ status: 'RECEIVED', message: 'Ingress normalized. No authority was granted by Commander.' });
});

app.use(express.static(path.join(root, 'dist')));
app.get('*', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')));
app.listen(port, () => console.log(`Convertible Cranium Commander listening on ${port}`));
