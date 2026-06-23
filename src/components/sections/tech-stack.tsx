import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const primaryStack = ['React.js', 'TypeScript', 'Next.js', 'Laravel', 'RESTful APIs', 'MySQL'];
const comfortableWith = ['Java', 'Firebase', 'SQL', 'PHP', 'Git', 'Agile/Scrum'];
const additionalTools = ['AWS', 'Jira', 'Browser DevTools', 'CI/CD', 'MVC', 'Eloquent ORM'];

export function TechStack() {
  const categories = skillsData.filter((cat) =>
    ['Frontend', 'Backend', 'Databases', 'Tools'].includes(cat.name)
  );

  return (
    <Section divider>
      <SectionHeader
        eyebrow="Technical stack"
        title="Technologies I work with"
        description="Grouped by strength — primary tools used daily, plus supporting technologies from professional and academic work."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="rounded-xl border border-accent/30 bg-accent-subtle p-6">
          <h3 className="text-sm font-medium uppercase tracking-wide text-accent mb-3">
            Primary stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {primaryStack.map((skill) => (
              <Badge key={skill} variant="accent">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted mb-3">
            Comfortable with
          </h3>
          <div className="flex flex-wrap gap-2">
            {comfortableWith.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-6">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted mb-3">
            Additional tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {additionalTools.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="min-w-0">
            <h3 className="text-base font-medium text-foreground mb-1">{category.name}</h3>
            <p className="text-sm text-muted mb-3">{category.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge key={skill.name} variant="outline" className="text-xs">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/skills">
          <Button size="lg" variant="outline" className="group">
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
