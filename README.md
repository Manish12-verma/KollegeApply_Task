# KollegeApply Task

Short demo project: a simple frontend (React + Vite + Tailwind) and a minimal Express backend that serves university data and fees and accepts lead submissions.

## Repository structure

- `backend/` - Express server and data (JSON). Exposes basic APIs for universities, fees, and lead submission.
- `frontend/` - React app built with Vite and Tailwind. Contains UI components, pages, and a modal to view course fees.

## Prerequisites

- Node.js (v18+ recommended)
- npm (or yarn)

## Run locally (PowerShell)

Start backend:

```powershell
cd C:\Users\manis\Desktop\KollegeApply_Task\backend
npm install
npm start
```

Start frontend (dev server):

```powershell
cd C:\Users\manis\Desktop\KollegeApply_Task\frontend
npm install
npm run dev
```

The frontend Vite dev server proxies `/api` requests to `http://localhost:8080` (see `vite.config.js`). Open the Vite URL (usually `http://localhost:5173`) in your browser.

## Backend API (development)

- `GET /api/universities` — list of universities (id, name)
- `GET /api/universities/:id` — full university details
- `GET /api/fees/:id` — fee data for a university (JSON with `courses` array)
- `POST /api/leads` — accept lead submissions (JSON body). The backend prints the lead to console and returns a success object.

## Frontend notes

- Environment: `frontend/.env` can contain `VITE_PIPEDREAM_ENDPOINT` to forward leads to an external webhook (optional).
- The `LeadForm` component will fall back to posting to `/api/leads` if external webhook fails.

## Next steps / Recommendations

- Remove `body-parser` from `backend/package.json` if not needed (Express's `express.json()` is used).
- Add persistence for leads (database) if you want to keep submissions.

## License

This repository is provided as a short demo. Use as you like.
