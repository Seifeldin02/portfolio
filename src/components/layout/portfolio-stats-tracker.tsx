'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const VISITOR_KEY = 'seif-portfolio-visitor-id';
const STATS_EVENT = 'portfolio-stats-updated';

export interface PortfolioStats {
  enabled: boolean;
  totalVisits?: number;
  activeVisitors?: number;
  activeWindowSeconds?: number;
}

function getVisitorId() {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) {
    return existing;
  }

  const generated =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID().replace(/-/g, '')
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`;

  localStorage.setItem(VISITOR_KEY, generated);
  return generated;
}

export function publishPortfolioStats(stats: PortfolioStats) {
  window.dispatchEvent(new CustomEvent<PortfolioStats>(STATS_EVENT, { detail: stats }));
}

export function subscribeToPortfolioStats(callback: (stats: PortfolioStats) => void) {
  const listener = (event: Event) => {
    callback((event as CustomEvent<PortfolioStats>).detail);
  };

  window.addEventListener(STATS_EVENT, listener);
  return () => window.removeEventListener(STATS_EVENT, listener);
}

async function sendStats(action: 'view' | 'heartbeat', path: string) {
  const response = await fetch('/api/portfolio-stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitorId: getVisitorId(),
      path,
      action,
    }),
    cache: 'no-store',
  });

  const stats = (await response.json()) as PortfolioStats;
  publishPortfolioStats(stats);
  return stats;
}

export function PortfolioStatsTracker() {
  const pathname = usePathname();
  const pathRef = useRef(pathname);

  useEffect(() => {
    pathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    let active = true;

    sendStats('view', pathRef.current).catch(() => {
      if (active) {
        publishPortfolioStats({ enabled: false });
      }
    });

    const heartbeat = window.setInterval(() => {
      sendStats('heartbeat', pathRef.current).catch(() =>
        publishPortfolioStats({ enabled: false })
      );
    }, 30_000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        sendStats('heartbeat', pathRef.current).catch(() =>
          publishPortfolioStats({ enabled: false })
        );
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      active = false;
      window.clearInterval(heartbeat);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
