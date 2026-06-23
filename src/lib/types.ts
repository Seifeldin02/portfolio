// Type definitions for the portfolio
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  image?: string;
  github?: string;
  liveUrl?: string;
  tags: string[];
  technologies: string[];
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  category: string;
  items: string[];
}
