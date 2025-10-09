import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Academics from './pages/public/Academics';
import Achievements from './pages/public/Achievements';
import Gallery from './pages/public/GallerySimple';
import Events from './pages/public/EventsSimple';
import Contact from './pages/public/Contact';
import Login from './pages/public/Login';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import ManagePosts from './pages/admin/ManagePosts';
import ManageEvents from './pages/admin/ManageEvents';
import ManageGallery from './pages/admin/ManageGallery';

// Components
import ProtectedRoute from './components/ui/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="academics" element={<Academics />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="gallery" element={<ErrorBoundary showDetails={true}><Gallery /></ErrorBoundary>} />
              <Route path="events" element={<ErrorBoundary showDetails={true}><Events /></ErrorBoundary>} />
              <Route path="contact" element={<Contact />} />
            </Route>
            
            {/* Login Route (no layout) */}
            <Route path="login" element={<Login />} />
            
            {/* Protected Admin Routes (separate from public layout) */}
            <Route path="admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="admin/posts" element={<ProtectedRoute><ManagePosts /></ProtectedRoute>} />
            <Route path="admin/events" element={<ProtectedRoute><ManageEvents /></ProtectedRoute>} />
            <Route path="admin/gallery" element={<ProtectedRoute><ManageGallery /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;