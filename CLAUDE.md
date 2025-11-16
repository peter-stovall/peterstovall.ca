# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a product management portfolio website for Peter Stovall (peterstovall.ca).

## Technology Stack

Static HTML/CSS site deployed to GitHub Pages.

**Files:**
- `index.html` - Main portfolio page with all content
- `style.css` - Styling with CSS custom properties (variables)

## Development

**Preview locally:**
```bash
# Open in default browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

Or use a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## Deployment

The site is automatically deployed to GitHub Pages from the `main` branch.

**To update the live site:**
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will be live at https://peter-stovall.github.io/peterstovall.ca/ (or www.peterstovall.ca if custom domain is configured).

## Site Structure

The portfolio includes:
- **Hero section**: Name, tagline, and introduction
- **About section**: Climate/sustainability focus in product management, featuring the "voice of the planet" philosophy
- **Projects section**: 6 major projects spanning solar energy, EHS, legal tech, and more
- **Contact section**: Email and LinkedIn links

## Design

Clean, minimal design with:
- Earth-toned color scheme (greens) reflecting climate focus
- Responsive grid layout for projects
- Smooth scroll navigation
- Mobile-responsive design
