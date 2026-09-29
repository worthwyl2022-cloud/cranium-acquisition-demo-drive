import { ArrowRight, CheckCircle2, CircleDot, Fingerprint, Grid2X2, Layers3, Mic, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';
import { ActiveView } from '../App';

type Layer = {
  id: string;
  label: string;
  description: string;
  icon: typeof Layers3;
  tone: string;
  view?: ActiveView;
};

const layers: Layer[] = [
  { id: 'substrate', label: 'Substrate', description: 'Foundation health, runtime, network and system dependencies.', icon: Layers3, tone: 'cyan', view: 'diligence' },
  { id: 'governance', label: 'Governance & Policy', description: 'Rules, consent, decisions, evidence and canonical authority.', icon: ShieldCheck, tone: 'violet', view: 'metacognition' },
  { id: 'identity', label: 'Identity', description: 'The person, roles, permissions and credentials behind each action.', icon: Fingerprint, tone: 'cyan' },
  { id: 'payments', label: 'Payments', description: 'Plans, balances, receipts, limits and financial state.', icon: WalletCards, tone: 'amber' },
  { id: 'apps', label: 'Applications', description: 'Connected tools, services, permissions and app health.', icon: Grid2X2, tone: 'violet', view: 'studio' },
];

interface Props {
  onNavigate: (view: ActiveView) => void;
  coherence: number;
  tension: number;
  onOpenCommander: () => void;
}

export default function CommanderOverview({ onNavigate, coherence, tension, onOpenCommander }: Props) {
  const assetBase = import.meta.env.BASE_URL;
  return (
    <section className="space-y-6">
      <div className="grid xl:grid-cols-[minmax(0,1fr)_360px] gap-6 items-stretch">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-800/80 bg-[#070d18] p-7 md:p-9 shadow-2xl shadow-black/30">
          <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-32 left-16 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.8)]" />
              Foundation online
              <span className="text-slate-600">/</span>
              Kernel boundary active
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Welcome to <span className="text-cyan-300">Commander</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-7 text-slate-300">
              Your browser. Your foundation. Your future.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              A human-facing command surface for Convertible Cranium. Intelligence may propose; canonical authority remains with Cranium Kernel.
            </p>

            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Metric label="Substrate" value="ONLINE" tone="cyan" />
              <Metric label="Coherence" value={`${Math.round(coherence * 100)}%`} tone="green" />
              <Metric label="Tension" value={tension.toFixed(2)} tone="amber" />
              <Metric label="Protection" value="ARMED" tone="violet" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={onOpenCommander} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-[#061019] shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 transition">
                <Sparkles className="h-4 w-4" /> Meet Commander
              </button>
              <button onClick={() => onNavigate('diligence')} className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-white transition">
                Inspect foundation <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <aside className="rounded-[28px] border border-slate-800/80 bg-[#0a1220] overflow-hidden shadow-2xl shadow-black/25">
          <div className="p-5 border-b border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-violet-300 font-bold">Human guide</div>
                <h2 className="mt-1 text-xl font-semibold text-white">Wyl Mathes</h2>
                <p className="text-xs text-slate-400">Creator &amp; Guide</p>
              </div>
              <button onClick={onOpenCommander} className="rounded-full border border-violet-400/30 bg-violet-500/10 p-2.5 text-violet-300 hover:bg-violet-500/20 transition" aria-label="Open Commander">
                <Mic className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#070d18]">
            <img src={assetBase + "assets/commander/commander-persona.png"} alt="Wyl Mathes, Creator & Guide" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070d18] via-[#070d18]/80 to-transparent p-5 pt-16">
              <div className="text-sm font-medium text-white">Cranium AI</div>
              <div className="mt-1 text-xs leading-5 text-slate-300">Intelligence and orchestration with Wyl as the human-facing presence.</div>
            </div>
          </div>
          <div className="p-5">
            <button onClick={onOpenCommander} className="w-full rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200 hover:bg-violet-500/20 transition">
              Open Commander
            </button>
          </div>
        </aside>
      </div>

      <div className="rounded-[28px] border border-slate-800/80 bg-[#080f1b] p-5 md:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Understand the foundation</div>
            <h2 className="mt-1 text-2xl font-semibold text-white">The Cranium substrate</h2>
          </div>
          <div className="text-xs text-slate-500">Select a layer to inspect it</div>
        </div>

        <div className="relative mt-7 min-h-[520px] flex items-center justify-center overflow-hidden rounded-3xl border border-slate-800/70 bg-[#050a12]">
          <div className="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/10" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-violet-400/10" />
          <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-400/10" />
          <div className="absolute h-[180px] w-[180px] rounded-full border border-violet-400/15" />
          <div className="relative z-10 h-28 w-28 rounded-full border border-cyan-300/40 bg-[#081522] shadow-[0_0_60px_rgba(34,211,238,.16)] flex flex-col items-center justify-center">
            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 font-bold">Cranium</div>
            <div className="mt-1 text-[11px] text-slate-400">Authority</div>
          </div>

          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const positions = [
              'top-7 left-1/2 -translate-x-1/2',
              'right-6 top-1/2 -translate-y-1/2',
              'bottom-7 left-1/2 -translate-x-1/2',
              'left-6 top-1/2 -translate-y-1/2',
              'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[205px]',
            ];
            return (
              <button key={layer.id} onClick={() => layer.view && onNavigate(layer.view)} className={`absolute ${positions[index]} z-20 w-44 rounded-2xl border border-slate-700/80 bg-[#0b1422]/95 p-3 text-left shadow-xl hover:border-cyan-300/40 hover:bg-[#0e1a2b] transition`}>
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${layer.tone === 'cyan' ? 'text-cyan-300' : layer.tone === 'violet' ? 'text-violet-300' : 'text-amber-300'}`} />
                  <span className="text-xs font-bold text-white">{layer.label}</span>
                </div>
                <p className="mt-1.5 text-[11px] leading-4 text-slate-400">{layer.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone: string }) {
  const textTone = tone === 'cyan' ? 'text-cyan-300' : tone === 'green' ? 'text-emerald-300' : tone === 'amber' ? 'text-amber-300' : 'text-violet-300';
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#080f1b]/80 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className={`mt-1 text-sm font-bold ${textTone}`}>{value}</div>
    </div>
  );
}
