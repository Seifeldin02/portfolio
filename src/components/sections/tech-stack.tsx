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
        {stackGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm motion-reduce:transition-none"
          >
            <div className="mb-4 inline-flex rounded-lg bg-accent-subtle p-2.5">
              <Layers3 size={20} className="text-accent" aria-hidden="true" />
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
