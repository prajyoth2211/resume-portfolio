# Prajyoth Thungathurthi — Portfolio & Resume

A modern, responsive resume and portfolio site built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui**-style components.

## Features

- Single-page portfolio with Hero, About, Experience, Projects, Skills, Education, and Contact
- Dark / light mode (system-aware)
- Sticky navbar with resume download & PDF preview
- Dedicated `/resume` page for full PDF viewing
- Resume content driven by `src/data/resume.ts` for easy updates
- SEO metadata and Open Graph image
- Accessible layout, keyboard-friendly navigation, reduced-motion friendly animations

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resume PDF

Place your final resume PDF at:

```
public/resume.pdf
```

A placeholder PDF is included. Replace it by exporting your Word resume:

1. Open `public/resume-source.docx` (copy of your uploaded resume), or use your original file
2. Export / Save As **PDF**
3. Save as `public/resume.pdf`

Download and preview buttons use `/resume.pdf` directly.

## Updating content

Edit **`src/data/resume.ts`** — all copy, experience, projects, skills, education, and contact links live there.

| Section    | Data key        |
|-----------|-----------------|
| Site info | `siteConfig`    |
| Hero      | `hero`          |
| About     | `about`         |
| Jobs      | `experience`    |
| Projects  | `projects`      |
| Skills    | `skills`        |
| Education | `education`     |
| Nav       | `navLinks`      |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, theme
│   ├── page.tsx            # Home (all sections)
│   ├── resume/page.tsx     # Full-page PDF viewer
│   └── globals.css
├── components/
│   ├── layout/             # Navbar, footer, theme, headings
│   ├── sections/           # Page sections
│   ├── resume/             # Download & preview actions
│   └── ui/                 # shadcn-style primitives
├── data/
│   └── resume.ts           # ← Edit resume content here
└── lib/
    ├── seo.ts
    └── utils.ts
public/
├── resume.pdf
├── resume-source.docx
└── og-image.svg
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | ESLint                   |

## Deploy to GitHub Pages

This project is configured for **static export** (`output: "export"`), which GitHub Pages requires.

### 1. Create a GitHub repo

Use a **URL-friendly name** (no spaces), e.g. `resume-portfolio` instead of `resume git`.

```bash
cd "/Users/prajyoththungathurthi/Desktop/resume git"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Open your repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Push to `main` (or run the workflow manually under **Actions**)

The workflow `.github/workflows/deploy-github-pages.yml` builds the site and deploys the `out/` folder.

### 3. Your live URL

| Repo type | URL |
|-----------|-----|
| Project site (`resume-portfolio`) | `https://YOUR_USERNAME.github.io/resume-portfolio/` |
| User site (`YOUR_USERNAME.github.io`) | `https://YOUR_USERNAME.github.io/` |

After deploy, set `NEXT_PUBLIC_SITE_URL` is set automatically in CI. For local dev, `siteConfig.url` in `src/data/resume.ts` is only used when that env var is unset.

### 4. Replace resume PDF before deploy

Export your real resume to `public/resume.pdf` so download/preview work on the live site.

### Test GitHub Pages build locally

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name \
NEXT_PUBLIC_SITE_URL=https://your-username.github.io/your-repo-name \
npm run build
npx serve out
```

Open the URL `serve` prints (paths will include `/your-repo-name/`).

## Other hosts (Vercel / Netlify)

For Vercel or Netlify, remove `output: "export"` from `next.config.ts` (or use their Next.js preset without a `basePath`) for full SSR. GitHub Pages needs the static export setup above.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes
- Radix UI primitives (Dialog, Label, Separator, Slot)

## License

Private portfolio — all rights reserved.
