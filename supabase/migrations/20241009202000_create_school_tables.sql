-- Create the main tables for New Leaf School Website

-- Users table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'teacher')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    PRIMARY KEY (id)
);

-- Posts table for school announcements and news
CREATE TABLE IF NOT EXISTS public.posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    image_url TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Events table for school events
CREATE TABLE IF NOT EXISTS public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    location TEXT,
    image_url TEXT,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Gallery table for photos and videos
CREATE TABLE IF NOT EXISTS public.gallery (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    category TEXT DEFAULT 'general',
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Users policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.users
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Posts policies
CREATE POLICY "Posts are viewable by everyone" ON public.posts
    FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage posts" ON public.posts
    FOR ALL USING (auth.role() = 'authenticated');

-- Events policies
CREATE POLICY "Events are viewable by everyone" ON public.events
    FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage events" ON public.events
    FOR ALL USING (auth.role() = 'authenticated');

-- Gallery policies
CREATE POLICY "Gallery items are viewable by everyone" ON public.gallery
    FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can manage gallery" ON public.gallery
    FOR ALL USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON public.posts(created_at DESC);
CREATE INDEX IF NOT EXISTS posts_published_idx ON public.posts(is_published);
CREATE INDEX IF NOT EXISTS events_event_date_idx ON public.events(event_date);
CREATE INDEX IF NOT EXISTS events_published_idx ON public.events(is_published);
CREATE INDEX IF NOT EXISTS gallery_category_idx ON public.gallery(category);
CREATE INDEX IF NOT EXISTS gallery_published_idx ON public.gallery(is_published);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, full_name, avatar_url)
    VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create user profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert sample data
INSERT INTO public.posts (title, content, author, is_published) VALUES 
('Welcome to New Leaf School', 'We are excited to welcome all students and families to the new academic year at New Leaf School. This year brings new opportunities for learning and growth.', 'Principal Smith', true),
('Science Fair 2024', 'Our annual science fair will be held next month. Students are encouraged to participate and showcase their innovative projects.', 'Dr. Johnson', true),
('Sports Day Results', 'Congratulations to all participants in this year''s sports day. The event was a huge success with record participation.', 'Coach Williams', true);

INSERT INTO public.events (title, description, event_date, location, is_published) VALUES 
('Parent-Teacher Meeting', 'Annual parent-teacher meeting to discuss student progress and school activities.', '2024-11-15 10:00:00+00', 'Main Auditorium', true),
('Science Exhibition', 'Students will showcase their science projects and experiments.', '2024-11-20 14:00:00+00', 'Science Lab', true),
('Winter Break Begins', 'Last day of classes before winter break. School resumes in January.', '2024-12-20 15:30:00+00', 'School Campus', true);

INSERT INTO public.gallery (title, description, image_url, category, is_published) VALUES 
('School Building', 'Our beautiful main school building', 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop', 'campus', true),
('Students in Library', 'Students studying in our well-equipped library', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', 'academic', true),
('Science Lab', 'Modern science laboratory facilities', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop', 'facilities', true),
('Sports Day', 'Annual sports day celebration', 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop', 'events', true);