'use client';

const members = [
  { id: '1', name: 'Core team', role: 'Community & ecosystem' },
  { id: '2', name: 'Builders', role: 'Mentors & leads' },
  { id: '3', name: 'Partners', role: 'Solana & Superteam' },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="border-b border-border/50 bg-[rgb(var(--surface))] py-20 sm:py-24"
      aria-labelledby="team-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-caption font-medium uppercase tracking-widest text-accent">Who we are</p>
        <h2 id="team-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          Team
        </h2>
        <p className="mt-4 max-w-2xl text-body leading-relaxed text-[rgb(var(--text-muted))]">
          Community leads, mentors, and ecosystem partners driving Solana in Ukraine.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-border/50 bg-surface-elevated p-6 transition hover:border-accent/30 hover:shadow-card"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--surface-muted))] text-2xl text-[rgb(var(--text-subtle))]">
                ?
              </div>
              <h3 className="mt-4 text-title font-semibold text-[rgb(var(--text))]">{m.name}</h3>
              <p className="mt-1 text-caption text-[rgb(var(--text-muted))]">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
