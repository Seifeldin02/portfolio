import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { RevealOnView } from '@/components/layout/reveal';
import type { SkillCategory } from '@/data/skills';
import { cn } from '@/lib/utils';

export const skillTierLabels = {
  primary: 'Core use',
  regular: 'Regular use',
  familiar: 'Familiar',
} as const;

interface SkillCategoryGridProps {
  categories: SkillCategory[];
  className?: string;
  reveal?: boolean;
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <Card className="flex h-full min-w-0 flex-col p-5 sm:p-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{category.description}</p>
      </div>

      <div className="mt-5 grid gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex min-h-10 min-w-0 items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 px-3 py-2 text-sm"
          >
            <span className="min-w-0 font-medium text-foreground">{skill.name}</span>
            <Badge variant="outline" className="shrink-0 bg-surface text-xs">
              {skillTierLabels[skill.proficiency]}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SkillCategoryGrid({
  categories,
  className,
  reveal = true,
}: SkillCategoryGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', className)}>
      {categories.map((category, index) => {
        const card = <SkillCategoryCard category={category} />;

        if (!reveal) {
          return <div key={category.name}>{card}</div>;
        }

        return (
          <RevealOnView key={category.name} delay={(index % 2) * 0.05} className="h-full">
            {card}
          </RevealOnView>
        );
      })}
    </div>
  );
}
