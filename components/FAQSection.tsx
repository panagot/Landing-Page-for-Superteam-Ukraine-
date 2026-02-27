'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'faq-1',
    q: 'What is Superteam Ukraine?',
    a: 'We’re the main Solana hub in Ukraine (ex Kumeka Team). We run grants, hackathons, bootcamps, and community events so builders can learn, earn, and ship on Solana.',
  },
  {
    id: 'faq-2',
    q: 'How can I get a grant for my project?',
    a: 'Join Telegram, share your project, and we’ll walk you through applying for Solana Foundation grants. Typical range is $1K–$10K. We vouch for serious teams.',
  },
  {
    id: 'faq-3',
    q: 'Do I need to know Solana to join?',
    a: 'No. We have free bootcamps for beginners. Learn from scratch, then join hackathons or apply for grants when you’re ready.',
  },
  {
    id: 'faq-4',
    q: 'Where are events held?',
    a: 'Online and in person across Ukraine. Telegram and X (@SuperteamUKR) have the latest schedules and locations.',
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section
      id="faq"
      className="border-b border-border/50 bg-[rgb(var(--bg-page))] py-16 sm:py-20"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="faq-title" className="font-display text-display font-semibold text-[rgb(var(--text))]">
          FAQ
        </h2>
        <p className="mt-4 max-w-2xl text-body text-[rgb(var(--text-muted))]">
          Frequently asked questions about Superteam Ukraine and how to get involved.
        </p>
        <dl className="mt-10 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-border/50 bg-surface transition hover:border-border/80"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    id={`${faq.id}-q`}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-6 py-4 text-left text-title font-semibold text-[rgb(var(--text))] transition hover:bg-surface-elevated/50 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  >
                    {faq.q}
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-accent transition-transform duration-200"
                      aria-hidden
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`${faq.id}-answer`}
                  role="region"
                  aria-labelledby={`${faq.id}-q`}
                  className="overflow-hidden transition-all duration-200 ease-out"
                  style={{
                    maxHeight: isOpen ? 800 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="border-t border-border/50 px-6 py-4 text-caption text-[rgb(var(--text-muted))]">
                    {faq.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
