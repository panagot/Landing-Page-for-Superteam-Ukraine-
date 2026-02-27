'use client';

import { WheatIcon } from './WheatIcon';

export function MissionSection() {
  return (
    <section id="mission" className="relative border-b border-border/50 bg-[rgb(var(--bg-page))] py-20 sm:py-24" aria-labelledby="mission-title">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-superteam-purple/60 via-accent/50 to-ukraine-yellow/60" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-2 text-caption font-medium uppercase tracking-widest text-accent">
          <WheatIcon className="h-4 w-4 opacity-80" aria-hidden />
          What we stand for
        </p>
        <h2 id="mission-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          Our mission
        </h2>
        <p className="mt-4 max-w-2xl text-body leading-relaxed text-[rgb(var(--text-muted))]">
          We connect Ukrainian builders with Solana. If you’ve got an idea or a prototype, we help you get it in front of the right people — and funded.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-surface p-6 transition hover:border-accent/30 hover:shadow-card-hover">
            <h3 className="text-title font-semibold text-[rgb(var(--text))]">Grants</h3>
            <p className="mt-2 text-caption text-[rgb(var(--text-muted))]">
              Solana Foundation grants from $1K–$10K. We walk you through the process and vouch for serious teams.
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-surface p-6 transition hover:border-accent/30 hover:shadow-card-hover">
            <h3 className="text-title font-semibold text-[rgb(var(--text))]">Hackathons & bootcamps</h3>
            <p className="mt-2 text-caption text-[rgb(var(--text-muted))]">
              Free Solana dev bootcamps. After that: hackathons, teams, and real jobs. No fluff.
            </p>
          </div>
        </div>
        <div className="mt-10 aspect-[2/1] max-w-4xl overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-[rgb(var(--surface))] to-[rgb(var(--surface-muted))]" aria-hidden />
      </div>
    </section>
  );
}
