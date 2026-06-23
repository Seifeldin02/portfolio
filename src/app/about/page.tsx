import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section, SectionHeader } from '@/components/ui/section';
import { education } from '@/data/experience';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${siteConfig.name} — ${siteConfig.subtitle} with enterprise web application experience.`,
};

export default function About() {
  return (
    <>
      <section className="pt-28 pb-8 sm:pt-32">
        <Container size="narrow">
          <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Building software with clarity and care
          </h1>
          <p className="text-lg text-muted leading-relaxed">{siteConfig.description}</p>
        </Container>
      </section>

      <Section muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Background</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer with a Bachelor&apos;s degree in Software Engineering
                from Universiti Teknologi Malaysia. My work spans frontend development with React
                and TypeScript, and full-stack engineering with Laravel, RESTful APIs, and
                relational databases.
              </p>
              <p>
                At WeCodeForYou.io, I built responsive dashboards for a 30-person engineering team,
                improving page load times by approximately 30% and resolving cross-browser layout
                issues. At MyPatil, I developed Laravel modules across 8+ core system modules,
                conducted code reviews for five developers, and helped maintain zero critical bugs
                reaching production.
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What I focus on</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I care about clean UI implementation, scalable API contracts, and normalized
                database design. My academic projects — EduComm and the IPRK Carbon Monitoring
                System — gave me hands-on experience with role-based access control, real-time
                features, and structured testing from design through UAT.
              </p>
              <p>
                Working across teams in Egypt, Malaysia, and the US taught me how to communicate
                technical decisions clearly, review code constructively, and ship features within
                Agile sprints without compromising production quality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section divider>
        <SectionHeader
          eyebrow="Education"
          title="Education & credentials"
          description="Academic foundation backed by certifications and measurable performance."
        />

        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-muted">{edu.institution}</p>
                </div>
                <div className="text-sm text-muted shrink-0">
                  <p>
                    {edu.startDate} – {edu.endDate}
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
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
