import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore moments from our vibrant school community through photos and videos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery items will be loaded dynamically from Supabase */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Gallery Image {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;