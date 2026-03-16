# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Hybrid Machine Works, a precision machining and fabrication shop. No build system, framework, or dependencies — the entire site is a single `index.html` with embedded CSS.

## Development

Open `index.html` directly in a browser. No build step or local server required.

To serve locally with live reload (if needed):
```bash
npx serve .
# or
python3 -m http.server 8080
```

## Architecture

Single-file site: all HTML structure and CSS are in `index.html`. Assets live in `assets/`.

**Tech stack:**
- HTML5 + embedded CSS3 (no external stylesheets, no JavaScript framework)
- Google Fonts (Inter, loaded via CDN)
- Tally.so for the quote request form (embedded via `data-tally-*` attributes)

**CSS design tokens** (CSS variables at `:root`):
- Gold accent: `#C9A84C`
- Dark backgrounds: `#242424`, `#202020`, `#1a1a1a`

**Page sections** (in order): Nav → Hero → About → Capabilities → Equipment → Why Us → CTA → Footer

The Tally form is triggered by buttons with `data-tally-open` attributes — no custom JS needed.
