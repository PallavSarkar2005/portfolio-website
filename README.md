# Pallav Portfolio

A modern, animated developer portfolio built with React and Vite. It features a real-time 3D Spline background, smooth-scrolling sticky navigation, animated sections, a custom cursor, project showcases, skills, education timeline, and a mailto-based contact form.

This repository is production-ready with Tailwind CSS for styling, Framer Motion for animations, and Lucide icons for crisp vector icons. The app is structured for performance and easy customization.


## Live Demo

Add your live deployment link here (e.g., Vercel/Netlify/GitHub Pages).


## Features

- 3D interactive background using Spline with a loading gate until the scene is ready
- Sticky top navigation bar with smooth in-page scrolling
- Animated hero text and section reveals using Framer Motion
- Custom cursor that enlarges and highlights on interactive elements
- Projects grid with live demo and repository links
- Skills section organized by categories with subtle motion effects
- Education timeline with animated markers
- Mailto-based contact form (no backend required)
- Responsive design with Tailwind CSS
- Sensible defaults and ESLint setup for consistent code quality


## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 3
- Framer Motion 12
- Lucide React Icons
- @splinetool/react-spline (3D scene rendering)
- Tooling: ESLint, PostCSS, Autoprefixer

Dependencies and versions are pinned in package.json.


## Project Structure

```
portfilio/
  public/
    intership_resume.pdf        # CV downloaded from the top-right button
    logo.svg                    # App logo used in the navbar
  src/
    assets/
      react.svg
    components/
      CustomCursor.jsx          # Custom cursor behavior and styles
      Footer.jsx                # Footer with socials and back-to-top
      HeroBar.jsx               # Sticky navbar with smooth scroll + CV download
      MainContent.jsx           # Sections: Hero, Projects, Skills, Education, Contact
    App.css
    App.jsx                     # App shell, Spline background, loading gate
    index.css                   # Tailwind base styles and global CSS
    main.jsx                    # React root mounting and Vite entry
  .gitignore
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
  README.md
```


## Getting Started

Prerequisites
- Node.js 18 or higher
- npm 9+ (or pnpm/yarn if preferred)

Install dependencies
- npm install

Start the development server
- npm run dev

Build for production
- npm run build

Preview the production build locally
- npm run preview


## Available Scripts

- dev: Start the Vite dev server
- build: Create a production build in dist/
- preview: Serve the production build locally
- lint: Run ESLint on the project


## Key Implementation Details

- 3D background (Spline)
  - File: src/App.jsx
  - Uses @splinetool/react-spline to render a scene URL
  - The loading spinner is shown until Spline triggers onLoad
  - To change the scene, replace the scene prop URL with your own

- Pointer events layering
  - The Spline canvas sits behind content with pointer-events control to prevent it from capturing events under overlays
  - Sections set pointer-events selectively so interactive elements remain clickable

- Smooth scrolling navigation
  - File: src/components/HeroBar.jsx
  - Uses element.scrollIntoView({ behavior: 'smooth' }) on in-page anchor clicks

- Custom cursor
  - File: src/components/CustomCursor.jsx
  - Enlarges when hovering anchors or buttons; uses framer-motion springs
  - Uses mix-blend-mode: difference for a high-contrast effect

- Projects and content
  - File: src/components/MainContent.jsx
  - Update the projects array to reflect your real work
  - Contact form uses mailto:, no backend is required; change the email address to your own

- Footer and socials
  - File: src/components/Footer.jsx
  - Update social links, email, and location

- Resume/CV download
  - File path: public/intership_resume.pdf
  - Linked in HeroBar via /intership_resume.pdf
  - Replace the file with your own CV and adjust the button label if desired


## Styling and Theming

- Tailwind CSS is configured in tailwind.config.js and postcss.config.js
- Global styles live in src/index.css and src/App.css
- To customize color accents (cyan/purple/pink), update component classes or extend Tailwind theme


## Linting and Code Quality

- ESLint is configured via eslint.config.js (flat config)
- Run npm run lint to check for issues
- Consider adding Prettier if you want auto-formatting in CI


## Deployment

- Vercel
  - Import the repository; framework should be detected automatically (Vite)
  - Build command: npm run build
  - Output directory: dist

- Netlify
  - Build command: npm run build
  - Publish directory: dist

- GitHub Pages
  - Build with npm run build
  - If deploying to a subpath, set base in vite.config.js accordingly


## Accessibility and Performance Notes

- Animations
  - Consider honoring prefers-reduced-motion for users who prefer less motion
- 3D scenes
  - Spline scenes can be GPU-intensive; keep overlays lightweight and avoid heavy DOM reflows
- Images and icons
  - Use SVGs where possible (already used via Lucide and logo.svg)


## Troubleshooting

- Blank screen or infinite loader
  - Check the Spline scene URL and network availability
  - Confirm onLoad is firing; if not, ensure the scene URL is correct and reachable

- Styles not applying
  - Ensure Tailwind content paths in tailwind.config.js include index.html and all files under src/

- Dev server not starting
  - Ensure Node 18+ is installed
  - Kill any process already using the port or set a different port with Vite


## Customization Checklist

- Replace the Spline scene URL in src/App.jsx with your own
- Update projects array in src/components/MainContent.jsx
- Change contact email in MainContent.jsx and Footer.jsx
- Replace public/intership_resume.pdf with your actual resume
- Update social links in Footer.jsx and logo in public/logo.svg
- Update page metadata in index.html (title, description, social preview)


## Security and Privacy

- The contact form uses mailto:, which opens the visitor's email client with prefilled content; no data is stored on your server
- For production contact handling with persistence, integrate a backend or a form service provider


## License

No license has been specified for this project. If you plan to open-source it, add a LICENSE file (e.g., MIT). If the code is proprietary, keep it private or add an appropriate license notice.


## Acknowledgments

- React and Vite teams for the tooling
- Tailwind CSS for utility-first styling
- Framer Motion for declarative animations
- Spline for the 3D background runtime
- Lucide for icons
