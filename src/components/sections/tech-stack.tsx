import Link from 'next/link';
import { ArrowRight, Layers3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const stackGroups = [
  {
    title: 'Product frontend',
    description:
      'Screens, forms, routing, state, and responsive behavior that can survive changes.',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Workflow and backend support',
    description: 'Admin modules, validations, API contracts, server routes, and data persistence.',
    items: ['Laravel', 'Livewire', 'REST APIs', 'Firestore contact storage'],
  },
  {
    title: 'Engineering workflow',
    description:
      'Tools used to clarify requirements, test APIs, review changes, and hand work over.',
    items: ['Jira', 'Postman', 'Git', 'Code Review', 'UAT', 'Documentation'],
  },
];

export function TechStack() {
  return (
    <Section divider>
      <SectionHeader
        eyebrow="Technical stack"
        title="Tools grouped by actual use"
        description="A short view of the technologies I use across interface work, backend integration, database tasks, and delivery."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {stackGroups.map((group, index) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 shadow-[0_12px_34px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_20px_48px_rgba(15,23,42,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:shadow-none"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex rounded-lg bg-accent-subtle p-2.5">
                <Layers3 size={20} className="text-accent" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-muted">0{index + 1}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{group.title}</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Badge key={skill} variant="accent">
                  {skill}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/skills"
          className={buttonClassName({
            size: 'lg',
            variant: 'outline',
            className: 'group bg-surface',
          })}
        >
          Full Skills Breakdown
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
