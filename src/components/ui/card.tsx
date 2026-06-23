import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outline';
}

export function Card({ className, hover = false, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl transition-all duration-200',
        {
          'bg-surface border border-border': variant === 'default',
          'bg-surface border border-border shadow-sm': variant === 'elevated',
          'bg-transparent border border-border': variant === 'outline',
          'hover:shadow-md hover:border-accent/30 cursor-pointer': hover,
        },
        className
      )}
      {...props}
    />
  );
}
