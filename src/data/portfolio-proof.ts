import {
  Blocks,
  Bot,
  ClipboardCheck,
  Code2,
  Database,
  GitBranch,
  Languages,
  LayoutDashboard,
  MessageSquare,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const engineeringSignals = [
  {
    label: 'Frontend systems',
    value: 'React, TypeScript, Next.js, Tailwind CSS',
    detail: 'Reusable UI, responsive layouts, state handling, and performance-focused components.',
    icon: LayoutDashboard,
  },
  {
    label: 'Backend integration',
    value: 'Laravel, Livewire, REST APIs, Firebase',
    detail: 'Server-side validation, API contracts, admin workflows, and data persistence.',
    icon: Route,
  },
  {
    label: 'Data modeling',
    value: 'SQL, schema design, migrations, Firestore',
    detail: 'Normalized relational schemas, pivot/query hardening, and operational data flows.',
    icon: Database,
  },
  {
    label: 'Delivery discipline',
    value: 'Jira, code reviews, UAT, handover',
    detail: 'Sprint work, bug triage, documentation, and stable transition of owned modules.',
    icon: ClipboardCheck,
  },
] as const;

export const systemArtifacts = [
  {
    title: 'EduComm messaging workflow',
    eyebrow: 'Realtime product flow',
    description:
      'Group chat, message persistence, translated replies, empty-state handling, and lecturer/student permissions.',
    tags: ['Firebase', 'RBAC', 'Translation', 'Messaging'],
    icon: MessageSquare,
  },
  {
    title: 'Academic management modules',
    eyebrow: 'Role-based platform',
    description:
      'Assignments, topics, course material, notifications, reporting, and separate lecturer/student capabilities.',
    tags: ['MVC', 'UAT', 'Course workflows', 'Access control'],
    icon: Blocks,
  },
  {
    title: 'MyPatil operations modules',
    eyebrow: 'Enterprise admin system',
    description:
      'Agency, user, department, SpocDesk, Redmine, schema fixes, localization cleanup, and menu management.',
    tags: ['Laravel', 'Livewire', 'MySQL', 'Redmine'],
    icon: ShieldCheck,
  },
] as const;

export const deliveryMethods = [
  {
    title: 'Translate business rules into interfaces',
    detail:
      'Turn workflows like assignments, tickets, agencies, and product/order flows into screens users can act on quickly.',
    icon: LayoutDashboard,
  },
  {
    title: 'Connect UI to reliable backend contracts',
    detail:
      'Use typed form state, API testing, validation, and clear error states so frontend behavior matches backend rules.',
    icon: Code2,
  },
  {
    title: 'Protect data and permissions',
    detail:
      'Design around roles, guarded actions, table relationships, localization, and predictable query behavior.',
    icon: Database,
  },
  {
    title: 'Ship with handover-ready ownership',
    detail:
      'Document changes, close bugs, clean UI terminology, and leave modules understandable for the next developer.',
    icon: GitBranch,
  },
] as const;

export const modernFocus = [
  { label: 'Server-first Next.js', icon: Sparkles },
  { label: 'React performance patterns', icon: Code2 },
  { label: 'Firestore-backed route handlers', icon: Database },
  { label: 'Accessible interaction states', icon: ShieldCheck },
  { label: 'AI-assisted translation flows', icon: Bot },
  { label: 'Multilingual UX', icon: Languages },
] as const;
