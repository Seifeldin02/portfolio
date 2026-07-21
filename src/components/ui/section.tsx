import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: 'default' | 'narrow' | 'wide';
  muted?: boolean;
  divider?: boolean;
}

export function Section({
  containerSize = 'default',
  muted = false,
  divider = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 sm:py-24',
        muted && 'bg-surface-muted',
        divider && 'border-t border-border',
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-14',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-accent before:h-px before:w-7 before:bg-accent/60">
          {eyebrow}
        </p>
      )}
      <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
        {title}
      </h2>
      {description && <p className="mt-3 text-lg text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
