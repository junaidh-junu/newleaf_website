import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/supabase';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data || []);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sample events for demonstration (will be replaced with real data from Supabase)
  const sampleEvents = [
    {
      id: 1,
      name: "Science Fair 2025",
      date: "2025-03-15",
      description: "Annual science fair showcasing student research projects across all grade levels. Students will present their innovative experiments and discoveries.",
      image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop",
      category: "academic",
      location: "School Auditorium",
      time: "9:00 AM - 3:00 PM"
    },
    {
      id: 2,
      name: "Spring Arts Festival",
      date: "2025-04-20",
      description: "Celebrate creativity with performances, art exhibitions, and interactive workshops featuring student and faculty artwork.",
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
      category: "arts",
      location: "Arts Complex",
      time: "6:00 PM - 9:00 PM"
    },
    {
      id: 3,
      name: "Athletic Championship Day",
      date: "2025-05-10",
      description: "Annual sports competition featuring track and field events, team sports finals, and recognition ceremonies.",
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "sports",
      location: "Athletic Fields",
      time: "8:00 AM - 4:00 PM"
    },
    {
      id: 4,
      name: "Parent-Teacher Conference Week",
      date: "2025-02-25",
      description: "Meet with teachers to discuss student progress, goals, and academic development in a personalized setting.",
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&h=300&fit=crop",
      category: "academic",
      location: "Individual Classrooms",
      time: "3:00 PM - 8:00 PM"
    },
    {
      id: 5,
      name: "Environmental Awareness Week",
      date: "2025-04-22",
      description: "Earth Day celebration with environmental workshops, sustainability projects, and community clean-up activities.",
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop",
      category: "community",
      location: "School Campus & Community",
      time: "All Week"
    },
    {
      id: 6,
      name: "Math Competition Regional Finals",
      date: "2025-03-08",
      description: "Top math students compete in challenging problem-solving competitions representing New Leaf School.",
      image_url: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500&h=300&fit=crop",
      category: "academic",
      location: "Regional Convention Center",
      time: "9:00 AM - 2:00 PM"
    }
  ];

  // Use sample events if no real events are loaded
  const displayEvents = events.length > 0 ? events : sampleEvents;

  const isUpcoming = (eventDate) => {
    return new Date(eventDate) >= new Date();
  };

  const formatDate = (dateString) => {
    const options = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getTimeUntilEvent = (eventDate) => {
    const now = new Date();
    const event = new Date(eventDate);
    const diffTime = event - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past Event';
    if (diffDays === 0) return 'Today!';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `In ${diffDays} days`;
    if (diffDays < 30) return `In ${Math.ceil(diffDays / 7)} weeks`;
    return `In ${Math.ceil(diffDays / 30)} months`;
  };

  const filteredEvents = displayEvents.filter(event => {
    const matchesFilter = filter === 'all' || 
      (filter === 'upcoming' && isUpcoming(event.date)) ||
      (filter === 'past' && !isUpcoming(event.date)) ||
      (filter !== 'all' && filter !== 'upcoming' && filter !== 'past' && event.category === filter);
    
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const upcomingEventsCount = displayEvents.filter(event => isUpcoming(event.date)).length;
  const pastEventsCount = displayEvents.filter(event => !isUpcoming(event.date)).length;

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            School Events
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Stay connected with our vibrant school community through exciting events and activities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="text-2xl font-bold">{upcomingEventsCount}</span>
              <span className="ml-2">Upcoming Events</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <span className="text-2xl font-bold">{pastEventsCount}</span>
              <span className="ml-2">Past Events</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-3.5">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', name: 'All Events', count: displayEvents.length },
                { id: 'upcoming', name: 'Upcoming', count: upcomingEventsCount },
                { id: 'past', name: 'Past Events', count: pastEventsCount },
                { id: 'academic', name: 'Academic', count: displayEvents.filter(e => e.category === 'academic').length },
                { id: 'sports', name: 'Sports', count: displayEvents.filter(e => e.category === 'sports').length },
                { id: 'arts', name: 'Arts', count: displayEvents.filter(e => e.category === 'arts').length },
                { id: 'community', name: 'Community', count: displayEvents.filter(e => e.category === 'community').length }
              ].map((filterOption) => (
                <button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === filterOption.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {filterOption.name}
                  <span className="ml-1 text-xs bg-white bg-opacity-20 px-1.5 py-0.5 rounded-full">
                    {filterOption.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={event.image_url} 
                      alt={event.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        isUpcoming(event.date) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}>
                        {getTimeUntilEvent(event.date)}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        event.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                        event.category === 'sports' ? 'bg-orange-100 text-orange-800' :
                        event.category === 'arts' ? 'bg-pink-100 text-pink-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.name}</h3>
                    <div className="flex items-center text-purple-600 mb-3">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{formatDate(event.date)}</span>
                    </div>
                    
                    {event.time && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    )}
                    
                    {event.location && (
                      <div className="flex items-center text-gray-600 mb-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.description}</p>
                    
                    {isUpcoming(event.date) && (
                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      {upcomingEventsCount > 0 && (
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Don't Miss These Upcoming Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mark your calendars and join us for these exciting upcoming activities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {displayEvents
                .filter(event => isUpcoming(event.date))
                .slice(0, 3)
                .map((event) => (
                  <div key={event.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl mb-3">
                      {event.category === 'academic' ? '📚' :
                       event.category === 'sports' ? '⚽' :
                       event.category === 'arts' ? '🎨' : '🌟'}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{event.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{formatDate(event.date)}</p>
                    <p className="text-gray-600 text-sm">{getTimeUntilEvent(event.date)}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Never miss an important school event. Contact us to learn how to stay updated with our school calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/about" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              About Our School
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
