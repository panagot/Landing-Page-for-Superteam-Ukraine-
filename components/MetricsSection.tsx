'use client';

const metrics = [
  { id: 'hackathon', value: '300+', label: 'projects submitted to Solana hackathon' },
  { id: 'funded', value: '100+', label: 'projects received prizes, grants, and seed funding' },
  { id: 'volume', value: '$1.5M+', label: 'our projects received in prizes, grants, and funding' },
  { id: 'events', value: '180+', label: 'offline and online events in Ukraine' },
];

export function MetricsSection() {
  return (
    <section className="border-b border-border/50 bg-[rgb(var(--bg-page))] py-20 sm:py-24" aria-labelledby="metrics-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="metrics-title" className="font-display text-display font-semibold text-[rgb(var(--text))]">
          By the numbers
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.id} className="rounded-xl border border-border/50 border-l-4 border-l-accent bg-surface p-6 text-center">
              <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-caption leading-snug text-[rgb(var(--text-muted))]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
