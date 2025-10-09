# 🏫 New Leaf School Website

A modern, responsive school website built with React, Vite, TailwindCSS, and Supabase. This project includes a public website for showcasing school information and a secure admin panel for content management.

## 🌟 Features

### Public Website
- **Home Page** - Hero section, features, and latest updates
- **About Us** - School history, mission, vision, and leadership
- **Academics** - Curriculum and academic programs
- **Achievements** - Awards and recognitions
- **Gallery** - Photo and video gallery
- **Events** - Upcoming and past school events
- **Contact** - Contact form and school information

### Admin Panel (Protected)
- **Dashboard** - Overview and quick actions
- **Manage Posts** - Create, edit, and delete announcements
- **Manage Events** - Schedule and manage school events
- **Manage Gallery** - Upload and organize photos/videos
- **Authentication** - Secure login for teachers and administrators

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React + Vite + TailwindCSS | Responsive UI and fast static build |
| Backend | Supabase (PostgreSQL) | Database, Authentication, Storage |
| Hosting | Netlify | Free static site hosting and CDN |
| Deployment Control | GitHub | Version control and auto-deployment |
| Environment Config | .env + Netlify Environment Variables | Secure handling of Supabase keys |
| Storage | Supabase Storage | For images, documents, and videos |

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v18 or higher)
- npm or yarn package manager
- A Supabase account and project
- A Netlify account (for deployment)
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/newleaf-school-website.git
cd newleaf-school-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Update the `.env` file with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup (Supabase)

Create the following tables in your Supabase database:

#### Users Table
```sql
-- Users table (managed by Supabase Auth)
CREATE TABLE users (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'teacher' CHECK (role IN ('teacher', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Posts Table
```sql
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  author_email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Events Table
```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Gallery Table
```sql
CREATE TABLE gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  caption TEXT,
  image_url TEXT NOT NULL,
  uploaded_by TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Row Level Security (RLS) Policies

Enable RLS and create policies for each table:

```sql
-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

-- Posts policies
CREATE POLICY "Public can read posts" ON posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert posts" ON posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update their own posts" ON posts FOR UPDATE USING (auth.email() = author_email);
CREATE POLICY "Users can delete their own posts" ON posts FOR DELETE USING (auth.email() = author_email);

-- Events policies
CREATE POLICY "Public can read events" ON events FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage events" ON events FOR ALL USING (auth.role() = 'authenticated');

-- Gallery policies
CREATE POLICY "Public can read gallery" ON gallery FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage gallery" ON gallery FOR ALL USING (auth.role() = 'authenticated');
```

### 6. Storage Setup

1. Create a storage bucket called `school-media`
2. Set up policies for public read access and authenticated user write access

### 7. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
newleaf-school-website/
├── public/
│   ├── images/
│   └── icons/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── forms/
│   │   └── gallery/
│   ├── pages/
│   │   ├── public/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Academics.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Login.jsx
│   │   └── admin/
│   │       ├── Dashboard.jsx
│   │       ├── ManagePosts.jsx
│   │       ├── ManageEvents.jsx
│   │       └── ManageGallery.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── services/
│   │   └── supabase.js
│   ├── utils/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── docs/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── netlify.toml
└── README.md
```

## 🚢 Deployment

### Netlify Deployment

1. **Connect to Git**: Connect your Netlify account to your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**: Add the following in your Netlify dashboard:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Deploy**: Netlify will automatically build and deploy your site

### Custom Domain Setup

1. Add your custom domain in Netlify dashboard
2. Configure DNS records as instructed by Netlify
3. Enable HTTPS (automatic with Netlify)

## 🔐 Authentication Setup

### Creating Admin Users

1. Use Supabase Auth to create user accounts
2. Add users to the `users` table with appropriate roles
3. Users can then log in through the `/login` page

### Default Admin Credentials

For development, you can create a user directly in Supabase Auth dashboard.

## 📝 Content Management

### Adding Posts/Announcements
1. Log in to the admin panel
2. Navigate to "Manage Posts"
3. Create, edit, or delete posts as needed

### Managing Events
1. Go to "Manage Events" in the admin panel
2. Add event details including date, description, and images

### Gallery Management
1. Use "Manage Gallery" to upload photos and videos
2. Images are stored in Supabase Storage
3. Automatic thumbnail generation and optimization

## 🎨 Customization

### Styling
- Colors can be customized in `tailwind.config.js`
- Custom styles are in `src/index.css` and `src/App.css`
- Component-specific styles use Tailwind CSS classes

### Content
- Update school information in the About page
- Modify the contact information in the Contact page
- Change the hero section content in the Home page

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📊 Database Schema

See the [Database Schema Documentation](docs/database-schema.md) for detailed information about the database structure and relationships.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help or have questions:

1. Check the [Issues](https://github.com/your-username/newleaf-school-website/issues) page
2. Create a new issue with detailed information
3. Contact the school's IT administrator

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Basic website structure
- [x] Admin authentication
- [x] Content management system
- [x] Responsive design

### Phase 2 (Future)
- [ ] Online admission forms
- [ ] Student portal
- [ ] Parent communication system
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Advanced analytics

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing frontend library
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Supabase](https://supabase.com/) for the backend-as-a-service
- [Netlify](https://www.netlify.com/) for hosting and deployment
- The open-source community for various packages and tools used in this project