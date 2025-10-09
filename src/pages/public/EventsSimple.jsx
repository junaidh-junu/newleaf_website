import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/supabase';

const EventsSimple = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        console.log('Loading events data...');
        const data = await getEvents();
        console.log('Events data loaded:', data);
        setEvents(data || []);
      } catch (error) {
        console.error('Error loading events:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Events Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">School Events</h1>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-center mb-4">
          Found {events.length} events
        </p>
        
        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found.</p>
            <p className="text-gray-400">Check the database connection or add some events.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={event.id || index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    {event.title || 'Untitled Event'}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {event.description || 'No description available'}
                  </p>
                  <div className="text-gray-500 text-sm space-y-1">
                    <p><strong>Date:</strong> {event.event_date ? new Date(event.event_date).toLocaleDateString() : 'No date'}</p>
                    <p><strong>Location:</strong> {event.location || 'TBD'}</p>
                    <p><strong>Published:</strong> {event.is_published ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsSimple;