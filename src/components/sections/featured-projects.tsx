'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectVisualPanel } from '@/components/ui/project-visual';
import { Section, SectionHeader } from '@/components/ui/section';
export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section divider>
      <SectionHeader
        eyebrow="Featured work"
        title="Projects with real engineering decisions"
        description="Academic and enterprise applications where I owned architecture, implementation, and validation."
      />

      <div className="space-y-8">
        {featured.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <Card
                hover
                variant="elevated"
                className="overflow-hidden grid grid-cols-1 lg:grid-cols-2"
              >
                <ProjectVisualPanel
                  title={project.title}
                  visual={project.visual}
                  image={project.image}
                  status={project.status}
                  className="h-56 lg:h-full min-h-[14rem]"
                />

                <div className="p-6 sm:p-8 flex flex-col min-w-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="accent">{project.category.replace('-', ' ')}</Badge>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wide text-muted mb-1">Problem</p>
                    <p className="text-sm text-foreground leading-relaxed line-clamp-2">
                      {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
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
        <Link href="/projects">
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
