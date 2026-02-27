'use client';

import Link from 'next/link';
import { useState } from 'react';
import { UkraineFlagIcon } from './UkraineFlagIcon';

const nav = [
  { href: '/', label: 'Home' },
  { href: '#events', label: 'Events' },
  { href: '#team', label: 'Team' },
  { href: '#mission', label: 'Grants' },
  { href: '#get-involved', label: 'Community' },
  { href: '#faq', label: 'FAQ' },
];

function NavLinks({ className = '' }: { className?: string }) {
  return (
    <>
      {nav.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className={`whitespace-nowrap rounded-md px-2 py-2 text-caption font-medium text-[rgb(var(--text-muted))] transition hover:bg-surface/80 hover:text-[rgb(var(--text))] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] ${className}`}
        >
          {label}
        </a>
      ))}
      <a
        href="https://t.me/superteamukr"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-md px-3 py-2 text-caption font-medium text-accent hover:bg-accent/10 transition ${className}`}
      >
        Telegram
      </a>
      <a
        href="https://x.com/SuperteamUKR"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-md px-3 py-2 text-caption font-medium text-[rgb(var(--text-muted))] hover:bg-surface/80 hover:text-accent transition ${className}`}
      >
        X
      </a>
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-[rgb(var(--bg))]/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-md text-body font-semibold text-[rgb(var(--text))] no-underline transition hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))] focus-visible:outline-none"
        >
          <UkraineFlagIcon className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">Superteam Ukraine</span>
          <span className="sm:hidden">ST UA</span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-1 sm:flex sm:gap-2" aria-label="Main navigation">
          <NavLinks />
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-[rgb(var(--text))] hover:bg-surface/80 focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-border/50 bg-[rgb(var(--bg))] sm:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile navigation">
          <NavLinks className="flex min-h-[44px] items-center px-3 py-3" />
        </nav>
      </div>
    </header>
  );
}
