import type { Metadata } from 'next';
import {
  Crimson_Text,
  Dancing_Script,
  Inter,
  Playfair_Display,
} from 'next/font/google';

import './globals.css';

import { Navigation } from '@/components/layout/navigation';
import { Providers } from '@/components/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wedding App',
  description: 'A beautiful wedding planning and management application',
  keywords: ['wedding', 'planning', 'RSVP', 'celebration'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable} ${crimsonText.variable} font-sans antialiased bg-gradient-to-br from-wedding-cream via-white to-wedding-champagne text-wedding-secondary-900`}
      >
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-wedding-primary-500 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to main content
          </a>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
