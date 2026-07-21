'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { RevealGroup, RevealItem, RevealOnView } from '@/components/layout/reveal';
import { Section } from '@/components/ui/section';
import { FlagshipProject } from '@/components/sections/flagship-project';
import { ProjectVisualPanel } from '@/components/ui/project-visual';

const flagshipProject = projects.find((project) => project.flagship);
const projectArchive = projects.filter((project) => !project.flagship);
const projectCategories = Array.from(new Set(projectArchive.map((project) => project.category)));

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const q = searchQuery.toLowerCase();
  const filtered = projectArchive.filter((project) => {
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q));

    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="page-intro pt-28 pb-12 sm:pt-32 sm:pb-16">
        <Container size="narrow">
          <RevealGroup>
            <RevealItem>
              <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">
                Projects
              </p>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
                Engineering case studies
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="text-lg text-muted leading-relaxed">
                A focused look at my academic, internship, and enterprise work. I link public
                repositories where I can share them and keep confidential work clear without private
                details.
              </p>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {flagshipProject ? (
        <Section muted containerSize="wide" className="border-y border-border">
          <RevealOnView>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-accent">
                  Flagship project
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Start with the strongest work
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-muted">
                Live full-stack project, public repository, source-grounded workflow, and hiring
                intelligence.
              </p>
            </div>
            <FlagshipProject project={flagshipProject} />
          </RevealOnView>
        </Section>
      ) : null}

      <Section>
        <RevealOnView className="mb-7">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">Project archive</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            More engineering case studies
          </h2>
        </RevealOnView>
        <RevealOnView className="flex flex-col gap-4 mb-8">
          <div className="flex-1 relative min-w-0">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              size={18}
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search other projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="min-h-11 w-full rounded-lg border border-border bg-surface py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Search projects"
            />
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Filter projects by category">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              aria-pressed={!selectedCategory}
              className={`min-h-10 rounded-md border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                selectedCategory
                  ? 'border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground'
                  : 'border-accent/30 bg-accent-subtle text-accent'
              }`}
            >
              All
            </button>
            {projectCategories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(active ? null : cat)}
                  aria-pressed={active}
                  className={`min-h-10 rounded-md border px-3 py-2 text-sm font-medium capitalize transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                    active
                      ? 'border-accent/30 bg-accent-subtle text-accent'
                      : 'border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground'
                  }`}
                >
                  {cat.replace('-', ' ')}
                </button>
              );
            })}
          </div>
        </RevealOnView>

        <RevealOnView>
          <p className="text-sm text-muted mb-6">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>
        </RevealOnView>

        {filtered.length > 0 ? (
          <div className="space-y-6">
            {filtered.map((project, index) => (
              <RevealOnView key={project.id} delay={(index % 2) * 0.05}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block rounded-lg group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <Card hover variant="elevated" className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] min-w-0">
                      <ProjectVisualPanel
                        title={project.title}
                        visual={project.visual}
                        image={project.image}
                        status={project.status}
                        mediaNote={project.mediaNote}
                        className="h-52 sm:h-56 md:h-auto md:min-h-[220px]"
                      />

                      <div className="p-6 min-w-0">
                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <p className="text-sm text-muted mb-3 leading-relaxed">
                          {project.shortDescription}
                        </p>
                        <p className="text-sm text-foreground mb-4 line-clamp-2">
                          <span className="text-muted">Problem: </span>
                          {project.problem}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </RevealOnView>
            ))}
          </div>
        ) : (
          <RevealOnView className="text-center py-16">
            <p className="text-muted">No projects match your search.</p>
          </RevealOnView>
        )}
      </Section>
    </>
  );
}
