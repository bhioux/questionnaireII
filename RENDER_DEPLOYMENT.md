# Render Deployment Steps

## Prerequisites
- GitHub account
- Render account (https://render.com)
- MongoDB Atlas connection string (already configured)

## Step 1: Push Code to GitHub

```bash
cd /home/bhioux/dev/apps/questionnaire-app
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/questionnaire-app.git
git push -u origin main
```

## Step 2: Deploy Backend on Render

1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Click **"Connect GitHub"** and authorize Render
4. Select your **questionnaire-app** repository
5. Configure the service:

   **Basic Settings:**
   - Name: `questionnaire-backend`
   - Region: Choose closest to you
   - Branch: `main`
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node index.js`

   **Plan:**
   - Select **"Free"**

6. Click **"Advanced"** and add Environment Variables:
   - Key: `MONGO_URI`
     Value: `mongodb+srv://bhioux_db_user:59CPcX3VdjFAEh4P@questionnaire.dtinkyp.mongodb.net/questionnaireDB?retryWrites=true&w=majority`
   
   - Key: `JWT_SECRET`
     Value: Click **"Generate"** (or use any random string like `super-secret-jwt-key-2026`)
   
   - Key: `NODE_ENV`
     Value: `production`

7. Click **"Create Web Service"**
8. Wait 5-10 minutes for deployment
9. **Copy your backend URL**: `https://questionnaire-backend-xxxx.onrender.com`

## Step 3: Deploy Frontend on Render

1. Click **"New +"** → **"Static Site"**
2. Select your **questionnaire-app** repository
3. Configure the site:

   **Basic Settings:**
   - Name: `questionnaire-frontend`
   - Branch: `main`
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`

4. Click **"Advanced"** and add Environment Variable:
   - Key: `REACT_APP_API_URL`
     Value: `https://questionnaire-backend-xxxx.onrender.com` (use YOUR actual backend URL from Step 2)

5. Click **"Create Static Site"**
6. Wait 5-10 minutes for deployment

## Step 4: Access Your Application

Your app is now live at:
- **Frontend**: `https://questionnaire-frontend-xxxx.onrender.com`
- **Backend API**: `https://questionnaire-backend-xxxx.onrender.com`

## Step 5: Login

```
Username: superadmin
Password: SuperAdmin@2026
```

## Important Notes

⚠️ **Free Tier Limitations:**
- Services sleep after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- 750 hours/month free (enough for 1 service running 24/7)

💡 **Tips:**
- Keep backend URL handy - you'll need it for frontend deployment
- If you update code, push to GitHub and Render auto-deploys
- Check "Logs" tab in Render dashboard if something fails

## Troubleshooting

**Backend won't start:**
- Check Render logs for errors
- Verify MONGO_URI is correct
- Ensure all environment variables are set

**Frontend can't connect:**
- Verify REACT_APP_API_URL matches your backend URL
- Check backend is running (visit backend URL in browser)
- Redeploy frontend if you changed backend URL

**Database errors:**
- Verify MongoDB Atlas cluster is running
- Check IP whitelist includes 0.0.0.0/0 in MongoDB Atlas

## Update Deployment

To update after code changes:
```bash
git add .
git commit -m "Your update message"
git push
```
Render will automatically redeploy both services.
