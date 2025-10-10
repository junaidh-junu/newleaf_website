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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/20 shadow-glass">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-neon transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                {/* Placeholder for actual logo - you can replace this with an img tag */}
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">
                New Leaf School
              </div>
              <div className="text-xs text-neutral-500 font-medium tracking-wide -mt-1">
                & Heavens Preschool
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {publicNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link relative px-4 py-2 rounded-xl text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-sm group"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </Link>
            ))}
            
            {user ? (
              <div className="relative group ml-4">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon group-hover:from-primary-600 group-hover:to-accent-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Admin</span>
                  <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                  <div className="w-56 glass-panel p-2 shadow-floating animate-slide-down">
                    <div className="space-y-1">
                      {adminNavItems.map((item, index) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-white/20 rounded-xl transition-all duration-200 group/item"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                      <div className="border-t border-white/20 my-2"></div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-red-500 hover:text-red-600 hover:bg-red-50/50 rounded-xl transition-all duration-200 group/item"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon hover:from-primary-600 hover:to-accent-600 active:scale-95"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-neutral-700 hover:bg-white/20 hover:text-primary-600 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 animate-slide-down">
            <div className="glass-panel p-4 mx-2 shadow-floating">
              <div className="space-y-2">
                {publicNavItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-white/20 rounded-xl transition-all duration-200 group animate-slide-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                
                {user ? (
                  <div className="pt-4">
                    <div className="border-t border-white/20 mb-4"></div>
                    <div className="space-y-2">
                      {adminNavItems.map((item, index) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center space-x-3 px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-white/20 rounded-xl transition-all duration-200 group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-red-500 hover:text-red-600 hover:bg-red-50/50 rounded-xl transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-4">
                    <div className="border-t border-white/20 mb-4"></div>
                    <Link
                      to="/login"
                      className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon active:scale-95"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;