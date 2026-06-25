export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    proficiency: 'expert' | 'advanced' | 'intermediate';
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'Interfaces, forms, routing, state, and responsive layouts',
    skills: [
      { name: 'React.js', proficiency: 'expert' },
      { name: 'Next.js', proficiency: 'advanced' },
      { name: 'TypeScript', proficiency: 'expert' },
      { name: 'HTML/CSS', proficiency: 'advanced' },
      { name: 'JavaScript', proficiency: 'expert' },
      { name: 'Responsive UI', proficiency: 'expert' },
      { name: 'Frontend Performance', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Backend',
    description: 'API integration, Laravel modules, and server-side routes',
    skills: [
      { name: 'Laravel', proficiency: 'expert' },
      { name: 'PHP', proficiency: 'advanced' },
      { name: 'Java Servlets/JSP', proficiency: 'advanced' },
      { name: 'REST APIs', proficiency: 'advanced' },
      { name: 'Firebase Admin SDK', proficiency: 'intermediate' },
      { name: 'Java', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Databases',
    description: 'Relational data work and project-level persistence',
    skills: [
      { name: 'MySQL', proficiency: 'advanced' },
      { name: 'Eloquent ORM', proficiency: 'advanced' },
      { name: 'Laravel Migrations', proficiency: 'advanced' },
      { name: 'Database Design', proficiency: 'advanced' },
      { name: 'Firebase', proficiency: 'intermediate' },
      { name: 'Firestore', proficiency: 'intermediate' },
      { name: 'SQL', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Languages',
    description: 'Programming languages and core paradigms',
    skills: [
      { name: 'JavaScript', proficiency: 'expert' },
      { name: 'TypeScript', proficiency: 'expert' },
      { name: 'Java', proficiency: 'advanced' },
      { name: 'PHP', proficiency: 'advanced' },
      { name: 'OOP', proficiency: 'expert' },
    ],
  },
  {
    name: 'Tools',
    description: 'Development workflow and collaboration',
    skills: [
      { name: 'Git', proficiency: 'expert' },
      { name: 'Jira', proficiency: 'advanced' },
      { name: 'Browser DevTools', proficiency: 'advanced' },
      { name: 'Postman', proficiency: 'advanced' },
      { name: 'Agile/Scrum', proficiency: 'advanced' },
      { name: 'SDLC', proficiency: 'advanced' },
      { name: 'Code Review', proficiency: 'advanced' },
    ],
  },
  {
    name: 'DevOps',
    description: 'Cloud foundations and deployment awareness',
    skills: [
      { name: 'AWS', proficiency: 'intermediate' },
      { name: 'CI/CD', proficiency: 'intermediate' },
    ],
  },
  {
    name: 'Frameworks',
    description: 'Frameworks used across portfolio, academic, and company work',
    skills: [
      { name: 'React', proficiency: 'expert' },
      { name: 'Next.js', proficiency: 'advanced' },
      { name: 'Laravel', proficiency: 'expert' },
      { name: 'Firebase', proficiency: 'intermediate' },
      { name: 'Spring MVC', proficiency: 'intermediate' },
      { name: 'Livewire', proficiency: 'advanced' },
      { name: 'Zustand', proficiency: 'advanced' },
    ],
  },
];
