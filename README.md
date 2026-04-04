# SIET TPO Website

Official Training & Placement Office website for **State Institute of Engineering & Technology (SIET), Panchkula**.

This project is a React + Vite single-page application that showcases institute placement information, recruiter-facing content, event galleries, and student/recruiter interaction pages.

## Project Concept

The website is built as a public-facing TPO portal with these goals:

- Present SIET’s placement vision, strengths, and institutional profile
- Support recruiters with brochure, guidelines, and inquiry flow
- Provide students with a login/signup interface (frontend currently mocked)
- Showcase event and engagement activities via gallery + media
- Offer bilingual user experience (English/Hindi)

## Core Features

- **Landing experience**
  - Hero section, institutional messaging, highlights, call-to-action
- **Bilingual UI**
  - Language toggle using shared `LanguageContext` + `translations`
- **Recruiter flow**
  - Placement brochure viewer/download
  - Code of conduct + resume/declaration PDF preview/download tabs
  - Recruitment inquiry form
- **Event gallery**
  - Event cards with metadata and image lightbox carousel
- **Student flow**
  - Student login/signup style screen with validation states (placeholder logic)
- **Utility pages**
  - Guidelines PDF viewer route
  - Generic PDF viewer route using query params
- **Persistent floating chatbot**
  - Rule-based FAQ style assistant for common queries
- **Responsive navigation**
  - Mobile dropdown + top-level route navigation

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 5
- **Routing:** React Router DOM 6
- **Animations/UI:** Framer Motion, Lucide icons, custom components
- **Backend integration (ready):** Firebase config scaffold (`auth` + `firestore`)
- **Deployment config:** Vercel (`vercel.json`)

## Application Routes

Defined in `src/App.jsx`:

- `/` → Home
- `/events` → Events gallery
- `/code-of-conduct` → Code of Conduct + documents
- `/batch-2025` → Current batch details
- `/team` → Team section page
- `/contact-us` and `/inquiry-form` → Recruitment form page
- `/login` → Student login/signup page
- `/placement-brochure` → Placement brochure page
- `/guidelines` → Guidelines viewer
- `/pdf-viewer?type=brochure|guidelines` → Generic PDF viewer

## File Structure

```text
SIETTPO/
├── public/
│   ├── images/                  # Site images, logos, gallery assets
│   └── pdfs/                    # Brochure/code-of-conduct and other PDFs
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable UI primitives (buttons/shaders/tabs)
│   │   ├── navbar.jsx
│   │   ├── hero-section.jsx
│   │   ├── gallery-section.jsx
│   │   ├── Chatbot.jsx
│   │   └── ...other page sections
│   ├── contexts/
│   │   └── LanguageContext.jsx  # Global language state (en/hi)
│   ├── lib/
│   │   ├── firebase.js          # Firebase app/auth/firestore bootstrap
│   │   └── utils.js             # Utility helpers
│   ├── pages/
│   │   ├── StudentLogin.jsx
│   │   ├── Form.jsx
│   │   ├── PlacementBrochure.jsx
│   │   ├── GuidelinesViewer.jsx
│   │   ├── CodeOfConduct.jsx
│   │   └── PdfViewer.jsx
│   ├── styles/
│   │   └── globals.css          # Global styles/theme tokens
│   ├── App.jsx                  # Route map + page composition
│   ├── main.jsx                 # App bootstrap
│   └── translations.js          # EN/HI content dictionary
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

> Note: `npm run lint` is configured, but `eslint` is currently not listed in `devDependencies`.

## Environment Variables (Firebase)

Set these before using Firebase-backed features:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

## AI Workflow Handoff Notes

If another AI tool is used to build workflows/automation, use this sequence:

1. **Read routing + entry points first**
   - `src/main.jsx`, `src/App.jsx`
2. **Understand language/content model**
   - `src/contexts/LanguageContext.jsx`, `src/translations.js`
3. **Map recruiter/student journeys**
   - Recruiter: `src/pages/Form.jsx`, `src/pages/PlacementBrochure.jsx`, `src/pages/CodeOfConduct.jsx`
   - Student: `src/pages/StudentLogin.jsx`
4. **Map reusable sections/components**
   - `src/components/*`
5. **Confirm deployment/runtime**
   - `package.json`, `vite.config.js`, `vercel.json`

This gives enough context for generating CI flows, test plans, documentation automations, and feature workflows.
