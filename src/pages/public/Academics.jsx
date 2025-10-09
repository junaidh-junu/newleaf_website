import React from 'react';

const Academics = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Academics</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our comprehensive curriculum is designed to provide students with a strong foundation 
          in all subjects while encouraging critical thinking and creativity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Elementary School</h3>
            <p className="text-gray-600">Building strong foundations in reading, writing, mathematics, and science.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Middle School</h3>
            <p className="text-gray-600">Expanding knowledge and developing analytical skills across all subjects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">High School</h3>
            <p className="text-gray-600">Advanced coursework preparing students for college and career success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;