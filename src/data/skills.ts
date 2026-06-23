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
    description: 'Building responsive, accessible user interfaces',
    skills: [
      { name: 'React.js', proficiency: 'expert' },
      { name: 'Next.js', proficiency: 'advanced' },
      { name: 'TypeScript', proficiency: 'expert' },
      { name: 'HTML/CSS', proficiency: 'advanced' },
      { name: 'JavaScript', proficiency: 'expert' },
    ],
  },
  {
    name: 'Backend',
    description: 'Server-side development and API design',
    skills: [
      { name: 'Laravel', proficiency: 'expert' },
      { name: 'PHP', proficiency: 'advanced' },
      { name: 'Java Servlets/JSP', proficiency: 'advanced' },
      { name: 'RESTful APIs', proficiency: 'expert' },
      { name: 'Java', proficiency: 'advanced' },
    ],
  },
  {
    name: 'Databases',
    description: 'Relational data modeling and persistence',
    skills: [
      { name: 'MySQL', proficiency: 'advanced' },
      { name: 'Eloquent ORM', proficiency: 'advanced' },
      { name: 'Laravel Migrations', proficiency: 'advanced' },
      { name: 'Database Design', proficiency: 'expert' },
      { name: 'Firebase', proficiency: 'advanced' },
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
      { name: 'Agile/Scrum', proficiency: 'expert' },
      { name: 'SDLC', proficiency: 'expert' },
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
    description: 'Application frameworks and architectural patterns',
    skills: [
      { name: 'React', proficiency: 'expert' },
      { name: 'Next.js', proficiency: 'advanced' },
      { name: 'Laravel', proficiency: 'expert' },
      { name: 'Firebase', proficiency: 'advanced' },
      { name: 'MVC', proficiency: 'expert' },
    ],
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: 'aws-cloud',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational knowledge of AWS cloud services and architecture',
  },
  {
    id: 'ielts',
    title: 'IELTS – Overall Band 7.5',
    issuer: 'IDP IELTS',
    date: '2024',
    description: 'Strong English proficiency for international engineering collaboration',
  },
  {
    id: 'cgpa',
    title: 'CGPA Appreciation – 3.6/4.0',
    issuer: 'Universiti Teknologi Malaysia',
    date: '2025',
    description: 'Academic recognition for sustained performance in Software Engineering',
  },
];
