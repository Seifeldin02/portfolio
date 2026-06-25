import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'outline';
}

export function Badge({ variant = 'default', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors duration-200',
        {
          'bg-surface-muted text-foreground': variant === 'default',
          'bg-accent-subtle text-accent border border-accent/20': variant === 'accent',
          'bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300': variant === 'success',
          'border border-border text-muted bg-transparent': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}
