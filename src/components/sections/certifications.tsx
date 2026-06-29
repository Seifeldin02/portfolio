import { certifications } from '@/data/certifications';
import { CredentialCard } from '@/components/sections/credential-card';
import { Section, SectionHeader } from '@/components/ui/section';

export function CertificationsSection() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <Section divider muted>
      <SectionHeader
        eyebrow="Certifications"
        title="Verified credentials"
        description="Confirmed certifications with public verification links."
        className="mb-8"
      />

      <div className="grid grid-cols-1 gap-4">
        {certifications.map((certification) => (
          <CredentialCard key={certification.id} credential={certification} />
        ))}
      </div>
    </Section>
  );
}
