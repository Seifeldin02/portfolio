'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Database,
  Download,
  Mail,
  MapPin,
  Route,
  Share2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/site-config';
import { modernFocus } from '@/data/portfolio-proof';

const heroMetrics = [
  { label: 'Core modules shipped', value: '8+' },
  { label: 'Professional stack', value: 'React + Laravel' },
  { label: 'Project evidence', value: 'Case-study ready' },
];

const cockpitRows = [
  {
    label: 'EduComm',
    detail: 'Realtime messaging, RBAC, translation flow',
    icon: Route,
  },
  {
    label: 'MyPatil',
    detail: 'Admin modules, Livewire tables, schema fixes',
    icon: Database,
  },
  {
    label: 'Outfitters',
    detail: 'Social commerce UI, API integration, performance',
    icon: Sparkles,
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
      <Container size="wide">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="space-y-8 min-w-0">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{siteConfig.subtitle}</Badge>
                <Badge variant="outline" className="bg-surface">
                  Available for frontend and full-stack roles
                </Badge>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} aria-hidden="true" />
                  {siteConfig.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                {siteConfig.name}
                <span className="mt-2 block text-balance text-muted">
                  software engineer for product-grade web systems.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
                I build production web applications across interface, API, and data layers -
                React/TypeScript frontends, Laravel and Firebase backends, role-based workflows, and
                recruiter-readable case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto group">
                  View Case Studies
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <a href={siteConfig.resumePath} download>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-surface">
                  <Download size={18} className="mr-2" aria-hidden="true" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="text-sm text-muted">Verify work and contact:</span>
              <div className="flex gap-1">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
                  aria-label="GitHub profile"
                >
                  <Code size={20} />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Share2 size={20} />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-2.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
                  aria-label="Send email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-4 sm:p-5 shadow-sm min-w-0"
            aria-label="Engineering command center"
          >
            <div className="rounded-xl border border-border bg-background p-4">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    Recruiter cockpit
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">What I can own</h2>
                </div>
                <div className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  Live portfolio
                </div>
              </div>

              <div className="space-y-3">
                {cockpitRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.label}
                      className="flex items-start gap-3 rounded-lg border border-border bg-surface p-3"
                    >
                      <div className="rounded-md bg-accent-subtle p-2">
                        <Icon size={17} className="text-accent" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{row.label}</p>
                        <p className="text-sm text-muted">{row.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
                  Current build direction
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {modernFocus.map((focus) => {
                    const Icon = focus.icon;
                    return (
                      <div key={focus.label} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={15} className="text-accent" aria-hidden="true" />
                        <Icon size={15} className="text-muted" aria-hidden="true" />
                        <span className="text-foreground">{focus.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </Container>
    </section>
  );
}
