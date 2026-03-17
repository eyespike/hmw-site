# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static equipment-for-sale website for Hybrid Machine Works (hybridmachineworks.com), hosted on GitHub Pages. Shop consolidation sale — Lake City, Florida. No build system or framework. This is an ongoing project with many more listings to be added over time.

## Development

Open `index.html` directly in a browser, or serve locally:
```bash
python3 -m http.server 8080
```

## File Structure

```
index.html                        ← main landing page (equipment grid)
style.css                         ← shared stylesheet — ALL pages use this
lightbox.js                       ← shared image lightbox — ALL listing pages use this
equipment/<slug>.html             ← individual listing pages
images/<slug>/                    ← photos for each listing (main.jpg = card thumbnail)
images/sold.png                   ← shared sold overlay image
```

## Rules — follow these without exception

- **Never use "OBO"** on any listing, in any copy, meta description, or anywhere on the site.

- **Every page uses `style.css`** — never embed styles in a page, never create standalone pages with their own CSS.
- **Every listing page lives in `equipment/`** — no exceptions.
- **Stylesheet ref from listing pages:** `../style.css`
- **Lightbox ref from listing pages:** `../lightbox.js` (add as last script before `</body>`)
- **Image paths from listing pages:** `../images/<slug>/filename`
- **From root `index.html`:** `style.css`, `images/<slug>/filename` (no `../`)

## Design Tokens

- Gold accent: `#C9A84C`
- Dark header/footer: `#1a1a1a`
- Page background: `#f5f4f2` (light neutral)

## Listing Page Template

Every listing page follows this exact structure. Copy `equipment/eastwood-48-electro-brake.html` as the base.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>Item Name — For Sale — Hybrid Machine Works</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>

  <header class="site-header">
    <a href="/" class="logo"><img src="../images/logo-white.png" alt="Hybrid Machine Works"></a>
    <nav class="site-nav">
      <a href="/equipment/pickup-and-loading.html">Pickup &amp; Loading</a>
    </nav>
  </header>

  <div class="terms-bar">
    <span>Pickup only — no shipping</span>
    <span>All sales final</span>
    <span>Cash or verified payment only</span>
    <span>Contact info revealed after intake form below</span>
  </div>

  <main class="listing-page">

    <a href="/" class="back-link">&#8592; All Listings</a>

    <div class="listing-header">
      <h1>Item Name</h1>
      <div class="listing-price">$X,XXX</div>
      <div class="listing-meta">Optional subtitle or retail reference</div>
    </div>

    <div class="listing-photos">
      <img src="../images/<slug>/main.jpg" alt="...">
      <!-- additional photos -->
    </div>

    <div class="section-label">Description</div>
    <div class="listing-description">
      <p>...</p>
    </div>

    <div class="section-label">Specifications</div>
    <table class="specs-table">
      <tr><td>Label</td><td>Value</td></tr>
    </table>

    <!-- Optional sections — use as needed: -->

    <div class="section-label">What&rsquo;s Included</div>
    <ul class="included-list">
      <li><span class="check">&#10003;</span> Item</li>
    </ul>

    <div class="section-label">Calibration</div>
    <div class="cal-box">
      <div class="cal-heading">Calibration heading</div>
      Calibration body text.
    </div>

    <div class="section-label">Condition</div>
    <div class="condition-box">
      <p>Summary.</p>
      <ul class="condition-list">
        <li>Detail</li>
      </ul>
    </div>

    <!-- Pickup callout — always include -->
    <div class="pickup-callout">
      <strong>Local pickup only.</strong> We have a tractor with forks available to assist with loading at your direction. <a href="/equipment/pickup-and-loading.html">See our Pickup &amp; Loading page for full details.</a>
    </div>

    <!-- Contact: use ONE of these two patterns -->

    <!-- Pattern A: Tally form (preferred for HMW listings) -->
    <div class="contact-gate">
      <div class="gate-label">Get Contact &amp; Pickup Info</div>
      <p>Complete the short form below to receive our contact information and pickup address.</p>
      <iframe data-tally-src="https://tally.so/embed/<FORM_ID>?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="284" frameborder="0" marginheight="0" marginwidth="0" title="Contact Form"></iframe>
      <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w;s.onload=v;s.onerror=v;d.body.appendChild(s);}</script>
    </div>

    <!-- Pattern B: Direct mailto (for listings sold outside HMW, e.g. eBay/direct) -->
    <div class="contact-direct">
      <div class="gate-label">Make an Offer or Ask a Question</div>
      <p>...</p>
      <a href="mailto:[YOUR EMAIL HERE]?subject=..." class="contact-btn">Contact Seller</a>
    </div>

  </main>

  <footer class="site-footer">
    <div class="footer-nav">
      <a href="/equipment/pickup-and-loading.html">Pickup &amp; Loading</a>
    </div>
    &copy; 2025 Hybrid Machine Works &mdash; Lake City, FL
  </footer>

  <script src="../lightbox.js"></script>
</body>
</html>
```

## Adding a New Listing

1. Copy `equipment/eastwood-48-electro-brake.html` → `equipment/<slug>.html`
2. Create `images/<slug>/` and add photos — `main.jpg` is the card thumbnail
3. **List every image file in the folder** inside `.listing-photos` — run `ls images/<slug>/` and add an `<img>` tag for each one. Never guess filenames or use placeholder names like `img1.jpg`. Use the actual filenames as they exist on disk.
4. Add a card to the equipment grid in `index.html` (see comment template inside `.equipment-grid`)
5. Set card status badge: `status-available`, `status-pending`, or `status-sold`
6. For sold items: uncomment the `.sold-overlay` block and change the card link class to `link-sold`

## CSS Classes Reference

| Class | Purpose |
|---|---|
| `.listing-page` | Main content wrapper for all listing pages |
| `.listing-header` | Title + price block |
| `.listing-price` | Large gold price display |
| `.listing-meta` | Subtitle / retail reference line |
| `.listing-photos` | Photo grid (lightbox activates automatically) |
| `.listing-description` | Body copy block |
| `.section-label` | Uppercase section divider label |
| `.specs-table` | Two-column spec table |
| `.included-list` | Checkmark list of included items |
| `.cal-box` | Gold-bordered calibration disclosure box |
| `.condition-box` | White-bordered condition notes box |
| `.condition-list` | Dash list inside `.condition-box` |
| `.ship-badge` | Blue "Shippable" badge — on cards stacks below `.status-badge`; on listing pages use `style="position:static;display:inline-block"` |
| `.pickup-callout` | Gold left-border callout linking to pickup page |
| `.contact-gate` | Tally form contact section |
| `.contact-direct` | Dark mailto contact section (no Tally) |
| `.contact-btn` | Gold CTA button (used inside `.contact-direct`) |

## style.css Structure

```
Reset & Base
Header (.site-header, .site-nav)
Terms Bar (.terms-bar)
Page Intro (.page-intro, .location, .pickup-note)
Equipment Grid (.equipment-section, .equipment-grid)
Cards (.card, .card-image, .card-body, .card-link, .status-badge, .sold-overlay)
Footer (.site-footer, .footer-nav)
Pickup Callout (.pickup-callout)
Pickup & Loading page (.pickup-hero, .rules-list, .pickup-disclaimer)
Individual Listing Page (.listing-page, .back-link, .listing-header, etc.)
Included List (.included-list)
Calibration Box (.cal-box)
Condition Box (.condition-box, .condition-list)
Direct Contact (.contact-direct, .contact-btn)
Lightbox (.lightbox, .lb-img, .lb-prev, .lb-next, .lb-close, .lb-counter)
Responsive (@media max-width: 600px)
Print (@media print)
```
