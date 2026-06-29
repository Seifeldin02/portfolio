'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Download, Mail, MapPin, Share2 } from 'lucide-react';
import { buttonClassName } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/site-config';

const heroMetrics = [
  { label: 'Frontend implementation', value: 'React, TypeScript, Tailwind' },
  { label: 'Workflow logic', value: 'Forms, validation, state' },
  { label: 'Backend touchpoints', value: 'Laravel, APIs, Firestore' },
];

export function HeroSection() {
  return (
    <section className="border-b border-border pt-20 pb-12 sm:pt-24 sm:pb-14">
      <Container>
        <motion.div
          className="max-w-5xl space-y-7"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="max-w-4xl space-y-5 min-w-0">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <Badge variant="accent">{siteConfig.subtitle}</Badge>
                <Badge variant="outline" className="bg-surface">
                  Open to frontend and full-stack roles
                </Badge>
              </div>
              <span className="inline-flex min-w-0 items-center gap-1.5 text-sm text-muted">
                <MapPin size={14} className="shrink-0" aria-hidden="true" />
                <span className="truncate sm:whitespace-normal">{siteConfig.location}</span>
              </span>
            </div>

            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {siteConfig.name}{' '}
              <span className="mt-2 block text-muted">
                turns complex workflows into clear product features.
              </span>
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              I work mostly in React and TypeScript, with Laravel and API work when the flow needs
              backend support. Most of my work sits around forms, validation, integrations, admin
              screens, and product flows that need to stay understandable after handoff.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground sm:text-base">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">{metric.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex max-w-4xl flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className={buttonClassName({ size: 'lg', className: 'w-full sm:w-auto group' })}
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.resumePath}
                download
                className={buttonClassName({
                  size: 'lg',
                  variant: 'outline',
                  className: 'w-full sm:w-auto bg-surface',
                })}
              >
                <Download size={18} className="mr-2" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted">Verify and contact</span>
              <div className="flex gap-1.5">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="GitHub profile"
                >
                  <Code size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="LinkedIn profile"
                >
                  <Share2 size={20} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-muted transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="Send email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
