import { HeroSection } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { TechStack } from '@/components/sections/tech-stack';
import { CertificationsSection } from '@/components/sections/certifications';
import { ExperienceHighlights } from '@/components/sections/experience-highlights';
import { ContactCTA } from '@/components/sections/contact-cta';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ExperienceHighlights />
      <TechStack />
      <CertificationsSection />
      <ContactCTA />
    </>
  );
}
