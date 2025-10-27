import React from 'react';

const About = () => {
  const staff = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1494790108755-2616c667143f?w=300&h=300&fit=crop&crop=face",
      bio: "With over 15 years in education, Dr. Johnson leads our school with passion for student excellence.",
      qualifications: "Ph.D. in Educational Leadership"
    },
    {
      name: "Mr. David Chen",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Dedicated educator focused on innovative teaching methods and student development.",
      qualifications: "M.Ed. in Curriculum & Instruction"
    },
    {
      name: "Ms. Emily Rodriguez",
      position: "Head of Academics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in curriculum development and educational technology integration.",
      qualifications: "M.A. in Education, B.Sc. in Mathematics"
    },
    {
      name: "Mr. James Wilson",
      position: "Sports Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former professional athlete passionate about physical education and student wellness.",
      qualifications: "B.P.E., Certified Sports Coach"
    },
    {
      name: "Ms. Maria Garcia",
      position: "Art & Music Teacher",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face",
      bio: "Creative educator inspiring students through arts and music programs.",
      qualifications: "M.F.A. in Fine Arts, B.Mus."
    },
    {
      name: "Dr. Robert Kim",
      position: "Science Department Head",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
      bio: "Research scientist turned educator, making science accessible and exciting.",
      qualifications: "Ph.D. in Physics, M.Sc. in Chemistry"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in education, encouraging students to reach their full potential.",
      icon: "🌟"
    },
    {
      title: "Integrity",
      description: "We foster honesty, respect, and ethical behavior in all aspects of school life.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to enhance learning experiences.",
      icon: "💡"
    },
    {
      title: "Inclusion",
      description: "We welcome and celebrate diversity, creating an environment where everyone belongs.",
      icon: "🌈"
    },
    {
      title: "Growth",
      description: "We believe in continuous learning and development for students, staff, and community.",
      icon: "🌱"
    },
    {
      title: "Community",
      description: "We build strong partnerships with families and the broader community.",
      icon: "🏘️"
    }
  ];

  const milestones = [
    { year: "1995", event: "New Leaf School founded with 50 students" },
    { year: "2000", event: "Expanded to include middle school grades" },
    { year: "2005", event: "Added state-of-the-art science laboratories" },
    { year: "2010", event: "Launched innovative technology program" },
    { year: "2015", event: "Achieved National Blue Ribbon School recognition" },
    { year: "2020", event: "Successfully transitioned to hybrid learning model" },
    { year: "2023", event: "Opened new arts and sports complex" },
    { year: "2025", event: "Celebrating 30 years of educational excellence" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About New Leaf School
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nestled in Vettukad, Puthucode, Palakkad, Kerala - Transforming young minds through quality English & Quranic education
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About New Leaf School</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Welcome to New Leaf School, proudly located in Vettukad, Puthucode (PO), Palakkad, Kerala, India - 678687. 
                As a nurturing institution under the banner of Heavens Pre-School, we offer transformative education from 
                Kindergarten to High School, starting at age 3.5.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Educational Philosophy</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our core mission is to deliver a unique blend of English and Quranic education, enriched with advanced 
                Learning Management Systems (LMS), Enterprise Resource Planning (ERP) tools, and state-of-the-art smart 
                classrooms. We are committed to instilling moral values and essential skills, leveraging cutting-edge 
                technology to prepare students for a competitive, knowledge-driven world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Rooted in our village community, New Leaf School aims to shape confident, capable individuals who 
                contribute meaningfully to society, blending tradition with innovation to inspire future leaders.
              </p>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Why Choose New Leaf School?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                New Leaf School stands apart by offering a balanced education that merges English mastery and Quranic 
                teachings with modern technology, including smart classrooms and sophisticated LMS and ERP systems. 
                Catering to students from Kindergarten to High School, we start early at age 3.5 to build a strong 
                foundation in academics and values. Our innovative approach ensures students are equipped with skills to 
                compete in a fast-evolving society, while our nurturing, value-driven environment fosters their growth 
                as responsible citizens. Choose New Leaf School in Palakkad, Kerala, for a forward-thinking education 
                that prepares students to lead and inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary-600 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide an education that transforms students through rigorous coursework and by providing 
                  an understanding of the needs of society and industry. To collaborate with other academic and 
                  research institutes around the world to strengthen the education and research ecosystem.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Its aim is to spread the teachings of truth and values in the light of proper education. 
                  It aims to promote value-based knowledge, enhance social development, and inculcate sincere 
                  love and respect for each and every individual.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Our Objective</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our school is dedicated to providing quality English education and Quranic education to children 
                  starting from the age of 3.5. We aim to instill strong moral values and essential skills, 
                  leveraging advanced technology as a platform for learning. Our objective is to mold each student 
                  to excel in a rapidly evolving society where knowledge and skills are paramount, empowering them 
                  to make significant contributions to their community and beyond.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" 
                alt="Students in classroom" 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our school community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School History Timeline */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of growth, innovation, and educational excellence.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-300 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className="lg:w-1/2 p-6">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                      <div className="text-primary-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <p className="text-gray-700 text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated faculty and staff are the heart of New Leaf School, bringing passion, 
              expertise, and care to every aspect of your child's education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.qualifications}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">250+</div>
              <div className="text-primary-100">Happy Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-primary-100">Expert Teachers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5</div>
              <div className="text-primary-100">Years of Excellence</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-primary-100">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the New Leaf Family</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how New Leaf School can help your child grow, learn, and thrive in a supportive 
            and innovative educational environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="/academics" 
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;