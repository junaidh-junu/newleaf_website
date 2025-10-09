import React, { useState } from 'react';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('elementary');

  const programs = {
    elementary: {
      title: "Elementary School (K-5)",
      description: "Building strong foundations in core subjects while fostering curiosity and creativity.",
      subjects: [
        {
          name: "Language Arts",
          icon: "📚",
          description: "Reading, writing, grammar, and vocabulary development through engaging literature and interactive activities.",
          highlights: ["Phonics and Reading Comprehension", "Creative Writing Workshops", "Literature Circles", "Spelling and Vocabulary Building"]
        },
        {
          name: "Mathematics",
          icon: "🔢",
          description: "Number sense, problem-solving, and mathematical reasoning using hands-on manipulatives and real-world applications.",
          highlights: ["Number Operations", "Geometry and Measurement", "Data Analysis", "Mathematical Problem Solving"]
        },
        {
          name: "Science",
          icon: "🔬",
          description: "Hands-on exploration of life, physical, and earth sciences through experiments and observation.",
          highlights: ["Life Science Explorations", "Physical Science Experiments", "Earth and Space Studies", "Scientific Method Practice"]
        },
        {
          name: "Social Studies",
          icon: "🌍",
          description: "Understanding communities, cultures, history, and geography through interactive projects.",
          highlights: ["Community Helpers", "World Cultures", "American History", "Geography Skills"]
        }
      ]
    },
    middle: {
      title: "Middle School (6-8)",
      description: "Challenging curriculum that prepares students for high school while developing critical thinking skills.",
      subjects: [
        {
          name: "English Language Arts",
          icon: "✍️",
          description: "Advanced reading comprehension, literary analysis, and persuasive writing skills.",
          highlights: ["Literary Analysis", "Research Writing", "Public Speaking", "Media Literacy"]
        },
        {
          name: "Mathematics",
          icon: "📊",
          description: "Pre-algebra, algebra concepts, and advanced problem-solving strategies.",
          highlights: ["Pre-Algebra", "Geometry Foundations", "Statistics and Probability", "Mathematical Modeling"]
        },
        {
          name: "Science",
          icon: "⚗️",
          description: "Biology, chemistry, physics, and environmental science with laboratory investigations.",
          highlights: ["Life Science Research", "Chemistry Basics", "Physics Principles", "Environmental Studies"]
        },
        {
          name: "Social Studies",
          icon: "🏛️",
          description: "World history, civics, and current events analysis with emphasis on critical thinking.",
          highlights: ["World History", "Civics and Government", "Current Events", "Historical Thinking Skills"]
        }
      ]
    }
  };

  const specialPrograms = [
    {
      title: "STEM Education",
      icon: "🚀",
      description: "Integrated Science, Technology, Engineering, and Mathematics program with hands-on projects and robotics.",
      features: ["Robotics Club", "Coding Bootcamps", "Science Fair Participation", "Engineering Challenges"]
    },
    {
      title: "Arts Integration",
      icon: "🎨",
      description: "Comprehensive arts program including visual arts, music, drama, and creative expression.",
      features: ["Visual Arts Studio", "Music Ensembles", "Drama Productions", "Creative Writing"]
    },
    {
      title: "Physical Education",
      icon: "⚽",
      description: "Comprehensive physical education program promoting health, fitness, and teamwork.",
      features: ["Team Sports", "Individual Fitness", "Health Education", "Outdoor Activities"]
    },
    {
      title: "Foreign Language",
      icon: "🌐",
      description: "Spanish and French language instruction developing communication skills and cultural awareness.",
      features: ["Conversational Practice", "Cultural Studies", "Grammar and Vocabulary", "Language Immersion Days"]
    }
  ];

  const extracurriculars = [
    { name: "Student Government", category: "Leadership" },
    { name: "Math Olympiad", category: "Academic" },
    { name: "Science Fair Club", category: "Academic" },
    { name: "Debate Team", category: "Communication" },
    { name: "Robotics Club", category: "STEM" },
    { name: "Art Club", category: "Creative" },
    { name: "Music Band", category: "Creative" },
    { name: "Drama Club", category: "Creative" },
    { name: "Soccer Team", category: "Sports" },
    { name: "Basketball Team", category: "Sports" },
    { name: "Chess Club", category: "Strategy" },
    { name: "Environmental Club", category: "Service" }
  ];

  const teachingPhilosophy = [
    {
      title: "Student-Centered Learning",
      description: "Every lesson is designed around student needs, interests, and learning styles.",
      icon: "👨‍🎓"
    },
    {
      title: "Hands-On Approach",
      description: "Learning through doing, experimenting, and real-world application of concepts.",
      icon: "🤲"
    },
    {
      title: "Technology Integration",
      description: "Modern technology tools enhance learning and prepare students for the digital world.",
      icon: "💻"
    },
    {
      title: "Collaborative Environment",
      description: "Group projects and peer learning foster teamwork and communication skills.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Academic Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Comprehensive curriculum designed to challenge, inspire, and prepare students for success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('elementary')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'elementary' ? 'bg-white text-blue-600' : 'bg-blue-700 hover:bg-blue-800'
              }`}
            >
              Elementary (K-5)
            </button>
            <button
              onClick={() => setActiveTab('middle')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'middle' ? 'bg-white text-blue-600' : 'bg-blue-700 hover:bg-blue-800'
              }`}
            >
              Middle School (6-8)
            </button>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{programs[activeTab].title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {programs[activeTab].description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs[activeTab].subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{subject.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800">{subject.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{subject.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Learning Areas:</h4>
                    {subject.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhanced learning opportunities that go beyond traditional academics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating engaging, inclusive, and innovative learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingPhilosophy.map((philosophy, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{philosophy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Extracurricular Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse opportunities for students to explore their interests and develop new skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {extracurriculars.map((activity, index) => {
              const categoryColors = {
                'Leadership': 'bg-red-100 text-red-800',
                'Academic': 'bg-blue-100 text-blue-800',
                'Communication': 'bg-green-100 text-green-800',
                'STEM': 'bg-purple-100 text-purple-800',
                'Creative': 'bg-pink-100 text-pink-800',
                'Sports': 'bg-orange-100 text-orange-800',
                'Strategy': 'bg-indigo-100 text-indigo-800',
                'Service': 'bg-teal-100 text-teal-800'
              };
              
              return (
                <div key={index} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-800 mb-2">{activity.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    categoryColors[activity.category] || 'bg-gray-100 text-gray-800'
                  }`}>
                    {activity.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment and Progress */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Assessment & Progress Tracking</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Assessment</h3>
                    <p className="text-gray-600">Regular formative assessments help track student progress and identify areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Parent Communication</h3>
                    <p className="text-gray-600">Regular progress reports and parent-teacher conferences keep families informed and engaged.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Individualized Support</h3>
                    <p className="text-gray-600">Personalized learning plans ensure every student receives the support they need to succeed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop" 
                alt="Students working together" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Student Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a campus tour to see our academic programs in action and meet our dedicated faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Tour
            </a>
            <a 
              href="/about" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Meet Our Teachers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
