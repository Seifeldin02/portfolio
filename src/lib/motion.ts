export const fadeUp = {
  initial: { opacity: 0, y: 14, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};
