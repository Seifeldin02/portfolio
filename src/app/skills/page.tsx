import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';
import { skillsData, certifications } from '@/data/skills';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Skills',
  description: `Technical skills and expertise of ${siteConfig.name}.`,
};

const tierLabels = {
  expert: 'Primary strength',
  advanced: 'Comfortable',
  intermediate: 'Familiar',
} as const;

export default function Skills() {
  const grouped = {
    primary: skillsData.flatMap((cat) =>
      cat.skills
        .filter((s) => s.proficiency === 'expert')
        .map((s) => ({ ...s, category: cat.name }))
    ),
    comfortable: skillsData.flatMap((cat) =>
      cat.skills
        .filter((s) => s.proficiency === 'advanced')
        .map((s) => ({ ...s, category: cat.name }))
    ),
    familiar: skillsData.flatMap((cat) =>
      cat.skills
        .filter((s) => s.proficiency === 'intermediate')
        .map((s) => ({ ...s, category: cat.name }))
    ),
  };

  return (
    <>
      <section className="pt-28 pb-8 sm:pt-32">
        <Container size="narrow">
          <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">Skills</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Technical expertise
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Skills grouped by proficiency level and category — reflecting daily use in professional
            roles and academic projects.
          </p>
        </Container>
      </section>

      <Section muted>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {(
            [
              {
                key: 'primary',
                label: 'Primary stack',
                items: grouped.primary,
                variant: 'accent' as const,
              },
              {
                key: 'comfortable',
                label: 'Comfortable with',
                items: grouped.comfortable,
                variant: 'default' as const,
              },
              {
                key: 'familiar',
                label: 'Additional tools',
                items: grouped.familiar,
                variant: 'outline' as const,
              },
            ] as const
          ).map((tier) => (
            <Card key={tier.key} className="p-6">
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted mb-4">
                {tier.label}
              </h2>
              <div className="flex flex-wrap gap-2">
                {tier.items.map((skill) => (
                  <Badge key={`${tier.key}-${skill.name}`} variant={tier.variant}>
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <SectionHeader
          title="By category"
          description="Detailed breakdown across engineering domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <Card key={category.name} className="p-6 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted mb-4">{category.description}</p>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-4 text-sm min-w-0"
                  >
                    <span className="text-foreground font-medium truncate">{skill.name}</span>
                    <span className="text-xs text-muted shrink-0">
                      {tierLabels[skill.proficiency]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {certifications.length > 0 && (
        <Section divider>
          <SectionHeader eyebrow="Credentials" title="Certifications & recognition" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.id} className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted mb-2">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="text-sm text-muted leading-relaxed">{cert.description}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
