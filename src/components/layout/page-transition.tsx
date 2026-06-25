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
      initial={reduceMotion ? false : fadeUp.initial}
      animate={reduceMotion ? { opacity: 1 } : fadeUp.animate}
      transition={reduceMotion ? { duration: 0 } : routeTransition}
      style={reduceMotion ? undefined : { willChange: 'opacity, transform' }}
    >
      {children}
    </motion.main>
  );
}
