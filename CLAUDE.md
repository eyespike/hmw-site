# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static equipment-for-sale website for Hybrid Machine Works (hybridmachineworks.com), hosted on GitHub Pages. Shop consolidation sale — Lake City, Florida. No build system or framework.

## Development

Open `index.html` directly in a browser, or serve locally:
```bash
python3 -m http.server 8080
```

## File Structure

```
index.html                        ← main landing page (equipment grid)
style.css                         ← shared stylesheet for all pages
equipment/<slug>.html             ← individual listing pages
images/<slug>/                    ← photos for each listing
images/sold.png                   ← shared sold overlay image
```

## Architecture

- `index.html` is the only file in root (besides `style.css`). All listing pages live in `equipment/`.
- `style.css` is shared — listing pages reference it as `../style.css`.
- Image paths from listing pages are `../images/<slug>/filename`.

**Design tokens:**
- Gold accent: `#C9A84C`
- Dark header/footer: `#1a1a1a`
- Page background: `#f5f4f2` (light neutral)

**Contact gating:** Contact info is never shown on the page. Each listing embeds a Tally form (`tally.so/embed/<formId>`); the thank-you page reveals contact/pickup details.

## Adding a New Listing

1. Copy an existing listing from `equipment/` and rename it to the item slug.
2. Create `images/<slug>/` and add photos — `main.jpg` is the card thumbnail.
3. Add a card to the equipment grid in `index.html` (see the comment template inside `.equipment-grid`).
4. Update the card status badge: `status-available`, `status-pending`, or `status-sold`.
5. For sold items: uncomment the `.sold-overlay` block and change the card link class to `link-sold`.

See `README.md` for the full walkthrough.
