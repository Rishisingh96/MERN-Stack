# AI Smart Portfolio Builder (MERN + OpenAI)

Production-ready MERN app that generates a professional portfolio using AI, supports live preview with templates, and exports to PDF/HTML.

## Folder structure

- `backend/` Express + MongoDB + JWT + OpenAI
  - `src/controllers/`
  - `src/routes/`
  - `src/models/`
  - `src/middleware/`
  - `src/utils/`
- `frontend/` Vite + React + Tailwind + Zustand
  - `src/components/`
  - `src/pages/`
  - `src/services/`
  - `src/store/`

## Prerequisites

- Node.js 18+ (recommended)
- MongoDB running locally OR MongoDB Atlas connection string
- OpenAI API key (optional; required only for AI endpoints)

## Step-by-step setup (Windows PowerShell)

### 1) Backend

```powershell
cd "f:\3_Web Devlopment Related\MERN-Stack\AI Smart Portfolio Builder\backend"
Copy-Item .env.example .env
notepad .env
npm install
npm run dev
```

### 2) Frontend

```powershell
cd "f:\3_Web Devlopment Related\MERN-Stack\AI Smart Portfolio Builder\frontend"
Copy-Item .env.example .env
notepad .env
npm install
npm run dev
```

### 3) Open the app

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:5000/api/health`

## .env examples

- Backend: see `backend/.env.example`
- Frontend: see `frontend/.env.example`

## Sample test data

### Register

`POST /api/auth/register`

```json
{
  "name": "Rishi Kumar",
  "username": "rishi",
  "email": "rishi@example.com",
  "password": "Password@123"
}
```

### Create portfolio

`POST /api/portfolio/create` (Authorization: `Bearer <token>`)

```json
{
  "title": "Rishi — Full-stack Developer",
  "template": "modern",
  "bio": "Full-stack developer focused on building clean, scalable web apps.",
  "projects": [
    {
      "title": "AI Smart Portfolio Builder",
      "description": "A MERN app that generates portfolio content using OpenAI and exports to PDF/HTML.",
      "technologies": ["React", "Node.js", "Express", "MongoDB", "OpenAI"]
    }
  ],
  "skills": [
    { "name": "JavaScript", "level": "Advanced" },
    { "name": "React", "level": "Advanced" },
    { "name": "Node.js", "level": "Intermediate" }
  ]
}
```

