'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { buttonClassName } from '@/components/ui/button';

const RESOLVED_KEY = 'seif-portfolio-easter-egg-resolved';
const DISMISSED_KEY = 'seif-portfolio-easter-egg-dismissed';
const ACTIVE_KEY = 'seif-portfolio-easter-egg-active';
const ROLL_KEY = 'seif-portfolio-easter-egg-roll';
const SESSION_PATHS_KEY = 'seif-portfolio-terminal-paths';
const SESSION_STARTED_KEY = 'seif-portfolio-terminal-started';
const MINIMUM_VISIT_MS = 22000;
const MINIMUM_PATHS = 3;
const APPEAR_CHANCE = 0.22;

function readSessionPaths() {
  try {
    const parsed: unknown = JSON.parse(sessionStorage.getItem(SESSION_PATHS_KEY) ?? '[]');
    if (!Array.isArray(parsed)) {
      return new Set<string>();
    }

    return new Set(parsed.filter((item): item is string => typeof item === 'string'));
  } catch {
    return new Set<string>();
  }
}

function sessionWonTheRoll() {
  const existingRoll = sessionStorage.getItem(ROLL_KEY);
  if (existingRoll) {
    return existingRoll === 'show';
  }

  const nextRoll = Math.random() <= APPEAR_CHANCE ? 'show' : 'skip';
  sessionStorage.setItem(ROLL_KEY, nextRoll);
  return nextRoll === 'show';
}

export function RecruiterTerminal() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [showPrompt, setShowPrompt] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (localStorage.getItem(RESOLVED_KEY) || localStorage.getItem(DISMISSED_KEY)) {
      return;
    }

    if (sessionStorage.getItem(ACTIVE_KEY) === 'true') {
      const restoreTimer = window.setTimeout(() => setShowPrompt(true), 0);
      return () => window.clearTimeout(restoreTimer);
    }

    const startedAt = Number(sessionStorage.getItem(SESSION_STARTED_KEY) ?? Date.now());
    sessionStorage.setItem(SESSION_STARTED_KEY, String(startedAt));

    const paths = readSessionPaths();
    paths.add(pathname);
    sessionStorage.setItem(SESSION_PATHS_KEY, JSON.stringify([...paths]));

    if (!sessionWonTheRoll()) {
      return;
    }

    const remainingTime = Math.max(0, MINIMUM_VISIT_MS - (Date.now() - startedAt));
    const timer = window.setTimeout(() => {
      const latestPaths = readSessionPaths();
      if (
        !localStorage.getItem(RESOLVED_KEY) &&
        !localStorage.getItem(DISMISSED_KEY) &&
        latestPaths.size >= MINIMUM_PATHS
      ) {
        sessionStorage.setItem(ACTIVE_KEY, 'true');
        setShowPrompt(true);
      }
    }, remainingTime);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const openEasterEgg = () => {
    localStorage.setItem(RESOLVED_KEY, 'true');
    sessionStorage.removeItem(ACTIVE_KEY);
    setShowPrompt(false);
    setOpen(true);
  };

  const dismissPrompt = () => {
    localStorage.setItem(DISMISSED_KEY, 'true');
    sessionStorage.removeItem(ACTIVE_KEY);
    setShowPrompt(false);
    setOpen(false);
  };

  const dismissModal = () => {
    setOpen(false);
  };

  return (
    <>
      {showPrompt && !open ? (
        <motion.div
          className="fixed inset-x-3 bottom-4 z-[80] mx-auto max-w-sm rounded-lg border border-border bg-surface p-3 pr-10 shadow-lg sm:left-auto sm:right-4 sm:mx-0"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          role="status"
          aria-live="polite"
        >
          <button
            type="button"
            onClick={dismissPrompt}
            className="absolute right-2 top-2 rounded-md p-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Dismiss hidden hiring button"
          >
            <X size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={openEasterEgg}
            className="group flex min-w-0 items-center gap-2 rounded-md text-left font-mono text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label="Open hidden hiring easter egg"
          >
            <Terminal size={16} className="shrink-0 text-accent" aria-hidden="true" />
            <span className="truncate">do_not_click.exe</span>
            <span className="text-accent motion-safe:animate-pulse" aria-hidden="true">
              _
            </span>
          </button>
          <p className="mt-1 text-xs text-muted">A suspicious file appeared.</p>
        </motion.div>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/35 px-3 py-4 sm:items-center">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-terminal-title"
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <Terminal size={17} className="text-accent" aria-hidden="true" />
                <h2 id="portfolio-terminal-title" className="font-mono text-sm text-foreground">
                  portfolio terminal
                </h2>
              </div>
              <button
                type="button"
                ref={closeButtonRef}
                onClick={dismissModal}
                className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label="Close terminal note"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-2 px-4 py-5 font-mono text-sm leading-relaxed">
              <p className="text-accent">$ ./do_not_click.exe --i-am-a-recruiter</p>
              <p className="text-foreground">You clicked it. Legally brave.</p>
              <div className="rounded-lg border border-border bg-background p-3 text-muted">
                <p>A totally real confidential agreement has been generated.</p>
                <p>Clause 1: you secretly agreed to hire Seifeldin within 7 days.</p>
                <p>
                  Clause 2: ignoring this may trigger console.warn(&quot;lawsuit.exe warming
                  up&quot;).
                </p>
              </div>
              <p className="text-muted">Relax, this is a joke. The contact form is real though.</p>
            </div>

            <div className="flex flex-col-reverse gap-2 border-t border-border px-4 py-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={dismissModal}
                className={buttonClassName({ variant: 'outline', className: 'w-full sm:w-auto' })}
              >
                Dismiss
              </button>
              <Link
                href="/contact"
                onClick={dismissModal}
                className={buttonClassName({ className: 'w-full sm:w-auto' })}
              >
                Follow up before lawsuit.exe
              </Link>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
