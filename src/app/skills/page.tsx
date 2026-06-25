import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { CredentialCard } from '@/components/sections/credential-card';
import { credentials } from '@/data/certifications';
import { skillsData } from '@/data/skills';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Skills',
  description: `Technical skills used by ${siteConfig.name}.`,
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
          <RevealGroup>
            <RevealItem>
              <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">Skills</p>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Practical technical skills
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-muted leading-relaxed">
                Grouped by how often I use them and where they appear in real project work.
              </p>
            </RevealItem>
          </RevealGroup>
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
            <RevealOnView key={tier.key}>
              <Card className="p-6">
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
            </RevealOnView>
          ))}
        </div>

        <RevealOnView>
          <SectionHeader
            title="By category"
            description="A clearer breakdown across frontend, backend, databases, tools, and coursework."
          />
        </RevealOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <RevealOnView key={category.name} delay={(index % 2) * 0.05}>
              <Card className="p-6 min-w-0">
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
            </RevealOnView>
          ))}
        </div>
      </Section>

      {credentials.length > 0 && (
        <Section divider>
          <SectionHeader
            eyebrow="Credentials"
            title="Verified credentials"
            description="Certification and degree verification links that support the skills listed above."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {credentials.map((credential, index) => (
              <RevealOnView key={credential.id} delay={index * 0.05}>
                <CredentialCard credential={credential} compact />
              </RevealOnView>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
