'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealGroup({ children, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : staggerContainer}
      initial={reduceMotion ? false : 'initial'}
      animate={reduceMotion ? undefined : 'animate'}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('min-w-0', className)}
      variants={reduceMotion ? undefined : fadeUp}
      transition={reduceMotion ? { duration: 0 } : { ...fadeUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealOnView({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn('min-w-0', className)}
      initial={reduceMotion ? false : fadeUp.initial}
      whileInView={reduceMotion ? { opacity: 1 } : fadeUp.animate}
      viewport={{ once: true, margin: '-40px' }}
      transition={reduceMotion ? { duration: 0 } : { ...fadeUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
