import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to New Leaf School
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nurturing young minds for a brighter future through quality education, 
            innovative teaching methods, and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose New Leaf School?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
              <p className="text-gray-600">
                Comprehensive curriculum designed to develop critical thinking and problem-solving skills.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Faculty</h3>
              <p className="text-gray-600">
                Dedicated teachers committed to nurturing each student's potential and growth.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Holistic Development</h3>
              <p className="text-gray-600">
                Focus on academic, physical, emotional, and social development of every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/academics"
              className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Academics</h3>
              <p>Discover our curriculum and programs</p>
            </Link>
            <Link
              to="/achievements"
              className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Achievements</h3>
              <p>Our awards and recognitions</p>
            </Link>
            <Link
              to="/gallery"
              className="bg-purple-500 text-white p-6 rounded-lg text-center hover:bg-purple-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Gallery</h3>
              <p>Photos and videos of school life</p>
            </Link>
            <Link
              to="/events"
              className="bg-orange-500 text-white p-6 rounded-lg text-center hover:bg-orange-600 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Events</h3>
              <p>Upcoming and past events</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* These will be populated dynamically from Supabase */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sample News Title</h3>
                <p className="text-gray-600 mb-4">
                  This is a sample news description. Real content will be loaded from Supabase.
                </p>
                <span className="text-sm text-gray-500">Posted on Oct 9, 2025</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Upcoming Event</h3>
                <p className="text-gray-600 mb-4">
                  Details about an upcoming school event will appear here.
                </p>
                <span className="text-sm text-gray-500">Event Date: Oct 15, 2025</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Achievement Highlight</h3>
                <p className="text-gray-600 mb-4">
                  Recent achievements and recognitions will be showcased here.
                </p>
                <span className="text-sm text-gray-500">Achieved on Oct 5, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;