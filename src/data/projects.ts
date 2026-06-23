export type ProjectStatus =
  | 'Academic Project'
  | 'Enterprise Project'
  | 'Internship Project'
  | 'Personal Project';
export type ProjectVisual = 'academic' | 'enterprise' | 'environmental';

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  whatBuilt: string;
  architectureSummary: string;
  technologies: string[];
  category: 'full-stack' | 'frontend' | 'backend' | 'enterprise';
  status: ProjectStatus;
  visual: ProjectVisual;
  keyFeatures: string[];
  technicalChallenges: string[];
  keyAccomplishments: string[];
  technicalDecisions: string[];
  achievements: {
    metric: string;
    description: string;
  }[];
  image?: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'educomm',
    title: 'EduComm',
    slug: 'educomm',
    shortDescription:
      'Full-stack academic platform for student and lecturer roles with real-time multilingual chat and role-based access control.',
    fullDescription:
      'Solo-designed and delivered a full-stack academic platform for student and lecturer roles, built on React, Next.js, and Firebase following MVC architecture, documented across 300+ pages of technical specifications.',
    problem:
      'Academic institutions need a unified platform where students and lecturers can collaborate, communicate across languages, and access role-specific tools without compromising data boundaries.',
    whatBuilt:
      'A Next.js and Firebase application with course management, real-time messaging, multilingual chat translation, and granular RBAC separating student and lecturer permissions across all modules.',
    architectureSummary:
      'MVC architecture with React and Next.js on the frontend, Firebase for authentication and real-time data, and modular services for course management, messaging, and role-based permissions. LibreTranslate API powers multilingual chat translation.',
    technologies: ['React', 'Next.js', 'Firebase', 'TypeScript', 'LibreTranslate API', 'MVC'],
    category: 'full-stack',
    status: 'Academic Project',
    visual: 'academic',
    keyFeatures: [
      'Real-time multilingual chat translation',
      'Role-based access control for students and lecturers',
      'Course and academic workflow management',
      'Structured black box testing and UAT validation',
    ],
    achievements: [
      {
        metric: 'Zero Critical Defects',
        description:
          'Validated through structured black box testing and UAT with real academic users at release',
      },
      {
        metric: '300+ Pages',
        description:
          'Comprehensive technical specifications documenting system design and implementation',
      },
      {
        metric: 'Solo Delivery',
        description: 'End-to-end ownership from design through deployment as a final year project',
      },
    ],
    technicalChallenges: [
      'Implementing real-time multilingual chat translation across distributed users',
      'Designing granular role-based access control for student and lecturer permissions',
      'Managing complex academic workflows across platform modules',
      'Validating system reliability through structured black box testing and UAT',
    ],
    keyAccomplishments: [
      'Integrated LibreTranslate API for real-time multilingual chat translation',
      'Engineered role-based access control distinguishing student and lecturer permissions across all platform modules',
      'Validated system through structured black box testing and UAT with real academic users',
      'Delivered zero critical defects at release',
    ],
    technicalDecisions: [
      'Chose Firebase for real-time messaging and authentication to reduce backend infrastructure overhead',
      'Applied MVC separation to keep academic domain logic modular and testable',
      'Used LibreTranslate API to support multilingual communication without building a custom translation layer',
    ],
    image: '/projects/educomm-placeholder.svg',
    featured: true,
  },
  {
    id: 'iprk-carbon',
    title: 'IPRK Carbon Monitoring System',
    slug: 'iprk-carbon-monitoring',
    shortDescription:
      'Enterprise environmental data management system for the Iskandar Puteri City Council with carbon emission tracking and GHG analysis.',
    fullDescription:
      'Built a full-stack enterprise web application using Java Servlets/JSP following MVC architecture for the Iskandar Puteri City Council. The system supports carbon emission data submission, management, and real-time GHG analysis with GIS/Map API integration.',
    problem:
      'The Iskandar Puteri City Council needed a centralized system to collect multi-sector environmental data, track carbon emissions, and provide role-appropriate access for residents, staff, and developers.',
    whatBuilt:
      'A Java Servlets/JSP enterprise application with carbon emission submission, GHG analysis dashboards, GIS visualization, OTP and OAuth authentication, and RBAC for three distinct actor types.',
    architectureSummary:
      'Java Servlets/JSP MVC application with relational database storage for multi-sector environmental data. Role-based access control separates Resident, MBIP Staff, and Developer actors. Secure authentication layer includes OTP verification and Google OAuth sign-in.',
    technologies: [
      'Java Servlets/JSP',
      'MVC',
      'GIS/Map API',
      'Google OAuth',
      'OTP Verification',
      'Relational Databases',
    ],
    category: 'enterprise',
    status: 'Enterprise Project',
    visual: 'environmental',
    keyFeatures: [
      'Multi-sector environmental data collection',
      'Real-time GHG analysis and reporting',
      'GIS/Map API visualization',
      'OTP and Google OAuth authentication',
    ],
    achievements: [
      {
        metric: '3 User Roles',
        description:
          'Role-based access control for Resident, MBIP Staff, and Developer actor types',
      },
      {
        metric: 'Multi-Sector Data',
        description:
          'Relational schemas handling water, energy, recycling, and waste environmental inputs',
      },
      {
        metric: 'Real-Time Analysis',
        description: 'GHG analysis and reporting with GIS/Map API integration',
      },
    ],
    technicalChallenges: [
      'Designing normalized relational database schemas for multi-sector environmental data',
      'Implementing secure OTP verification and Google OAuth authentication',
      'Building real-time GIS/Map visualization for environmental data',
      'Managing role-based access control for three distinct user types',
    ],
    keyAccomplishments: [
      'Designed and implemented role-based access control for Resident, MBIP Staff, and Developer actors',
      'Developed modules for carbon emission data submission, management, and real-time GHG analysis',
      'Designed relational database schemas to handle water, energy, recycling, and waste inputs',
      'Implemented secure user authentication including OTP verification and Google OAuth sign-in',
      'Integrated GIS/Map API for environmental data visualization',
    ],
    technicalDecisions: [
      'Used Java Servlets/JSP with MVC to align with enterprise deployment requirements',
      'Normalized relational schemas to handle diverse environmental input types without redundancy',
      'Separated authentication flows (OTP + OAuth) to support both staff and public user onboarding',
    ],
    image: '/projects/iprk-placeholder.svg',
    featured: true,
  },
];
