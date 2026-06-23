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
    company: 'MyPatil',
    position: 'Full-Stack Developer (Laravel)',
    startDate: 'Sep 2025',
    endDate: 'Apr 2026',
    location: 'Malaysia / Remote',
    type: 'full-time',
    description:
      'Developed and maintained Laravel modules supporting business operations, administrative processes, and user management for a 50+ person engineering team across 8+ core system modules.',
    responsibilities: [
      'Developed and maintained Laravel modules for enterprise operations web system',
      'Conducted code reviews for a team of 5 developers, maintaining zero critical bugs reaching production',
      'Designed normalized relational database schemas reducing data redundancy',
      'Designed and implemented RESTful API routing architecture across 6 core modules',
      'Enforced clean separation of concerns with standardized data contracts between services',
    ],
    technologies: [
      'Laravel',
      'PHP',
      'MySQL',
      'RESTful APIs',
      'Eloquent',
      'Git',
      'Laravel Migrations',
    ],
    achievements: [
      {
        metric: 'Zero Critical Bugs',
        description: 'Maintained zero critical bugs reaching production across 5-person team',
      },
      {
        metric: '8+ Core Modules',
        description: 'Successfully managed development across 8+ core system modules',
      },
      {
        metric: 'Team Leadership',
        description: 'Conducted code reviews for 5 developers, ensuring quality standards',
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
      'Developed responsive dashboards using React.js and TypeScript, contributing to a 30-person engineering team serving a platform with thousands of active users.',
    responsibilities: [
      'Developed responsive dashboards using React.js and TypeScript for a 30-person team',
      'Integrated frontend components with backend APIs using React and TypeScript',
      'Resolved data inconsistencies and improved load performance across key user-facing modules',
      'Optimized UI performance and accessibility across major browsers',
      'Delivered features end-to-end within Agile/Scrum sprints using Jira',
      'Debugged and resolved cross-browser UI inconsistencies using browser dev tools',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Git', 'Jira', 'Agile'],
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
