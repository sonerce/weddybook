import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guest Portal | Wedding App',
  description: 'Guest access portal for wedding information and RSVP',
};

export default function GuestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-primary-50 to-wedding-champagne">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold text-wedding-primary-900 mb-4">
              Guest Portal
            </h1>
            <p className="text-xl text-wedding-secondary-600 font-light">
              Welcome to our wedding celebration
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-semibold text-wedding-primary-800 mb-4">
                Wedding Information
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                Find all the details about our special day, including venue
                information, schedule, and travel recommendations.
              </p>
              <button className="bg-wedding-primary-500 text-white px-6 py-3 rounded-lg hover:bg-wedding-primary-600 transition-colors">
                View Details
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-semibold text-wedding-primary-800 mb-4">
                RSVP
              </h2>
              <p className="text-wedding-secondary-600 mb-6">
                Please let us know if you can join us for our special day. Your
                response helps us plan the perfect celebration.
              </p>
              <button className="bg-wedding-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                RSVP Now
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-wedding-primary-800 mb-2">
                Registry
              </h3>
              <p className="text-sm text-wedding-secondary-600">
                View our gift registry
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-wedding-primary-800 mb-2">
                Photos
              </h3>
              <p className="text-sm text-wedding-secondary-600">
                Share your memories
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-wedding-primary-800 mb-2">
                Messages
              </h3>
              <p className="text-sm text-wedding-secondary-600">
                Leave us a note
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
