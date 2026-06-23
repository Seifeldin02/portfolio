export const siteConfig = {
  name: 'Seifeldin Mahmoud',
  fullName: 'Seifeldin Mahmoud',
  title: 'Software Engineer',
  subtitle: 'Frontend & Full-Stack Developer',
  description:
    'Software engineer with hands-on experience building enterprise web applications using React, Laravel, and RESTful APIs across teams in Egypt, Malaysia, and the US.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://seifeldin-portfolio.vercel.app',
  email: 'seifeldinmahmoud2002@gmail.com',
  github: 'https://github.com/Seifeldin02',
  linkedin: 'https://linkedin.com/in/seifeldin02',
  resumePath: '/resume.pdf',
  ogImage: '/og-image.png',
  roles: ['Frontend Developer', 'Full-Stack Developer', 'Software Engineer'],
  location: 'Johor Bahru, Malaysia',
} as const;
