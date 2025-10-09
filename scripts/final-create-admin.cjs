const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

console.log('🚀 New Leaf School - Creating Admin User')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase configuration!')
  process.exit(1)
}

// Create service role client for admin operations
// Note: In production, you'd use the service_role key, but for development we'll use anon key
const supabase = createClient(supabaseUrl, supabaseKey)

async function createAdminUser() {
  const email = 'admin@newleafschool.com'
  const password = 'admin123456'
  
  console.log('👤 Creating admin user...')
  console.log('📧 Email:', email)
  console.log('🔐 Password:', password)
  console.log()
  
  try {
    // Try to sign up the user
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          role: 'admin',
          full_name: 'Admin User'
        }
      }
    })
    
    if (signUpError) {
      if (signUpError.message.includes('User already registered')) {
        console.log('ℹ️  User already exists! Testing login...')
        
        // Try to sign in
        const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        
        if (signInError) {
          console.log('❌ Sign in failed:', signInError.message)
          
          // Manual creation fallback
          console.log('\n📝 Manual Setup Required:')
          console.log('1. Go to: https://supabase.com/dashboard')
          console.log('2. Select your project: newleaf-school-website')
          console.log('3. Go to Authentication → Users')
          console.log('4. Click "Add user"')
          console.log('5. Email: admin@newleafschool.com')
          console.log('6. Password: admin123456')
          console.log('7. Check "Auto Confirm User"')
          console.log('8. Save')
          return false
        } else {
          console.log('✅ Successfully signed in with existing user!')
          return true
        }
      } else {
        console.log('❌ Sign up error:', signUpError.message)
        
        if (signUpError.message.includes('Signup is disabled')) {
          console.log('\n💡 Signup is disabled. Manual setup required:')
          console.log('1. Go to: https://supabase.com/dashboard')
          console.log('2. Select project: newleaf-school-website')
          console.log('3. Go to Authentication → Settings')
          console.log('4. Enable "Enable email confirmations" OR')
          console.log('5. Go to Authentication → Users')
          console.log('6. Click "Add user" manually')
          console.log('7. Email: admin@newleafschool.com')
          console.log('8. Password: admin123456')
          console.log('9. Check "Auto Confirm User"')
          return false
        }
        return false
      }
    } else if (signUpData.user) {
      console.log('✅ Admin user created successfully!')
      console.log('👤 User ID:', signUpData.user.id)
      console.log('📧 Email:', signUpData.user.email)
      
      if (signUpData.user.email_confirmed_at) {
        console.log('✅ Email confirmed automatically')
      } else {
        console.log('📧 Email confirmation may be required')
        console.log('   Check Supabase Dashboard if login fails')
      }
      return true
    }
  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
    return false
  }
}

async function main() {
  const success = await createAdminUser()
  
  console.log('\n🎯 Admin Login Details')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📧 Email: admin@newleafschool.com')
  console.log('🔐 Password: admin123456')
  console.log('🌐 Login URL: http://localhost:3000/login')
  console.log('🎛️  Dashboard: http://localhost:3000/admin')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  if (success) {
    console.log('\n🎉 Setup Complete!')
    console.log('You can now login to the admin panel!')
  } else {
    console.log('\n⚠️  Manual setup may be required.')
    console.log('Follow the instructions above to create the user manually.')
  }
  
  console.log('\n📝 Next Steps:')
  console.log('1. Go to http://localhost:3000/login')
  console.log('2. Enter the admin credentials above')
  console.log('3. Start managing your school website!')
  
  process.exit(success ? 0 : 1)
}

main().catch(console.error)