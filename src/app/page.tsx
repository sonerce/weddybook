import Link from 'next/link';

import { Navigation } from '@/components/layout/navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-cream via-white to-wedding-champagne">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <span className="text-6xl mb-4 block">💕</span>
              <h1 className="text-6xl md:text-7xl font-serif font-bold text-wedding-primary-900 mb-6 leading-tight">
                Welcome to Our
                <span className="block font-script text-wedding-primary-600">
                  Wedding Celebration
                </span>
              </h1>
              <p className="text-xl text-wedding-secondary-600 max-w-2xl mx-auto font-light">
                Join us in celebrating love, joy, and the beginning of our
                forever journey together
              </p>
            </div>
          </div>

          {/* Portal Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Guest Portal */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-wedding-primary-400 to-wedding-primary-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-dreamy transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-wedding-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-wedding-primary-900 mb-4">
                    Guest Portal
                  </h2>
                  <p className="text-wedding-secondary-600 mb-6">
                    Find all wedding details, RSVP, view our registry, and share
                    in the celebration
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full mr-3"></span>
                    Wedding information & schedule
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full mr-3"></span>
                    RSVP management
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full mr-3"></span>
                    Gift registry access
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-sage rounded-full mr-3"></span>
                    Photo sharing
                  </div>
                </div>

                <Link
                  href="/guest"
                  className="block w-full bg-wedding-primary-500 text-white text-center py-4 rounded-xl font-medium hover:bg-wedding-primary-600 transition-colors shadow-soft"
                >
                  Enter Guest Portal
                </Link>
              </div>
            </div>

            {/* Admin Portal */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-wedding-secondary-400 to-wedding-secondary-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-dreamy transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-wedding-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-wedding-secondary-900 mb-4">
                    Admin Dashboard
                  </h2>
                  <p className="text-wedding-secondary-600 mb-6">
                    Manage your wedding event, track RSVPs, and coordinate all
                    celebration details
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-gold rounded-full mr-3"></span>
                    Guest list management
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-gold rounded-full mr-3"></span>
                    RSVP tracking & analytics
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-gold rounded-full mr-3"></span>
                    Event configuration
                  </div>
                  <div className="flex items-center text-wedding-secondary-700">
                    <span className="w-2 h-2 bg-wedding-gold rounded-full mr-3"></span>
                    Content management
                  </div>
                </div>

                <Link
                  href="/admin"
                  className="block w-full bg-wedding-secondary-600 text-white text-center py-4 rounded-xl font-medium hover:bg-wedding-secondary-700 transition-colors shadow-soft"
                >
                  Access Admin Panel
                </Link>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-wedding-secondary-900 mb-8">
              Everything You Need for Your Perfect Day
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-wedding-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📅</span>
                </div>
                <p className="text-sm font-medium text-wedding-secondary-700">
                  Event Planning
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wedding-sage/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">✉️</span>
                </div>
                <p className="text-sm font-medium text-wedding-secondary-700">
                  Digital Invites
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wedding-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎁</span>
                </div>
                <p className="text-sm font-medium text-wedding-secondary-700">
                  Gift Registry
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-wedding-lavender/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📸</span>
                </div>
                <p className="text-sm font-medium text-wedding-secondary-700">
                  Photo Sharing
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
