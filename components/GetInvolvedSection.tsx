'use client';

const actions = [
  {
    title: 'Join the community',
    description: 'Connect with builders, founders, and Solana enthusiasts in Ukraine. Get updates on events and opportunities.',
    cta: 'Join Telegram',
    href: 'https://t.me/superteamukr',
    external: true,
  },
  {
    title: 'Apply for grants',
    description: 'Have a Solana project? We help teams apply for Solana Foundation grants and connect with ecosystem funding.',
    cta: 'Learn more',
    href: '#mission',
    external: false,
  },
  {
    title: 'Attend events',
    description: 'Bootcamps, hackathons, and meetups — online and offline. Learn Solana development and meet the community.',
    cta: 'See events',
    href: 'https://x.com/SuperteamUKR',
    external: true,
  },
];

export function GetInvolvedSection() {
  return (
    <section
      id="get-involved"
      className="border-b border-border/50 bg-[rgb(var(--bg-page))] py-20 sm:py-24"
      aria-labelledby="get-involved-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="get-involved-title" className="font-display text-display font-semibold text-[rgb(var(--text))]">
          Get involved
        </h2>
        <p className="mt-4 max-w-2xl text-body leading-relaxed text-[rgb(var(--text-muted))]">
          Join Telegram for updates and events. Have a project? We’ll help you apply for grants. Just want to show up? We run meetups and bootcamps online and across Ukraine.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {actions.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/50 bg-surface p-6 transition hover:border-accent/30 hover:shadow-card"
            >
              <h3 className="text-title font-semibold text-[rgb(var(--text))]">{item.title}</h3>
              <p className="mt-2 text-caption text-[rgb(var(--text-muted))]">{item.description}</p>
              <a
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="mt-4 inline-flex items-center gap-1 text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
              >
                {item.cta}
                {item.external && (
                  <span aria-hidden className="text-[0.65rem]">↗</span>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
