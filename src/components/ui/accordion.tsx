'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      if (!allowMultiple) {
        newExpanded.clear();
      }
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggle(item.id)}
            className={cn(
              'w-full px-4 py-3 flex items-center justify-between',
              'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800',
              'transition-colors font-medium text-left'
            )}
          >
            <span className="text-slate-900 dark:text-white">{item.title}</span>
            {expanded.has(item.id) ? (
              <ChevronUp size={20} className="text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronDown size={20} className="text-slate-600 dark:text-slate-400" />
            )}
          </button>

          {expanded.has(item.id) && (
            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
