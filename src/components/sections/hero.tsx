'use client';

import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Download, Mail, MapPin, Share2, Sparkles } from 'lucide-react';
import { buttonClassName } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { HeroEvidenceVisual } from '@/components/visuals/hero-evidence-visual';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/site-config';

const heroMetrics = [
  { label: 'Frontend implementation', value: 'React, TypeScript, Tailwind' },
  { label: 'Workflow logic', value: 'Forms, validation, state' },
  { label: 'Backend touchpoints', value: 'Laravel, APIs, Firestore' },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : 70]);

  return (
    <section className="relative isolate overflow-hidden border-b border-border pb-12 pt-20 sm:pb-16 sm:pt-24 lg:min-h-[46rem] lg:pb-20">
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full opacity-55 [mask-image:linear-gradient(to_right,transparent_10%,black_52%)] sm:opacity-70 md:w-[70%] lg:w-[64%] dark:opacity-85"
        style={{ y: visualY }}
        aria-hidden="true"
      >
        <HeroEvidenceVisual />
      </motion.div>

      <Container size="wide" className="relative z-10">
        <motion.div
          className="max-w-4xl pt-8 sm:pt-12 lg:pt-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
            <Badge variant="accent" className="bg-background/80 backdrop-blur-sm">
              {siteConfig.subtitle}
            </Badge>
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              Open to frontend and full-stack roles
            </Badge>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-background/75 px-2 py-1 text-sm text-muted backdrop-blur-sm">
              <MapPin size={14} className="shrink-0" aria-hidden="true" />
              {siteConfig.location}
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 min-w-0">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {siteConfig.name}
              <span className="mt-3 block max-w-3xl text-[0.58em] leading-[1.05] tracking-[-0.035em] text-muted">
                turns complex workflows into clear product features.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              I work mostly in React and TypeScript, with Laravel and API work when the flow needs
              backend support. Most of my work sits around forms, validation, integrations, admin
              screens, and product flows that need to stay understandable after handoff.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/projects/codeproof-hiring-intelligence"
              className="group inline-flex min-h-11 items-center gap-2 rounded-lg border border-accent/30 bg-accent-subtle/85 px-3.5 py-2 text-sm font-medium text-accent backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:hover:translate-y-0"
            >
              <Sparkles size={16} aria-hidden="true" />
              Flagship project: CodeProof is live
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-8 grid max-w-3xl grid-cols-1 border-y border-border/80 bg-background/65 backdrop-blur-sm sm:grid-cols-3"
          >
            {heroMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`px-1 py-4 sm:px-4 ${index > 0 ? 'border-t border-border/80 sm:border-l sm:border-t-0' : ''}`}
              >
                <dd className="text-sm font-semibold text-foreground sm:text-base">
                  {metric.value}
                </dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">
                  {metric.label}
                </dt>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className={buttonClassName({ size: 'lg', className: 'w-full sm:w-auto group' })}
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={siteConfig.resumePath}
                download
                className={buttonClassName({
                  size: 'lg',
                  variant: 'outline',
                  className: 'w-full bg-background/80 backdrop-blur-sm sm:w-auto',
                })}
              >
                <Download size={18} className="mr-2" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-1.5 sm:ml-auto">
              {[
                { href: siteConfig.github, label: 'GitHub profile', Icon: Code },
                { href: siteConfig.linkedin, label: 'LinkedIn profile', Icon: Share2 },
                { href: `mailto:${siteConfig.email}`, label: 'Send email', Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg bg-background/70 text-muted backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent motion-reduce:hover:translate-y-0"
                  aria-label={label}
                >
                  <Icon size={19} aria-hidden="true" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
