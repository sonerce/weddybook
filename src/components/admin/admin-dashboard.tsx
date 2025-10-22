'use client';

import React from 'react';
import {
  CalendarClock,
  CheckCircle2,
  Gift,
  Loader2,
  MessageCircleHeart,
  Sparkles,
  UploadCloud,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast-provider';

const metrics = [
  {
    label: 'Confirmed guests',
    value: '128',
    change: '+12 this week',
    icon: Users,
    accent: 'bg-wedding-primary-100 text-wedding-primary-600',
  },
  {
    label: 'Pending RSVPs',
    value: '24',
    change: 'Send gentle reminder',
    icon: CalendarClock,
    accent: 'bg-wedding-gold/20 text-wedding-secondary-700',
  },
  {
    label: 'Gifts received',
    value: '86',
    change: '7 new contributions',
    icon: Gift,
    accent: 'bg-wedding-sage/20 text-wedding-secondary-700',
  },
  {
    label: 'Messages awaiting review',
    value: '9',
    change: 'Moderation recommended',
    icon: MessageCircleHeart,
    accent: 'bg-wedding-lavender/20 text-wedding-secondary-700',
  },
];

const workflowSteps = [
  {
    title: 'Send itinerary updates',
    detail: 'Include accessibility accommodations and menu selections.',
  },
  {
    title: 'Coordinate vendors',
    detail: 'Confirm floral delivery, music setlist, and lighting cues.',
  },
  {
    title: 'Spotlight stories',
    detail: 'Approve three new guest memories for the live gallery.',
  },
];

const complianceChecklist = [
  'All forms meet WCAG 2.2 AA focus and label requirements.',
  'Camera booth tested on Safari (iOS), Chrome (Android), and desktop.',
  'Colour contrast meets accessible standards for primary palette.',
];

export function AdminDashboard() {
  const { toast } = useToast();
  const [isSyncing, setIsSyncing] = React.useState(false);
  const [isBroadcasting, setIsBroadcasting] = React.useState(false);
  const [isUploadLoading, setUploadLoading] = React.useState(false);

  const handleSync = React.useCallback(() => {
    setIsSyncing(true);

    window.setTimeout(() => {
      setIsSyncing(false);
      toast({
        title: 'Guest list synced',
        description: 'RSVP responses, meal preferences, and allergies are up to date.',
        variant: 'success',
      });
    }, 1400);
  }, [toast]);

  const handleBroadcast = React.useCallback(() => {
    setIsBroadcasting(true);

    window.setTimeout(() => {
      setIsBroadcasting(false);
      toast({
        title: 'Messages scheduled',
        description: 'Guests will receive itinerary reminders in the next hour.',
        variant: 'info',
      });
    }, 1600);
  }, [toast]);

  const handleUploadSeating = React.useCallback(() => {
    setUploadLoading(true);

    window.setTimeout(() => {
      setUploadLoading(false);
      toast({
        title: 'Seating chart uploaded',
        description: 'We will notify you of any conflicts or dietary mismatches.',
        variant: 'success',
      });
    }, 1800);
  }, [toast]);

  return (
    <div className="space-y-12 pb-24 pt-12">
      <header className="flex flex-col gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-dreamy backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-wedding-secondary-500">
            Admin control centre
          </p>
          <h1 className="text-4xl font-serif font-bold text-wedding-secondary-900">
            Coordinate every detail with grace
          </h1>
          <p className="max-w-2xl text-sm text-wedding-secondary-600">
            Monitor RSVPs, keep guests informed, and ensure the celebration reflects
            your vision. All tools are optimised for responsive use and accessibility.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            onClick={handleSync}
            disabled={isSyncing}
            className="gap-2 rounded-full bg-wedding-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-wedding-primary-600"
          >
            {isSyncing ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="size-4" aria-hidden="true" />
            )}
            {isSyncing ? 'Synchronising…' : 'Synchronise RSVPs'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleBroadcast}
            disabled={isBroadcasting}
            className="gap-2 rounded-full border-wedding-secondary-200 px-6 py-3 text-sm font-semibold text-wedding-secondary-700 hover:bg-white"
          >
            {isBroadcasting ? (
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles className="size-4" aria-hidden="true" />
            )}
            {isBroadcasting ? 'Scheduling…' : 'Send guest update'}
          </Button>
        </div>
      </header>

      <section aria-labelledby="metrics-heading" className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="metrics-heading" className="text-2xl font-serif font-semibold text-wedding-secondary-900">
              Event overview
            </h2>
            <p className="text-sm text-wedding-secondary-600">
              Key metrics for guest flow, gifts, and community engagement.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map(({ label, value, change, icon: Icon, accent }) => (
            <article
              key={label}
              className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${accent}`}>
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wide text-wedding-secondary-500">
                {label}
              </p>
              <p className="mt-1 text-3xl font-semibold text-wedding-secondary-900">{value}</p>
              <p className="mt-4 text-sm text-wedding-secondary-600">{change}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-6 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur-xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-wedding-secondary-900">
                Today&apos;s workflow
              </h2>
              <p className="text-sm text-wedding-secondary-600">
                Keep the celebration timeline running smoothly.
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={handleUploadSeating}
              disabled={isUploadLoading}
              className="gap-2 rounded-full border-wedding-secondary-200 px-5 py-2 text-sm font-semibold text-wedding-secondary-700 hover:bg-white"
            >
              {isUploadLoading ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <UploadCloud className="size-4" aria-hidden="true" />
              )}
              {isUploadLoading ? 'Uploading…' : 'Upload seating chart'}
            </Button>
          </div>

          <ol className="space-y-4">
            {workflowSteps.map(({ title, detail }, index) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-wedding-secondary-100 bg-white/80 p-5 shadow-soft"
              >
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-wedding-primary-100 text-xs font-semibold text-wedding-primary-600">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-wedding-secondary-900">{title}</h3>
                  <p className="mt-1 text-sm text-wedding-secondary-600">{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="flex flex-col gap-5 rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft">
          <h2 className="text-2xl font-serif font-semibold text-wedding-secondary-900">
            Accessibility & compliance
          </h2>
          <p className="text-sm text-wedding-secondary-600">
            We regularly audit guest experiences to maintain inclusive standards.
          </p>
          <ul className="space-y-4 text-sm text-wedding-secondary-600">
            {complianceChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-inner">
                <CheckCircle2 className="mt-0.5 size-4 text-wedding-sage" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="rounded-2xl bg-wedding-primary-50/80 px-4 py-3 text-xs text-wedding-primary-700">
            Tip: Run the built-in accessibility audit before publishing schedule updates to
            guests.
          </p>
        </article>
      </section>
    </div>
  );
}
