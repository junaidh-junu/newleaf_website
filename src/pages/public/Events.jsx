import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">School Events</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Stay updated with our upcoming events and activities.
        </p>
        
        <div className="space-y-6">
          {/* Events will be loaded dynamically from Supabase */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-xl font-semibold mb-2">Sample Event</h3>
            <p className="text-gray-600 mb-2">Event description will be displayed here.</p>
            <span className="text-sm text-green-600 font-medium">Date: TBD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;