import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { experiences } from '@/data/experience';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Experience',
  description: `Professional experience of ${siteConfig.name} at MyPatil and WeCodeForYou.io.`,
};

export default function Experience() {
  return (
    <>
      <section className="pt-28 pb-8 sm:pt-32">
        <Container size="narrow">
          <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">Experience</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Professional experience
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Enterprise web development roles across international Agile teams — from React
            dashboards to Laravel module architecture.
          </p>
        </Container>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-0">
          {experiences.map((experience, index) => (
            <article key={experience.id} className="relative pl-8 sm:pl-10 pb-12 last:pb-0">
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

              <div className="rounded-xl border border-border bg-surface p-6 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h2 className="text-xl font-semibold text-foreground">{experience.position}</h2>
                    <p className="text-accent font-medium">{experience.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit capitalize shrink-0">
                    {experience.type.replace('-', ' ')}
                  </Badge>
                </div>

                <p className="text-sm text-muted mb-4">
                  {experience.startDate} – {experience.endDate} · {experience.location}
                </p>

                <p className="text-foreground leading-relaxed mb-5">{experience.description}</p>

                <div className="mb-5">
                  <h3 className="text-sm font-medium text-foreground mb-2">Responsibilities</h3>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp) => (
                      <li key={resp} className="text-sm text-muted flex gap-2">
                        <span className="text-accent shrink-0" aria-hidden="true">
                          —
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <h3 className="text-sm font-medium text-foreground mb-2">Outcomes</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement.metric} className="text-sm text-muted">
                        <span className="font-medium text-foreground">{achievement.metric}:</span>{' '}
                        {achievement.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
