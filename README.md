# AI Software Engineer Portfolio

A modern, production-quality portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Mobile-first responsive design** with clean visual hierarchy
- **Accessible** with semantic HTML, keyboard navigation, ARIA labels, and skip links
- **Fast** with lazy loading, code splitting, and optimized build
- **SEO optimized** with document titles, meta descriptions, and Open Graph tags
- **Data-driven** project content for easy updates

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Vite

## Project Structure

```
src/
├── components/     # Reusable UI components (Button, Card, Badge, etc.)
├── data/          # Site configuration and project data
├── pages/         # Route page components
├── index.css      # Global styles and Tailwind imports
├── main.tsx       # App entry point
└── App.tsx        # Router configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Your Information

1. **Site Config** (`src/data/siteConfig.ts`):
   - Update `name`, `email`, and `heroTagline`
   - Update social links (GitHub, LinkedIn)
   - Modify specialties and toolbox

2. **Projects** (`src/data/projects.ts`):
   - Add/edit projects in the `projects` array
   - Each project includes full case study data

3. **Resume**:
   - Replace `public/resume.pdf` with your actual resume

### Add Images

Place project thumbnails and other images in the `public/images/` directory:
- `public/images/projects/` for project thumbnails
- Reference them in project data as `/images/projects/filename.png`

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Push your code to the `main` branch of your repository
2. Go to repository Settings > Pages
3. Under "Build and deployment", select "GitHub Actions"
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy

### Option 2: Manual Deployment

```bash
# Build the site
npm run build

# Deploy dist/ folder to gh-pages branch
npx gh-pages -d dist
```

### Configuration Notes

- The site uses HashRouter for GitHub Pages compatibility
- Base path is set to `/` in `vite.config.ts` (works for username.github.io repos)
- For project repos (username.github.io/repo-name), update `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## Accessibility

- Skip to content link
- Semantic HTML structure
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG guidelines
- ARIA labels for icon-only buttons

## Performance

- Lazy loading for route components
- Code splitting by route
- Optimized production build with Terser
- Minimal dependencies
- CSS purging via Tailwind

## License

MIT
