'use client';

import { useState, useRef, useEffect } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const events = [
  { id: '1', title: 'Solana Bootcamp', location: 'Kyiv & Online', date: 'TBA', cta: 'Join Telegram for updates', href: 'https://t.me/superteamukr' },
  { id: '2', title: 'KUMEKATHON', location: 'Ukraine', date: 'TBA', cta: 'See events', href: 'https://t.me/superteamukr' },
  { id: '3', title: 'Community Meetup', location: 'Lviv', date: 'TBA', cta: 'Get notified', href: 'https://t.me/superteamukr' },
];

const CARD_GAP = 24;
const CARD_MIN_WIDTH = 280;

export function EventsSection() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const go = (dir: 'prev' | 'next') => {
    setIndex((i) => {
      const next = dir === 'next' ? Math.min(i + 1, events.length - 1) : Math.max(i - 1, 0);
      const el = scrollRef.current;
      if (el) {
        const cardWidth = CARD_MIN_WIDTH + CARD_GAP;
        el.scrollTo({ left: next * cardWidth, behavior: 'smooth' });
      }
      return next;
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = CARD_MIN_WIDTH + CARD_GAP;
      const i = Math.round(el.scrollLeft / cardWidth);
      setIndex(Math.min(i, events.length - 1));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="events"
      className="border-b border-border/50 bg-[rgb(var(--bg-page))] py-20 sm:py-24"
      aria-labelledby="events-title"
    >
      <RevealOnScroll className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-caption font-medium uppercase tracking-widest text-accent">Upcoming</p>
        <h2 id="events-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          Events
        </h2>
        <p className="mt-4 max-w-2xl text-body leading-relaxed text-[rgb(var(--text-muted))]">
          Bootcamps, hackathons, and meetups — online and across Ukraine.
        </p>
        <p className="mt-2 text-caption text-[rgb(var(--text-muted))]">
          Follow <a href="https://t.me/superteamukr" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">Telegram</a> and <a href="https://x.com/SuperteamUKR" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:underline">X</a> for dates and locations.
        </p>

        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth sm:grid sm:grid-cols-3 sm:overflow-visible"
            aria-label="Events carousel"
          >
            {events.map((event) => (
              <a
                key={event.id}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[280px] flex-shrink-0 flex-col rounded-xl border border-border/50 bg-surface p-6 transition hover:border-accent/40 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-page))] sm:min-w-0"
              >
                <h3 className="text-title font-semibold text-[rgb(var(--text))] group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                <p className="mt-1 text-caption text-[rgb(var(--text-muted))]">{event.location}</p>
                <p className="mt-1 text-caption text-[rgb(var(--text-subtle))]">{event.date}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-caption font-medium text-accent">
                  {event.cta}
                  <span aria-hidden className="text-[0.65rem]">↗</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={() => go('prev')}
              disabled={index === 0}
              aria-label="Previous event"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface text-[rgb(var(--text))] transition hover:border-accent/40 hover:bg-surface-elevated disabled:opacity-40 disabled:pointer-events-none"
            >
              <span aria-hidden>←</span>
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Event slides">
              {events.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={index === i}
                  aria-label={`Event ${i + 1}`}
                  onClick={() => {
                    setIndex(i);
                    scrollRef.current?.scrollTo({ left: i * (CARD_MIN_WIDTH + CARD_GAP), behavior: 'smooth' });
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === i ? 'w-6 bg-accent' : 'w-2 bg-border/60 hover:bg-border'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go('next')}
              disabled={index === events.length - 1}
              aria-label="Next event"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-surface text-[rgb(var(--text))] transition hover:border-accent/40 hover:bg-surface-elevated disabled:opacity-40 disabled:pointer-events-none"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
