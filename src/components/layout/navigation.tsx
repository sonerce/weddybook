'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', description: 'Landing page' },
  { href: '/guest', label: 'Guest Portal', description: 'Details & RSVP' },
  { href: '/admin', label: 'Admin', description: 'Dashboard' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty('overflow');
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-soft backdrop-blur-xl border-b border-wedding-secondary-200/70">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-white/0 px-3 py-1.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300"
          >
            <span
              className="text-2xl transition-transform duration-300 group-hover:-rotate-6"
              aria-hidden="true"
            >
              💕
            </span>
            <span className="text-lg font-serif font-semibold text-wedding-secondary-900">
              Wedding App
            </span>
            <span className="sr-only">Back to homepage</span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 rounded-full bg-white/70 px-1 py-1 shadow-inner ring-1 ring-wedding-secondary-100/70 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300',
                    isActive
                      ? 'bg-wedding-primary-100 text-wedding-primary-700 shadow-sm'
                      : 'text-wedding-secondary-600 hover:bg-wedding-primary-50 hover:text-wedding-primary-600'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-wedding-primary-400" aria-hidden="true" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden border-wedding-primary-200 text-wedding-primary-600 hover:bg-wedding-primary-50 md:inline-flex"
            >
              <Link href="/guest#rsvp">RSVP</Link>
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-wedding-secondary-700 hover:text-wedding-primary-600 md:hidden"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden',
          isMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="container mx-auto px-4 pb-6">
          <nav
            aria-label="Mobile navigation"
            className="space-y-3 rounded-3xl border border-wedding-secondary-100 bg-white/95 p-4 shadow-elegant"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex flex-col rounded-2xl border px-4 py-3 text-base font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300',
                    isActive
                      ? 'border-wedding-primary-200 bg-wedding-primary-50 text-wedding-primary-700'
                      : 'border-transparent bg-white/70 text-wedding-secondary-700 hover:border-wedding-primary-100 hover:bg-wedding-primary-50/80 hover:text-wedding-primary-600'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-wedding-secondary-500">
                    {link.description}
                  </span>
                </Link>
              );
            })}

            <div className="rounded-2xl border border-wedding-secondary-100 bg-wedding-cream/80 px-4 py-3 text-sm text-wedding-secondary-600">
              We craft an inclusive celebration experience with accessible
              controls across devices.
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
