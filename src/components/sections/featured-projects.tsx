'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';
import { ProjectVisualPanel } from '@/components/ui/project-visual';
import { Section, SectionHeader } from '@/components/ui/section';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section divider containerSize="wide">
      <SectionHeader
        eyebrow="Selected work"
        title="Selected projects"
        description="A concise look at work I can explain clearly, with repositories linked where they are public and confidential company details kept private."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="block h-full rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Card hover variant="elevated" className="h-full overflow-hidden">
                <ProjectVisualPanel
                  title={project.title}
                  visual={project.visual}
                  image={project.image}
                  status={project.status}
                  mediaNote={project.mediaNote}
                  className="h-52 sm:h-56 xl:h-48"
                />

                <div className="p-6 sm:p-7 min-w-0">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant="accent">{project.category.replace('-', ' ')}</Badge>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex gap-2 text-sm text-muted">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                    Read case study
                    <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className={buttonClassName({
            size: 'lg',
            variant: 'outline',
            className: 'group bg-surface',
          })}
        >
          View All Projects
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </Section>
  );
}
