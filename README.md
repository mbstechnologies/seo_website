# Northstar Growth Studio — Enterprise SEO, PPC & Performance Marketing

A modern, high-performance web platform built with **React 19**, **Vite**, **Tailwind CSS**, and **React Router**. Designed for high-converting agency positioning, interactive audits, attribution metrics, and transparent retainer models.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Development Server
From root:
```bash
npm run dev
```
Or from `frontend/`:
```bash
cd frontend
npm run dev
```
The site runs locally at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```

---

## ⚡ Deploying to Vercel (1-Click or CLI)

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub (see steps below).
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository `SEO_Website`.
4. Vercel automatically detects `vercel.json` and the Vite framework:
   - **Build Command:** `npm --prefix frontend run build` (or `npm run build`)
   - **Output Directory:** `frontend/dist`
5. Click **Deploy**. Your site will be live with full SPA route rewriting (no 404s on refresh)!

### Option B: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link your project and deploy.

---

## 🐙 Push to GitHub

```bash
# 1. Initialize Git (already pre-configured with .gitignore)
git init

# 2. Stage files
git add .

# 3. Create initial commit
git commit -m "feat: complete Northstar Growth Studio platform with Vercel and GitHub deployment setup"

# 4. Set main branch
git branch -M main

# 5. Add your remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

## 📁 Project Architecture

```
SEO_Website/
├── .gitignore               # Root git ignore (node_modules, dist, .env, etc.)
├── vercel.json              # Root Vercel SPA routing and build configuration
├── package.json             # Root workspace scripts (npm run dev, npm run build)
├── README.md                # Project documentation & deployment guide
└── frontend/
    ├── .gitignore           # Frontend-level git ignore
    ├── vercel.json          # Frontend-level Vercel configuration
    ├── package.json         # Vite + React 19 dependencies & scripts
    ├── vite.config.js       # Vite configuration with Tailwind CSS & React
    ├── index.html           # HTML entry point with metadata & SEO tags
    └── src/
        ├── App.jsx          # App root with Router, Navbar, Footer & SplashScreen
        ├── styles.css       # Design system, responsive layouts & animations
        ├── api.js           # Client data endpoints with resilient fallbacks
        ├── components/      # UI, Layout & Shared widgets
        ├── pages/           # Pages (Home, Services, Packages, CaseStudies, About, Contact, Booking, Blog)
        ├── data/            # Agency data, pricing matrices, case study telemetry
        └── images/          # Editorial illustrations & 3D visual assets
```
