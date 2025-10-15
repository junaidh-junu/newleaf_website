/**
 * Centralized assets configuration
 * This file contains all references to school logos and images.
 * Update paths here to change them throughout the application.
 */

// School Logos - All variants available
export const SCHOOL_LOGOS = {
  // Primary logo (recommended for headers and main branding)
  PRIMARY: '/images/newleaf/new leaf logos-01.png',
  PRIMARY_JPG: '/images/newleaf/new leaf logos-01.jpg',
  
  // Alternative logo variants
  VARIANT_2: '/images/newleaf/new leaf logos-02.png',
  VARIANT_2_JPG: '/images/newleaf/new leaf logos-02.jpg',
  
  VARIANT_3: '/images/newleaf/new leaf logos-03.png',
  VARIANT_3_JPG: '/images/newleaf/new leaf logos-03.jpg',
  
  VARIANT_4: '/images/newleaf/new leaf logos-04.png',
  VARIANT_4_JPG: '/images/newleaf/new leaf logos-04.jpg',
  
  VARIANT_5: '/images/newleaf/new leaf logos-05.png',
  VARIANT_5_JPG: '/images/newleaf/new leaf logos-05.jpg',
};

// Commonly used logo configurations
export const LOGO_CONFIGS = {
  // Header logo configuration
  HEADER: {
    src: SCHOOL_LOGOS.PRIMARY,
    alt: 'New Leaf School Logo',
    className: 'w-12 h-12 object-contain'
  },
  
  // Admin sidebar logo configuration
  ADMIN_SIDEBAR: {
    src: SCHOOL_LOGOS.PRIMARY,
    alt: 'New Leaf School',
    className: 'w-8 h-8 object-contain'
  },
  
  // Footer logo configuration
  FOOTER: {
    src: SCHOOL_LOGOS.VARIANT_2,
    alt: 'New Leaf School & Heavens Preschool',
    className: 'w-16 h-16 object-contain'
  },
  
  // Large display logo (for hero sections, about page, etc.)
  HERO: {
    src: SCHOOL_LOGOS.VARIANT_3,
    alt: 'New Leaf School & Heavens Preschool',
    className: 'w-32 h-32 object-contain'
  }
};

// School information
export const SCHOOL_INFO = {
  NAME: 'New Leaf School',
  SUBTITLE: '& Heavens Preschool',
  FULL_NAME: 'New Leaf School & Heavens Preschool'
};

// Utility function to get logo with fallback
export const getLogo = (variant = 'PRIMARY', format = 'png') => {
  const key = format === 'jpg' ? `${variant}_JPG` : variant;
  return SCHOOL_LOGOS[key] || SCHOOL_LOGOS.PRIMARY;
};

// Utility function to get logo config
export const getLogoConfig = (type = 'HEADER') => {
  return LOGO_CONFIGS[type] || LOGO_CONFIGS.HEADER;
};