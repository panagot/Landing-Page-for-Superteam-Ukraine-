'use client';

const partners = [
  { name: 'Solana Foundation', href: 'https://solana.com/foundation', description: 'Ecosystem grants and support' },
  { name: 'Superteam', href: 'https://superteam.fun', description: 'Global Solana community' },
  { name: 'Solana Foundation Ukraine', href: 'https://solana.com', description: 'Local ecosystem representation' },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative border-b border-border/50 bg-[rgb(var(--surface))] py-16 sm:py-20"
      aria-labelledby="partners-title"
    >
      {/* Solana gradient (ecosystem); Ukraine blue accent */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-ukraine-blue/80 via-[rgb(var(--solana-purple)/0.5)] to-[rgb(var(--solana-green)/0.5)]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-caption font-medium uppercase tracking-widest text-[rgb(var(--text-subtle))]">
          Built on Solana
        </p>
        <h2 id="partners-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          Partners
        </h2>
        <p className="mt-4 max-w-2xl text-body text-[rgb(var(--text-muted))]">
          We work with Solana Foundation, Superteam, and local ecosystem partners to bring grants, education, and opportunities to Ukraine.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[200px] flex-col rounded-xl border border-border/50 bg-surface-elevated px-6 py-4 transition hover:scale-[1.02] hover:border-accent/40 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))]"
            >
              <span className="text-title font-semibold text-[rgb(var(--text))]">{p.name}</span>
              <span className="mt-1 text-caption text-[rgb(var(--text-muted))]">{p.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
