import { deliveryMethods } from '@/data/portfolio-proof';
import { Badge } from '@/components/ui/badge';
import { Section, SectionHeader } from '@/components/ui/section';

const pipeline = ['Requirement', 'UI contract', 'API state', 'Data model', 'QA', 'Handover'];

export function DeliveryLab() {
  return (
    <Section muted divider containerSize="wide">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
        <div>
          <SectionHeader
            eyebrow="How I build"
            title="Modern frontend polish backed by backend awareness"
            description="The portfolio is intentionally moving from a static resume into a product-style case-study surface: clearer flows, stronger interaction states, and more evidence of system ownership."
            className="mb-8"
          />
          <div className="flex flex-wrap gap-2">
            {pipeline.map((item) => (
              <Badge key={item} variant="outline" className="bg-surface">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deliveryMethods.map((method) => {
            const Icon = method.icon;
            return (
              <article
                key={method.title}
                className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-subtle p-2.5">
                  <Icon size={20} className="text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{method.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{method.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
