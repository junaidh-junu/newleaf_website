import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const publicNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const adminNavItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Manage Posts', path: '/admin/posts' },
    { name: 'Manage Events', path: '/admin/events' },
    { name: 'Manage Gallery', path: '/admin/gallery' },
  ];

  return (
    <header className="bg-green-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            New Leaf School
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {publicNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-green-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="relative group">
                <button className="hover:text-green-200 transition-colors">
                  Admin Menu ▼
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {adminNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-green-700 px-4 py-2 rounded hover:bg-green-800 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {publicNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <>
                <div className="border-t border-green-500 mt-2 pt-2">
                  {adminNavItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block py-2 hover:text-green-200 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="block py-2 text-red-300 hover:text-red-100 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="block py-2 hover:text-green-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;