-- Create admin user in Supabase Auth
-- Note: This needs to be run with appropriate permissions

-- First, let's check if the user already exists
DO $$
DECLARE
    user_id uuid;
    user_email text := 'admin@newleafschool.com';
    user_password text := 'admin123456';
    encrypted_password text;
BEGIN
    -- Check if user already exists
    SELECT id INTO user_id 
    FROM auth.users 
    WHERE email = user_email;
    
    IF user_id IS NOT NULL THEN
        RAISE NOTICE 'User % already exists with ID: %', user_email, user_id;
    ELSE
        -- Create the user
        -- Note: In production, you should use proper password hashing
        -- This is a simplified version for development
        
        -- Generate a new UUID for the user
        user_id := gen_random_uuid();
        
        -- Insert into auth.users table
        INSERT INTO auth.users (
            id,
            instance_id,
            email,
            encrypted_password,
            email_confirmed_at,
            created_at,
            updated_at,
            role,
            aud,
            confirmation_token,
            email_change_token_new,
            recovery_token
        ) VALUES (
            user_id,
            '00000000-0000-0000-0000-000000000000'::uuid,
            user_email,
            crypt(user_password, gen_salt('bf')), -- Bcrypt hash
            now(),
            now(),
            now(),
            'authenticated',
            'authenticated',
            '',
            '',
            ''
        );
        
        -- Insert into auth.identities table
        INSERT INTO auth.identities (
            id,
            user_id,
            identity_data,
            provider,
            created_at,
            updated_at
        ) VALUES (
            user_id,
            user_id,
            jsonb_build_object('sub', user_id::text, 'email', user_email),
            'email',
            now(),
            now()
        );
        
        RAISE NOTICE 'Successfully created user % with ID: %', user_email, user_id;
        RAISE NOTICE 'Email: %', user_email;
        RAISE NOTICE 'Password: %', user_password;
        RAISE NOTICE 'Login URL: http://localhost:3000/login';
    END IF;
END $$;