🏫 Functional Requirements Document (FRD)
Project: New Leaf School Website
Version: 1.0
Date: October 2025
Prepared by: [Your Name]
1. 🎯 Project Overview

The New Leaf School Website is a modern, responsive web platform designed to showcase school information, achievements, activities, and updates.
It will also provide a secure admin panel for teachers to log in and manage daily updates, images, events, and announcements.

The website will be hosted on Netlify and use Supabase as the backend for data, authentication, and storage.

The goal is to create a dynamic, maintainable, and free-to-host system, with only domain costs incurred.

2. ⚙️ Technology Stack
Component	Technology	Purpose
Frontend	React + Vite + TailwindCSS	Responsive UI and fast static build
Backend	Supabase (PostgreSQL)	Database, Authentication, Storage
Hosting	Netlify	Free static site hosting and CDN
Deployment Control	GitHub	Version control and auto-deployment to Netlify
Environment Config	.env + Netlify Environment Variables	Secure handling of Supabase keys
Storage	Supabase Storage	For images, documents, and videos (links)
Domain	Custom .com (e.g., newleafschool.com)	Official website address
3. 🧱 System Architecture

Client (Browser) → React + Vite Frontend
↕
Supabase Services (Backend):

PostgreSQL Database

Supabase Auth

Supabase Storage (images, docs)

All communications via secure HTTPS REST APIs.

4. 🗂️ Website Structure (Modules / Pages)
Public Pages
Page	Description	Access
Home	Overview, banner, welcome message, highlights	Public
About Us	School history, mission, staff introduction	Public
Academics	Subjects, curriculum details	Public
Achievements	Awards, recognitions, student/teacher achievements	Public
Gallery	Image and video gallery (from Supabase Storage or YouTube links)	Public
Events	Upcoming and past school events	Public
Contact Us	Form for contacting school admin (email sent via Netlify Forms)	Public
Login	Teacher/Admin login portal	Public
Admin Panel (Private Pages)
Page	Functionality	Access
Dashboard	Overview of recent uploads and activities	Logged-in users only
Manage Posts / News	Add, edit, delete announcements or updates	Teachers/Admin
Manage Events	Create and edit school events	Teachers/Admin
Manage Gallery	Upload images and videos to Supabase Storage	Teachers/Admin
Logout	Sign out securely	Teachers/Admin
5. 🔐 User Roles and Permissions
Role	Description	Permissions
Visitor	General user visiting the site	View all public pages
Teacher / Admin	Authenticated user	Add, edit, delete content (posts, events, images)

Authentication handled via Supabase Auth (Email & Password).

6. 🗄️ Database Design (Supabase PostgreSQL)
Tables
1. users
Column	Type	Description
id	UUID	Unique user ID (auto by Supabase Auth)
email	Text	Teacher email
role	Text	Role (teacher / admin)
created_at	Timestamp	Created time
2. posts
Column	Type	Description
id	UUID	Unique ID
title	Text	Announcement title
description	Text	Announcement content
image_url	Text	Optional image link
author_email	Text	Uploaded by
created_at	Timestamp	Date/time created
3. events
Column	Type	Description
id	UUID	Unique ID
name	Text	Event title
date	Date	Event date
description	Text	Details
image_url	Text	Image link
created_at	Timestamp	Created timestamp
4. gallery
Column	Type	Description
id	UUID	Unique ID
caption	Text	Caption for image
image_url	Text	Supabase Storage link
uploaded_by	Text	Teacher email
created_at	Timestamp	Upload date
7. 🧰 Functional Requirements
Frontend (React + Tailwind)

Responsive design (desktop, tablet, mobile)

Client-side routing (React Router)

Fetch and render dynamic data from Supabase

Embed YouTube videos for events

Gallery with lightbox image viewer

Contact form with Netlify Forms integration

Protected routes for Admin Panel (Auth check)

Backend (Supabase)

Authentication for teachers/admins

CRUD operations on posts, events, gallery

Image and file uploads via Supabase Storage

Secure row-level policies:

Only logged-in users can write data

Public users can read-only

Hosting (Netlify)

Auto-deployment from GitHub main branch

Environment variables:

VITE_SUPABASE_URL

VITE_SUPABASE_ANON_KEY

Custom domain configuration

Redirect setup for SPA routing via netlify.toml

8. 🧾 Non-Functional Requirements
Category	Requirement
Performance	Fast load (<3s), optimized images
Security	HTTPS, Supabase Auth, restricted API keys
Scalability	Auto-scale via Netlify CDN and Supabase
Maintainability	Modular React components, reusable structure
Availability	99% uptime via Netlify + Supabase
Usability	Simple admin UI for non-technical users
9. 🧑‍💻 Deployment Plan

Develop locally with React + Vite.

Connect Supabase and test CRUD.

Push to GitHub.

Deploy on Netlify:

Connect GitHub repo

Add environment variables

Set build command: npm run build

Publish directory: dist

Add custom domain.

Configure Supabase CORS for domain.

10. 📋 Future Enhancements (Optional)

Online Admission Form

Student Login Area (Grades, Attendance)

Notifications & Announcements Feed

Multiple Language Support

Blog/Newsletter module

Dark Mode

11. ✅ Deliverables

Fully functional, responsive school website

Admin panel with login and upload capability

Supabase database & storage integrated

Deployed website on Netlify with custom domain

Source code on GitHub

12. 📎 References

Supabase Documentation

Netlify Deployment Guide

React Router

TailwindCSS Docs