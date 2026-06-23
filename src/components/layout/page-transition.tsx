'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasMounted = useRef(false);
  const [entered, setEntered] = useState(true);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    setEntered(false);
    const frame = requestAnimationFrame(() => setEntered(true));

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <main
      key={pathname}
      className="flex-1 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none"
      style={{
        opacity: entered ? 1 : 0,
        transform: entered ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {children}
    </main>
  );
}
