import { credentials } from '@/data/certifications';
import { CredentialCard } from '@/components/sections/credential-card';
import { Section, SectionHeader } from '@/components/ui/section';

export function CertificationsSection() {
  if (credentials.length === 0) {
    return null;
  }

  return (
    <Section divider muted>
      <SectionHeader
        eyebrow="Credentials"
        title="Verified credentials"
        description="Confirmed credentials with public verification links."
        className="mb-8"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {credentials.map((credential) => (
          <CredentialCard key={credential.id} credential={credential} compact />
        ))}
      </div>
    </Section>
  );
}
