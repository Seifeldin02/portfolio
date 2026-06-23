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
        'py-16 sm:py-20',
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
        'mb-10 sm:mb-12',
        align === 'center' && 'text-center mx-auto max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide uppercase text-accent mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
      {description && <p className="mt-3 text-lg text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
