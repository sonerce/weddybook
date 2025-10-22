import { Metadata } from 'next';

import { AdminDashboard } from '@/components/admin/admin-dashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Wedding App',
  description: 'Administrative dashboard for wedding management',
};

export default function AdminPage() {
  return (
    <div className="relative overflow-hidden pb-24 pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-wedding-secondary-100/70 via-white/80 to-transparent" aria-hidden="true" />
      <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-wedding-primary-100/40 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-12 -z-10 h-72 w-72 rounded-full bg-wedding-secondary-200/30 blur-3xl" aria-hidden="true" />

      <div className="container mx-auto max-w-6xl px-4">
        <AdminDashboard />
      </div>
    </div>
  );
}
