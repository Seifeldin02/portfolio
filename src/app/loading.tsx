export default function Loading() {
  return (
    <div className="flex min-h-[58vh] items-center justify-center px-6" role="status">
      <div className="w-full max-w-sm">
        <div className="relative mx-auto h-20 w-44" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-accent bg-background shadow-[0_0_18px_color-mix(in_srgb,var(--accent)_24%,transparent)] motion-safe:animate-pulse"
              style={{ left: `${index * 48}%`, animationDelay: `${index * 140}ms` }}
            />
          ))}
        </div>
        <p className="mt-2 text-center font-mono text-xs uppercase tracking-[0.16em] text-muted">
          Loading engineering profile
        </p>
      </div>
    </div>
  );
}
