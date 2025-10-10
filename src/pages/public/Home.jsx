import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, getEvents } from '../../services/supabase';
import SchoolsShowcase from '../../components/ui/SchoolsShowcase';

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalEvents: 0,
    upcomingEventsCount: 0
  });

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch latest posts and events
        const [postsData, eventsData] = await Promise.all([
          getPosts(),
          getEvents()
        ]);

        // Sort posts by created_at and take latest 3
        const sortedPosts = postsData
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);
        
        // Filter and sort upcoming events
        const today = new Date();
        const upcomingEventsFiltered = eventsData
          .filter(event => new Date(event.event_date) >= today)
          .sort((a, b) => new Date(a.event_date) - new Date(b.event_date))
          .slice(0, 2);
        
        setLatestPosts(sortedPosts);
        setUpcomingEvents(upcomingEventsFiltered);
        
        // Calculate stats
        setStats({
          totalPosts: postsData.length,
          totalEvents: eventsData.length,
          upcomingEventsCount: upcomingEventsFiltered.length
        });
        
      } catch (error) {
        console.error('Error fetching home data:', error);
        // Use fallback data if needed
        setLatestPosts([]);
        setUpcomingEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-primary-300/10 to-accent-300/10 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
        {/* Add Heavens preschool colors for variety */}
        <div className="absolute top-3/4 left-1/6 w-72 h-72 bg-gradient-to-br from-orange-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-56 h-56 bg-gradient-to-br from-pink-400/10 to-green-400/10 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Floating Logo/Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-glow animate-glow-pulse floating-element">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
                <span className="block gradient-text">
                  Welcome to
                </span>
                <span className="block gradient-text mt-2">
                  New Leaf School
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-neutral-600 font-light">
                Nurturing young minds for a <span className="gradient-text font-semibold">brighter future</span> through quality education, 
                innovative teaching methods, and holistic development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/about"
                  className="btn-primary group relative overflow-hidden px-10 py-4 text-lg"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Discover Our Story</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                
                <Link
                  to="/contact"
                  className="btn-secondary group px-10 py-4 text-lg"
                >
                  <span className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Get In Touch</span>
                  </span>
                </Link>
              </div>
              
              {/* Scroll Indicator */}
              <div className="mt-16 flex justify-center animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-4">
                <div className="text-5xl font-black gradient-text mb-2 animate-scale-in">{stats.totalPosts}</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-neutral-600 font-medium tracking-wide">Latest Announcements</div>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <div className="card group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-4">
                <div className="text-5xl font-black gradient-text mb-2 animate-scale-in">{stats.upcomingEventsCount}</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-accent-400/20 to-primary-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-neutral-600 font-medium tracking-wide">Upcoming Events</div>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
            
            <div className="card group text-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-4">
                <div className="text-5xl font-black gradient-text mb-2 animate-scale-in">15+</div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-neutral-600 font-medium tracking-wide">Years of Excellence</div>
              <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 to-accent-50/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">Why Choose New Leaf School?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes our school a <span className="gradient-text font-semibold">premier destination</span> for quality education and holistic development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group text-center shimmer-effect perspective-1000">
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-neon floating-element group-hover:shadow-glow transition-all duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Quality Education</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Comprehensive curriculum designed to develop <span className="font-semibold text-primary-600">critical thinking</span> and problem-solving skills for the modern world.
              </p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="card group text-center shimmer-effect perspective-1000">
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-primary-500 rounded-3xl flex items-center justify-center shadow-neon-accent floating-element group-hover:shadow-glow transition-all duration-500" style={{animationDelay: '1s'}}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-br from-accent-400 to-primary-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Experienced Faculty</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Dedicated teachers with years of experience, committed to nurturing each student's <span className="font-semibold text-accent-600">unique potential</span> and growth.
              </p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="card group text-center shimmer-effect perspective-1000">
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-neon floating-element group-hover:shadow-glow transition-all duration-500" style={{animationDelay: '2s'}}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Holistic Development</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                Comprehensive focus on academic, physical, emotional, and <span className="font-semibold text-primary-600">social development</span> of every student.
              </p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Showcase */}
      <SchoolsShowcase />

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Explore Our School</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Navigate through different sections to learn more about our academic programs, achievements, and school life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/academics"
              className="group bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-xl text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Academics</h3>
              <p className="opacity-90">Discover our curriculum and programs</p>
            </Link>
            <Link
              to="/achievements"
              className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Achievements</h3>
              <p className="opacity-90">Our awards and recognitions</p>
            </Link>
            <Link
              to="/gallery"
              className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gallery</h3>
              <p className="opacity-90">Photos and videos of school life</p>
            </Link>
            <Link
              to="/events"
              className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-xl text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Events</h3>
              <p className="opacity-90">Upcoming and past events</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest news, announcements, and upcoming events from New Leaf School.
            </p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Latest Posts */}
              {latestPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white">
                    {post.image_url ? (
                      <img 
                        src={post.image_url} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm opacity-80">Latest News</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Announcement</span>
                      <span className="text-xs text-gray-500">{formatDate(post.created_at)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                      {truncateText(post.title, 60)}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {truncateText(post.content, 120)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors">
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Upcoming Events */}
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                    {event.image_url ? (
                      <img 
                        src={event.image_url} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm opacity-80">Upcoming Event</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Event</span>
                      <span className="text-xs text-gray-500">{formatDate(event.event_date)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {truncateText(event.title, 60)}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {truncateText(event.description, 120)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.location || 'School Campus'}
                      </div>
                      <Link 
                        to="/events" 
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Fallback content when no data is available */}
              {latestPosts.length === 0 && upcomingEvents.length === 0 && (
                <div className="col-span-full">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Updates Available</h3>
                    <p className="text-gray-500 mb-6">Check back soon for the latest news and upcoming events.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        to="/events"
                        className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        View All Events
                      </Link>
                      <Link
                        to="/contact"
                        className="border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* View More Link */}
          {(latestPosts.length > 0 || upcomingEvents.length > 0) && (
            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  View All Events
                </Link>
                <Link
                  to="/gallery"
                  className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
                >
                  Explore Gallery
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;