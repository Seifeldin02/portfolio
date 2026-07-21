'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { fadeUp } from '@/lib/motion';

const routeTransition = {
  ...fadeUp.transition,
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      key={pathname}
      className="flex-1 transform-gpu"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reduceMotion ? { duration: 0 } : { ...routeTransition, duration: 0.28 }}
      style={reduceMotion ? undefined : { willChange: 'opacity' }}
    >
      {children}
    </motion.main>
  );
}
