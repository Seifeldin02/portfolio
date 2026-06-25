'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FileText, Briefcase, FolderKanban, Wrench, Mail, Home } from 'lucide-react';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { cn } from '@/lib/utils';

interface SearchItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const staticPages: SearchItem[] = [
  { id: 'home', title: 'Home', href: '/', category: 'Pages', icon: Home },
  { id: 'about', title: 'About', href: '/about', category: 'Pages', icon: FileText },
  {
    id: 'experience',
    title: 'Experience',
    href: '/experience',
    category: 'Pages',
    icon: Briefcase,
  },
  { id: 'projects', title: 'Projects', href: '/projects', category: 'Pages', icon: FolderKanban },
  { id: 'skills', title: 'Skills', href: '/skills', category: 'Pages', icon: Wrench },
  { id: 'contact', title: 'Contact', href: '/contact', category: 'Pages', icon: Mail },
];

const CommandPaletteContext = createContext<{ open: () => void }>({ open: () => {} });

export function useCommandPalette() {
  return useContext(CommandPaletteContext);
}

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const allItems = useMemo<SearchItem[]>(() => {
    const projectItems: SearchItem[] = projects.map((p) => ({
      id: `project-${p.id}`,
      title: p.title,
      subtitle: p.shortDescription,
      href: `/projects/${p.slug}`,
      category: 'Projects',
      icon: FolderKanban,
    }));

    const experienceItems: SearchItem[] = experiences.map((e) => ({
      id: `exp-${e.id}`,
      title: `${e.position} at ${e.company}`,
      subtitle: e.location,
      href: '/experience',
      category: 'Experience',
      icon: Briefcase,
    }));

    const skillItems: SearchItem[] = skillsData.flatMap((cat) =>
      cat.skills.map((skill) => ({
        id: `skill-${skill.name}`,
        title: skill.name,
        subtitle: cat.name,
        href: '/skills',
        category: 'Skills',
        icon: Wrench,
      }))
    );

    return [...staticPages, ...projectItems, ...experienceItems, ...skillItems];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 12);
    const q = query.toLowerCase();
    return allItems
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [allItems, query]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery('');
        setSelectedIndex(0);
      }
      if (!open) return;
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        router.push(filtered[selectedIndex].href);
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, filtered, selectedIndex, router]);

  return (
    <CommandPaletteContext.Provider value={{ open: handleOpen }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[90] flex items-start justify-center px-3 pt-20 sm:px-4 sm:pt-[15vh]">
          <button
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close search"
          />
          <div className="relative max-h-[calc(100vh-6rem)] w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search size={20} className="text-muted shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search pages, projects, skills..."
                className="min-h-12 flex-1 bg-transparent py-3 text-foreground placeholder:text-muted focus:outline-none"
                autoFocus
              />
              <kbd className="hidden sm:inline text-xs text-muted bg-surface-muted px-2 py-1 rounded">
                ESC
              </kbd>
            </div>
            <ul className="max-h-[min(24rem,55vh)] overflow-y-auto py-2" role="listbox">
              {filtered.length === 0 ? (
                <li className="px-4 py-8 text-center text-muted text-sm">No results found</li>
              ) : (
                filtered.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          router.push(item.href);
                          setOpen(false);
                        }}
                        className={cn(
                          'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors',
                          index === selectedIndex ? 'bg-accent-subtle' : 'hover:bg-surface-muted'
                        )}
                        role="option"
                        aria-selected={index === selectedIndex}
                      >
                        <Icon size={18} className="text-muted shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {item.title}
                          </p>
                          {item.subtitle && (
                            <p className="text-xs text-muted truncate">{item.subtitle}</p>
                          )}
                        </div>
                        <span className="text-xs text-muted shrink-0">{item.category}</span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
            <div className="hidden gap-4 border-t border-border px-4 py-2 text-xs text-muted sm:flex">
              <span>Arrow keys Navigate</span>
              <span>Enter Select</span>
              <span>Esc Close</span>
            </div>
          </div>
        </div>
      )}
    </CommandPaletteContext.Provider>
  );
}

export function CommandPaletteTrigger() {
  const { open } = useCommandPalette();
  return (
    <button
      onClick={open}
      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg border border-border bg-surface-muted px-3 text-sm text-muted transition-all duration-200 hover:border-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      aria-label="Open search"
      title="Open search"
    >
      <Search size={14} />
      <span className="hidden md:inline">Search</span>
      <kbd className="hidden rounded border border-border bg-surface px-1.5 py-0.5 text-xs md:inline">
        Ctrl K
      </kbd>
    </button>
  );
}
