import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, getEvents } from '../../services/supabase';
import SchoolsShowcase from '../../components/ui/SchoolsShowcase';
import { getLogoConfig, SCHOOL_LOGOS } from '../../config/assets';

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
      <section className="relative h-screen overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${SCHOOL_LOGOS.SCHOOL_HERO}')` }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/70"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              {/* School Logo */}
              <div className="mb-8 flex justify-center">
                <div className="w-128 h-80 bg-white backdrop-blur-sm rounded-3xl flex items-center justify-center p-1 shadow-2xl">
                  <img 
                    src={getLogoConfig('HERO').src}
                    alt="New Leaf School & Heavens Preschool"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto leading-relaxed">
                Excellence in Education - Nurturing young minds for a brighter future through quality education, innovative teaching methods, and holistic development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 inline-flex items-center justify-center"
                >
                  <span>Learn More About Us</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission, Vision, Objectives Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Vision */}
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                To provide an education that transforms students through rigorous coursework and by providing an understanding of the needs of society and industry. To collaborate with other academic and research institutes around the world to strengthen the education and research ecosystem.
              </p>
            </div>

            {/* Our Mission */}
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                Its aim is to spread the teachings of truth and values in the light of proper education. It aims to promote value-based knowledge, enhance social development, and inculcate sincere love and respect for each and every individual.
              </p>
            </div>

            {/* Our Objective */}
            <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-800">Our Objective</h3>
              <p className="text-neutral-600 leading-relaxed">
                To provide quality English and Quranic education from age 3.5, instilling strong moral values and essential skills through modern technology. We aim to prepare students for success in today's evolving society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* School Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                  {/* Placeholder for school image - you can replace this with an actual image */}
                  <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-sm opacity-80">New Leaf School Building</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-200 rounded-2xl opacity-60 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-200 rounded-3xl opacity-40 -z-10"></div>
              </div>
            </div>
            
            {/* School Description */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-4 text-neutral-800">NEW LEAF SCHOOL & HEAVENS PRESCHOOL</h2>
              </div>
              
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  New Leaf School stands as one of the leading educational institutions in our region, dedicated to providing exceptional learning experiences for students from preschool through higher grades. Our commitment to excellence has made us a trusted choice for parents seeking quality education.
                </p>
                
                <p>
                  With over <span className="font-semibold text-primary-600">15 years of experience</span>, we have been consistently providing high-quality education that combines traditional values with modern teaching methodologies. Our experienced faculty is dedicated to nurturing each student's individual talents and capabilities.
                </p>
                
                <p>
                  We believe in holistic development and provide numerous opportunities for students to excel not only academically but also in sports, arts, and various extracurricular activities. Our modern facilities and comprehensive curriculum ensure that students receive a well-rounded education.
                </p>
                
                <p>
                  At New Leaf School & Heavens Preschool, we focus on building strong foundations for lifelong learning, preparing our students to become responsible global citizens and future leaders in their chosen fields.
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold"
                >
                  <span>Learn More About Us</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
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

      {/* Our Infrastructure Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-neutral-800">OUR INFRASTRUCTURE</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern facilities designed to provide the best learning environment for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Playground & Sports */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V14" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Playground & Sports</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Well-maintained playground and indoor areas for sports, karate training, and physical development activities.
                </p>
              </div>
            </div>

            {/* Smart Classrooms */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Smart Classrooms</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  State-of-the-art smart classrooms integrated with LMS and ERP systems for modern digital learning experiences.
                </p>
              </div>
            </div>

            {/* Prayer Areas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21l-4 4v3H7v-3L3 4h7.5z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Prayer Areas</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Well-organized prayer areas specifically designed for Quranic education and spiritual development.
                </p>
              </div>
            </div>

            {/* Computer Lab */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Computer Lab</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced computer laboratory with modern systems and high-speed internet for technology education.
                </p>
              </div>
            </div>

            {/* Library */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Library</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive library with educational books, digital resources, and quiet study spaces.
                </p>
              </div>
            </div>

            {/* CCTV Security */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">CCTV Security</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive CCTV surveillance system ensuring a secure campus with trained staff supervision.
                </p>
              </div>
            </div>

            {/* Health & Facilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Health & Wellness</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  First-aid facilities, child-friendly washrooms, filtered drinking water, and wellness support.
                </p>
              </div>
            </div>

            {/* Students' Garden */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-green-500 to-lime-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Students' Garden</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sustainable students' garden promoting environmental awareness and hands-on learning experiences.
                </p>
              </div>
            </div>

            {/* Art & Creative Areas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4c2.21 0 4-1.79 4-4V5z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Arts & Creativity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dedicated areas for art training and abacus learning, fostering creativity and cognitive development.
                </p>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Transportation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Safe school transportation ensuring accessibility with experienced drivers and route management.
                </p>
              </div>
            </div>

            {/* Clean Environment */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-40 bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold mb-2 text-neutral-800">Clean Environment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Calm, pollution-free learning environment prioritizing cleanliness and student well-being.
                </p>
              </div>
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

      {/* News and Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neutral-800">NEWS AND EVENTS</h2>
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