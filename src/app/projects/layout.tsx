import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Portfolio projects including EduComm academic platform and IPRK Carbon Monitoring System.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
