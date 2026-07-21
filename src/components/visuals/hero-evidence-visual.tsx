'use client';

import { Component, lazy, Suspense, useSyncExternalStore, type ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

const EngineeringCanvas = lazy(() => import('@/components/visuals/engineering-canvas'));

const desktopQuery = '(min-width: 768px)';

function subscribeToDesktop(callback: () => void) {
  const mediaQuery = window.matchMedia(desktopQuery);
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopQuery).matches;
}

function getServerSnapshot() {
  return false;
}

function StaticEvidenceGraph() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <div className="absolute left-[52%] top-[46%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25 bg-accent-subtle/60 shadow-[0_0_80px_rgba(34,211,238,0.12)]" />
      {[
        'left-[18%] top-[24%]',
        'left-[27%] top-[72%]',
        'left-[52%] top-[14%]',
        'left-[76%] top-[27%]',
        'left-[82%] top-[68%]',
        'left-[56%] top-[82%]',
      ].map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-3 w-3 rotate-45 border border-accent/50 bg-accent-subtle`}
        />
      ))}
      <div className="absolute inset-[16%] rounded-full border border-dashed border-accent/15" />
      <div className="absolute inset-[28%] rounded-full border border-accent/10" />
    </div>
  );
}

class VisualErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <StaticEvidenceGraph /> : this.props.children;
  }
}

export function HeroEvidenceVisual() {
  const desktop = useSyncExternalStore(subscribeToDesktop, getDesktopSnapshot, getServerSnapshot);
  const reducedMotion = useReducedMotion() ?? false;

  return desktop ? (
    <VisualErrorBoundary>
      <Suspense fallback={<StaticEvidenceGraph />}>
        <EngineeringCanvas reducedMotion={reducedMotion} />
      </Suspense>
    </VisualErrorBoundary>
  ) : (
    <StaticEvidenceGraph />
  );
}
