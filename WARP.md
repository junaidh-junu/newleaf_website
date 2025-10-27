# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based school website built with Vite, TailwindCSS, and Supabase. It features a public-facing website and a secure admin panel for content management. The application is deployed on Netlify with automatic deployments from GitHub.

## Development Commands

### Core Development
```bash
# Install dependencies
npm install

# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Required environment variables in .env:
# VITE_SUPABASE_URL=your_supabase_project_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Testing Database Operations
When working with Supabase operations, test them using the helper functions in `src/services/supabase.js`:
- `getPosts()`, `createPost()`, `updatePost()`, `deletePost()`
- `getEvents()`, `createEvent()`, `updateEvent()`, `deleteEvent()`
- `getGallery()`, `createGalleryItem()`, `deleteGalleryItem()`
- `uploadFile()`, `deleteFile()`

## Architecture

### High-Level Structure
The application follows a standard React SPA pattern with protected admin routes:

- **Public Routes**: Home, About, Academics, Achievements, Gallery, Events, Contact, Login
- **Protected Admin Routes**: Dashboard, Manage Posts, Manage Events, Manage Gallery
- **Authentication**: Supabase Auth with email/password, managed via AuthContext
- **Data Layer**: Supabase PostgreSQL with helper functions in services layer
- **Storage**: Supabase Storage for file uploads (bucket: `school-media`)
- **Static Assets**: School logos and branding stored in `public/images/newleaf/`

### Key Components
- `AuthProvider` (context/AuthContext.jsx) - Manages authentication state across the app
- `ProtectedRoute` (components/ui/ProtectedRoute.jsx) - Route guard for admin pages
- `Layout` (components/layout/Layout.jsx) - Main layout wrapper with header/footer
- Service layer (services/supabase.js) - Database operations and file management

### Database Schema
Four main tables:
- `users` - Teacher/admin accounts (linked to Supabase Auth)
- `posts` - School announcements and news
- `events` - School events with dates and descriptions  
- `gallery` - Image gallery with captions

Row Level Security (RLS) is enabled with policies allowing public read access and authenticated write access.

## Deployment Architecture

### Netlify Configuration
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirects configured in `netlify.toml`
- Security headers and caching rules included
- Environment variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`

### Supabase Setup
- PostgreSQL database with RLS policies
- Authentication for teachers/administrators
- Storage bucket `school-media` for file uploads
- CORS configured for the deployment domain

## Assets and Branding

### School Logos
School logos are stored in `public/images/newleaf/` directory:

**Heavens School Logo:**
- `heavens.png/jpg` - Heavens School logo

**New Leaf School Logos:**
- `new_leaf_logo.png/jpg` - New Leaf logo only (without school name)
- `new_leaf_school.png/jpg` - New Leaf logo with school name

**Combined Logo:**
- `school_logo.png/jpg` - Combined logo featuring both schools and Human Care Foundation

### Using School Logos
To use school logos in components:
```jsx
// Combined logo (recommended for headers/branding)
<img 
  src="/images/newleaf/school_logo.png" 
  alt="New Leaf & Heavens School Logo" 
  className="w-12 h-12" 
/>

// New Leaf with school name
<img 
  src="/images/newleaf/new_leaf_school.png" 
  alt="New Leaf School" 
  className="w-12 h-12" 
/>

// New Leaf logo only
<img 
  src="/images/newleaf/new_leaf_logo.png" 
  alt="New Leaf Logo" 
  className="w-12 h-12" 
/>

// Heavens School logo
<img 
  src="/images/newleaf/heavens.png" 
  alt="Heavens School" 
  className="w-12 h-12" 
/>
```

**Note**: Currently, the Header component uses an SVG placeholder icon instead of the actual school logo. Consider using `school_logo.png` (combined logo) for the main header to represent both schools and the foundation.

## Development Guidelines

### Adding New Features
1. For public pages: Add to `src/pages/public/` and update routing in `App.jsx`
2. For admin features: Add to `src/pages/admin/` under protected routes
3. Database operations: Extend helper functions in `services/supabase.js`
4. Styling: Use TailwindCSS with the custom color palette (primary green theme)
5. Branding: Use official school logos from `public/images/newleaf/` directory

### File Upload Pattern
Files are uploaded to Supabase Storage using the `uploadFile()` helper:
```javascript
const publicUrl = await uploadFile('school-media', file, `folder/${filename}`);
// Store publicUrl in database record
```

### Authentication Flow
- Login redirects authenticated users to `/admin`
- Protected routes check auth state via `useAuth()` hook
- Logout clears session and redirects to public pages
- Loading states are handled during auth checks

### State Management
- Authentication state: React Context (AuthContext)
- Component state: React hooks (useState, useEffect)
- No external state management library used

## Build Optimization

The Vite config includes:
- Manual chunking for vendor libraries (React, Supabase)
- Source maps disabled in production
- Development server on port 3000

TailwindCSS is configured with:
- Custom primary color palette (green theme)
- Custom animations (fade-in, slide-up)
- Inter font family

## Key Files to Understand
- `src/App.jsx` - Main routing and app structure
- `src/context/AuthContext.jsx` - Authentication management
- `src/services/supabase.js` - All database operations
- `src/components/layout/Header.jsx` - Main navigation with logo placeholder (can be updated to use actual logos)
- `src/components/admin/AdminSidebar.jsx` - Admin panel navigation with school branding
- `public/images/newleaf/` - Directory containing official school logos and branding assets
- `vite.config.js` - Build configuration and optimization
- `netlify.toml` - Deployment and security configuration
