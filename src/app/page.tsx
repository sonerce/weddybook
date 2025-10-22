import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-24 pt-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-wedding-primary-100/60 via-white/70 to-transparent" aria-hidden="true" />
      <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full bg-wedding-lavender/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-12 bottom-0 -z-10 h-64 w-64 rounded-full bg-wedding-gold/20 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl px-4">
        <header className="mb-20 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/70 text-4xl shadow-soft">
              💕
            </span>
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-wedding-secondary-500">
            A celebration of love in Istanbul
          </p>
          <h1 className="mt-6 text-5xl font-serif font-bold text-wedding-primary-900 sm:text-6xl md:text-7xl">
            Welcome to Our
            <span className="block font-script text-wedding-primary-600">
              Wedding Celebration
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-wedding-secondary-600">
            Join us for an unforgettable Turkish-inspired celebration filled with
            warmth, music, and the joy of two families coming together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/guest"
              className="inline-flex items-center gap-2 rounded-full bg-wedding-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-wedding-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300"
            >
              Explore guest experience
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-full border border-wedding-secondary-200 px-6 py-3 text-sm font-semibold text-wedding-secondary-700 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300"
            >
              Admin dashboard
            </Link>
          </div>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {/* Guest Portal */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-elegant backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-dreamy">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wedding-primary-100 via-white/60 to-wedding-primary-200 opacity-70" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-wedding-primary-900">
                  Guest portal
                </h2>
                <p className="mt-2 max-w-md text-sm text-wedding-secondary-600">
                  RSVP, access travel tips, and join the photo stream from
                  wherever you are in the world.
                </p>
              </div>
              <span className="hidden rounded-full bg-wedding-primary-100 px-3 py-1 text-sm font-medium text-wedding-primary-600 sm:inline-flex">
                Designed for friends & family
              </span>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-wedding-secondary-700">
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-sage" aria-hidden="true" />
                Cultural itinerary with Turkish delights
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-sage" aria-hidden="true" />
                Digital RSVP with instant confirmations
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-sage" aria-hidden="true" />
                Gift registry curated with local artisans
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-sage" aria-hidden="true" />
                Mobile photo booth with instant uploads
              </li>
            </ul>

            <Link
              href="/guest"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-wedding-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-wedding-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300"
            >
              Enter guest portal
            </Link>
          </article>

          {/* Admin Portal */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 shadow-elegant backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-dreamy">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-wedding-secondary-100 via-white/60 to-wedding-secondary-200 opacity-70" aria-hidden="true" />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-wedding-secondary-900">
                  Admin dashboard
                </h2>
                <p className="mt-2 max-w-md text-sm text-wedding-secondary-600">
                  Coordinate guest experiences, schedules, and logistics with
                  confidence and clarity.
                </p>
              </div>
              <span className="hidden rounded-full bg-wedding-secondary-100 px-3 py-1 text-sm font-medium text-wedding-secondary-700 sm:inline-flex">
                Built for planners
              </span>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-wedding-secondary-700">
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-gold" aria-hidden="true" />
                Realtime RSVP analytics dashboard
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-gold" aria-hidden="true" />
                Guest communication and seating tools
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-gold" aria-hidden="true" />
                Vendor and timeline coordination
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-wedding-gold" aria-hidden="true" />
                Accessible design with audit logs
              </li>
            </ul>

            <Link
              href="/admin"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-wedding-secondary-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-wedding-secondary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-primary-300"
            >
              Access admin dashboard
            </Link>
          </article>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-4">
          {[
            { label: 'Cultural itinerary', emoji: '📅', description: 'Ceremony, henna night & Bosphorus cruise' },
            { label: 'Digital invitations', emoji: '✉️', description: 'Send elegant invites with personalisation' },
            { label: 'Gifts & charity', emoji: '🎁', description: 'Support local artisans and family causes' },
            { label: 'Photo memories', emoji: '📸', description: 'Upload from phone, tablet, or desktop' },
          ].map((feature) => (
            <article
              key={feature.label}
              className="rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-soft backdrop-blur-md transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wedding-primary-100 text-xl">
                <span aria-hidden="true">{feature.emoji}</span>
                <span className="sr-only">{feature.label}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-wedding-secondary-800">
                {feature.label}
              </h3>
              <p className="mt-2 text-sm text-wedding-secondary-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
