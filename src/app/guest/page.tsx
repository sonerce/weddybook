import { Metadata } from 'next';
import { CalendarDays, Heart, MapPin, Music, Sparkles, Sun, Users, UtensilsCrossed } from 'lucide-react';

import { CameraCapture } from '@/components/guest/camera-capture';
import { GuestActionBar } from '@/components/guest/guest-action-bar';

export const metadata: Metadata = {
  title: 'Guest Portal | Wedding App',
  description: 'Guest access portal for wedding information and RSVP',
};

const celebrationHighlights = [
  {
    title: 'Ceremony in Istanbul',
    description:
      'Çırağan Palace gardens with Bosphorus views, sunset vows, and soft mandolin music.',
    icon: MapPin,
  },
  {
    title: 'Henna and Halay night',
    description:
      'Traditional Turkish henna ritual with live folkloric dancers and shared stories.',
    icon: Music,
  },
  {
    title: 'Family feast',
    description:
      'A seasonal Anatolian tasting menu celebrating both families and regional cuisine.',
    icon: UtensilsCrossed,
  },
];

const itinerary = [
  {
    time: '16:30',
    title: 'Guest arrival & welcome tea',
    description: 'Sip on rose-infused çay and enjoy Turkish delights as you settle in.',
    icon: Heart,
  },
  {
    time: '17:30',
    title: 'Sunset ceremony',
    description: 'Bosphorus backdrop vows accompanied by a kanun quartet.',
    icon: Sun,
  },
  {
    time: '18:30',
    title: 'Henna blessing',
    description: 'Join in the colourful henna ritual with drums, laughter, and candles.',
    icon: Sparkles,
  },
  {
    time: '19:30',
    title: 'Feast & celebration',
    description: 'Family-style dinner, live music, and dance floor opens for Halay.',
    icon: Users,
  },
];

const travelTips = [
  'Dress in elegant pastels or soft metallics to complement the couple’s palette.',
  'Shuttles depart from Taksim Square at 15:45 and return at midnight.',
  'Share your favourite memories on the live photo wall using the camera booth below.',
];

export default function GuestPage() {
  return (
    <div className="relative overflow-hidden pb-24 pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[460px] bg-gradient-to-b from-wedding-primary-100/60 via-white/80 to-transparent" aria-hidden="true" />
      <div className="absolute -left-24 top-32 -z-10 h-80 w-80 rounded-full bg-wedding-lavender/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-24 -z-10 h-72 w-72 rounded-full bg-wedding-gold/20 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl space-y-16 px-4">
        <section className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-10 shadow-dreamy backdrop-blur-xl">
          <div className="absolute -right-12 top-6 h-40 w-40 rounded-full bg-wedding-primary-200/50 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 left-24 h-48 w-48 rounded-full bg-wedding-secondary-200/30 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="flex-1 space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-wedding-secondary-500">
                Guest experience
              </p>
              <h1 className="text-4xl font-serif font-bold text-wedding-primary-900 sm:text-5xl">
                We&apos;re so grateful you&apos;re here
              </h1>
              <p className="max-w-2xl text-base text-wedding-secondary-600">
                Discover the itinerary, cultural traditions, and accessibility details for
                our Turkish-inspired celebration. We designed every moment to be warm,
                inclusive, and full of joy.
              </p>

              <GuestActionBar rsvpHref="#rsvp" />
            </div>

            <aside className="w-full max-w-sm rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-wedding-secondary-900">
                Celebration snapshot
              </h2>
              <dl className="mt-4 space-y-3 text-sm text-wedding-secondary-600">
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2">
                    <CalendarDays className="size-4 text-wedding-primary-500" aria-hidden="true" />
                    Wedding date
                  </dt>
                  <dd className="font-medium text-wedding-secondary-800">8 June 2025</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2">
                    <MapPin className="size-4 text-wedding-primary-500" aria-hidden="true" />
                    Venue
                  </dt>
                  <dd className="font-medium text-wedding-secondary-800">Çırağan Palace</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="flex items-center gap-2">
                    <Users className="size-4 text-wedding-primary-500" aria-hidden="true" />
                    Dress code
                  </dt>
                  <dd className="font-medium text-wedding-secondary-800">Formal, soft tones</dd>
                </div>
              </dl>
              <p className="mt-6 rounded-2xl bg-wedding-primary-50/70 px-4 py-3 text-sm text-wedding-primary-700">
                Need anything? Email <a href="mailto:hello@weddingapp.com" className="underline">hello@weddingapp.com</a> and our planning team will assist.
              </p>
            </aside>
          </div>
        </section>

        <section aria-labelledby="highlights-heading" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="highlights-heading" className="text-3xl font-serif font-bold text-wedding-primary-900">
                Highlights to look forward to
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-wedding-secondary-600">
                Each part of the celebration is thoughtfully curated with Turkish traditions
                and accessibility in mind.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {celebrationHighlights.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wedding-primary-100 text-wedding-primary-600">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-wedding-secondary-900">{title}</h3>
                <p className="mt-2 text-sm text-wedding-secondary-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="itinerary-heading"
          className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-elegant backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="itinerary-heading" className="text-3xl font-serif font-bold text-wedding-primary-900">
                Celebration itinerary
              </h2>
              <p className="mt-2 max-w-xl text-sm text-wedding-secondary-600">
                Arrive with ease: our team provides mobility support, dietary accommodations,
                and quiet spaces throughout the evening.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {itinerary.map(({ time, title, description, icon: Icon }) => (
              <article
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-wedding-secondary-100 bg-white/80 p-5 shadow-soft sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wedding-primary-100 text-wedding-primary-600">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-wedding-secondary-500">{time}</p>
                    <h3 className="text-base font-semibold text-wedding-secondary-900">{title}</h3>
                  </div>
                </div>
                <p className="text-sm text-wedding-secondary-600 sm:flex-1">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="photo-booth" aria-labelledby="photo-booth-heading">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="photo-booth-heading" className="text-3xl font-serif font-bold text-wedding-primary-900">
                Live photo booth
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-wedding-secondary-600">
                Capture moments from any device and instantly share them with the couple.
                The interface adapts to iOS, Android, and desktop browsers and meets WCAG
                focus guidelines.
              </p>
            </div>
          </div>
          <CameraCapture />
        </section>

        <section
          id="rsvp"
          aria-labelledby="rsvp-heading"
          className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 id="rsvp-heading" className="text-3xl font-serif font-bold text-wedding-primary-900">
                RSVP & travel notes
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-wedding-secondary-600">
                We value accessibility and comfort. Please share dietary needs, mobility
                support requests, or song dedications in the RSVP form so we can personalise
                the celebration for you.
              </p>
            </div>
            <GuestActionBar rsvpHref="#rsvp-form" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {travelTips.map((tip) => (
              <article
                key={tip}
                className="rounded-2xl border border-wedding-secondary-100 bg-white/70 p-5 text-sm text-wedding-secondary-600 shadow-soft"
              >
                {tip}
              </article>
            ))}
          </div>

          <form
            id="rsvp-form"
            aria-label="RSVP form (demo)"
            className="mt-8 grid gap-6 rounded-3xl border border-wedding-secondary-100 bg-white/90 p-6 shadow-inner"
          >
            <p className="text-sm text-wedding-secondary-500">
              This is a demo RSVP section showcasing accessible form states. Integrate your
              preferred form service here.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
