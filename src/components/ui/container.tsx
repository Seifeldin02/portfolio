import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ size = 'default', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-3xl': size === 'narrow',
          'max-w-7xl': size === 'default',
          'max-w-[90rem]': size === 'wide',
        },
        className
      )}
      {...props}
    />
  );
}
