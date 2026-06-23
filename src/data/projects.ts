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
  technicalSummary: string;
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
  proofLinks?: {
    label: string;
    href: string;
  }[];
  confidentialityNote?: string;
  mediaNote?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'educomm',
    title: 'EduComm',
    slug: 'educomm',
    shortDescription:
      'Academic communication platform with student and lecturer entry points, Firebase-backed user flows, group APIs, and documented messaging workflows.',
    fullDescription:
      'Built a full-stack academic platform for student and lecturer roles, with a React frontend, Next.js API routes, Firebase services, group workflows, and report documentation.',
    problem:
      'The project explored how students and lecturers could use one academic communication system for account setup, protected access, group conversations, and academic coordination.',
    whatBuilt:
      'A Vite React frontend for role selection and Firebase client setup, plus a separate Next.js API backend with Firebase Admin, user profile endpoints, group endpoints, WebSocket handling, and documented translation flow.',
    technicalSummary:
      'The public repos show a React/Vite frontend and a Next.js API backend. The backend uses Firebase Admin and Firestore for users and groups, with protected endpoints for profile, username, role, and group-message flows.',
    technologies: [
      'React',
      'Vite',
      'Next.js API Routes',
      'Firebase Admin',
      'Firestore',
      'TypeScript',
    ],
    category: 'full-stack',
    status: 'Academic Project',
    visual: 'academic',
    keyFeatures: [
      'Documented messaging and translation workflow',
      'Role-based access control for students and lecturers',
      'Group creation and group message APIs',
      'Profile, username, and role verification endpoints',
    ],
    achievements: [
      {
        metric: 'Tested Academic Workflow',
        description:
          'Covered login, role checks, messaging, group flows, and academic actions through project testing',
      },
      {
        metric: 'Frontend and Backend Repos',
        description:
          'Public GitHub repositories are available for the React frontend and Next.js API backend',
      },
      {
        metric: 'Final Year Project',
        description:
          'Academic project with report documentation, diagrams, implementation work, and testing',
      },
    ],
    technicalChallenges: [
      'Keeping Firebase client and Firebase Admin responsibilities separated',
      'Protecting API endpoints with token validation and role checks',
      'Handling group membership before returning or modifying group data',
      'Keeping messaging, profile, and username flows understandable across separate repos',
    ],
    keyAccomplishments: [
      'Created a public React frontend repository and a separate backend API repository',
      'Implemented Firebase Admin-backed user and group endpoints in the backend',
      'Structured protected API flows for profile updates, username checks, role verification, and groups',
      'Documented messaging and translation flows through project diagrams and report material',
    ],
    technicalDecisions: [
      'Kept server-only Firebase Admin code in the backend API repository',
      'Separated frontend role entry from backend user and group operations',
      'Used Firestore collections for user and group data instead of a local relational database',
    ],
    image: '/projects/educomm-preview.webp',
    proofLinks: [
      { label: 'Frontend repository', href: 'https://github.com/Seifeldin02/EduComm' },
      { label: 'Backend repository', href: 'https://github.com/Seifeldin02/educomm-backend' },
    ],
    mediaNote:
      'Preview based on EduComm project screenshots and public frontend/backend repository structure.',
    featured: true,
  },
  {
    id: 'eco-jb',
    title: 'ECO-JB Carbon Monitoring System',
    slug: 'eco-jb-carbon-monitoring',
    shortDescription:
      'Java Spring MVC and JSP carbon monitoring project with user and staff dashboards, application flows, and Chart.js carbon usage views.',
    fullDescription:
      'Built ECO-JB as an Internet Programming project using Java, Spring MVC, JSP, Hibernate, MySQL, and Chart.js. The codebase includes user and staff areas, authentication, application handling, profile flows, file uploads, and a carbon analysis screen.',
    problem:
      'The project needed a web system where users and staff could manage environmental applications, account details, and carbon usage information through separate authenticated interfaces.',
    whatBuilt:
      'A Java web application with Spring MVC controllers, JSP views, Hibernate models, MySQL connectivity, role-specific navigation, file upload handling, and Chart.js panels for electric, water, and recycle usage.',
    technicalSummary:
      'Spring MVC routes requests into user and staff controllers, JSP views render the interface, Hibernate models represent users, staff, institutions, applications, and carbon data, and MySQL stores the relational data.',
    technologies: ['Java', 'Spring MVC', 'JSP', 'Hibernate', 'MySQL', 'Chart.js', 'Maven'],
    category: 'full-stack',
    status: 'Academic Project',
    visual: 'environmental',
    keyFeatures: [
      'Separate user and staff dashboard views',
      'Application submission and staff review flows',
      'Carbon analysis page with electric, water, and recycle charts',
      'Authentication, profile, file upload, and mail service code paths',
    ],
    achievements: [
      {
        metric: 'Public Repository',
        description: 'Source code is available under the ECO-JB repository on GitHub',
      },
      {
        metric: 'Java Web Stack',
        description:
          'Uses Spring MVC, JSP, Hibernate, Maven, and MySQL rather than a frontend-only demo',
      },
      {
        metric: 'Carbon Views',
        description:
          'Includes Chart.js based electric, water, and recycle usage screens in the JSP codebase',
      },
    ],
    technicalChallenges: [
      'Coordinating Spring MVC controllers, JSP views, Hibernate models, and MySQL persistence',
      'Separating user and staff navigation while keeping shared profile and application flows understandable',
      'Rendering carbon usage data through JSP variables and Chart.js scripts',
      'Handling file uploads, mail logic, and session-driven account state in a Java web app',
    ],
    keyAccomplishments: [
      'Implemented user and staff dashboard, profile, login, register, forgot password, and application views',
      'Built Java model, repository, service, and controller layers for the application',
      'Connected Hibernate and MySQL configuration for persistent entities',
      'Added Carbon Analysis UI with Chart.js driven usage charts',
    ],
    technicalDecisions: [
      'Used Spring MVC and JSP because the course project focused on Java web programming patterns',
      'Kept data entities explicit through Hibernate models instead of treating the app as static pages',
      'Used Chart.js in the JSP view to keep carbon usage visualization simple and maintainable',
    ],
    image: '/projects/eco-jb-preview.webp',
    proofLinks: [{ label: 'ECO-JB repository', href: 'https://github.com/Seifeldin02/ECO-JB' }],
    mediaNote:
      'Preview is a cleaned-up replica based on the public ECO-JB JSP, CSS, and Chart.js source files.',
    featured: true,
  },
  {
    id: 'outfitters',
    title: 'Outfitters Social Commerce Platform',
    slug: 'outfitters-social-commerce',
    shortDescription:
      'Confidential internship work on a React and TypeScript social commerce platform with explore, product, order, insights, messaging, and account flows.',
    fullDescription:
      'Contributed to a confidential live social commerce web platform during the WeCodeForYou internship. Public details are limited, but the work involved responsive frontend tasks, API integration, product and order flows, account settings, reporting interactions, and platform bug fixes.',
    problem:
      'The platform combined social engagement and e-commerce workflows, requiring users to move between posts, product details, orders, checkout, insights, account settings, and support flows without losing context.',
    whatBuilt:
      'Reusable React and TypeScript UI components for product listings, post details, order flows, checkout interactions, account settings, reporting UI, insights export interactions, and bug fixes across user-facing modules.',
    technicalSummary:
      'React and TypeScript frontend built with reusable components, Tailwind CSS styling, Zustand state management exposure, API integration tested with Postman, and iterative delivery through Jira-managed sprints.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Postman', 'Jira'],
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
        metric: 'Internship Project',
        description: 'Worked in a professional Agile frontend environment with sprint-based tasks',
      },
      {
        metric: 'Cross-Functional Work',
        description:
          'Collaborated around frontend, backend API behavior, QA feedback, and UI design',
      },
      {
        metric: 'Confidential Codebase',
        description:
          'Repository and production details are not public because the project belongs to the company',
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
    image: '/projects/outfitters-preview.webp',
    confidentialityNote:
      'The Outfitters work is mostly classified. The repository is not public, and the preview is a sanitized visual based on documented UI references.',
    mediaNote:
      'Preview is based on the documented Explore, Insights, and Post Details screens with private names and data removed.',
    featured: true,
  },
  {
    id: 'mypatil-operations',
    title: 'MyPatil Operations Modules',
    slug: 'mypatil-operations-modules',
    shortDescription:
      'Confidential Laravel and Livewire enterprise module work covering agencies, users, units, departments, SpocDesk, Redmine, menus, localization, and schema fixes.',
    fullDescription:
      'Worked as a full-stack developer on confidential MyPatil-related enterprise operations modules, implementing admin tables, management screens, ticket/content flows, schema and pivot query fixes, terminology cleanup, and handover-ready module updates.',
    problem:
      'Enterprise operations teams needed maintainable admin modules with accurate table behavior, clean terminology, reliable schema relationships, and clear handover for continued development.',
    whatBuilt:
      'Agency, user, unit, department, SpocDesk content and ticket management, Redmine integration, menu management, monthly pass table updates, portal routing changes, localization cleanup, and schema/query hardening.',
    technicalSummary:
      'Laravel and Livewire application patterns with Eloquent models, table components, menu/navigation builders, localization strings, schema/pivot logic, and admin workflows shaped around operational support.',
    technologies: ['Laravel', 'Livewire', 'PHP', 'SQL', 'Eloquent', 'Redmine', 'Localization'],
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
        metric: 'Contract Handover',
        description: 'Completed and handed over assigned enterprise module tasks at contract end',
      },
      {
        metric: 'Admin Module Breadth',
        description:
          'Worked across agency, users, departments, tickets, content, menus, and portal flows',
      },
      {
        metric: 'Classified Codebase',
        description: 'Repository access, screenshots, and production details are not public',
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
    confidentialityNote:
      'MyPatil is classified. No screenshots or repository links are provided because the work belongs to the company and was not documented for public release.',
    mediaNote: 'No screenshot is shown for this project due to confidentiality.',
    featured: false,
  },
];
