import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.email}!</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Posts</h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-500 mt-2">Published announcements</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Events</h3>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-500 mt-2">Scheduled events</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Gallery Items</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-500 mt-2">Photos and videos</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/posts"
              className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition-colors"
            >
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold">Manage Posts</h3>
              <p className="text-sm opacity-90">Add or edit announcements</p>
            </Link>
            <Link
              to="/admin/events"
              className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition-colors"
            >
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold">Manage Events</h3>
              <p className="text-sm opacity-90">Schedule school events</p>
            </Link>
            <Link
              to="/admin/gallery"
              className="bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600 transition-colors"
            >
              <div className="text-2xl mb-2">🖼️</div>
              <h3 className="font-semibold">Manage Gallery</h3>
              <p className="text-sm opacity-90">Upload photos and videos</p>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="text-gray-500 text-center py-8">
            <p>No recent activity to display.</p>
            <p className="text-sm mt-2">Activity will appear here when you start managing content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;