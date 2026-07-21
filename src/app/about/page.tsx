import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section, SectionHeader } from '@/components/ui/section';
import { education } from '@/data/experience';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} - ${siteConfig.subtitle} with enterprise web application experience.`,
};

export default function About() {
  return (
    <>
      <section className="page-intro pt-28 pb-12 sm:pt-32 sm:pb-16">
        <Container size="narrow">
          <RevealGroup>
            <RevealItem>
              <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">About</p>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Practical web engineering, with frontend and full-stack experience.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-muted leading-relaxed">{siteConfig.description}</p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      <Section muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <RevealOnView>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Background</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer with a Bachelor of Computer Science (Software
                Engineering) with Honours from Universiti Teknologi Malaysia. My work spans frontend
                development with React and TypeScript, and full-stack engineering with Laravel,
                RESTful APIs, and relational databases.
              </p>
              <p>
                At WeCodeForYou.io, I worked on React and TypeScript interfaces for a social
                commerce product. At MyPatil, I worked on Laravel and Livewire modules across admin
                tables, content flows, tickets, localization, menus, and schema-related fixes.
              </p>
            </div>
          </RevealOnView>

          <RevealOnView delay={0.08}>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What I focus on</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I care about clean UI implementation, clear API contracts, and database structures
                that are easy to reason about. My academic projects, EduComm and ECO-JB, gave me
                hands-on practice with authentication, protected routes, role-specific workflows,
                messaging, translation-related features, Java web programming, and structured
                testing.
              </p>
              <p>
                Working across teams in Egypt, Malaysia, and the US taught me how to communicate
                technical decisions clearly, respond to feedback, and keep implementation details
                understandable for the next developer.
              </p>
            </div>
          </RevealOnView>
        </div>
      </Section>

      <Section divider>
        <SectionHeader
          eyebrow="Education"
          title="Education"
          description="Academic background relevant to software engineering roles."
        />

        <div className="space-y-4">
          {education.map((edu) => (
            <RevealOnView key={edu.id}>
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-muted shrink-0">
                    <p>
                      {edu.startDate} - {edu.endDate}
                    </p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement) => (
                    <Badge key={achievement.title} variant="accent">
                      {achievement.title}
                    </Badge>
                  ))}
                </div>
                {edu.verificationUrl ? (
                  <a
                    href={edu.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClassName({
                      variant: 'outline',
                      size: 'sm',
                      className: 'mt-5 min-h-10',
                    })}
                  >
                    Verify degree
                    <ExternalLink size={14} className="ml-1.5" aria-hidden="true" />
                  </a>
                ) : null}
              </Card>
            </RevealOnView>
          ))}
        </div>

        <RevealOnView className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects" className={buttonClassName()}>
            View Projects
          </Link>
          <Link href="/contact" className={buttonClassName({ variant: 'outline' })}>
            Contact Me
          </Link>
        </RevealOnView>
      </Section>
    </>
  );
}
