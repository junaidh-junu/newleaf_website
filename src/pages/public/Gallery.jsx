import React, { useState, useEffect } from 'react';
import { getGallery } from '../../services/supabase';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      console.log('Loading gallery data...');
      const data = await getGallery();
      console.log('Gallery data loaded:', data);
      setGalleryItems(data || []);
    } catch (error) {
      console.error('Error loading gallery:', error);
      // Use sample data if database fails
      setGalleryItems([]);
      setError(`Failed to load gallery: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Sample gallery items for demonstration
  const sampleGalleryItems = [
    {
      id: 1,
      image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      caption: "Students engaged in collaborative learning in our modern classroom",
      category: "classroom",
      created_at: "2024-10-01"
    },
    {
      id: 2,
      image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      caption: "Annual Science Fair - Students presenting innovative research projects",
      category: "events",
      created_at: "2024-09-15"
    },
    {
      id: 3,
      image_url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      caption: "Athletic achievements at our sports day championship",
      category: "sports",
      created_at: "2024-09-20"
    },
    {
      id: 4,
      image_url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      caption: "Creative arts showcase featuring student artwork and performances",
      category: "arts",
      created_at: "2024-08-30"
    },
    {
      id: 5,
      image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      caption: "Robotics team working on championship competition project",
      category: "technology",
      created_at: "2024-09-10"
    },
    {
      id: 6,
      image_url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop",
      caption: "State-of-the-art library providing quiet study spaces for students",
      category: "facilities",
      created_at: "2024-08-15"
    },
    {
      id: 7,
      image_url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
      caption: "Outdoor learning session in our beautiful school garden",
      category: "outdoor",
      created_at: "2024-09-25"
    },
    {
      id: 8,
      image_url: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&h=600&fit=crop",
      caption: "Math Olympiad team celebrating regional championship victory",
      category: "achievements",
      created_at: "2024-10-05"
    },
    {
      id: 9,
      image_url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      caption: "Interactive learning with educational technology in computer lab",
      category: "technology",
      created_at: "2024-09-18"
    },
    {
      id: 10,
      image_url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
      caption: "Teacher mentoring students during after-school tutoring program",
      category: "classroom",
      created_at: "2024-09-12"
    },
    {
      id: 11,
      image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      caption: "Earth Day environmental awareness activities and tree planting",
      category: "events",
      created_at: "2024-04-22"
    },
    {
      id: 12,
      image_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      caption: "Modern cafeteria serving healthy, nutritious meals daily",
      category: "facilities",
      created_at: "2024-08-20"
    }
  ];

  // Use sample items if no real gallery items are loaded
  const displayItems = galleryItems.length > 0 ? galleryItems : sampleGalleryItems;

  const categories = [
    { id: 'all', name: 'All Photos', icon: '🖼️' },
    { id: 'classroom', name: 'Classroom Life', icon: '📚' },
    { id: 'events', name: 'School Events', icon: '🎉' },
    { id: 'sports', name: 'Sports & Athletics', icon: '⚽' },
    { id: 'arts', name: 'Arts & Culture', icon: '🎨' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'facilities', name: 'Facilities', icon: '🏫' },
    { id: 'outdoor', name: 'Outdoor Learning', icon: '🌳' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' }
  ];

  const filteredItems = displayItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const itemText = item.caption || item.description || item.title || '';
    const matchesSearch = itemText.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleKeyPress = (e) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [lightboxOpen, currentImageIndex]);

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

  try {
    return (
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore the vibrant life of our school through moments captured in time
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl">📸</div>
            <div className="text-4xl">🖼️</div>
            <div className="text-4xl">🎨</div>
          </div>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-3.5">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600 font-medium">
              Showing {filteredItems.length} of {displayItems.length} photos
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const count = category.id === 'all' 
                ? displayItems.length 
                : displayItems.filter(item => item.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-pink-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                  <span className="ml-2 text-xs bg-black bg-opacity-20 px-2 py-1 rounded-full">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🖼️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image_url} 
                      alt={item.caption} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                      <div className="text-white text-4xl mb-2">🔍</div>
                      <p className="text-white text-sm font-medium line-clamp-2">{item.caption}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-black bg-opacity-70 text-white">
                      {categories.find(cat => cat.id === item.category)?.icon} 
                      {categories.find(cat => cat.id === item.category)?.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            aria-label="Next image"
          >
            ›
          </button>
          
          {/* Image Container */}
          <div className="max-w-4xl max-h-full flex flex-col items-center justify-center">
            <img 
              src={filteredItems[currentImageIndex]?.image_url} 
              alt={filteredItems[currentImageIndex]?.caption || filteredItems[currentImageIndex]?.title || filteredItems[currentImageIndex]?.description}
              className="max-w-full max-h-[70vh] object-contain"
            />
            
            {/* Image Info */}
            <div className="mt-6 text-center max-w-2xl">
              <p className="text-white text-lg mb-2">
                {filteredItems[currentImageIndex]?.caption || 
                 filteredItems[currentImageIndex]?.title || 
                 filteredItems[currentImageIndex]?.description}
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-300 text-sm">
                <span>
                  {categories.find(cat => cat.id === filteredItems[currentImageIndex]?.category)?.icon} 
                  {categories.find(cat => cat.id === filteredItems[currentImageIndex]?.category)?.name}
                </span>
                <span>•</span>
                <span>{currentImageIndex + 1} of {filteredItems.length}</span>
              </div>
            </div>
          </div>
          
          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === currentImageIndex 
                    ? 'border-white' 
                    : 'border-transparent opacity-60 hover:opacity-80'
                }`}
              >
                <img 
                  src={item.image_url} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Visual Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every photo tells a story of learning, growth, and achievement at New Leaf School
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">{displayItems.length}+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length - 1}</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-600">Months of Memories</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">800+</div>
              <div className="text-gray-600">Students Featured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the New Leaf School community and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Visit
            </a>
            <a 
              href="/about" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
      </div>
    );
  } catch (renderError) {
    console.error('Gallery render error:', renderError);
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">🐞</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-4">We're having trouble loading the gallery. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors mr-2"
          >
            Reload Page
          </button>
          <a 
            href="/" 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }
};

export default Gallery;
