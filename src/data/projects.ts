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
  {
    id: 'outfitters',
    title: 'Outfitters Social Commerce Platform',
    slug: 'outfitters-social-commerce',
    shortDescription:
      'React and TypeScript frontend work for a social commerce platform combining posts, products, orders, checkout, insights, and account flows.',
    fullDescription:
      'Contributed to a live social commerce web platform during the WeCodeForYou internship, focusing on responsive UI components, API integration, product and order flows, account settings, reporting interactions, and platform bug fixes.',
    problem:
      'The platform combined social engagement and e-commerce workflows, requiring users to move between posts, product details, orders, checkout, insights, account settings, and support flows without losing context.',
    whatBuilt:
      'Reusable React and TypeScript UI components for product listings, post details, order flows, checkout interactions, account settings, reporting UI, insights export interactions, and bug fixes across user-facing modules.',
    architectureSummary:
      'React and TypeScript frontend built with reusable components, Tailwind CSS styling, Zustand state management exposure, API integration tested with Postman, and iterative delivery through Jira-managed sprints.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand', 'Postman', 'Jira'],
    category: 'frontend',
    status: 'Internship Project',
    visual: 'enterprise',
    keyFeatures: [
      'Social engagement and post detail interfaces',
      'Product listing, wishlist, cart, checkout, and order management flows',
      'Brand/outfitter account settings and insights UI',
      'Bug fixes for support messaging, post descriptions, collections, and pricing inputs',
    ],
    achievements: [
      {
        metric: '20-Week Internship',
        description: 'Worked in a professional Agile frontend environment with sprint-based tasks',
      },
      {
        metric: 'Cross-Functional Work',
        description:
          'Collaborated around frontend, backend API behavior, QA feedback, and UI design',
      },
      {
        metric: 'Live Product Context',
        description: 'Contributed to real product modules rather than isolated practice screens',
      },
    ],
    technicalChallenges: [
      'Keeping social and commerce flows responsive across device sizes',
      'Integrating frontend states with backend API responses and error behavior',
      'Reducing UI bugs around long content, product collections, support messaging, and decimal pricing',
      'Building maintainable React components while adapting quickly to a large codebase',
    ],
    keyAccomplishments: [
      'Built and refined product, order, checkout, account, social engagement, and reporting interfaces',
      'Worked with API testing and backend integration details using Postman',
      'Improved UI reliability through bug fixes and responsive layout adjustments',
      'Participated in Agile delivery with Jira, standups, feedback cycles, and task breakdowns',
    ],
    technicalDecisions: [
      'Kept UI components reusable to reduce duplicated implementation across product modules',
      'Used typed React patterns to make complex states easier to reason about',
      'Validated API assumptions with Postman before wiring user-facing flows',
    ],
    featured: true,
  },
  {
    id: 'mypatil-operations',
    title: 'MyPatil Operations Modules',
    slug: 'mypatil-operations-modules',
    shortDescription:
      'Laravel and Livewire enterprise modules covering agencies, users, units, departments, SpocDesk content, tickets, Redmine, menus, localization, and schema fixes.',
    fullDescription:
      'Worked as a full-stack developer on MyPatil-related enterprise operations modules, implementing admin tables, management screens, ticket/content flows, schema and pivot query fixes, terminology cleanup, and handover-ready module updates.',
    problem:
      'Enterprise operations teams needed maintainable admin modules with accurate table behavior, clean terminology, reliable schema relationships, and clear handover for continued development.',
    whatBuilt:
      'Agency, user, unit, department, SpocDesk content and ticket management, Redmine integration, menu management, monthly pass table updates, portal routing changes, localization cleanup, and schema/query hardening.',
    architectureSummary:
      'Laravel and Livewire application patterns with Eloquent models, table components, menu/navigation builders, localization strings, schema/pivot logic, and admin workflows shaped around operational support.',
    technologies: ['Laravel', 'Livewire', 'PHP', 'MySQL', 'Eloquent', 'Redmine', 'Localization'],
    category: 'enterprise',
    status: 'Enterprise Project',
    visual: 'enterprise',
    keyFeatures: [
      'Agency, user, unit, and department management modules',
      'SpocDesk article, tag, category, ticket listing, and ticket creation flows',
      'Redmine ticket registration logic and schema/pivot query hardening',
      'Portal navigation, monthly pass tables, localization, and terminology cleanup',
    ],
    achievements: [
      {
        metric: '14 Handover Items',
        description: 'Completed and handed over a set of enterprise module tasks at contract end',
      },
      {
        metric: 'Admin Module Breadth',
        description:
          'Worked across agency, users, departments, tickets, content, menus, and portal flows',
      },
      {
        metric: 'Operational Stability',
        description:
          'Focused on schema corrections, query fixes, UI cleanup, and predictable admin behavior',
      },
    ],
    technicalChallenges: [
      'Maintaining consistent behavior across related admin tables and management screens',
      'Hardening schema, pivot, and table-availability logic without breaking existing workflows',
      'Cleaning localization and terminology across operational interfaces',
      'Coordinating handover details so the next developer could continue safely',
    ],
    keyAccomplishments: [
      'Implemented management modules for agencies, users, units, departments, and SpocDesk workflows',
      'Improved ticket/content management flows and Redmine registration logic',
      'Fixed navigation builder caching, SIT article listing issues, and schema/pivot query behavior',
      'Cleaned UI labels, duplicate text, dropdowns, add-button terminology, and payment descriptions',
    ],
    technicalDecisions: [
      'Used Livewire table patterns for maintainable admin CRUD workflows',
      'Kept operational language consistent through localization and terminology cleanup',
      'Prioritized handover clarity and stable module behavior over risky broad refactors',
    ],
    featured: true,
  },
];
