import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Error: Missing environment variables')
  console.error('Please create a .env file with:')
  console.error('  VITE_SUPABASE_URL=your_supabase_url')
  console.error('  VITE_SUPABASE_ANON_KEY=your_supabase_anon_key')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function createAdminUser() {
  const email = 'admin@newleafschool.com'
  const password = 'admin123456'
  
  console.log('Creating admin user...')
  console.log('Email:', email)
  console.log('Password:', password)
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    
    if (error) {
      console.error('Error creating user:', error.message)
    } else {
      console.log('✅ Admin user created successfully!')
      console.log('User ID:', data.user?.id)
      console.log('\n📝 Login credentials:')
      console.log('Email: admin@newleafschool.com')
      console.log('Password: admin123456')
      console.log('\n🌐 You can now login at: http://localhost:3000/login')
    }
  } catch (error) {
    console.error('Error:', error.message)
  }
}

createAdminUser()