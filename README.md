# Falsehoods Research Questionnaire Application

## Overview
Comprehensive questionnaire application for Federal University Oye-Ekiti's research study on falsehoods and national integration.

## Features

### Public Access (No Login Required)
- **Landing Page**: Section selection with logo placeholders
- **4 Independent Questionnaires**:
  1. Public Questionnaire (87 questions, 5 sections)
  2. On-Air Personalities (40 questions, 5 sections)
  3. Social Media Influencers (45 questions, 4 sections)
  4. Media Professionals (30 questions, 4 sections)
- **Multi-step Forms**: Progress tracking with stepper
- **Responsive Design**: Material-UI components

### Admin Features (Login Required)
- **Authentication**: Secure JWT-based login
- **Dashboard**: View all responses by section
- **Export Options**:
  - Excel (.xlsx)
  - CSV (.csv)
  - PDF (.pdf)
- **Tabbed Interface**: Switch between sections

## Access URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **MongoDB**: localhost:27017

## Default Super Admin Credentials

```
Username: superadmin
Password: SuperAdmin@2026
```

**Important**: The super admin can create additional admins with different roles (admin/viewer) from the dashboard.

## Running the Application

### Start
```bash
cd /home/bhioux/dev/apps/questionnaire-app
docker-compose up -d
```

### Stop
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Rebuild
```bash
docker-compose up -d --build
```

## Application Structure

```
questionnaire-app/
├── backend/
│   ├── index.js          # Express server with auth & API
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.js           # Home page
│   │   │   ├── Login.js             # Admin login
│   │   │   ├── Dashboard.js         # Admin dashboard
│   │   │   ├── PublicQuestionnaire.js
│   │   │   ├── OAPQuestionnaire.js
│   │   │   ├── InfluencerQuestionnaire.js
│   │   │   └── MediaProfessionalQuestionnaire.js
│   │   ├── components/
│   │   │   ├── Logo.js              # Reusable logo placeholder
│   │   │   └── QuestionnaireForm.js # Reusable form component
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Logo Placeholders

Logo placeholders are present on:
- Landing page (Main logo)
- All questionnaire pages (Section-specific logos)
- Login page (Admin logo)
- Dashboard (Admin logo)

Replace placeholders in `frontend/src/components/Logo.js` with actual images.

## Database Schema

### Admin Collection
- username (unique)
- password (bcrypt hashed)

### Response Collection
- section (public/oap/influencer/media-professional)
- data (JSON object with all answers)
- submittedAt (timestamp)

## API Endpoints

### Public
- `POST /api/submit` - Submit questionnaire response

### Protected (Requires JWT)
- `POST /api/login` - Admin login
- `GET /api/responses` - Get all responses
- `GET /api/responses/:section` - Get responses by section

## Technologies

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs for password hashing

### Frontend
- React 18
- Material-UI 5
- React Router 6
- Axios
- XLSX (Excel export)
- jsPDF (PDF export)

## Notes

- All questionnaires are independent and can be filled without login
- Only admins need to login to view reports
- Data is stored in MongoDB with timestamps
- Export functionality generates files with all response data
- Logo placeholders are uniform across all pages
- Responsive design works on mobile and desktop

## Future Enhancements

- Replace logo placeholders with actual images
- Add data visualization charts
- Implement advanced filtering in dashboard
- Add email notifications
- Implement user management for multiple admins
