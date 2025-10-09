-- Create storage bucket for school media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('school-media', 'school-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for the school-media bucket
-- Note: These policies might already exist, so we use IF NOT EXISTS equivalent

-- Policy for public viewing of school media
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Public can view school media') THEN
        CREATE POLICY "Public can view school media" ON storage.objects FOR SELECT USING (bucket_id = 'school-media');
    END IF;
END$$;

-- Policy for authenticated users to upload school media
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can upload school media') THEN
        CREATE POLICY "Authenticated users can upload school media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'school-media' AND auth.role() = 'authenticated');
    END IF;
END$$;

-- Policy for authenticated users to update school media
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can update school media') THEN
        CREATE POLICY "Authenticated users can update school media" ON storage.objects FOR UPDATE USING (bucket_id = 'school-media' AND auth.role() = 'authenticated');
    END IF;
END$$;

-- Policy for authenticated users to delete school media
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Authenticated users can delete school media') THEN
        CREATE POLICY "Authenticated users can delete school media" ON storage.objects FOR DELETE USING (bucket_id = 'school-media' AND auth.role() = 'authenticated');
    END IF;
END$$;