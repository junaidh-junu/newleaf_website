import React from 'react';

const Achievements = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Achievements</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We take pride in our students' and staff's accomplishments across academics, 
          sports, and extracurricular activities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Academic Excellence</h3>
            <p className="text-gray-700">Consistent high performance in state examinations and competitive tests.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Sports Achievements</h3>
            <p className="text-gray-700">Regional and national level recognition in various sports competitions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;