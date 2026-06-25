import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Section, SectionHeader } from '@/components/ui/section';

export function CertificationsSection() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <Section divider muted>
      <SectionHeader
        eyebrow="Certification"
        title="Verified credential"
        description="A small credential section for confirmed certifications with public verification links."
        className="mb-8"
      />

      <div className="grid grid-cols-1 gap-4">
        {certifications.map((certification) => (
          <Card key={certification.id} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-48 items-center justify-center border-b border-border bg-background p-6 transition-colors hover:bg-surface md:border-r md:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={`Verify ${certification.title} on Credly`}
              >
                <Image
                  src={certification.image}
                  alt={certification.imageAlt}
                  width={180}
                  height={95}
                  className="h-auto w-full max-w-[180px] object-contain"
                  sizes="180px"
                />
              </a>

              <div className="p-5 sm:p-6">
                <p className="text-sm font-medium text-accent">{certification.issuer}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {certification.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {certification.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-surface text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center rounded-md text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Verify on Credly
                  <ExternalLink
                    size={14}
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
