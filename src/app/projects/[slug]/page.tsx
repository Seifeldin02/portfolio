import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section } from '@/components/ui/section';
import { ExternalLink, Code, ArrowLeft, LockKeyhole } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? 'Project',
    description: project?.shortDescription,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((p) => p.id !== project.id);

  return (
    <>
      <section className="pt-28 pb-8 sm:pt-32">
        <Container>
          <RevealGroup>
            <RevealItem>
              <Link
                href="/projects"
                className="mb-6 inline-flex min-h-10 items-center gap-1.5 rounded-md text-sm text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to projects
              </Link>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="accent">{project.status}</Badge>
                <Badge variant="outline" className="capitalize">
                  {project.category.replace('-', ' ')}
                </Badge>
              </div>
            </RevealItem>

            <RevealItem>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-muted max-w-3xl leading-relaxed mb-6">
                {project.shortDescription}
              </p>
            </RevealItem>

            {(project.github || project.liveUrl || project.proofLinks?.length) && (
              <RevealItem>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClassName({ className: 'group' })}
                    >
                      <Code size={18} className="mr-2" aria-hidden="true" />
                      View on GitHub
                      <ExternalLink
                        size={14}
                        className="ml-2 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  )}
                  {project.proofLinks?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClassName({ variant: 'outline', className: 'group' })}
                    >
                      <Code size={18} className="mr-2" aria-hidden="true" />
                      {link.label}
                      <ExternalLink
                        size={14}
                        className="ml-2 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClassName({ variant: 'outline', className: 'group' })}
                    >
                      <ExternalLink size={18} className="mr-2" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </RevealItem>
            )}
          </RevealGroup>
        </Container>
      </section>

      <Section muted>
        <Container>
          <RevealOnView className="relative h-52 max-h-[28rem] overflow-hidden rounded-xl border border-border bg-surface-muted sm:aspect-[16/9] sm:h-auto sm:min-h-[13rem]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} interface preview`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[16rem]">
                <div className="px-6 text-center">
                  <LockKeyhole className="mx-auto mb-3 text-muted" size={28} aria-hidden="true" />
                  <p className="text-muted">
                    {project.mediaNote ?? 'Screenshot unavailable for this project.'}
                  </p>
                </div>
              </div>
            )}
          </RevealOnView>
          {project.mediaNote && project.image ? (
            <RevealOnView>
              <p className="mt-3 text-sm text-muted">{project.mediaNote}</p>
            </RevealOnView>
          ) : null}
          {project.confidentialityNote ? (
            <RevealOnView className="mt-4 rounded-lg border border-border bg-surface p-4 text-sm text-muted">
              <div className="mb-1 flex items-center gap-2 font-medium text-foreground">
                <LockKeyhole size={16} aria-hidden="true" />
                Confidentiality note
              </div>
              <p>{project.confidentialityNote}</p>
            </RevealOnView>
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
            <div className="space-y-10 min-w-0">
              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">The problem</h2>
                <p className="text-muted leading-relaxed">{project.problem}</p>
              </RevealOnView>

              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">What I built</h2>
                <p className="text-muted leading-relaxed">{project.whatBuilt}</p>
              </RevealOnView>

              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  Technical implementation
                </h2>
                <p className="text-muted leading-relaxed">{project.technicalSummary}</p>
              </RevealOnView>

              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Key features</h2>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2 text-muted">
                      <span className="text-accent shrink-0" aria-hidden="true">
                        -
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnView>

              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Technical decisions</h2>
                <ul className="space-y-2">
                  {project.technicalDecisions.map((decision) => (
                    <li key={decision} className="flex gap-2 text-muted">
                      <span className="text-accent shrink-0" aria-hidden="true">
                        -
                      </span>
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnView>

              <RevealOnView>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Challenges</h2>
                <ul className="space-y-2">
                  {project.technicalChallenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2 text-muted">
                      <span className="text-accent shrink-0" aria-hidden="true">
                        -
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnView>
            </div>

            <RevealOnView className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <Card className="p-5">
                <h3 className="text-sm font-medium text-foreground mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="accent" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-5">
                <h3 className="text-sm font-medium text-foreground mb-3">Outcomes</h3>
                <div className="space-y-3">
                  {project.achievements.map((achievement) => (
                    <div key={achievement.metric}>
                      <p className="text-sm font-medium text-accent">{achievement.metric}</p>
                      <p className="text-xs text-muted leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </RevealOnView>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section divider muted>
          <Container>
            <RevealOnView>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Other projects</h2>
            </RevealOnView>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((relatedProject, index) => (
                <RevealOnView key={relatedProject.id} delay={(index % 2) * 0.05}>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <Card hover className="p-5 h-full">
                      <Badge variant="outline" className="text-xs mb-2">
                        {relatedProject.status}
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-2">{relatedProject.title}</h3>
                      <p className="text-sm text-muted line-clamp-2">
                        {relatedProject.shortDescription}
                      </p>
                    </Card>
                  </Link>
                </RevealOnView>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
