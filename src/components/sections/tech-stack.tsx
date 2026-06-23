import Link from 'next/link';
import { ArrowRight, Layers3 } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const stackGroups = [
  {
    title: 'Product frontend',
    description: 'Interfaces that hold up across data states, roles, devices, and real user flows.',
    items: ['React', 'TypeScript', 'Next.js App Router', 'Tailwind CSS v4', 'Zustand'],
  },
  {
    title: 'Full-stack delivery',
    description:
      'Server-side behavior, API contracts, validation, admin workflows, and persistence.',
    items: ['Laravel', 'Livewire', 'Firebase Admin', 'Firestore', 'REST APIs'],
  },
  {
    title: 'Engineering workflow',
    description: 'The habits that make code shippable, reviewable, and safe to hand over.',
    items: ['Jira', 'Postman', 'Git', 'Code Review', 'UAT', 'Documentation'],
  },
];

export function TechStack() {
  const categories = skillsData.filter((cat) =>
    ['Frontend', 'Backend', 'Databases', 'Tools'].includes(cat.name)
  );

  return (
    <Section divider>
      <SectionHeader
        eyebrow="Technical stack"
        title="Current stack, organized by how products actually ship"
        description="Modern recruiters need more than a list of libraries. This is the stack mapped to the work it supports: polished UI, backend integration, data ownership, and delivery practice."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
        {stackGroups.map((group) => (
          <article key={group.title} className="rounded-xl border border-border bg-surface p-6">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="min-w-0">
            <h3 className="text-base font-medium text-foreground mb-1">{category.name}</h3>
            <p className="text-sm text-muted mb-3">{category.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill.name} variant="outline" className="text-xs bg-surface">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/skills">
          <Button size="lg" variant="outline" className="group bg-surface">
            Full Skills Breakdown
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
