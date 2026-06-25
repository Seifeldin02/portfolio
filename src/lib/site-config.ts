export const siteConfig = {
  name: 'Seifeldin Mahmoud',
  fullName: 'Seifeldin Mahmoud',
  title: 'Software Engineer',
  subtitle: 'Frontend & Full-Stack Developer',
  description:
    'Software engineer with hands-on experience building React, TypeScript, Laravel, and API-backed web applications across internship, contract, and academic projects.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'seifeldinmahmoud2002@gmail.com',
  github: 'https://github.com/Seifeldin02',
  linkedin: 'https://linkedin.com/in/seifeldin02',
  resumePath: '/resume.pdf',
  ogImage: '/og-image.png',
  roles: ['Frontend Developer', 'Full-Stack Developer', 'Software Engineer'],
  location: 'Yanbu, Al Madinah, Saudi Arabia',
} as const;
