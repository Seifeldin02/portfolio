export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    proficiency: 'primary' | 'regular' | 'familiar';
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    description: 'Interfaces, forms, routing, state, and responsive layouts',
    skills: [
      { name: 'React.js', proficiency: 'primary' },
      { name: 'Next.js', proficiency: 'regular' },
      { name: 'TypeScript', proficiency: 'primary' },
      { name: 'HTML/CSS', proficiency: 'regular' },
      { name: 'JavaScript', proficiency: 'primary' },
      { name: 'Responsive UI', proficiency: 'primary' },
      { name: 'Frontend Performance', proficiency: 'regular' },
    ],
  },
  {
    name: 'Backend',
    description: 'API integration, Laravel modules, and server-side routes',
    skills: [
      { name: 'Laravel', proficiency: 'regular' },
      { name: 'PHP', proficiency: 'regular' },
      { name: 'Java Servlets/JSP', proficiency: 'regular' },
      { name: 'REST APIs', proficiency: 'regular' },
      { name: 'Firebase Admin SDK', proficiency: 'familiar' },
      { name: 'Java', proficiency: 'regular' },
    ],
  },
  {
    name: 'Databases',
    description: 'Relational data work and project-level persistence',
    skills: [
      { name: 'MySQL', proficiency: 'regular' },
      { name: 'Eloquent ORM', proficiency: 'regular' },
      { name: 'Laravel Migrations', proficiency: 'regular' },
      { name: 'Database Design', proficiency: 'regular' },
      { name: 'Firebase', proficiency: 'familiar' },
      { name: 'Firestore', proficiency: 'familiar' },
      { name: 'SQL', proficiency: 'regular' },
    ],
  },
  {
    name: 'Languages',
    description: 'Programming languages and core paradigms',
    skills: [
      { name: 'JavaScript', proficiency: 'primary' },
      { name: 'TypeScript', proficiency: 'primary' },
      { name: 'Java', proficiency: 'regular' },
      { name: 'PHP', proficiency: 'regular' },
      { name: 'OOP', proficiency: 'regular' },
    ],
  },
  {
    name: 'Tools',
    description: 'Development workflow and collaboration',
    skills: [
      { name: 'Git', proficiency: 'regular' },
      { name: 'Jira', proficiency: 'regular' },
      { name: 'Browser DevTools', proficiency: 'regular' },
      { name: 'Postman', proficiency: 'regular' },
      { name: 'Agile/Scrum', proficiency: 'regular' },
      { name: 'SDLC', proficiency: 'regular' },
      { name: 'Code Review', proficiency: 'regular' },
    ],
  },
  {
    name: 'DevOps',
    description: 'Cloud foundations and deployment awareness',
    skills: [
      { name: 'AWS', proficiency: 'familiar' },
      { name: 'CI/CD', proficiency: 'familiar' },
    ],
  },
  {
    name: 'Frameworks',
    description: 'Frameworks used across portfolio, academic, and company work',
    skills: [
      { name: 'React', proficiency: 'primary' },
      { name: 'Next.js', proficiency: 'regular' },
      { name: 'Laravel', proficiency: 'regular' },
      { name: 'Firebase', proficiency: 'familiar' },
      { name: 'Spring MVC', proficiency: 'familiar' },
      { name: 'Livewire', proficiency: 'regular' },
      { name: 'Zustand', proficiency: 'regular' },
    ],
  },
];
