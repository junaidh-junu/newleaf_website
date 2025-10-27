import React from 'react';
import { Link } from 'react-router-dom';
import { getLogoConfig, SCHOOL_INFO } from '../../config/assets';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 backdrop-blur-2xl border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-neon p-2">
                <img 
                  src={getLogoConfig('FOOTER').src}
                  alt={getLogoConfig('FOOTER').alt}
                  className={getLogoConfig('FOOTER').className}
                />
              </div>
              <h3 className="text-2xl font-bold gradient-text">{SCHOOL_INFO.NAME}</h3>
            </div>
            <p className="text-neutral-300 mb-8 text-lg leading-relaxed max-w-md">
              Empowering students through innovative education and comprehensive development. Fostering excellence in academics and character building.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Vettukad, Puthucode (PO), Palakkad, Kerala, India - 678687.</span>
              </div>
              
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 9495065324</span>
              </div>
              
              <div className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>newleafschoolpkd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Academics</span>
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Achievements</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Events</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Connect */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-6">Connect</h4>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Staff Login</span>
                </Link>
              </li>
            </ul>
            
            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-neutral-400 mb-4 tracking-wider uppercase">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="https://twitter.com/newleaveschool" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-500/20 hover:shadow-neon transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/newleaveschool" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-500/20 hover:shadow-neon transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/newleaveschool" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-primary-500/20 hover:shadow-neon transition-all duration-300 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-12">
          
            <div className="text-neutral-400">
              <p className="text-lg">&copy; 2025 <span className="gradient-text font-semibold">New Leaf School</span>. All rights reserved.</p>
            </div>
          
          
          {/* Back to top button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center space-x-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-neutral-400 hover:text-white transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;