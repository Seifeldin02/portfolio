import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { experiences } from '@/data/experience';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

export function ExperienceHighlights() {
  return (
    <Section muted>
      <SectionHeader
        eyebrow="Experience"
        title="Recent work"
        description="Frontend and full-stack responsibilities from internship and contract roles."
      />

      <div className="relative space-y-0">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 sm:pl-10 pb-10 last:pb-0">
            {index < experiences.length - 1 && (
              <div
                className="absolute left-[11px] sm:left-[15px] top-8 bottom-0 w-px bg-border"
                aria-hidden="true"
              />
            )}
            <div
              className="absolute left-0 top-1.5 w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full border-2 border-accent bg-surface flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            <div className="group relative min-w-0 overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-[0_12px_34px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.075)] sm:p-6 dark:shadow-none">
              <div className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <Badge variant="outline" className="w-fit shrink-0 capitalize">
                  {exp.type.replace('-', ' ')}
                </Badge>
              </div>

              <p className="text-sm text-muted mb-3">
                {exp.startDate} - {exp.endDate} | {exp.location}
              </p>

              <p className="text-sm text-foreground leading-relaxed mb-4">{exp.description}</p>

              <ul className="space-y-1.5 mb-4">
                {exp.responsibilities.slice(0, 3).map((resp) => (
                  <li key={resp} className="text-sm text-muted flex gap-2">
                    <span className="text-accent shrink-0" aria-hidden="true">
                      -
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="default" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/experience"
          className={buttonClassName({ size: 'lg', variant: 'outline', className: 'group' })}
        >
          Full Experience Timeline
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
