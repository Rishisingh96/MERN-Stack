# AI Smart Portfolio Builder (Backend)

## Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Set:
- `MONGODB_URI`
- `JWT_SECRET` (min 20 chars)
- `OPENAI_API_KEY` (optional; required for AI endpoints)

3. Install and run:

```bash
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

## API Routes

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Portfolio (JWT required)
- `POST /api/portfolio/create`
- `GET /api/portfolio/:id`
- `PUT /api/portfolio/update`
- `DELETE /api/portfolio/delete` (body: `{ "id": "..." }`)

### AI (JWT + rate-limited)
- `POST /api/ai/generate-bio`
- `POST /api/ai/generate-project-description`
- `POST /api/ai/suggest-skills`

### Public sharing
- `GET /api/public/portfolio/:username`

