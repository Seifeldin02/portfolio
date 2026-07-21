'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { ProjectVisualPanel } from '@/components/ui/project-visual';
import { FlagshipProject } from '@/components/sections/flagship-project';
import { Section, SectionHeader } from '@/components/ui/section';

export function FeaturedProjects() {
  const reducedMotion = useReducedMotion();
  const flagship = projects.find((project) => project.flagship);
  const featured = projects.filter((project) => project.featured && !project.flagship);

  return (
    <Section divider containerSize="wide" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--accent)_5%,transparent),transparent)]"
        aria-hidden="true"
      />
      <div className="relative">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects that show how I build"
          description="CodeProof leads the collection as a live full-stack project. The remaining case studies show academic, internship, and enterprise work with public proof where it can be shared."
        />

        {flagship ? (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reducedMotion ? 0 : 0.45 }}
          >
            <FlagshipProject project={flagship} />
          </motion.div>
        ) : null}

        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reducedMotion ? 0 : 0.35, delay: index * 0.05 }}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Card
                  hover
                  variant="elevated"
                  className="h-full overflow-hidden transition-[transform,box-shadow,border-color] duration-300"
                >
                  <ProjectVisualPanel
                    title={project.title}
                    visual={project.visual}
                    image={project.image}
                    status={project.status}
                    mediaNote={project.mediaNote}
                    className="h-52 sm:h-56 lg:h-44 xl:h-52"
                  />

                  <div className="min-w-0 p-5 sm:p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <Badge variant="accent">{project.category.replace('-', ' ')}</Badge>
                      {project.technologies.slice(0, 2).map((technology) => (
                        <Badge key={technology} variant="outline">
                          {technology}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.shortDescription}
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {project.keyFeatures.slice(0, 2).map((feature) => (
                        <div key={feature} className="flex gap-2 text-sm text-muted">
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
                      Read case study
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className={buttonClassName({
              size: 'lg',
              variant: 'outline',
              className: 'group bg-surface',
            })}
          >
            View All Projects
            <ArrowRight
              size={18}
              className="ml-2 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}
