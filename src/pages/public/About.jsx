import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About New Leaf School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established with a vision to provide quality education and foster holistic development, 
            New Leaf School has been nurturing young minds for excellence.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide comprehensive, innovative education that empowers students to become 
              confident, creative, and responsible global citizens while maintaining strong 
              moral values and cultural heritage.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading educational institution that transforms lives through 
              excellence in teaching, character building, and preparing students 
              for success in an ever-changing world.
            </p>
          </div>
        </div>

        {/* School History */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2010, New Leaf School began as a small institution with big dreams. 
              Over the years, we have grown into a comprehensive educational facility that 
              serves students from kindergarten through high school.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our journey has been marked by continuous innovation in teaching methodologies, 
              infrastructure development, and student support services. We have consistently 
              maintained high academic standards while ensuring that each student receives 
              individual attention and care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we are proud to have graduated hundreds of successful students who are 
              making their mark in various fields around the world, carrying forward the 
              values and knowledge they gained at New Leaf School.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in all aspects of education and character development.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Building honest, trustworthy individuals who uphold moral and ethical principles.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-600">
                Encouraging continuous learning, innovation, and personal development.
              </p>
            </div>
            <div className="text-center p-6 bg-white shadow-md rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing new ideas, technologies, and methodologies in education.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Principal Photo</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
              <p className="text-green-600 font-medium mb-3">Principal</p>
              <p className="text-gray-600 text-sm">
                M.Ed., Ph.D. in Educational Leadership with 20+ years of experience in educational administration.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">VP Photo</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mr. Michael Chen</h3>
              <p className="text-green-600 font-medium mb-3">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                M.A. in Curriculum Development with expertise in STEM education and student assessment.
              </p>
            </div>
            <div className="text-center bg-white shadow-lg rounded-lg p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Coordinator Photo</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ms. Emily Rodriguez</h3>
              <p className="text-green-600 font-medium mb-3">Academic Coordinator</p>
              <p className="text-gray-600 text-sm">
                M.Ed. in Special Education, specializing in inclusive learning and student support services.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏫</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern Classrooms</h3>
                <p className="text-gray-600">
                  Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔬</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Science Laboratories</h3>
                <p className="text-gray-600">
                  Fully equipped physics, chemistry, and biology labs for hands-on learning experiences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Digital Library</h3>
                <p className="text-gray-600">
                  Extensive collection of books, digital resources, and quiet study spaces for students.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚽</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Sports Facilities</h3>
                <p className="text-gray-600">
                  Multiple sports courts, playground, and gymnasium for physical education and recreation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;