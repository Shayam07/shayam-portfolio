# Shayam Kaarthick N – AI Engineer Portfolio

A premium, production-ready personal portfolio website for **Shayam Kaarthick N**, an aspiring AI Engineer, Machine Learning Developer, and B.Tech Artificial Intelligence and Data Science undergraduate at Sri Krishna College of Engineering and Technology (2025–2029) with a **9.65 / 10 CGPA**.

Built with a futuristic, minimal aesthetic inspired by Andrej Karpathy, Linear, Vercel, and modern AI research labs.

---

## 🌟 Highlights & Features

- **Architectural & Research Presentation**: Focuses on real technical implementations, mathematical rigor, and engineering problem-solving rather than generic buzzwords.
- **Flagship Project (ORCA)**: Strong visual presentation of **ORCA – Marine Ecosystem Reasoning with Collaborative Agents**, highlighting multi-agent orchestration, LangGraph state transitions, FastAPI endpoints, and environmental telemetry pipelines.
- **Infosys Springboard Internship & Career AI**: Showcases participation in the Infosys Springboard Virtual Internship 7.0 (AI/ML Track) alongside the LLM-powered Career AI project.
- **Factual Technical Skills**: Organized into clean badges across Programming Languages, Machine Learning, Generative & Agentic AI, Libraries & Frameworks, and Tools/Databases with zero arbitrary percentage bars.
- **National Accreditations**: Features the NPTEL Python for Data Science Top 5% Elite Topper Badge, Coursera AI for Everyone, and Machine Learning with Python credentials.
- **Interactive Neural Network Canvas**: Smooth HTML5 canvas simulation in the hero section displaying neural nodes, synaptic firing, and mouse gravity response.
- **Deep Dive Architecture Modals**: Comprehensive technical drill-downs for every project displaying:
  - Problem formulation & engineering solution
  - Step-by-step pipeline data flow diagram
  - Key technical contributions
  - Algorithmic methodology & technologies
- **Interactive Dossier / Resume Modal**: In-browser recruiter-ready CV view with PDF download and direct contact channels.
- **Direct Contacts**: Working `mailto:shayamat10@gmail.com` link, working `tel:+917339677732` link, copy email interaction with toast, and configurable social profiles.

---

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Tailwind v4)
- **Icons**: Lucide React + Custom SVGs
- **Animations**: Framer Motion
- **Design System**: Deep charcoal (`#09090B`), Electric Indigo (`#6366F1`), Cyan (`#22D3EE`), and Off-White (`#F8FAFC`).

---

## 📁 Project Structure

```text
po/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system, glassmorphism, scrollbars, gradients
│   │   ├── icon.svg             # Custom AI node favicon
│   │   ├── layout.tsx           # SEO metadata, OpenGraph tags, responsive shell
│   │   └── page.tsx             # Main orchestrated portfolio page
│   ├── components/
│   │   ├── About.tsx            # Academic background, CGPA card & focus areas
│   │   ├── Certifications.tsx   # NPTEL Top 5% Elite Topper, Coursera credentials
│   │   ├── Contact.tsx          # Direct dispatch form, working mailto, tel link & copy email
│   │   ├── Experience.tsx       # Infosys Springboard 7.0 & Career AI project track
│   │   ├── Footer.tsx           # Technical status bar, copyright & back-to-top
│   │   ├── GithubSection.tsx    # GitHub activity heat map & repo showcase
│   │   ├── Hero.tsx             # Headline, bio, role pills, and interactive terminal
│   │   ├── Icons.tsx            # Clean SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx           # Sticky glass header, availability status & mobile menu
│   │   ├── NeuralCanvas.tsx     # Canvas-based neural synapse particle simulator
│   │   ├── ProjectModal.tsx     # Deep-dive architecture and pipeline visualizer
│   │   ├── Projects.tsx         # Flagship ORCA card + 5 categorized project cards
│   │   ├── ResumeModal.tsx      # Recruiter CV breakdown & download trigger
│   │   ├── Skills.tsx           # Categorized competencies & search filter (no fake percentages)
│   │   └── Toast.tsx            # Floating toast notification system
│   └── data/
│       └── portfolio.ts         # Centralized configuration file (EDIT HERE)
├── public/
│   └── resume.pdf               # Resume PDF download asset
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run start
```

---

## ✏️ How to Personalize Your Information

All personal data, links, projects, and skills are centralized in:
**`src/data/portfolio.ts`**

Simply open `src/data/portfolio.ts` to inspect or update:
1. **Contact & Socials**:
   - `linkedinUrl`: `https://www.linkedin.com/in/shayam-kaarthick-n-102478379/`
   - `githubUrl`: `https://github.com/Shayam07`
   - `phone` & `email`: `+91 7339677732` and `shayamat10@gmail.com`.
2. **Projects**:
   - Individual repositories under `https://github.com/Shayam07/<repo-name>`.
3. **Resume PDF**:
   - Place your final resume PDF in `public/resume.pdf` to replace the starter PDF asset.

---

## 🚀 Deployment to Vercel

This repository is optimized for deployment on **Vercel**:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete AI Engineer portfolio for Shayam Kaarthick N"
   git remote add origin https://github.com/Shayam07/portfolio.git
   git push -u origin main
   ```
2. Import the project in [vercel.com](https://vercel.com).
3. Vercel automatically detects Next.js.
4. Click **"Deploy"**.
