import { HeroSection } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { TechStack } from '@/components/sections/tech-stack';
import { ExperienceHighlights } from '@/components/sections/experience-highlights';
import { SystemsProof } from '@/components/sections/systems-proof';
import { DeliveryLab } from '@/components/sections/delivery-lab';
import { RecruiterSection } from '@/components/sections/recruiter-section';
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
      <SystemsProof />
      <FeaturedProjects />
      <DeliveryLab />
      <ExperienceHighlights />
      <TechStack />
      <RecruiterSection />
      <ContactCTA />
    </>
  );
}
