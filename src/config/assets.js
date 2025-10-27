/**
 * Centralized assets configuration
 * This file contains all references to school logos and images.
 * Update paths here to change them throughout the application.
 */

// School Logos - All variants available
export const SCHOOL_LOGOS = {
  // Combined logo (both schools + Human Care Foundation)
  COMBINED: '/images/newleaf/school_logo.png',
  COMBINED_JPG: '/images/newleaf/school_logo.jpg',
  
  // New Leaf School logo with school name
  NEW_LEAF_SCHOOL: '/images/newleaf/new_leaf_school.png',
  NEW_LEAF_SCHOOL_JPG: '/images/newleaf/new_leaf_school.jpg',
  
  // New Leaf logo only (without school name)
  NEW_LEAF_LOGO: '/images/newleaf/new_leaf_logo.png',
  NEW_LEAF_LOGO_JPG: '/images/newleaf/new_leaf_logo.jpg',
  
  // Heavens School logo
  HEAVENS: '/images/newleaf/heavens.png',
  HEAVENS_JPG: '/images/newleaf/heavens.jpg',
};

// Commonly used logo configurations
export const LOGO_CONFIGS = {
  // Header logo configuration (New Leaf logo only for main navigation)
  HEADER: {
    src: SCHOOL_LOGOS.NEW_LEAF_LOGO,
    alt: 'New Leaf Logo',
    className: 'w-14 h-14 object-contain'
  },
  
  // Admin sidebar logo configuration (New Leaf with school name)
  ADMIN_SIDEBAR: {
    src: SCHOOL_LOGOS.NEW_LEAF_SCHOOL,
    alt: 'New Leaf School',
    className: 'w-8 h-8 object-contain'
  },
  
  // Footer logo configuration (combined logo)
  FOOTER: {
    src: SCHOOL_LOGOS.COMBINED,
    alt: 'New Leaf School & Heavens Preschool',
    className: 'w-16 h-16 object-contain'
  },
  
  // Large display logo (for hero sections, about page, etc.)
  HERO: {
    src: SCHOOL_LOGOS.COMBINED,
    alt: 'New Leaf School & Heavens Preschool',
    className: 'w-32 h-32 object-contain'
  },
  
  // Heavens School logo configuration
  HEAVENS: {
    src: SCHOOL_LOGOS.HEAVENS,
    alt: 'Heavens School Logo',
    className: 'w-24 h-24 object-contain'
  },
  
  // New Leaf School logo with name
  NEW_LEAF: {
    src: SCHOOL_LOGOS.NEW_LEAF_SCHOOL,
    alt: 'New Leaf School',
    className: 'w-24 h-24 object-contain'
  },
  
  // New Leaf logo only (without school name)
  NEW_LEAF_ICON: {
    src: SCHOOL_LOGOS.NEW_LEAF_LOGO,
    alt: 'New Leaf Logo',
    className: 'w-12 h-12 object-contain'
  }
};

// School information
export const SCHOOL_INFO = {
  NAME: 'New Leaf School',
  SUBTITLE: '& Heavens Preschool',
  FULL_NAME: 'New Leaf School & Heavens Preschool'
};

// Utility function to get logo with fallback
export const getLogo = (variant = 'COMBINED', format = 'png') => {
  const key = format === 'jpg' ? `${variant}_JPG` : variant;
  return SCHOOL_LOGOS[key] || SCHOOL_LOGOS.COMBINED;
};

// Utility function to get logo config
export const getLogoConfig = (type = 'HEADER') => {
  return LOGO_CONFIGS[type] || LOGO_CONFIGS.HEADER;
};