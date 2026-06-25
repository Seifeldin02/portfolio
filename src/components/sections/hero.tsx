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

const proofRows = [
  'Product UI work across social commerce screens, API states, and responsive flows',
  'Laravel and Livewire operations modules with admin tables, content flows, and handover fixes',
  'Academic systems with public source where the implementation can be reviewed',
];

export function HeroSection() {
  return (
    <section className="border-b border-border pt-20 pb-10 sm:pt-24 sm:pb-10">
      <Container size="wide">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-start"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="space-y-6 min-w-0">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{siteConfig.subtitle}</Badge>
                <Badge variant="outline" className="bg-surface">
                  Open to frontend and full-stack roles
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} aria-hidden="true" />
                  {siteConfig.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.45rem] font-semibold tracking-tight text-foreground leading-[1.08]">
                {siteConfig.name}{' '}
                <span className="mt-2 block text-balance text-muted">
                  turns complex workflows into clear product features.
                </span>
              </h1>

              <p className="text-lg text-muted leading-relaxed max-w-2xl">
                I work mostly in React and TypeScript, with Laravel and API work when the flow needs
                backend support. Most of my work sits around forms, validation, integrations, admin
                screens, and product flows that need to stay understandable after handoff.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-sm font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
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

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-sm text-muted">Verify work and contact:</span>
              <div className="flex gap-1">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="GitHub profile"
                >
                  <Code size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="LinkedIn profile"
                >
                  <Share2 size={20} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0"
                  aria-label="Send email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="rounded-lg border border-border bg-surface p-5 shadow-sm min-w-0"
            aria-label="Portfolio summary"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-accent">Work samples</p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">A practical range</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The strongest examples are frontend product work, Laravel operations modules, and
              academic systems with source or implementation notes.
            </p>
            <ul className="mt-5 space-y-3">
              {proofRows.map((row) => (
                <li key={row} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4 text-sm text-muted">
              Project pages separate public repositories from confidential company work.
            </div>
          </motion.aside>
        </motion.div>
      </Container>
    </section>
  );
}
