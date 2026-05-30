# Portfolio

A lightweight personal portfolio site for Diego Delgado — a software and cloud engineer focused on fintech, mobile, and serverless systems.

## Overview

This project is a static portfolio built with React components loaded directly in the browser using Babel standalone. It showcases:

- A hero section with theme and layout options
- Selected work with interactive project case studies
- About and skills sections for fintech, mobile, cloud, and engineering practices
- A contact panel with email and social links
- A simple client-side tweak panel for theme and layout variants

## Technology

- React 18 via UMD bundles
- Babel standalone for in-browser JSX compilation
- CSS-driven design with `colors_and_type.css`, `kit.css`, and `extra.css`
- Plain HTML entrypoint: `Portfolio.html`
- Reusable component files: `Nav.jsx`, `Hero.jsx`, `Work.jsx`, `About.jsx`, `Stack.jsx`, `Contact.jsx`, `Icons.jsx`, `Primitives.jsx`, `tweaks-panel.jsx`

## Structure

- `Portfolio.html` — main app shell and component bootstrap
- `assets/` — static assets such as logos and icons
- `fonts/` — font files used by the site
- `*.jsx` — React components rendered in the browser
- `*.css` — visual styling and layout

## Running locally

1. Open `Portfolio.html` in your browser.
2. No build step is required.
3. If your browser blocks local module loading, serve the folder through a simple local server, for example:

```bash
cd /Users/DiegoDelgado/Documents/projects/personal/portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000/Portfolio.html`.

## Notes

- The project is designed as a self-contained portfolio website with minimal dependencies.
- If you want to add new work or update the contact links, edit the corresponding component files.
