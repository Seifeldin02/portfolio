import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { CredentialCard } from '@/components/sections/credential-card';
import { SkillCategoryGrid, skillTierLabels } from '@/components/sections/skill-category-grid';
import { credentials } from '@/data/certifications';
import { skillsData } from '@/data/skills';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Skills',
  description: `Technical skills used by ${siteConfig.name}.`,
};

export default function Skills() {
  const uniqueSkillsByTier = (tier: keyof typeof skillTierLabels) => {
    const seen = new Set<string>();

    return skillsData.flatMap((cat) =>
      cat.skills
        .filter((skill) => skill.proficiency === tier)
        .filter((skill) => {
          const key = skill.name
            .toLowerCase()
            .replace(/\.js\b/g, '')
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();

          if (seen.has(key)) {
            return false;
          }

          seen.add(key);
          return true;
        })
        .map((skill) => ({ ...skill, category: cat.name }))
    );
  };

  const grouped = {
    primary: uniqueSkillsByTier('primary'),
    regular: uniqueSkillsByTier('regular'),
    familiar: uniqueSkillsByTier('familiar'),
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
                label: 'Core strengths',
                items: grouped.primary,
                variant: 'accent' as const,
              },
              {
                key: 'regular',
                label: 'Used in project work',
                items: grouped.regular,
                variant: 'default' as const,
              },
              {
                key: 'familiar',
                label: 'Familiar tools',
                items: grouped.familiar,
                variant: 'outline' as const,
              },
            ] as const
          ).map((tier) => (
            <RevealOnView key={tier.key}>
              <Card className="h-full p-6">
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

        <SkillCategoryGrid categories={skillsData} />
      </Section>

      {credentials.length > 0 && (
        <Section divider>
          <SectionHeader
            eyebrow="Credentials"
            title="Verified credentials"
            description="Certification and degree verification links that support the skills listed above."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {credentials.map((credential, index) => (
              <RevealOnView key={credential.id} delay={index * 0.05} className="h-full">
                <CredentialCard credential={credential} compact />
              </RevealOnView>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
