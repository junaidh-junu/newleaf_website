import React from 'react';
import { Link } from 'react-router-dom';

const SchoolsShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-heavens">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-6">Our Educational Family</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From early childhood to comprehensive education, we provide a continuous learning journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Heavens Preschool */}
          <div className="card group text-center shimmer-effect perspective-1000 bg-white/80">
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-blue-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-heavens-orange floating-element group-hover:shadow-glow transition-all duration-500 p-4">
                  {/* Placeholder for Heavens logo */}
                  <div className="w-full h-full bg-white/90 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500 mb-1">H</div>
                      <div className="w-8 h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-pink-500 rounded-full mx-auto mb-1"></div>
                      <div className="text-xs text-neutral-600 font-medium">LOGO</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-3 bg-gradient-to-br from-orange-400 via-blue-400 to-pink-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                Heavens Preschool
              </span>
            </h3>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              <em>"Up Above The World"</em>
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Where little minds begin their journey to the stars. Our nurturing environment helps children 
              develop foundational skills through play-based learning and creative exploration.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Ages 2-5</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Play-Based Learning</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Creative Arts</span>
            </div>
            
            <div className="mt-6 w-full h-1 bg-gradient-to-r from-orange-400 via-blue-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          
          {/* New Leaf School */}
          <div className="card group text-center shimmer-effect perspective-1000 bg-white/80">
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-neon floating-element group-hover:shadow-glow transition-all duration-500 p-4" style={{animationDelay: '1s'}}>
                  {/* Placeholder for New Leaf logo */}
                  <div className="w-full h-full bg-white/90 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="text-xs text-neutral-600 font-medium">LOGO</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">New Leaf School</h3>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              <em>"For Quran and English"</em>
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Comprehensive Islamic and modern education that nurtures both spiritual and academic growth. 
              Building confident leaders with strong moral foundations and academic excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">Ages 6-16</span>
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">Islamic Studies</span>
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">English Medium</span>
            </div>
            
            <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="btn-primary group px-10 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Visit Our Schools</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            
            <Link
              to="/about"
              className="btn-secondary group px-10 py-4 text-lg"
            >
              <span className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Learn More</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsShowcase;