'use client';

const events = [
  { id: '1', title: 'Solana Bootcamp', location: 'Kyiv & Online', date: 'TBA', cta: 'Join Telegram for updates', href: 'https://t.me/superteamukr' },
  { id: '2', title: 'KUMEKATHON', location: 'Ukraine', date: 'TBA', cta: 'See events', href: 'https://t.me/superteamukr' },
  { id: '3', title: 'Community Meetup', location: 'Lviv', date: 'TBA', cta: 'Get notified', href: 'https://t.me/superteamukr' },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="border-b border-border/50 bg-[rgb(var(--bg-page))] py-16 sm:py-20"
      aria-labelledby="events-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-caption font-medium uppercase tracking-widest text-accent">Upcoming</p>
        <h2 id="events-title" className="font-display mt-1 text-display font-semibold text-[rgb(var(--text))]">
          Events
        </h2>
        <p className="mt-4 max-w-2xl text-body text-[rgb(var(--text-muted))]">
          Bootcamps, hackathons, and meetups — online and across Ukraine. Follow us for dates and locations.
        </p>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-[280px] flex-col rounded-xl border border-border/50 bg-surface p-6 transition hover:border-accent/40 hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-page))] sm:min-w-0"
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
      </div>
    </section>
  );
}
