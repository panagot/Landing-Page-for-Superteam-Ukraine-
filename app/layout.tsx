import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Rajdhani } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Superteam Ukraine | ex Kumeka Team',
  description:
    "Ukraine's Solana hub. Grants, bootcamps, hackathons — and a real community.",
  keywords: ['Solana', 'Superteam Ukraine', 'Kumeka', 'Web3', 'Ukraine'],
  openGraph: {
    title: 'Superteam Ukraine | ex Kumeka Team',
    description: "Ukraine's Solana hub. Grants, bootcamps, hackathons — and a real community.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${plusJakarta.variable} ${rajdhani.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0c14" />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="skip-link fixed left-4 top-4 z-[100] -translate-y-16 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[rgb(10_12_20)] shadow-lg transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg-page))]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
