'use client';

import Link from 'next/link';
import React from 'react';
import { Download, Loader2, TicketCheck, Wand2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast-provider';

type GuestActionBarProps = {
  rsvpHref?: string;
};

export function GuestActionBar({ rsvpHref = '#rsvp' }: GuestActionBarProps) {
  const { toast } = useToast();
  const [isRsvpLoading, setIsRsvpLoading] = React.useState(false);
  const [isDownloadLoading, setIsDownloadLoading] = React.useState(false);
  const timeoutsRef = React.useRef<number[]>([]);

  React.useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutsRef.current = [];
    };
  }, []);

  const handleRsvp = React.useCallback(() => {
    setIsRsvpLoading(true);

    const timeoutId = window.setTimeout(() => {
      setIsRsvpLoading(false);
      timeoutsRef.current = timeoutsRef.current.filter((id) => id !== timeoutId);

      if (typeof document !== 'undefined' && rsvpHref.startsWith('#')) {
        const target = document.getElementById(rsvpHref.replace('#', ''));
        target?.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof window !== 'undefined' && rsvpHref) {
        window.open(rsvpHref, '_blank', 'noopener');
      }

      toast({
        title: 'RSVP ready',
        description: 'Scroll to the RSVP section to confirm your attendance.',
        variant: 'success',
      });
    }, 1100);

    timeoutsRef.current.push(timeoutId);
  }, [rsvpHref, toast]);

  const handleDownload = React.useCallback(() => {
    setIsDownloadLoading(true);

    const timeoutId = window.setTimeout(() => {
      setIsDownloadLoading(false);
      timeoutsRef.current = timeoutsRef.current.filter((id) => id !== timeoutId);
      toast({
        title: 'Itinerary sent',
        description: 'We have emailed the latest schedule straight to your inbox.',
        variant: 'info',
      });
    }, 1400);

    timeoutsRef.current.push(timeoutId);
  }, [toast]);

  return (
    <div className="flex flex-wrap items-center gap-3" aria-label="Guest quick actions">
      <Button
        type="button"
        onClick={handleRsvp}
        disabled={isRsvpLoading}
        className="gap-2 rounded-full bg-wedding-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-wedding-primary-600"
      >
        {isRsvpLoading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <TicketCheck className="size-4" aria-hidden="true" />
        )}
        {isRsvpLoading ? 'Opening RSVP…' : 'RSVP now'}
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={handleDownload}
        disabled={isDownloadLoading}
        className="gap-2 rounded-full border-wedding-secondary-200 px-6 py-3 text-sm font-semibold text-wedding-secondary-700 hover:bg-white"
      >
        {isDownloadLoading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Download className="size-4" aria-hidden="true" />
        )}
        {isDownloadLoading ? 'Preparing itinerary…' : 'Download itinerary'}
      </Button>

      <Button
        asChild
        variant="ghost"
        className="gap-2 rounded-full px-6 py-3 text-sm font-semibold text-wedding-secondary-600 hover:bg-wedding-secondary-50"
      >
        <Link href="#photo-booth">
          <Wand2 className="size-4" aria-hidden="true" />
          Open photo booth
        </Link>
      </Button>
    </div>
  );
}
