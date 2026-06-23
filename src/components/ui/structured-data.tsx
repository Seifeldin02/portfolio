import { siteConfig } from '@/lib/site-config';
import { projects } from '@/data/projects';

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    description: siteConfig.description,
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Laravel',
      'RESTful APIs',
      'Java',
      'SQL',
      'Agile Software Development',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.fullName,
    },
  };

  const projectSchemas = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.shortDescription,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    author: {
      '@type': 'Person',
      name: siteConfig.fullName,
    },
  }));

  const schemas = [personSchema, websiteSchema, ...projectSchemas];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
