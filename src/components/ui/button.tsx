import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function buttonClassName({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
} = {}) {
  return cn(
    'font-medium rounded-lg transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0',
    'disabled:opacity-50 disabled:pointer-events-none',
    {
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-2.5 text-sm': size === 'md',
      'px-6 py-3 text-base': size === 'lg',
      'bg-accent text-accent-contrast shadow-[0_8px_24px_color-mix(in_srgb,var(--accent)_18%,transparent)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_12px_32px_color-mix(in_srgb,var(--accent)_26%,transparent)]':
        variant === 'primary',
      'bg-surface-muted text-foreground hover:bg-border/60 hover:-translate-y-0.5':
        variant === 'secondary',
      'border border-border text-foreground hover:bg-surface-muted hover:border-accent/40 hover:-translate-y-0.5':
        variant === 'outline',
      'text-foreground hover:bg-surface-muted': variant === 'ghost',
    },
    className
  );
}

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  return <button className={buttonClassName({ variant, size, className })} {...props} />;
}
