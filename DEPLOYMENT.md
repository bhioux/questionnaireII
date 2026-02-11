# Deployment Guide - Render & MongoDB Atlas

## Prerequisites
1. GitHub account
2. Render account (free tier)
3. MongoDB Atlas account (free tier)

## Step 1: MongoDB Atlas Setup

1. Go to MongoDB Atlas (https://cloud.mongodb.com)
2. Create a free cluster (if not already created)
3. Go to Database Access → Add Database User
   - Username: `bhioux_db_user`
   - Password: Create a strong password
   - Database User Privileges: Read and write to any database
4. Go to Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
5. Get your connection string:
   ```
   mongodb+srv://bhioux_db_user:59CPcX3VdjFAEh4P@questionnaire.dtinkyp.mongodb.net/?appName=questionnaire
   ```

## Step 2: Push to GitHub

```bash
cd /home/bhioux/dev/apps/questionnaire-app
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/questionnaire-app.git
git push -u origin main
```

## Step 3: Deploy Backend on Render

1. Go to Render Dashboard (https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: questionnaire-backend
   - **Environment**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && node index.js`
   - **Plan**: Free
5. Add Environment Variables:
   - `MONGO_URI`: `mongodb+srv://bhioux_db_user:59CPcX3VdjFAEh4P@questionnaire.dtinkyp.mongodb.net/?appName=questionnaire`
   - `JWT_SECRET`: (Click "Generate" for random value)
   - `NODE_ENV`: `production`
6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL: `https://questionnaire-backend-xxxx.onrender.com`

## Step 4: Deploy Frontend on Render

1. Click "New +" → "Static Site"
2. Connect same GitHub repository
3. Configure:
   - **Name**: questionnaire-frontend
   - **Build Command**: `cd frontend && npm install && REACT_APP_API_URL=https://YOUR_BACKEND_URL.onrender.com npm run build`
   - **Publish Directory**: `frontend/build`
   - **Plan**: Free
4. Click "Create Static Site"
5. Wait for deployment (5-10 minutes)

## Step 5: Update Frontend API URL

After backend is deployed, update frontend build command with actual backend URL:
1. Go to frontend service settings
2. Update Build Command:
   ```
   cd frontend && npm install && REACT_APP_API_URL=https://questionnaire-backend-xxxx.onrender.com npm run build
   ```
3. Click "Save Changes"
4. Manually trigger redeploy

## Step 6: Access Your Application

- **Frontend**: `https://questionnaire-frontend-xxxx.onrender.com`
- **Backend API**: `https://questionnaire-backend-xxxx.onrender.com`

## Super Admin Credentials

```
Username: superadmin
Password: SuperAdmin@2026
```

## Important Notes

1. **Free Tier Limitations**:
   - Services spin down after 15 minutes of inactivity
   - First request after inactivity takes 30-60 seconds
   - 750 hours/month free (enough for 1 service 24/7)

2. **MongoDB Atlas Free Tier**:
   - 512 MB storage
   - Shared RAM
   - No backups

3. **CORS**: Backend already configured to accept all origins

4. **Environment Variables**: Never commit `.env` files to GitHub

## Troubleshooting

**Backend won't start:**
- Check MongoDB connection string is correct
- Verify password doesn't contain special characters (URL encode if needed)
- Check Render logs for errors

**Frontend can't connect to backend:**
- Verify REACT_APP_API_URL is set correctly
- Check backend is running (visit backend URL)
- Check browser console for CORS errors

**Database connection fails:**
- Verify IP whitelist includes 0.0.0.0/0
- Check username/password are correct
- Ensure cluster is running

## Alternative: Docker Deployment

If you prefer Docker, use the existing docker-compose.yml locally and deploy containers to:
- Railway.app
- Fly.io
- DigitalOcean App Platform
