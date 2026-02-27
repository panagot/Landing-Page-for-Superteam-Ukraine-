'use client';

import { useState } from 'react';
import { WheatIcon } from './WheatIcon';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!value) {
      setStatus('error');
      return;
    }
    if (!isValid) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // Simulate submit — replace with real API when ready
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <footer className="mt-auto border-t border-border/50 bg-surface/50" role="contentinfo">
      {/* Ukrainian flag–inspired divider (blue → yellow wave) */}
      <div
        className="h-1 w-full bg-gradient-to-r from-ukraine-blue via-ukraine-blue/80 to-ukraine-yellow"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2">
            <WheatIcon className="h-5 w-5 text-accent" />
            <div>
              <p className="text-caption font-medium text-[rgb(var(--text))]">Superteam Ukraine</p>
              <p className="text-caption mt-0.5 text-[rgb(var(--text-muted))]">
                ex Kumeka Team · #1 Solana Web3 hub in Ukraine
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:gap-6" aria-label="Footer navigation">
            <a href="https://t.me/superteamukr" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
              Telegram
            </a>
            <a href="https://x.com/SuperteamUKR" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
              X/Twitter
            </a>
            <a href="https://superteam.fun" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
              Superteam Global
            </a>
            <a href="https://solana.com" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap text-caption font-medium text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
              Solana
            </a>
          </nav>
        </div>
        <div className="mt-6 rounded-lg border border-border/50 bg-surface/50 p-4">
          <p className="text-caption font-medium text-[rgb(var(--text))]">Stay updated</p>
          <p className="text-caption mt-1 text-[rgb(var(--text-muted))]">
            Subscribe for events and community updates.
          </p>
          {status === 'success' ? (
            <p className="mt-3 text-caption font-medium text-accent" role="status">
              Thanks — you&apos;re on the list.
            </p>
          ) : (
            <form
              className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center"
              onSubmit={handleSubmit}
              aria-label="Newsletter"
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="your@email.com"
                disabled={status === 'submitting'}
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                className="flex-1 rounded-lg border border-border/50 bg-[rgb(var(--bg))] px-3 py-2 text-caption text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-subtle))] focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60 aria-[invalid=true]:border-red-500/50"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-lg bg-accent px-4 py-2 text-caption font-medium text-[rgb(10_12_20)] transition hover:bg-accent-hover disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg-page))]"
              >
                {status === 'submitting' ? '…' : 'Subscribe'}
              </button>
              {status === 'error' && (
                <p id="newsletter-error" className="text-caption text-red-400 sm:w-full">
                  Please enter a valid email.
                </p>
              )}
            </form>
          )}
        </div>
        <p className="mt-6 text-caption text-[rgb(var(--text-subtle))]">
          Ukraine&apos;s Solana hub. Events, grants, and builders — in one place.
        </p>
        <p className="mt-2 text-caption text-[rgb(var(--text-subtle))]">
          © {new Date().getFullYear()} Superteam Ukraine. ex Kumeka Team.
        </p>
      </div>
    </footer>
  );
}
