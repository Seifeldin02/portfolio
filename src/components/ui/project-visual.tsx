import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ProjectVisual } from '@/data/projects';

interface ProjectVisualProps {
  title: string;
  visual: ProjectVisual;
  image?: string;
  status: string;
  className?: string;
}

const visualLabels: Record<ProjectVisual, string> = {
  academic: 'Academic platform',
  enterprise: 'Enterprise system',
  environmental: 'Environmental data',
};

export function ProjectVisualPanel({
  title,
  visual,
  image,
  status,
  className,
}: ProjectVisualProps) {
  if (image) {
    return (
      <div className={cn('relative overflow-hidden bg-surface-muted', className)}>
        <Image
          src={image}
          alt={`${title} interface preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-surface/90 text-foreground border border-border backdrop-blur-sm">
            {status}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center bg-surface-muted border-b border-border',
        className
      )}
    >
      <div className="text-center px-6 py-8">
        <p className="text-xs uppercase tracking-wider text-muted mb-2">
          {visualLabels[visual]} - screenshot coming soon
        </p>
        <p className="text-lg font-medium text-foreground">{title}</p>
      </div>
      <div className="absolute top-3 left-3">
        <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-surface text-foreground border border-border">
          {status}
        </span>
      </div>
    </div>
  );
}
