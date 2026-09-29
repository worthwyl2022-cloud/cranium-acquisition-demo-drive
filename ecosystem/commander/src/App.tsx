import { useMemo, useState } from 'react';
import { Activity, Fingerprint, GitBranch, Grid2X2, Layers3, Menu, ShieldCheck, WalletCards, X } from 'lucide-react';
import { CognitiveAtom, Directive, Metrics } from './types/creativeOs';
import { ResonanceField } from './worthwyl/core/field';
import AcquisitionVideoDemo from './worthwyl/demo/AcquisitionVideoDemo';
import MetacognitiveView from './worthwyl/metacognition/MetacognitiveView';
import CreatorStudioView from './worthwyl/studio/CreatorStudioView';
import ResonanceFieldView from './worthwyl/physics/ResonanceFieldView';
import DiligenceDataRoom from './worthwyl/diligence/DiligenceDataRoom';
import GlobalAiBar from './worthwyl/common/GlobalAiBar';
import CommanderOverview from './components/CommanderOverview';
import EcosystemMap from './components/EcosystemMap';

export type ActiveView = 'overview' | 'demo' | 'metacognition' | 'studio' | 'physics' | 'diligence' | 'identity' | 'payments' | 'ecosystem';

const navItems = [
  { id: 'overview' as const, label: 'Overview', icon: Activity },
  { id: 'diligence' as const, label: 'Substrate', icon: Layers3 },
  { id: 'metacognition' as const, label: 'Governance', icon: ShieldCheck },
  { id: 'identity' as const, label: 'Identity', icon: Fingerprint },
  { id: 'payments' as const, label: 'Payments', icon: WalletCards },
  { id: 'studio' as const, label: 'Apps', icon: Grid2X2 },
  { id: 'ecosystem' as const, label: 'Ecosystem', icon: GitBranch },
];

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>(() => {
    const requested = window.location.hash.replace('#', '') as ActiveView;
    return ['overview', 'demo', 'metacognition', 'studio', 'physics', 'diligence', 'identity', 'payments', 'ecosystem'].includes(requested)
      ? requested
      : 'overview';
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [commanderOpen, setCommanderOpen] = useState(false);

  const navigateToView = (view: ActiveView) => {
    setActiveView(view);
    window.history.replaceState(null, '', view === 'overview' ? window.location.pathname : `#${view}`);
    setMobileNavOpen(false);
  };

  const field = useMemo(() => {
    const rf = new ResonanceField();
    rf.inject({ id: 'atom-canon-1', charge: 0.5, mass: 8.5, velocity: 0.35, kind: 'theme', tags: ['sovereignty', 'human_intentionality'], label: 'Foundational Sovereign Intent' });
    rf.inject({ id: 'atom-canon-2', charge: -0.3, mass: 7.0, velocity: 0.5, kind: 'episodic', tags: ['isolation', 'discovery'], label: 'Deep Relay Silence' });
    rf.inject({ id: 'atom-canon-3', charge: 0.65, mass: 6.5, velocity: 0.6, kind: 'episodic', tags: ['discovery', 'resonance'], label: 'Harmonic Awakening' });
    return rf;
  }, []);

  const [metrics, setMetrics] = useState<Metrics>(() => field.metrics());
  const [activeDirective] = useState<Directive>(Directive.ADVANCE);

  const handleAtomInjected = (atom: CognitiveAtom) => {
    field.inject(atom);
    setMetrics(field.metrics());
  };

  const handleAtomRemoved = (id: string) => {
    field.remove(id);
    setMetrics(field.metrics());
  };

  const handleResetField = () => {
    field.clear();
    field.inject({ id: 'atom-init', charge: 0.4, mass: 6.0, velocity: 0.4, kind: 'theme', tags: ['creation', 'grounding'], label: 'Grounding Canon Axiom' });
    setMetrics(field.metrics());
  };

  return (
    <div className="min-h-screen bg-[#040811] text-slate-100 font-sans selection:bg-cyan-300 selection:text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#050a12]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-[1500px] items-center gap-4 px-4 md:px-6">
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="md:hidden rounded-xl border border-slate-700 p-2 text-slate-300" aria-label="Toggle navigation">
            {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <button onClick={() => navigateToView('overview')} className="flex items-center gap-3 shrink-0 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-sm font-black text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.1)]">C</div>
            <div>
              <div className="text-sm font-bold tracking-tight text-white">CRANIUM COMMAND</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">Command OS</div>
            </div>
          </button>
          <div className="hidden lg:flex items-center gap-2 ml-auto mr-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Kernel authority boundary active
          </div>
          <button onClick={() => setCommanderOpen(true)} className="ml-auto lg:ml-0 inline-flex items-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-xs font-bold text-violet-200 hover:bg-violet-500/20 transition">
            <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(167,139,250,.8)]" /> Commander
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        <aside className={`fixed inset-y-[72px] left-0 z-40 w-60 border-r border-slate-800/80 bg-[#050a12] p-4 md:sticky md:top-[72px] md:h-[calc(100vh-72px)] md:translate-x-0 ${mobileNavOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform`}>
          <nav className="space-y-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => navigateToView(id)} className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${activeView === id ? 'bg-cyan-400/10 text-cyan-200 border border-cyan-300/15' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}>
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-slate-500">System layers</div>
            <div className="mt-3 space-y-2 text-xs text-slate-400">
              <StatusRow label="Kernel" value="Canonical" />
              <StatusRow label="Synapse" value="Evidence" />
              <StatusRow label="Miracle Memory" value="Continuity" />
              <StatusRow label="COMA" value="Containment" />
              <StatusRow label="Circuit Breaker" value="Armed" />
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 md:px-7 md:py-8 pb-36">
          {activeView === 'overview' && (
            <CommanderOverview
              onNavigate={navigateToView}
              coherence={metrics.coherence}
              tension={metrics.tension}
              onOpenCommander={() => setCommanderOpen(true)}
            />
          )}
          {activeView === 'demo' && <AcquisitionVideoDemo onNavigateToModule={(mod) => navigateToView(mod === 'tracker' ? 'metacognition' : mod as ActiveView)} />}
          {activeView === 'metacognition' && <MetacognitiveView onExportSummary={() => navigateToView('diligence')} />}
          {activeView === 'studio' && <CreatorStudioView field={field} metrics={metrics} onAtomInjected={handleAtomInjected} onNavigateToDemo={() => navigateToView('demo')} />}
          {activeView === 'physics' && <ResonanceFieldView field={field} metrics={metrics} onAtomInjected={handleAtomInjected} onAtomRemoved={handleAtomRemoved} onResetField={handleResetField} />}
          {activeView === 'diligence' && <DiligenceDataRoom />}
          {activeView === 'ecosystem' && <EcosystemMap onNavigate={navigateToView} />}
          {(activeView === 'identity' || activeView === 'payments') && (
            <PlaceholderPanel title={activeView === 'identity' ? 'Identity' : 'Payments'} />
          )}
        </main>
      </div>
      <footer className="fixed bottom-0 inset-x-0 z-30 border-t border-slate-800/80 bg-[#050a12]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-4 md:px-6 py-3 text-[10px] text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-semibold text-slate-300">Convertible Cranium</span>
            <span>Kernel authority</span><span>•</span><span>Synapse evidence</span><span>•</span><span>Miracle Memory</span><span>•</span><span>COMA containment</span>
          </div>
          <span className="font-mono uppercase tracking-[0.12em]">Authority comes only through Cranium</span>
        </div>
      </footer>

      <GlobalAiBar
        activeView={activeView}
        onNavigate={navigateToView}
        metrics={metrics}
        onAtomInjected={handleAtomInjected}
        onTriggerWriteEpisode={() => navigateToView('studio')}
        forceOpen={commanderOpen}
        onOpenChange={setCommanderOpen}
      />
    </div>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span>{label}</span>
      <span className="text-slate-300">{value}</span>
    </div>
  );
}

function PlaceholderPanel({ title }: { title: string }) {
  return (
    <section className="rounded-[28px] border border-slate-800/80 bg-[#080f1b] p-8">
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Layer surface</div>
      <h1 className="mt-2 text-3xl font-semibold text-white">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
        This surface is intentionally bounded while the canonical Kernel integration is completed. Commander does not invent authority or local receipts.
      </p>
    </section>
  );
}
