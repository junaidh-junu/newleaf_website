import React, { useState } from 'react';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const achievements = [
    {
      id: 1,
      title: "National Blue Ribbon School Award",
      year: "2015",
      category: "institutional",
      description: "Recognized by the U.S. Department of Education for academic excellence and progress in closing achievement gaps.",
      image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?w=400&h=300&fit=crop",
      impact: "School-wide recognition for outstanding educational practices"
    },
    {
      id: 2,
      title: "State Science Fair Championship",
      year: "2024",
      category: "student",
      description: "Our 7th grade team won first place in the State Science Fair with their innovative renewable energy project.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
      impact: "Advanced to National Science Fair competition"
    },
    {
      id: 3,
      title: "Math Olympiad Regional Champions",
      year: "2024",
      category: "student",
      description: "New Leaf School Math Olympiad team secured first place in the regional competition for the third consecutive year.",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=300&fit=crop",
      impact: "15 students qualified for state-level competition"
    },
    {
      id: 4,
      title: "Excellence in Teaching Award",
      year: "2023",
      category: "faculty",
      description: "Ms. Emily Rodriguez received the State Excellence in Teaching Award for innovative STEM education methods.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
      impact: "Recognition for outstanding pedagogical innovation"
    },
    {
      id: 5,
      title: "Green School Certification",
      year: "2023",
      category: "institutional",
      description: "Achieved Green School certification for environmental sustainability initiatives and eco-friendly practices.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
      impact: "30% reduction in energy consumption and waste"
    },
    {
      id: 6,
      title: "Robotics World Championship Qualifier",
      year: "2024",
      category: "student",
      description: "Our robotics team 'Tech Titans' qualified for the World Championship after winning the regional competition.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      impact: "Represented school at international level"
    },
    {
      id: 7,
      title: "Arts Integration Excellence Award",
      year: "2023",
      category: "institutional",
      description: "Recognized for outstanding integration of arts across all subject areas, enhancing creative learning.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      impact: "Model program adopted by 5 other schools"
    },
    {
      id: 8,
      title: "Principal of the Year",
      year: "2024",
      category: "faculty",
      description: "Dr. Sarah Johnson was named Principal of the Year by the State Education Association.",
      image: "https://images.unsplash.com/photo-1559599238-b0ee7a6d4883?w=400&h=300&fit=crop",
      impact: "Leadership excellence recognized statewide"
    }
  ];

  const statistics = [
    {
      number: "15+",
      label: "Awards This Year",
      icon: "🏆",
      description: "Recognition across academics, arts, and athletics"
    },
    {
      number: "98%",
      label: "College Acceptance",
      icon: "🎓",
      description: "Graduate college acceptance rate over 5 years"
    },
    {
      number: "50+",
      label: "Competition Medals",
      icon: "🥇",
      description: "Student achievements in various competitions"
    },
    {
      number: "100%",
      label: "Reading Proficiency",
      icon: "📚",
      description: "5th grade state reading assessment scores"
    }
  ];

  const recognitions = [
    {
      title: "Top 10 Elementary Schools",
      organization: "State Education Magazine",
      year: "2024"
    },
    {
      title: "Innovation in Education Award",
      organization: "Regional Education Board",
      year: "2023"
    },
    {
      title: "Community Impact Excellence",
      organization: "City Council",
      year: "2023"
    },
    {
      title: "STEM Education Leader",
      organization: "National STEM Coalition",
      year: "2024"
    },
    {
      title: "Arts Education Excellence",
      organization: "State Arts Council",
      year: "2023"
    },
    {
      title: "Environmental Stewardship Award",
      organization: "Green Schools Alliance",
      year: "2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'student', name: 'Student Achievements' },
    { id: 'faculty', name: 'Faculty Recognition' },
    { id: 'institutional', name: 'School Awards' }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Achievements
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Celebrating excellence in education, innovation, and community impact
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl">🏆</div>
            <div className="text-4xl">🥇</div>
            <div className="text-4xl">🎓</div>
            <div className="text-4xl">⭐</div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Excellence by the Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our achievements reflect our commitment to educational excellence and student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-3">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing the outstanding accomplishments of our students, faculty, and institution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      achievement.category === 'student' ? 'bg-blue-100 text-blue-800' :
                      achievement.category === 'faculty' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {achievement.category === 'student' ? 'Student' :
                       achievement.category === 'faculty' ? 'Faculty' : 'School'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="border-t pt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      <span><strong>Impact:</strong> {achievement.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formal recognition from educational organizations and community leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 flex-1">{recognition.title}</h3>
                  <span className="text-orange-600 font-bold text-sm bg-white px-2 py-1 rounded">{recognition.year}</span>
                </div>
                <p className="text-gray-600 text-sm">{recognition.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students, parents, and community about our impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Alex Chen</h3>
                  <p className="text-sm text-gray-600">Class of 2023, Now at MIT</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "New Leaf School's STEM program prepared me perfectly for engineering studies at MIT. 
                The hands-on approach and encouragement from teachers made all the difference."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616c667143f?w=60&h=60&fit=crop&crop=face" 
                  alt="Parent" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Sarah Martinez</h3>
                  <p className="text-sm text-gray-600">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Watching my daughter grow from a shy kindergartner to a confident young leader 
                has been incredible. The supportive environment here is truly special."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                  alt="Teacher" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Mr. James Wilson</h3>
                  <p className="text-sm text-gray-600">PE Teacher & Coach</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Being part of a school that values both academic excellence and character development 
                makes every day rewarding. Our students truly shine."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Legacy of Excellence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a school community that celebrates achievement and nurtures every student's potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="/academics" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
