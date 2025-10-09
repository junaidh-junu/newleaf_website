import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getGallery, createGalleryItem, deleteGalleryItem, uploadFile } from '../../services/supabase';

const ManageGallery = () => {
  const { user } = useAuth();
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    caption: '',
    image_url: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const data = await getGallery();
      setGalleryItems(data || []);
    } catch (error) {
      console.error('Error loading gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.image_url;

      // If a file is selected, upload it first
      if (selectedFile) {
        const fileName = `gallery/${Date.now()}-${selectedFile.name.replace(/\s+/g, '-')}`;
        try {
          imageUrl = await uploadFile('school-media', selectedFile, fileName);
        } catch (uploadError) {
          console.error('Upload error:', uploadError);
          alert('Failed to upload image. You can add the image URL manually instead.');
          setUploading(false);
          return;
        }
      }

      if (!imageUrl) {
        alert('Please select a file to upload or provide an image URL.');
        setUploading(false);
        return;
      }

      const galleryData = {
        caption: formData.caption,
        image_url: imageUrl,
        uploaded_by: user.email
      };

      await createGalleryItem(galleryData);
      
      setFormData({ caption: '', image_url: '' });
      setSelectedFile(null);
      setShowForm(false);
      loadGallery();
    } catch (error) {
      console.error('Error saving gallery item:', error);
      alert('Error saving gallery item. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id, imageUrl) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        await deleteGalleryItem(id);
        // Optionally delete the file from storage if it's a Supabase storage URL
        // This would require parsing the URL and using deleteFile function
        loadGallery();
      } catch (error) {
        console.error('Error deleting gallery item:', error);
        alert('Error deleting gallery item. Please try again.');
      }
    }
  };

  const cancelForm = () => {
    setFormData({ caption: '', image_url: '' });
    setSelectedFile(null);
    setShowForm(false);
  };

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Gallery</h1>
            <p className="text-gray-600 mt-2">Upload and organize school photos</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {showForm ? 'Cancel' : 'Add New Image'}
          </button>
        </div>

        {/* Upload Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Add New Image</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Or provide an image URL below. Max file size: 5MB
                  </p>
                </div>
                
                <div className="text-center text-gray-500">
                  <span>OR</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                    disabled={selectedFile}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Caption (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.caption}
                    onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter image caption"
                  />
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  disabled={uploading || (!selectedFile && !formData.image_url)}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading...' : 'Add Image'}
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Gallery Images ({galleryItems.length})</h2>
          </div>
          
          {galleryItems.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-4xl mb-4">🖼️</div>
              <p className="text-lg font-medium">No images in gallery</p>
              <p className="text-sm mt-2">Upload your first image to get started!</p>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryItems.map((item) => (
                  <div key={item.id} className="group relative bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-square">
                      <img
                        src={item.image_url}
                        alt={item.caption || 'Gallery image'}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/300/300';
                        }}
                      />
                    </div>
                    
                    {/* Overlay with controls */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleDelete(item.id, item.image_url)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    
                    {/* Caption */}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2">
                        <p className="text-sm truncate">{item.caption}</p>
                      </div>
                    )}
                    
                    {/* Upload info */}
                    <div className="absolute top-2 right-2">
                      <span className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;