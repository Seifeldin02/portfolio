import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section, SectionHeader } from '@/components/ui/section';

const interviewReasons = [
  {
    title: 'Production experience across frontend and full-stack',
    detail:
      'Built React dashboards for a 30-person team and Laravel modules for a 50+ person enterprise system — shipping features end-to-end in Agile sprints.',
  },
  {
    title: 'Demonstrated engineering depth in real projects',
    detail:
      'Designed RBAC systems, RESTful API architectures, normalized database schemas, and validated releases through structured testing and UAT.',
  },
  {
    title: 'International collaboration and communication',
    detail:
      'Worked across teams in Egypt, Malaysia, and the US. IELTS Band 7.5 and experience in code reviews for distributed engineering teams.',
  },
  {
    title: 'Strong academic foundation with practical delivery',
    detail:
      'B.S. Software Engineering (CGPA 3.6/4.0) with solo delivery of a 300+ page documented final year project and zero critical defects at release.',
  },
];

export function RecruiterSection() {
  return (
    <Section muted divider>
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <SectionHeader
          eyebrow="Why interview me"
          title="Engineering that recruiters can verify"
          description="Concrete experience, documented projects, and credentials you can check — not buzzwords."
        />

        <div className="space-y-5">
          {interviewReasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 p-4 rounded-xl border border-border bg-surface"
            >
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="font-medium text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{reason.detail}</p>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Get in Touch
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/experience">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Experience
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
