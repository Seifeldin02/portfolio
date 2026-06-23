'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const q = searchQuery.toLowerCase();
  const filtered = projects.filter((project) => {
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
      <section className="pt-28 pb-8 sm:pt-32">
        <Container size="narrow">
          <p className="text-sm font-medium uppercase tracking-wide text-accent mb-3">Projects</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Engineering case studies
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Academic and enterprise applications demonstrating full-stack development, API design,
            and role-based system architecture.
          </p>
        </Container>
      </section>

      <Section>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 relative min-w-0">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              size={18}
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-surface text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Search projects"
            />
          </div>

          <select
            value={selectedCategory || ''}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="px-4 py-2.5 rounded-lg border border-border bg-surface text-foreground min-w-0 sm:min-w-[180px]"
            aria-label="Filter by category"
          >
            <option value="">All categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-muted mb-6">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="space-y-6">
            {filtered.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="block group">
                <Card hover variant="elevated" className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] min-w-0">
                    <div className="relative h-48 md:h-auto md:min-h-[200px] bg-surface-muted">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover"
                          sizes="280px"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full p-6 text-center">
                          <p className="text-sm text-muted">Screenshot coming soon</p>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <Badge variant="accent" className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>

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
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted">No projects match your search.</p>
          </div>
        )}
      </Section>
    </>
  );
}
