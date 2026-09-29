import { ArrowRight, BookOpenCheck, Boxes, FileSearch, GitBranch, ShieldCheck } from 'lucide-react';
import { ActiveView } from '../App';

type Door = {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  view: ActiveView;
};

const doors: Door[] = [
  { title: 'What is Convertible Cranium?', description: 'Understand the system in plain language before touching the repository map.', icon: Boxes, view: 'overview' },
  { title: 'How does the authority boundary work?', description: 'Trace intelligence, evidence, governance, canonical authority, and containment.', icon: ShieldCheck, view: 'metacognition' },
  { title: 'Show me the live product and demo', description: 'Open the operational surfaces and acquisition demonstration.', icon: ArrowRight, view: 'demo' },
  { title: 'Show me the technical evidence', description: 'Inspect the substrate, diligence material, and verification surfaces.', icon: FileSearch, view: 'diligence' },
  { title: 'Show me the acquisition and ownership package', description: 'Move from product understanding into controlled diligence and provenance.', icon: BookOpenCheck, view: 'diligence' },
];

const repositoryGroups = [
  {
    title: 'Canonical authority & substrate',
    repos: [
      ['Cranium Kernel', 'cranium-kernel', 'Canonical authority and governance engine'],
      ['Cranium Synapse', 'cranium-synapse', 'Bounded cognition, evidence, attestation, and trust-ring contract'],
      ['Cranium Cognitive Core', 'cranium-cognitive-core', 'Cognitive data model and research surface'],
      ['Cranium Substrate Reference', 'cranium-substrate-reference', 'Substrate and epistemic governance reference'],
      ['Canonlane Contracts', 'cranium-canonlane-contracts', 'Semantic contracts and canonical meaning'],
      ['Cranium Core', 'Cranium-Core-', 'Application and cognitive-layer integration'],
      ['Cranium Hardened Core', 'cranium-hardened-core', 'Hardened reference implementation'],
      ['Provider Integrations', 'cranium-provider-integrations', 'Multi-AI/provider adapter layer'],
    ],
  },
  {
    title: 'Product & operator surfaces',
    repos: [
      ['Cranium AI', 'cranium-ai', 'Intelligence and orchestration surface'],
      ['Cranium Ultra Platform', 'cranium-ultra-platform', 'Platform application surface'],
      ['Convertible Cranium AI v2', 'Convertible-Cranium-ai-v-2.0', 'Application and cognitive integration surface'],
      ['Cranium Boot Drive', 'cranium-boot-drive', 'Commercial/public Linux appliance'],
      ['WorthWyl Forge', 'worthwyl-forge', 'Engineering/build surface'],
      ['WorthWyl Game Changer', 'worthwyl-game-changer', 'Product/application surface'],
      ['Cranium Metacognitive Mapper', 'cranium-metacognitive-mapper', 'Supporting metacognitive mapping surface'],
      ['Acquisition Demo', 'cranium-acquisition-demo-drive', 'Offline buyer-facing demonstration and evidence surface'],
    ],
  },
  {
    title: 'Acquisition, diligence & evidence',
    repos: [
      ['Governance Ecosystem', 'cognitive-substrate-governance-ecosystem', 'Governance ecosystem and evidence context'],
      ['Acquisition Template', 'cranium-acquisition-template', 'Acquisition-facing structure and package'],
      ['Diligence Workbench', 'cranium-diligence-workbench', 'Controlled verification workflow'],
      ['Cranium Portfolio', 'cranium-portfolio', 'Portfolio and presentation surface'],
      ['Cranium Content Hub', 'cranium-content-hub', 'Content and buyer-facing material'],
      ['Cranium Command Home', 'home', 'Integrated command and ecosystem entry surface'],
      ['WorthWyl Account Hub', 'worthwyl2022-cloud', 'Account-level ecosystem surface'],
    ],
  },
  {
    title: 'History, provenance & continuity',
    repos: [
      ['Cranium Archive', 'cranium-archive', 'Historical record, provenance, and continuity material'],
    ],
  },
];

interface Props {
  onNavigate: (view: ActiveView) => void;
}

export default function EcosystemMap({ onNavigate }: Props) {
  return (
    <section className="space-y-6">
      <div className="rounded-[28px] border border-slate-800/80 bg-[#080f1b] p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 font-bold">Executive entry</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">Five doors into Convertible Cranium</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">Commander translates the repository ecosystem into an understandable path. The map is interpretive. Canonical authority remains in Cranium Kernel.</p>
          </div>
          <GitBranch className="hidden sm:block h-7 w-7 text-cyan-300/70" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {doors.map((door, index) => {
            const Icon = door.icon;
            return (
              <button key={door.title} onClick={() => onNavigate(door.view)} className="group rounded-2xl border border-slate-800 bg-[#050a12] p-4 text-left hover:border-cyan-300/40 hover:bg-[#0a1421] transition">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-600">0{index + 1}</span>
                  <Icon className="h-4 w-4 text-cyan-300" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white group-hover:text-cyan-200">{door.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{door.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {repositoryGroups.map((group) => (
          <div key={group.title} className="rounded-[24px] border border-slate-800/80 bg-[#080f1b] overflow-hidden">
            <div className="border-b border-slate-800/80 px-5 py-4">
              <h3 className="text-sm font-bold text-white">{group.title}</h3>
              <p className="mt-1 text-[11px] text-slate-500">Normalized display role with the underlying repository name preserved.</p>
            </div>
            <div className="divide-y divide-slate-800/70">
              {group.repos.map(([name, repo, role]) => (
                <div key={repo} className="px-5 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-200">{name}</span>
                    <code className="text-[10px] text-cyan-300/80">{repo}</code>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[24px] border border-violet-400/20 bg-violet-500/[0.06] p-5">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-violet-300">Controlled boundary</div>
        <p className="mt-2 text-sm leading-6 text-slate-300">Public demonstrations and documentation explain the ecosystem. Controlled-access repositories can hold deeper authority implementations, contracts, integrations, and diligence material. Commander exposes the map without pretending that presentation state is canonical authority.</p>
      </div>
    </section>
  );
}
