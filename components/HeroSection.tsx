'use client';

import { WheatIcon } from './WheatIcon';

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-border/50 bg-[rgb(var(--bg-page))] wheat-pattern"
      aria-labelledby="hero-title"
    >
      {/* Purple–yellow gradient overlay (Superteam energy) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-superteam-purple/15 via-transparent to-transparent"
        aria-hidden
      />
      {/* Ukraine flag bar (blue → yellow) */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-ukraine-blue to-ukraine-yellow"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(var(--accent)/0.08),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[rgb(var(--accent)/0.03)] to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ukraine-blue/5 to-transparent" aria-hidden />
      <div className="absolute right-8 top-12 opacity-[0.12]" aria-hidden>
        <WheatIcon className="h-28 w-28 text-accent" />
      </div>
      <div className="absolute bottom-12 left-8 opacity-[0.08]" aria-hidden>
        <WheatIcon className="h-20 w-20 text-accent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="animate-fade-in text-caption font-medium uppercase tracking-widest text-accent">
            ex Kumeka Team
          </p>
          <h1
            id="hero-title"
            className="font-display animate-fade-in-up animate-delay-1 mt-3 text-3xl font-bold tracking-tight text-[rgb(var(--text))] sm:text-4xl md:text-5xl"
          >
            Superteam Ukraine: Empowering Solana Builders in Ukraine
          </h1>
          <p className="animate-fade-in-up animate-delay-2 mt-4 text-body leading-relaxed text-[rgb(var(--text-muted))]">
            The heartbeat of Ukraine&apos;s Solana community. Grants, bootcamps, hackathons — and a real place to learn, earn, and build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up animate-delay-3">
            <a
              href="https://t.me/superteamukr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[rgb(10_12_20)] shadow-[0_0_20px_rgb(var(--accent)/0.3)] transition hover:scale-[1.02] hover:bg-accent-hover hover:shadow-[0_0_24px_rgb(var(--accent)/0.4)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-page))]"
            >
              Join the Community
            </a>
            <a
              href="#what-we-do"
              className="inline-flex min-h-[44px] min-w-[44px] items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-[rgb(var(--text))] transition hover:bg-surface-elevated hover:border-accent/30 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-page))]"
            >
              What we do
            </a>
          </div>
        </div>

        {/* Photo placeholder with overlay and CTA */}
        <div
          className="animate-fade-in-up animate-delay-4 relative mt-12 max-w-3xl overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-[rgb(var(--surface-elevated))] to-[rgb(var(--surface-muted))] shadow-lg aspect-video"
          aria-hidden
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[rgb(var(--surface)/0.85)] text-[rgb(var(--text))]">
            <div className="flex gap-3">
              <WheatIcon className="h-10 w-10 text-accent/60" />
              <WheatIcon className="h-10 w-10 text-accent/40" />
              <WheatIcon className="h-10 w-10 text-accent/30" />
            </div>
            <span className="text-caption text-[rgb(var(--text-muted))]">Community · Solana · Ukraine</span>
            <p className="text-body font-medium">Real-life events in Kyiv, Lviv & online</p>
            <a
              href="https://t.me/superteamukr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-caption font-semibold text-[rgb(10_12_20)] transition hover:bg-accent-hover"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
