import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader } from '@/components/ui/section';
import { engineeringSignals, systemArtifacts } from '@/data/portfolio-proof';

export function SystemsProof() {
  return (
    <Section className="pt-8 sm:pt-10" containerSize="wide">
      <SectionHeader
        eyebrow="Proof of work"
        title="Not just pages. Systems with roles, data, and workflows."
        description="A recruiter should be able to see how I think: UI structure, API boundaries, database shape, permissions, and delivery handover."
      />

      <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">
        <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {engineeringSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="group rounded-xl border border-border bg-background p-5 transition-colors hover:border-accent/40"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="rounded-lg border border-border bg-surface p-2.5">
                      <Icon size={20} className="text-accent" aria-hidden="true" />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted">
                    {signal.label}
                  </p>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{signal.value}</h3>
                  <p className="text-sm leading-relaxed text-muted">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-foreground p-4 text-background shadow-sm dark:bg-surface">
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 dark:border-border dark:bg-background">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  Architecture traces
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white dark:text-foreground">
                  Work artifacts, abstracted
                </h3>
              </div>
              <Badge variant="accent">Confidential-safe</Badge>
            </div>

            <div className="space-y-3">
              {systemArtifacts.map((artifact) => {
                const Icon = artifact.icon;
                return (
                  <article
                    key={artifact.title}
                    className="rounded-xl border border-white/10 bg-white/[0.07] p-4 dark:border-border dark:bg-surface"
                  >
                    <div className="mb-3 flex items-start gap-3">
                      <div className="rounded-lg bg-accent-subtle p-2">
                        <Icon size={18} className="text-accent" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-accent">
                          {artifact.eyebrow}
                        </p>
                        <h4 className="font-semibold text-white dark:text-foreground">
                          {artifact.title}
                        </h4>
                      </div>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-white/70 dark:text-muted">
                      {artifact.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {artifact.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2 py-1 text-xs text-white/75 dark:border-border dark:text-muted"
                        >
                          <CheckCircle2 size={12} aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
