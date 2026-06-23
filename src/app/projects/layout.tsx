import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Portfolio projects including EduComm, ECO-JB, Outfitters, and confidential MyPatil work.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
