export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'full-time' | 'freelance' | 'contract';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: {
    metric: string;
    description: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: 'mypatil',
    company: 'Gates Technology / MyPatil',
    position: 'Full-Stack Developer',
    startDate: 'Oct 2025',
    endDate: 'Mar 2026',
    location: 'Cyberjaya, Malaysia / Remote',
    type: 'full-time',
    description:
      'Developed and maintained Laravel and Livewire modules for MyPatil-related enterprise operations, including agency, user, unit, department, SpocDesk, Redmine, portal, menu, localization, and schema correction work.',
    responsibilities: [
      'Built agency, user, unit, department, enforcement, and prosecution admin tables and management pages',
      'Implemented SpocDesk article, tag, category, ticket listing, and ticket creation workflows',
      'Hardened schema, pivot query, table availability, and Redmine ticket registration logic',
      'Cleaned localization strings, menu behavior, payment descriptions, duplicate UI text, and terminology',
      'Prepared completed handover items with module-level context for continued development',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Eloquent', 'Git', 'Laravel Migrations'],
    achievements: [
      {
        metric: '14 Completed Handover Items',
        description:
          'Closed and handed over enterprise module tasks across admin, ticket, portal, and schema areas',
      },
      {
        metric: 'Multi-Module Ownership',
        description:
          'Worked across agency, users, departments, SpocDesk, Redmine, portal, menus, and localization',
      },
      {
        metric: 'Operational Reliability',
        description:
          'Focused on schema corrections, query hardening, UI cleanup, and predictable admin behavior',
      },
    ],
  },
  {
    id: 'wecodeforyou',
    company: 'WeCodeForYou.io',
    position: 'Frontend Developer',
    startDate: 'Aug 2024',
    endDate: 'Feb 2025',
    location: 'Hybrid / Cairo',
    type: 'full-time',
    description:
      'Developed responsive React and TypeScript interfaces for a social commerce product, contributing to frontend modules, API integration, Postman-tested flows, responsive UI fixes, and Agile delivery.',
    responsibilities: [
      'Built and refined React and TypeScript components for product, order, checkout, account, and social engagement flows',
      'Integrated frontend states with backend API behavior and tested endpoints using Postman',
      'Improved responsive layouts and UI behavior across product listings, posts, reports, and support flows',
      'Worked with Tailwind CSS, Zustand exposure, Jira tasks, standups, sprint planning, and review cycles',
      'Debugged issues around pricing inputs, post descriptions, product collections, and support messaging',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'Zustand',
      'Postman',
      'Jira',
    ],
    achievements: [
      {
        metric: '~30% Performance Improvement',
        description: 'Reduced page load times by approximately 30% across major browsers',
      },
      {
        metric: 'Cross-Browser Optimization',
        description: 'Guaranteed layout integrity across mobile, tablet, and desktop breakpoints',
      },
      {
        metric: '30-Person Team Collaboration',
        description:
          'Contributed to large-scale engineering team serving thousands of active users',
      },
    ],
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export const education: Education[] = [
  {
    id: 'utm',
    institution: 'Universiti Teknologi Malaysia',
    degree: 'Bachelor of Software Engineering',
    field: 'Software Engineering',
    startDate: 'Oct 2020',
    endDate: 'Jul 2025',
    location: 'Johor Bahru, Malaysia',
    achievements: [
      {
        title: 'CGPA: 3.6/4.0',
        description: 'CGPA Appreciation - Maintained strong academic performance',
      },
      {
        title: 'AWS Academy Cloud Foundations',
        description: 'Certification in cloud computing and AWS services',
      },
      {
        title: 'IELTS: Band 7.5',
        description: 'Overall Band 7.5 - Strong English proficiency',
      },
    ],
  },
];
