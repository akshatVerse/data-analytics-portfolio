# Akshat Tripathi — Portfolio Website

A clean, premium, recruiter-friendly portfolio website for **Akshat Tripathi**, positioned around **Data Analytics, Visualization, and Machine Learning**.

Designed with a modern editorial aesthetic: warm off-white surfaces, charcoal typography, refined sage green accents, and a built-in **Light / Dark Mode Toggle** that persists across visits.

Built with **Vanilla HTML5, CSS3, and ES Modules** bundled via **Vite** for zero bloat, instant loading, and effortless future maintenance.

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (installed automatically with Node.js)

### 2. Install & Run Locally (Development)
```bash
npm install
npm run dev
```
Open your browser at `http://localhost:3000` to view the live website with instant hot-reloading.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized, minified static site in the `dist/` directory ready to be deployed anywhere.

### 4. Verify All Production Assets & Routes
```bash
npm run test:verify
```
Runs an automated test server checking that every single HTML, CSS, JS, image, SVG, and resume PDF route returns `200 OK`.

### 5. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🌓 Light & Dark Theme System

- **Default Theme**: **Light Theme** (warm off-white `#fbfbf9`, clean white cards, near-black charcoal headings, and muted olive/sage green `#3d5d36` accents).
- **Dark Theme**: Toggleable via the Sun/Moon icon in the navigation header. Features deep charcoal backgrounds (`#121411`), lighter charcoal cards (`#1d201b`), and soothing sage green highlights (`#7ea872`).
- **Persistence**: Remembers the visitor's choice in `localStorage`.

---

## 📁 Project Structure

```text
├── public/                     # Static assets served as-is
│   ├── assets/
│   │   ├── images/             # Profile photo & Open Graph image
│   │   │   ├── profile-placeholder.svg
│   │   │   └── og-image.svg
│   │   ├── projects/           # Project screenshots & diagrams
│   │   │   ├── earthquake-placeholder.svg
│   │   │   └── heart-disease-placeholder.svg
│   │   └── resume/             # Your downloadable Resume / CV PDF
│   │       └── Akshat_Tripathi_Resume.pdf
│   └── favicon.svg             # Custom AT brand favicon
│
├── src/
│   ├── data.js                 # ⭐️ CENTRAL CONTENT FILE (Edit everything here)
│   ├── main.js                 # App entry point (populates DOM & initializes modules)
│   ├── modules/
│   │   ├── navigation.js       # Sticky nav, mobile drawer, scroll-spy & theme toggle
│   │   ├── animations.js       # Subtle scroll-triggered reveal animations
│   │   ├── skills.js           # Skills cluster card interactions
│   │   ├── projects.js         # Project case-study hover interactions
│   │   └── contact.js          # Direct communication & clipboard email copy
│   └── styles/
│       ├── main.css            # Light/Dark design tokens, typography, and CSS reset
│       ├── sections.css        # Layouts for Hero, About, Skills, Projects, etc.
│       ├── components.css      # Reusable buttons, cards, tags, badges, and theme toggle
│       ├── animations.css      # Gentle transitions (respects prefers-reduced-motion)
│       └── responsive.css      # Breakpoints for Mobile, Tablet, and Desktop
│
├── scripts/
│   ├── generate-resume.js      # Utility script that generates a valid resume PDF
│   └── verify-dist.js          # Automated HTTP test verifying all build assets
│
├── index.html                  # Semantic single-page HTML layout
├── vite.config.js              # Production build configuration (relative base)
└── package.json                # Project scripts & dependencies
```

---

## ✏️ How to Update Your Portfolio Content

You do **NOT** need to edit HTML or JavaScript components to update your information. **All personal details, text, links, projects, and credentials live in a single centralized file**:

👉 `src/data.js`

### 1. Update Personal Info (Name, Tagline, Bio, Availability)
Open `src/data.js` and edit the `personal` object:
```javascript
personal: {
  firstName: 'Akshat',
  lastName: 'Tripathi',
  tagline: 'Data Analytics & Machine Learning',
  subtitle: 'Computer Science student exploring data...',
  availability: 'Available for opportunities',
}
```

### 2. Replace Your Profile Photo
1. Save your photograph (e.g. `akshat.jpg`) into `public/assets/images/`.
2. In `src/data.js`, update:
```javascript
profileImage: './assets/images/akshat.jpg',
```
The photo will automatically render with the arched frame layout.

### 3. Replace Project Screenshots
1. Save your actual Power BI dashboard screenshot into `public/assets/projects/` (e.g. `earthquake-dashboard.png`).
2. Save your EDA plots into `public/assets/projects/` (e.g. `heart-disease-eda.png`).
3. In `src/data.js`, update the `images` array for the project:
```javascript
images: ['./assets/projects/earthquake-dashboard.png'],
```

### 4. Replace Your Resume / CV PDF
1. Place your actual resume PDF into `public/assets/resume/`.
2. Name it `Akshat_Tripathi_Resume.pdf`.
3. Both "Download Resume" buttons automatically serve this file.

### 5. Add or Modify Projects
In `src/data.js`, look for the `projects` array. Each project object contains:
- `title`: Project title
- `tech`: Array of technologies used
- `description`: Overview description
- `problem` & `approach`: Analytical narrative
- `highlights`: Array of bullet points
- `live`: Live dashboard link (or empty `''`)
- `github`: Code repository link (or empty `''`)

### 6. Update Skills, Certifications & Education
Edit the corresponding arrays in `src/data.js`. The website dynamically formats them into clean cards and timelines.

### 7. Update Social Links & Contact Info
In `src/data.js`, edit:
```javascript
contact: {
  email: 'akshattripathi250904@gmail.com',
  phone: '+91-9335076380',
  linkedin: 'https://www.linkedin.com/in/akshat-tripathi-87a786321/',
  github: 'https://github.com/akshatVerse',
}
```

---

## 🌐 Deployment Instructions

Because the project is configured with relative base paths (`base: './'`), the production build is **100% portable** and can be deployed anywhere with zero configuration.

### Option A: Vercel (Recommended — Free & Instant)
1. Push your repository to GitHub (`github.com/akshatVerse/portfolio`).
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New"** → **"Project"** and select your repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your site will be live in ~30 seconds!

### Option B: Netlify (Free)
1. Push your code to GitHub.
2. Log in to [netlify.com](https://netlify.com).
3. Click **"Add new site"** → **"Import an existing project"** → GitHub.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

### Option C: GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add `"deploy": "gh-pages -d dist"` to `package.json`.
3. Run `npm run build` then `npm run deploy`.
