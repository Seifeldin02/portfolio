import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { buttonClassName } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export function ContactCTA() {
  return (
    <Section>
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-wide text-accent mb-2">Contact</p>
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Open to most software engineering roles, willing to learn.
            </h2>
            <p className="text-muted leading-relaxed">
              I&apos;m available for roles where I can contribute from UI implementation through API
              integration and database design in Agile teams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end">
            <Link
              href="/contact"
              className={buttonClassName({ size: 'lg', className: 'w-full sm:w-auto' })}
            >
              <Mail size={18} className="mr-2" aria-hidden="true" />
              Contact Me
            </Link>
            <a
              href={siteConfig.resumePath}
              download
              className={buttonClassName({
                size: 'lg',
                variant: 'outline',
                className: 'w-full sm:w-auto',
              })}
            >
              <Download size={18} className="mr-2" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
