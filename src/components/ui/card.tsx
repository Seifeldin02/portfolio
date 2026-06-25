import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outline';
}

export function Card({ className, hover = false, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-200 ease-out',
        {
          'bg-surface border border-border': variant === 'default',
          'bg-surface border border-border shadow-sm': variant === 'elevated',
          'bg-transparent border border-border': variant === 'outline',
          'hover:-translate-y-0.5 hover:shadow-md hover:border-accent/30 focus-within:border-accent/40 motion-reduce:hover:translate-y-0 cursor-pointer':
            hover,
        },
        className
      )}
      {...props}
    />
  );
}
