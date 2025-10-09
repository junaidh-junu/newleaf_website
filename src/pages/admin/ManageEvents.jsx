import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../../services/supabase';

const ManageEvents = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
    image_url: ''
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        await updateEvent(editingEvent.id, formData);
      } else {
        await createEvent(formData);
      }

      setFormData({ name: '', date: '', description: '', image_url: '' });
      setShowForm(false);
      setEditingEvent(null);
      loadEvents();
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Error saving event. Please try again.');
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      date: event.date,
      description: event.description,
      image_url: event.image_url || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(id);
        loadEvents();
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('Error deleting event. Please try again.');
      }
    }
  };

  const cancelEdit = () => {
    setFormData({ name: '', date: '', description: '', image_url: '' });
    setShowForm(false);
    setEditingEvent(null);
  };

  const isUpcoming = (eventDate) => {
    return new Date(eventDate) >= new Date();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
            <p className="text-gray-600 mt-2">Schedule and manage school events</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {showForm ? 'Cancel' : 'Add New Event'}
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter event name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter event description"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingEvent ? 'Update Event' : 'Create Event'}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Events List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">All Events ({events.length})</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {events.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-4">📅</div>
                <p className="text-lg font-medium">No events scheduled</p>
                <p className="text-sm mt-2">Create your first event to get started!</p>
              </div>
            ) : (
              events.map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          isUpcoming(event.date) 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {isUpcoming(event.date) ? 'Upcoming' : 'Past'}
                        </span>
                      </div>
                      <p className="text-primary-600 font-medium mb-2">{formatDate(event.date)}</p>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </div>
                    {event.image_url && (
                      <div className="ml-6">
                        <img
                          src={event.image_url}
                          alt={event.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 hover:text-red-800 font-medium text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;