import Image from 'next/image';
import { FileSearch, GitBranch, ScanSearch, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectVisual } from '@/data/projects';

interface ProjectVisualProps {
  title: string;
  visual: ProjectVisual;
  image?: string;
  status: string;
  mediaNote?: string;
  className?: string;
}

const visualLabels: Record<ProjectVisual, string> = {
  academic: 'Academic platform',
  enterprise: 'Enterprise system',
  environmental: 'Environmental data',
  evidence: 'Evidence-based hiring intelligence',
};

export function ProjectVisualPanel({
  title,
  visual,
  image,
  status,
  mediaNote,
  className,
}: ProjectVisualProps) {
  if (visual === 'evidence') {
    return (
      <div
        className={cn(
          'group/visual relative isolate overflow-hidden border-b border-border bg-[#071311] text-white',
          className
        )}
      >
        <div className="absolute inset-0 opacity-20 [background-size:32px_32px] [background-image:linear-gradient(to_right,#22d3ee_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_62%)]" />

        <div className="relative flex h-full min-h-[13rem] items-center justify-center p-5 sm:p-7">
          <div className="grid w-full max-w-3xl grid-cols-[minmax(0,0.8fr)_2.5rem_minmax(0,1fr)_2.5rem_minmax(0,0.9fr)] items-center gap-1 sm:gap-3">
            <div className="relative z-10 rounded-lg border border-cyan-300/20 bg-black/35 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-500 group-hover/visual:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/visual:translate-y-0 sm:p-4">
              <FileSearch className="text-cyan-300" size={21} aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">CV + GitHub</p>
              <p className="mt-1 hidden text-[11px] leading-relaxed text-slate-400 sm:block">
                Confirm public repositories
              </p>
            </div>

            <div className="relative h-px overflow-hidden bg-cyan-300/30" aria-hidden="true">
              <span className="proof-signal absolute inset-y-0 left-0 w-3 bg-cyan-200 shadow-[0_0_10px_#67e8f9]" />
            </div>

            <div className="relative z-10 rounded-lg border border-cyan-300/30 bg-cyan-950/35 p-3 shadow-[0_20px_65px_rgba(8,145,178,0.15)] backdrop-blur-sm transition-transform duration-500 group-hover/visual:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover/visual:scale-100 sm:p-4">
              <ScanSearch className="text-cyan-200" size={24} aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">Source analysis</p>
              <p className="mt-1 hidden text-[11px] leading-relaxed text-slate-300 sm:block">
                Skills grounded in files
              </p>
              <div className="mt-3 hidden items-center gap-1.5 sm:flex" aria-hidden="true">
                <GitBranch size={11} className="text-cyan-300" />
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full w-4/5 rounded-full bg-cyan-300/70" />
                </span>
              </div>
            </div>

            <div className="relative h-px overflow-hidden bg-cyan-300/30" aria-hidden="true">
              <span className="proof-signal proof-signal-delayed absolute inset-y-0 left-0 w-3 bg-cyan-200 shadow-[0_0_10px_#67e8f9]" />
            </div>

            <div className="relative z-10 rounded-lg border border-emerald-300/20 bg-black/35 p-3 shadow-[0_18px_55px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-500 group-hover/visual:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover/visual:translate-y-0 sm:p-4">
              <ShieldCheck className="text-emerald-300" size={21} aria-hidden="true" />
              <p className="mt-3 text-xs font-semibold text-white sm:text-sm">Evidence dossier</p>
              <p className="mt-1 hidden text-[11px] leading-relaxed text-slate-400 sm:block">
                Insights + interview prompts
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/20 bg-black/55 px-2.5 py-1 text-xs font-medium text-cyan-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            {status}
          </span>
        </div>
      </div>
    );
  }

  if (image) {
    return (
      <div className={cn('relative overflow-hidden bg-surface-muted', className)}>
        <Image
          src={image}
          alt={`${title} interface preview`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-surface/90 text-foreground border border-border backdrop-blur-sm">
            {status}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-surface-muted border-b border-border',
        className
      )}
    >
      <div className="text-center px-6 py-8">
        <p className="text-xs uppercase tracking-wider text-muted mb-2">
          {mediaNote ?? `${visualLabels[visual]} - screenshot unavailable`}
        </p>
        <p className="text-lg font-medium text-foreground">{title}</p>
      </div>
      <div className="absolute top-3 left-3">
        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-surface text-foreground border border-border">
          {status}
        </span>
      </div>
    </div>
  );
}
