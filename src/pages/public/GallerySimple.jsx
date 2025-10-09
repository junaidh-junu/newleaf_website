import React, { useState, useEffect } from 'react';
import { getGallery } from '../../services/supabase';

const GallerySimple = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadGallery = async () => {
      try {
        console.log('Loading gallery data...');
        const data = await getGallery();
        console.log('Gallery data loaded:', data);
        setGalleryItems(data || []);
      } catch (error) {
        console.error('Error loading gallery:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Gallery Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      
      <div className="max-w-6xl mx-auto">
        <p className="text-center mb-4">
          Found {galleryItems.length} gallery items
        </p>
        
        {galleryItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No gallery items found.</p>
            <p className="text-gray-400">Check the database connection or add some gallery items.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={item.id || index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={item.image_url} 
                  alt={item.title || item.description || `Gallery item ${index + 1}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop';
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title || 'Untitled'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description || 'No description available'}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Category: {item.category || 'general'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySimple;