import React from 'react';
import {
  FileText,
  ShieldCheck,
  Ban,
  Calendar,
  AlertTriangle,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const DiligenceTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header One-Pager Banner */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 className="text-sm font-bold text-white tracking-tight">
              Convertible Cranium Core &mdash; Acquisition One-Pager (Honest)
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>2026-08 Frozen Baseline</span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
          <p className="text-slate-300">
            <strong className="text-cyan-400">Asset class:</strong> Pre-revenue creative-governance
            prototype (IP + architecture + working substrate)
          </p>
          <p className="text-slate-400">
            <strong className="text-rose-400">Not:</strong> A revenue-generating SaaS, a proven
            continuity product, or a validated benchmark leader.
          </p>
        </div>

        <blockquote className="p-3 rounded-lg bg-cyan-950/20 border-l-2 border-cyan-500 text-xs text-slate-300 italic leading-relaxed">
          &quot;Convertible Cranium Core is a documented creative-governance prototype. Receipts demonstrate
          operational directives, identity-gate activity, quarantine write-back, and explicit memory
          governance. Comparative canon superiority is <strong>not</strong> claimed until a frozen,
          real-model harness shows it. The acquisition opportunity is the <strong>architecture,
          behavioral contract, and remediation path</strong> &mdash; not marketed performance
          superiority.&quot;
        </blockquote>
      </div>

      {/* Executable Acquisition Stress Evidence */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950/80 text-cyan-400 border border-cyan-700/60 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Executable Evidence Gate
              </span>
              <span className="text-xs font-mono text-slate-400">Acquisition Stress Suite v1.0.0</span>
            </div>
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              14-Case Acquisition Stress Suite
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Repository-executable evidence covering authority-boundary abuse, replay conflicts,
              stale state, recovery integrity, capability governance, memory immutability, bounded
              cognition, signed admission, and constitutional enforcement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800"><span className="text-[10px] text-slate-400 uppercase block">Cases Defined</span><strong className="text-white text-sm">14</strong></div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800"><span className="text-[10px] text-slate-400 uppercase block">Execution Model</span><strong className="text-cyan-300 text-sm">Real Tests</strong></div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800"><span className="text-[10px] text-slate-400 uppercase block">Evidence Output</span><strong className="text-cyan-300 text-sm">JSON + Markdown</strong></div>
          <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800"><span className="text-[10px] text-slate-400 uppercase block">Authority Plane</span><strong className="text-emerald-300 text-sm">Cranium Kernel</strong></div>
        </div>
        <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/50 text-xs text-slate-300 leading-relaxed">
          <strong className="text-amber-300">Evidence boundary:</strong> a passing case establishes only the declared behavior exercised by that case. The suite is not an independent security audit and does not establish absence of vulnerabilities, production-scale performance, or external deployment controls.
        </div>
      </div>

      {/* Reality Check Table: What it is not yet */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Diligence Gap Analysis &mdash; Claims vs. Reality
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-950 border-b border-slate-800 font-mono text-[11px] text-slate-400">
              <tr>
                <th className="p-2.5">Claim / Marketed Angle</th>
                <th className="p-2.5">Technical Reality</th>
                <th className="p-2.5">Remediation Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              <tr>
                <td className="p-2.5 font-semibold text-slate-200">
                  Proven better canon recall than RAG
                </td>
                <td className="p-2.5 text-slate-400">
                  <strong className="text-amber-400">Not established.</strong> Early automated runs
                  showed canon regression vs naive RAG; treat as known gap with defined fix path.
                </td>
                <td className="p-2.5 text-slate-300 font-mono text-[11px]">
                  Requires frozen real-model harness
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-200">Full NLI contradiction engine</td>
                <td className="p-2.5 text-slate-400">
                  <strong className="text-amber-400">NLI-proxy v2</strong> + optional LLM-judge
                  adapter; not a trained on-device CrossEncoder.
                </td>
                <td className="p-2.5 text-slate-300 font-mono text-[11px]">
                  Judge adapter drop-in ready
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-200">
                  Multi-tenant production platform
                </td>
                <td className="p-2.5 text-slate-400">
                  <strong className="text-amber-400">Single-process</strong> / in-memory field;
                  project isolation is designed, not battle-tested at scale.
                </td>
                <td className="p-2.5 text-slate-300 font-mono text-[11px]">
                  Boundary contracts frozen
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-200">Revenue / users / ARR</td>
                <td className="p-2.5 text-slate-400 font-mono text-rose-400">None ($0 ARR).</td>
                <td className="p-2.5 text-slate-300 font-mono text-[11px]">
                  Priced as pure IP / prototype
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold text-slate-200">$10M–$30B valuation comps</td>
                <td className="p-2.5 text-slate-400">
                  Decorative if applied to pre-product prototype; ignore for diligence.
                </td>
                <td className="p-2.5 text-slate-300 font-mono text-[11px]">
                  SaaS multiples do not apply
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Real Moat vs Cosmetic Moat */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/60 space-y-3">
          <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Defensible Moat (Real)
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&bull;</span>
              <div>
                <strong className="text-white">Behavioral Contract:</strong> Intention &rarr;
                identity &rarr; memory permanence &rarr; conflict as signal &rarr; directive-driven
                next move.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&bull;</span>
              <div>
                <strong className="text-white">Quarantine Boundary:</strong> Generated material is
                strictly provisional until explicitly committed.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&bull;</span>
              <div>
                <strong className="text-white">Immune Incidents:</strong> Replay collisions and
                anomalies treated as adaptive constitutional memory.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">&bull;</span>
              <div>
                <strong className="text-white">Creative Constitution Model:</strong> Builder-facing
                immutable rules protecting identity against prompt decay.
              </div>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/60 space-y-3">
          <h3 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
            <Ban className="w-4 h-4" />
            Cosmetic / Easily Copied Patterns
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">&times;</span>
              <div>
                <strong className="text-white">Field Visualizations Alone:</strong> Visual
                particles or physics loops without enforceable state reduction boundaries.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">&times;</span>
              <div>
                <strong className="text-white">Hash/Theme Embeddings:</strong> Cosine similarity
                without deterministic cryptographic verification gates.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">&times;</span>
              <div>
                <strong className="text-white">Dashboard Metrics Without Write-Back Gates:</strong> UI
                gauges that do not reject unauthorized model hallucination.
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* 90-Day Execution Roadmap */}
      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" />
          90-Day Path to a Stronger Acquisition Package
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 font-bold">STAGE 01</span>
            <p className="text-xs text-slate-200 font-semibold">Real LLM Corpus Run</p>
            <p className="text-[11px] text-slate-400">
              Run frozen corpus on real LLMs; publish methodology and anonymized outputs.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 font-bold">STAGE 02</span>
            <p className="text-xs text-slate-200 font-semibold">LLM-Judge Gate</p>
            <p className="text-[11px] text-slate-400">
              Wire LLM-judge as default contradiction gate; keep proxy as prefilter.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 font-bold">STAGE 03</span>
            <p className="text-xs text-slate-200 font-semibold">Project & Constitution UI</p>
            <p className="text-[11px] text-slate-400">
              Ship project isolation, constitution editor, and quarantine inbox.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 font-bold">STAGE 04</span>
            <p className="text-xs text-slate-200 font-semibold">Persistence & Audit</p>
            <p className="text-[11px] text-slate-400">
              Complete persistent database storage and audit export capabilities.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <span className="font-mono text-[10px] text-cyan-400 font-bold">STAGE 05</span>
            <p className="text-xs text-slate-200 font-semibold">Side-by-Side Proof</p>
            <p className="text-[11px] text-slate-400">
              Side-by-side demo: constitution &rarr; violation &rarr; PROTECT &rarr; regenerate vs
              RAG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
