# GitHub Repository Setup Instructions

## After creating your repository on GitHub, run these commands:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/newleaf-school-website.git

# Push your code to GitHub
git push -u origin main
```

## Alternative: If you want to use SSH (recommended for security):

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin git@github.com:YOUR_USERNAME/newleaf-school-website.git

# Push your code to GitHub
git push -u origin main
```

## If you encounter any issues:

### Authentication Issues:
- For HTTPS: You'll need a Personal Access Token (not your password)
- For SSH: Make sure you have SSH keys set up

### Repository Already Exists:
If you get an error about remote origin already existing:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/newleaf-school-website.git
git push -u origin main
```

## Verify Your Setup:
After pushing, you can verify everything worked by running:
```bash
git remote -v
git status
```

## Next Steps:
1. ✅ Repository created and code pushed
2. 🔧 Set up Netlify deployment (connect to this GitHub repo)
3. 🗄️ Create Supabase project and configure database
4. 🔑 Add environment variables to Netlify
5. 🚀 Deploy and test the website