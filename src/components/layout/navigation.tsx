'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', public: true },
  { href: '/guest', label: 'Guest Portal', public: true },
  { href: '/admin', label: 'Admin', public: false },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50 border-b border-wedding-secondary-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-script text-wedding-primary-600">
              💕
            </span>
            <span className="text-xl font-serif font-semibold text-wedding-secondary-900">
              Wedding App
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-wedding-primary-600 bg-wedding-primary-50'
                    : 'text-wedding-secondary-600 hover:text-wedding-primary-600 hover:bg-wedding-primary-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-wedding-secondary-600 hover:text-wedding-primary-600 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
