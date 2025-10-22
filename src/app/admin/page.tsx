import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Wedding App',
  description: 'Administrative dashboard for wedding management',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-wedding-secondary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-serif font-bold text-wedding-secondary-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-wedding-secondary-600">
              Manage your wedding event and guest information
            </p>
          </header>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-wedding-secondary-600">
                    Total Guests
                  </p>
                  <p className="text-2xl font-bold text-wedding-secondary-900">
                    --
                  </p>
                </div>
                <div className="w-10 h-10 bg-wedding-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-wedding-primary-600">👥</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-wedding-secondary-600">
                    RSVP Responses
                  </p>
                  <p className="text-2xl font-bold text-wedding-secondary-900">
                    --
                  </p>
                </div>
                <div className="w-10 h-10 bg-wedding-sage/20 rounded-full flex items-center justify-center">
                  <span className="text-wedding-sage">✓</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-wedding-secondary-600">
                    Pending RSVPs
                  </p>
                  <p className="text-2xl font-bold text-wedding-secondary-900">
                    --
                  </p>
                </div>
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600">⏳</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-wedding-secondary-600">Messages</p>
                  <p className="text-2xl font-bold text-wedding-secondary-900">
                    --
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">💌</span>
                </div>
              </div>
            </div>
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-wedding-secondary-900 mb-4">
                Guest Management
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                Manage guest list, invitations, and RSVP tracking
              </p>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  View Guest List
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Send Invitations
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  RSVP Tracking
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-wedding-secondary-900 mb-4">
                Event Management
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                Configure event details, timeline, and logistics
              </p>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Event Details
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Schedule & Timeline
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Vendor Management
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-wedding-secondary-900 mb-4">
                Content Management
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                Update photos, messages, and website content
              </p>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Photo Gallery
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Guest Messages
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Site Settings
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-wedding-secondary-900 mb-4">
                Reports & Analytics
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                View insights and generate reports
              </p>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  RSVP Analytics
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Guest Demographics
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-wedding-secondary-50 hover:bg-wedding-secondary-100 transition-colors">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
