import Image from 'next/image';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Certification } from '@/data/certifications';
import { cn } from '@/lib/utils';

interface CredentialCardProps {
  credential: Certification;
  compact?: boolean;
}

export function CredentialCard({ credential, compact = false }: CredentialCardProps) {
  const Icon = credential.type === 'education' ? GraduationCap : Award;

  return (
    <Card className="h-full overflow-hidden">
      <div className={cn('grid h-full grid-cols-1', !compact && 'md:grid-cols-[220px_1fr]')}>
        <a
          href={credential.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center justify-center border-border bg-background transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            compact ? 'min-h-32 border-b p-5' : 'min-h-48 border-b p-6 md:border-r md:border-b-0'
          )}
          aria-label={`${credential.actionLabel}: ${credential.title}`}
        >
          {credential.image && credential.imageAlt ? (
            <Image
              src={credential.image}
              alt={credential.imageAlt}
              width={compact ? 132 : 180}
              height={compact ? 70 : 95}
              className={cn(
                'h-auto w-full object-contain',
                compact ? 'max-w-[132px]' : 'max-w-[180px]'
              )}
              sizes={compact ? '132px' : '180px'}
            />
          ) : (
            <div
              className={cn(
                'flex items-center justify-center rounded-lg border border-border bg-surface-muted text-accent',
                compact ? 'h-20 w-20' : 'h-24 w-24'
              )}
              aria-hidden="true"
            >
              <Icon size={compact ? 32 : 40} />
            </div>
          )}
        </a>

        <div className={cn('flex flex-col', compact ? 'p-5' : 'p-5 sm:p-6')}>
          <p className="text-sm font-medium text-accent">{credential.issuer}</p>
          <h3 className={cn('mt-2 font-semibold text-foreground', compact ? 'text-lg' : 'text-xl')}>
            {credential.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            {credential.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {credential.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-surface text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          <a
            href={credential.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto inline-flex min-h-10 items-center rounded-md pt-5 text-sm font-medium text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {credential.actionLabel}
            <ExternalLink
              size={14}
              className="ml-1.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </Card>
  );
}
