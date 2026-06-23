import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-colors inline-flex items-center justify-center whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          'px-3 py-2 text-sm': size === 'sm',
          'px-4 py-2.5 text-sm': size === 'md',
          'px-6 py-3 text-base': size === 'lg',
          'bg-accent text-white hover:bg-accent-hover': variant === 'primary',
          'bg-surface-muted text-foreground hover:bg-border/60': variant === 'secondary',
          'border border-border text-foreground hover:bg-surface-muted': variant === 'outline',
          'text-foreground hover:bg-surface-muted': variant === 'ghost',
        },
        className
      )}
      {...props}
    />
  );
}
