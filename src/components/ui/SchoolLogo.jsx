import React from 'react';
import { SCHOOL_LOGOS, LOGO_CONFIGS, getLogo, getLogoConfig } from '../../config/assets';

/**
 * Reusable School Logo Component
 * 
 * @param {string} type - Pre-configured logo type: 'HEADER', 'ADMIN_SIDEBAR', 'FOOTER', 'HERO', 'HEAVENS', 'NEW_LEAF', 'NEW_LEAF_ICON'
 * @param {string} variant - Logo variant: 'COMBINED', 'NEW_LEAF_SCHOOL', 'NEW_LEAF_LOGO', 'HEAVENS'
 * @param {string} format - Image format: 'png' or 'jpg'
 * @param {string} className - Custom CSS classes
 * @param {string} alt - Custom alt text
 * @param {object} props - Additional img props
 */
const SchoolLogo = ({ 
  type, 
  variant, 
  format = 'png',
  className,
  alt,
  ...props 
}) => {
  // If type is provided, use pre-configured settings
  if (type) {
    const config = getLogoConfig(type);
    return (
      <img
        src={config.src}
        alt={alt || config.alt}
        className={className || config.className}
        {...props}
      />
    );
  }

  // If variant is provided, use specific variant
  if (variant) {
    return (
      <img
        src={getLogo(variant, format)}
        alt={alt || 'New Leaf School Logo'}
        className={className || 'w-12 h-12 object-contain'}
        {...props}
      />
    );
  }

  // Default to combined logo
  return (
    <img
      src={SCHOOL_LOGOS.COMBINED}
      alt={alt || 'New Leaf & Heavens School Logo'}
      className={className || 'w-12 h-12 object-contain'}
      {...props}
    />
  );
};

export default SchoolLogo;