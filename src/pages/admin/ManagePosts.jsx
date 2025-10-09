import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getPosts, createPost, updatePost, deletePost } from '../../services/supabase';

const ManagePosts = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: ''
  });

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        ...formData,
        author_email: user.email
      };

      if (editingPost) {
        await updatePost(editingPost.id, formData);
      } else {
        await createPost(postData);
      }

      setFormData({ title: '', description: '', image_url: '' });
      setShowForm(false);
      setEditingPost(null);
      loadPosts();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      description: post.description,
      image_url: post.image_url || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        loadPosts();
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Error deleting post. Please try again.');
      }
    }
  };

  const cancelEdit = () => {
    setFormData({ title: '', description: '', image_url: '' });
    setShowForm(false);
    setEditingPost(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Posts</h1>
            <p className="text-gray-600 mt-2">Create and manage school announcements</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            {showForm ? 'Cancel' : 'Add New Post'}
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">
              {editingPost ? 'Edit Post' : 'Add New Post'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter post title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter post description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL (optional)
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold">All Posts ({posts.length})</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {posts.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-4">📝</div>
                <p className="text-lg font-medium">No posts yet</p>
                <p className="text-sm mt-2">Create your first announcement to get started!</p>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author_email}</span>
                        <span className="mx-2">•</span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    {post.image_url && (
                      <div className="ml-6">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  {user.email === post.author_email && (
                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePosts;