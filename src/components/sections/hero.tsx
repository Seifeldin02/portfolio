'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Share2, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { siteConfig } from '@/lib/site-config';
import { education } from '@/data/experience';

const credibilityItems = [
  'B.S. Software Engineering — UTM',
  'CGPA 3.6/4.0',
  'AWS Academy Cloud Foundations',
  'IELTS Band 7.5',
];

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20">
      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeUp} className="space-y-8 min-w-0">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">{siteConfig.subtitle}</Badge>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} aria-hidden="true" />
                  {siteConfig.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]">
                {siteConfig.name}
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
                I build production web applications with React, TypeScript, and Laravel — from
                responsive interfaces to RESTful APIs and normalized database schemas.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {siteConfig.roles.map((role) => (
                <Badge key={role} variant="outline">
                  {role}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto group">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
              <a href={siteConfig.resumePath} download>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Download size={18} className="mr-2" aria-hidden="true" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-sm text-muted">Verify:</span>
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
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8 space-y-6 min-w-0"
            aria-label="Recruiter snapshot"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                30-second snapshot
              </p>
              <h2 className="text-xl font-semibold text-foreground">Why keep reading?</h2>
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted mb-1">Strongest area</dt>
                <dd className="text-sm text-foreground">
                  Frontend development with React & TypeScript, plus full-stack Laravel module work
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted mb-1">
                  Recent experience
                </dt>
                <dd className="text-sm text-foreground">
                  Laravel modules at MyPatil (50+ person team) · React dashboards at WeCodeForYou.io
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted mb-1">
                  Shipped projects
                </dt>
                <dd className="text-sm text-foreground">
                  EduComm academic platform · IPRK Carbon Monitoring for Iskandar Puteri City
                  Council
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted mb-1">Education</dt>
                <dd className="text-sm text-foreground">
                  {education[0].degree}, {education[0].institution} ({education[0].endDate})
                </dd>
              </div>
            </dl>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted mb-3">Credentials</p>
              <div className="flex flex-wrap gap-2">
                {credibilityItems.map((item) => (
                  <Badge key={item} variant="default" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </Container>
    </section>
  );
}
