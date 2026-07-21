import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outline';
}

export function Card({ className, hover = false, variant = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg transition-all duration-300 ease-out',
        {
          'bg-surface border border-border': variant === 'default',
          'bg-surface border border-border shadow-[0_12px_34px_rgba(15,23,42,0.045)] dark:shadow-[0_16px_42px_rgba(0,0,0,0.16)]':
            variant === 'elevated',
          'bg-transparent border border-border': variant === 'outline',
          'hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.1)] hover:border-accent/35 focus-within:border-accent/40 motion-reduce:hover:translate-y-0 cursor-pointer dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.28)]':
            hover,
        },
        className
      )}
      {...props}
    />
  );
}
