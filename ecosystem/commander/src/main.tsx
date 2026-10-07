import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Status = { ok: boolean; architecture: string; path: string; legacyIsolated: boolean };

function App() {
  const [status, setStatus] = React.useState<Status | null>(null);
  const [message, setMessage] = React.useState('Awaiting governed ingress.');

  React.useEffect(() => {
    fetch('/api/architecture/status')
      .then((r) => r.json())
      .then(setStatus)
      .catch(() => setMessage('Runtime status unavailable. No authority is implied by the surface.'));
  }, []);

  async function submit() {
    const payload = { source: 'convertible-cranium-commander', payload: { intent: message }, receivedAt: Date.now() };
    const response = await fetch('/api/ingress', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    const result = await response.json();
    setMessage(result.message || result.status || 'Ingress evaluated.');
  }

  return <main>
    <header>
      <div className="eyebrow">CONVERTIBLE CRANIUM</div>
      <h1>Commander</h1>
      <p className="lead">Operating surface. Not the throne.</p>
    </header>

    <section className="architecture">
      <div className="node">Listener<br /><small>untrusted ingress</small></div>
      <span>→</span><div className="node">Synapse<br /><small>proposal</small></div>
      <span>→</span><div className="node">Dual Independent Substrate Authority<br /><small>MAY WE? / IS IT SO?</small></div>
      <span>→</span><div className="node">Kernel<br /><small>canonical authority</small></div>
      <span>→</span><div className="node">Governed Execution<br /><small>receipt / lineage</small></div>
    </section>

    <section className="panel">
      <h2>Current architecture</h2>
      <p>{status?.architecture ?? 'Loading verified architecture boundary…'}</p>
      <dl>
        <div><dt>Canonical path</dt><dd>{status?.path ?? 'current'}</dd></div>
        <div><dt>Legacy isolation</dt><dd>{status?.legacyIsolated ? 'PRESERVED' : 'UNKNOWN'}</dd></div>
        <div><dt>Authority source</dt><dd>Convertible Cranium Kernel</dd></div>
      </dl>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} aria-label="intent" />
      <button onClick={submit}>Submit governed ingress</button>
      <p className="note">Commander can present and request. It cannot mint authority.</p>
    </section>
  </main>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
