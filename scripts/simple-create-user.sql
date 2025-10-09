-- Simple admin user creation for development
-- This bypasses normal Supabase Auth signup process

-- Generate admin user ID
DO $$
DECLARE
    admin_user_id uuid := gen_random_uuid();
    admin_email text := 'admin@newleafschool.com';
    admin_password text := 'admin123456';
    encrypted_pw text;
BEGIN
    -- Create bcrypt password hash
    SELECT crypt(admin_password, gen_salt('bf')) INTO encrypted_pw;
    
    -- Insert directly into auth.users
    INSERT INTO auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
    ) VALUES (
        '00000000-0000-0000-0000-000000000000'::uuid,
        admin_user_id,
        'authenticated',
        'authenticated',
        admin_email,
        encrypted_pw,
        NOW(),
        NULL,
        NULL,
        '{"provider":"email","providers":["email"],"role":"admin"}'::jsonb,
        '{"full_name":"Admin User","role":"admin"}'::jsonb,
        NOW(),
        NOW(),
        '',
        '',
        '',
        ''
    ) ON CONFLICT (email) DO UPDATE SET
        encrypted_password = encrypted_pw,
        updated_at = NOW();
    
    -- Insert into auth.identities
    INSERT INTO auth.identities (
        provider_id,
        user_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) VALUES (
        admin_user_id::text,
        admin_user_id,
        format('{"sub":"%s","email":"%s"}', admin_user_id::text, admin_email)::jsonb,
        'email',
        NULL,
        NOW(),
        NOW()
    ) ON CONFLICT (provider, provider_id) DO NOTHING;
    
    -- Output success message
    RAISE NOTICE 'Admin user created successfully!';
    RAISE NOTICE 'Email: %', admin_email;
    RAISE NOTICE 'Password: %', admin_password;
    RAISE NOTICE 'User ID: %', admin_user_id;
    
END $$;