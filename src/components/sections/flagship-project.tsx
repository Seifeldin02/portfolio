'use client';

import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle2, Code2, ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '@/data/projects';
import { ProjectVisualPanel } from '@/components/ui/project-visual';
import { Badge } from '@/components/ui/badge';
import { buttonClassName } from '@/components/ui/button';

export function FlagshipProject({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const rotateXSource = useMotionValue(0);
  const rotateYSource = useMotionValue(0);
  const rotateX = useSpring(rotateXSource, { stiffness: 180, damping: 24, mass: 0.6 });
  const rotateY = useSpring(rotateYSource, { stiffness: 180, damping: 24, mass: 0.6 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXSource.set(y * -2.2);
    rotateYSource.set(x * 2.2);
  };

  const resetTilt = () => {
    rotateXSource.set(0);
    rotateYSource.set(0);
  };

  return (
    <motion.article
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        transformPerspective: 1400,
        transformStyle: 'preserve-3d',
      }}
      className="relative overflow-hidden rounded-xl border border-accent/30 bg-surface shadow-[0_28px_90px_rgba(2,132,199,0.09)] will-change-transform dark:shadow-[0_30px_100px_rgba(34,211,238,0.07)]"
    >
      <div className="h-1 w-full bg-accent" aria-hidden="true" />
      <div className="grid min-w-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <div className="min-h-[19rem] border-b border-border lg:min-h-[34rem] lg:border-b-0 lg:border-r">
          <ProjectVisualPanel
            title={project.title}
            visual={project.visual}
            image={project.image}
            status={project.status}
            mediaNote={project.mediaNote}
            className="h-full min-h-[19rem] lg:min-h-[34rem]"
          />
        </div>

        <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" className="gap-1.5">
              <Sparkles size={12} aria-hidden="true" />
              Flagship project
            </Badge>
            <Badge variant="outline" className="capitalize">
              {project.category.replace('-', ' ')}
            </Badge>
            <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Live
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-accent">
            Evidence-Based Developer Hiring Intelligence
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            {project.shortDescription}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.keyFeatures.slice(0, 4).map((feature) => (
              <div key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-border pt-5">
            {project.technologies.slice(0, 6).map((technology) => (
              <Badge key={technology} variant="default" className="text-xs">
                {technology}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:flex-wrap">
            <Link
              href={`/projects/${project.slug}`}
              className={buttonClassName({ size: 'lg', className: 'group' })}
            >
              Read case study
              <ArrowRight
                size={17}
                className="ml-2 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ size: 'lg', variant: 'outline' })}
              >
                Live demo
                <ExternalLink size={15} className="ml-2" aria-hidden="true" />
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ size: 'lg', variant: 'ghost' })}
              >
                <Code2 size={17} className="mr-2" aria-hidden="true" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
