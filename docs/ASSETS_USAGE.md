# Centralized Assets System Usage Guide

This guide explains how to use the centralized assets system for managing school logos and images throughout the application.

## Files Created

1. **`src/config/assets.js`** - Centralized configuration for all assets
2. **`src/components/ui/SchoolLogo.jsx`** - Reusable logo component
3. **`docs/ASSETS_USAGE.md`** - This usage guide

## Quick Start

### Method 1: Using the SchoolLogo Component (Recommended)

```jsx
import SchoolLogo from '../ui/SchoolLogo';

// Use pre-configured logo for header
<SchoolLogo type="HEADER" />

// Use pre-configured logo for admin sidebar
<SchoolLogo type="ADMIN_SIDEBAR" />

// Use pre-configured logo for footer
<SchoolLogo type="FOOTER" />

// Use pre-configured logo for hero sections
<SchoolLogo type="HERO" />

// Use specific variant
<SchoolLogo variant="VARIANT_2" />

// Use JPG format
<SchoolLogo variant="PRIMARY" format="jpg" />

// Custom styling
<SchoolLogo 
  type="HEADER" 
  className="w-16 h-16 rounded-full" 
  alt="Custom alt text" 
/>
```

### Method 2: Direct Import from Config

```jsx
import { SCHOOL_LOGOS, LOGO_CONFIGS, SCHOOL_INFO } from '../config/assets';

// Direct logo usage
<img src={SCHOOL_LOGOS.PRIMARY} alt="School Logo" className="w-12 h-12" />

// Using pre-configured settings
const headerConfig = LOGO_CONFIGS.HEADER;
<img 
  src={headerConfig.src} 
  alt={headerConfig.alt} 
  className={headerConfig.className} 
/>

// Using school info
<h1>{SCHOOL_INFO.NAME}</h1>
<p>{SCHOOL_INFO.SUBTITLE}</p>
```

### Method 3: Using Utility Functions

```jsx
import { getLogo, getLogoConfig } from '../config/assets';

// Get specific variant and format
const logoSrc = getLogo('VARIANT_3', 'jpg');
<img src={logoSrc} alt="School Logo" />

// Get pre-configured logo settings
const config = getLogoConfig('HERO');
<img 
  src={config.src} 
  alt={config.alt} 
  className={config.className} 
/>
```

## Available Logo Variants

- **PRIMARY** - `new leaf logos-01` (PNG/JPG)
- **VARIANT_2** - `new leaf logos-02` (PNG/JPG) 
- **VARIANT_3** - `new leaf logos-03` (PNG/JPG)
- **VARIANT_4** - `new leaf logos-04` (PNG/JPG)
- **VARIANT_5** - `new leaf logos-05` (PNG/JPG)

## Pre-configured Logo Types

- **HEADER** - 12x12 size, for navigation headers
- **ADMIN_SIDEBAR** - 8x8 size, for admin panel sidebar
- **FOOTER** - 16x16 size, for footer sections
- **HERO** - 32x32 size, for hero sections and large displays

## Example: Updating Header Component

Here's how to update your Header component to use the actual school logo:

```jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SchoolLogo from '../ui/SchoolLogo';
import { SCHOOL_INFO } from '../../config/assets';

const Header = () => {
  // ... existing code ...

  return (
    <header className="...">
      <nav className="...">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-neon transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                {/* Replace SVG with actual school logo */}
                <SchoolLogo type="HEADER" className="w-10 h-10 object-contain" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">
                {SCHOOL_INFO.NAME}
              </div>
              <div className="text-xs text-neutral-500 font-medium tracking-wide -mt-1">
                {SCHOOL_INFO.SUBTITLE}
              </div>
            </div>
          </Link>
          
          {/* ... rest of the component */}
        </div>
      </nav>
    </header>
  );
};
```

## Example: Updating Admin Sidebar

```jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SchoolLogo from '../ui/SchoolLogo';
import { SCHOOL_INFO } from '../../config/assets';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  // ... existing code ...

  return (
    <div className="...">
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
        <Link to="/" className="flex items-center">
          <SchoolLogo type="ADMIN_SIDEBAR" />
          <span className="ml-3 text-xl font-bold text-gray-900">
            {SCHOOL_INFO.NAME}
          </span>
        </Link>
        {/* ... rest of the component */}
      </div>
    </div>
  );
};
```

## Benefits

1. **Single Source of Truth**: All logo references in one place
2. **Easy Updates**: Change logo paths/variants globally by updating `assets.js`
3. **Type Safety**: Pre-configured types prevent typos and inconsistencies
4. **Consistent Styling**: Pre-defined configurations ensure consistent appearance
5. **Format Flexibility**: Easy switching between PNG and JPG formats
6. **Maintainability**: Clear separation of assets from component logic

## Adding New Assets

To add new logos or images:

1. Add them to `public/images/newleaf/` directory
2. Update `SCHOOL_LOGOS` object in `src/config/assets.js`
3. Add any new pre-configurations to `LOGO_CONFIGS` if needed
4. Update this documentation

## Migration Guide

To migrate existing hardcoded logo references:

1. Find all instances of `'/images/newleaf/'` or `'/public/images/'` in your codebase
2. Replace with imports from `src/config/assets.js`
3. Use the `SchoolLogo` component where possible for consistency
4. Test all logo displays across the application