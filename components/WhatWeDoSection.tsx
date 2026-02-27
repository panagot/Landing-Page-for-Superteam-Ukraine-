'use client';

const LearnIcon = () => (
  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const EarnIcon = () => (
  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const BuildIcon = () => (
  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const items = [
  {
    id: 'learn',
    title: 'Learn',
    icon: LearnIcon,
    description: 'Solana dev bootcamps and workshops. From zero to shipping — with real projects and mentors from the ecosystem.',
    cta: 'See events',
    href: 'https://t.me/superteamukr',
    external: true,
  },
  {
    id: 'earn',
    title: 'Earn',
    icon: EarnIcon,
    description: 'Grants ($1K–$10K), bounties, and paid gigs inside hub projects. Students get bonuses; founders get runway.',
    cta: 'Apply for grants',
    href: '#mission',
    external: false,
  },
  {
    id: 'build',
    title: 'Build',
    icon: BuildIcon,
    description: 'Hackathons, KUMEKATHON, and an acceleration track for the best teams. You build; we connect you to funders.',
    cta: 'Join community',
    href: 'https://t.me/superteamukr',
    external: true,
  },
];

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="border-b border-border/50 bg-[rgb(var(--surface))] py-20 sm:py-24" aria-labelledby="what-we-do-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-caption font-medium uppercase tracking-widest text-accent">Learn · Earn · Build</p>
        <h2 id="what-we-do-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          What we do
        </h2>
        <p className="mt-3 text-body leading-relaxed text-[rgb(var(--text-muted))]">
          Three ways to get in: learn Solana, earn from grants and bounties, or build with the community.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-xl border border-border/50 bg-surface-elevated p-6 transition hover:border-accent/40 hover:shadow-card-hover"
              >
                <Icon />
                <h3 className="mt-3 text-title font-semibold text-accent">{item.title}</h3>
                <div className="mt-3 aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/40 bg-[rgb(var(--surface-muted))] flex items-center justify-center text-[rgb(var(--text-subtle))] text-caption">
                  Add photo
                </div>
                <p className="mt-2 text-caption leading-snug text-[rgb(var(--text-muted))]">{item.description}</p>
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="mt-4 inline-flex items-center gap-1 text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
                >
                  {item.cta}
                  {item.external && <span aria-hidden className="text-[0.65rem]">↗</span>}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
