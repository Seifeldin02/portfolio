'use client';

import { useEffect, useState } from 'react';
import {
  PortfolioStats,
  publishPortfolioStats,
  subscribeToPortfolioStats,
} from '@/components/layout/portfolio-stats-tracker';

async function fetchStats() {
  const response = await fetch('/api/portfolio-stats', { cache: 'no-store' });
  const stats = (await response.json()) as PortfolioStats;
  publishPortfolioStats(stats);
  return stats;
}

function formatCount(value: number | undefined) {
  if (typeof value !== 'number') {
    return '--';
  }

  return new Intl.NumberFormat('en-US').format(value);
}

export function PortfolioPulse() {
  const [stats, setStats] = useState<PortfolioStats>({ enabled: true });

  useEffect(() => {
    const unsubscribe = subscribeToPortfolioStats(setStats);

    fetchStats().catch(() => setStats({ enabled: false }));
    const timer = window.setInterval(() => {
      fetchStats().catch(() => setStats({ enabled: false }));
    }, 30_000);

    return () => {
      unsubscribe();
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="fixed bottom-3 left-3 z-40 rounded-full border border-border bg-surface/95 px-3 py-1.5 text-xs text-muted shadow-sm backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label={
        stats.enabled
          ? `${formatCount(stats.totalVisits)} visits and ${formatCount(
              stats.activeVisitors
            )} here now`
          : 'Portfolio pulse unavailable'
      }
    >
      <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      {stats.enabled ? (
        <span>
          {formatCount(stats.totalVisits)} visits {'\u00b7'} {formatCount(stats.activeVisitors)}{' '}
          here now
        </span>
      ) : (
        <span>Pulse offline</span>
      )}
    </div>
  );
}
