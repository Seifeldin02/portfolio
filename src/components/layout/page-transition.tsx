'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const routeTransition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      key={pathname}
      className="flex-1"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : routeTransition}
    >
      {children}
    </motion.main>
  );
}
