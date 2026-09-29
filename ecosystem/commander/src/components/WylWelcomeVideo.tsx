import { PlayCircle } from "lucide-react";

export default function WylWelcomeVideo() {
  const assetBase = import.meta.env.BASE_URL;
  return (
    <div className="rounded-[24px] border border-cyan-400/20 bg-[#050a12] p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-cyan-300">Meet the creator</div>
          <h2 className="mt-1 text-lg font-semibold text-white">Wyl Mathes // Creator & Guide</h2>
          <p className="mt-1 text-xs leading-5 text-slate-400">A short introduction from Wyl, presented as an acquisition-facing welcome.</p>
        </div>
        <PlayCircle className="h-6 w-6 shrink-0 text-cyan-300" />
      </div>
      <video className="mt-4 mx-auto max-h-[520px] w-full rounded-2xl bg-black object-contain" controls playsInline preload="metadata" poster={assetBase + "assets/commander/commander-persona.png"} aria-label="Wyl Mathes introduction to Cranium Command">
        <source src={assetBase + "assets/commander/wyl-welcome.mp4"} type="video/mp4" />
        Your browser does not support the Wyl welcome video.
      </video>
      <p className="mt-3 text-[11px] leading-5 text-slate-500">Voice and likeness are Wyl's own. This clip is an authorized presentation asset; the longer private voice reference remains outside source control.</p>
    </div>
  );
}
