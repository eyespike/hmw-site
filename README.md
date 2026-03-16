# Hybrid Machine Works — Equipment Sale Site

Static site hosted on GitHub Pages at hybridmachineworks.com.

## How to add a new listing

### 1. Create the listing page

Copy an existing listing (e.g. `eastwood-48-electro-brake.html`) and rename it to match the item slug (e.g. `tormach-1100mx.html`). Update:
- `<title>` and `<meta name="description">`
- Equipment name, price, retail reference, and specs table
- Photo `src` paths
- Tally embed code

### 2. Add an image folder

Create `images/<slug>/` (e.g. `images/tormach-1100mx/`) and drop photos in. The first/hero photo is conventionally named `main.jpg`. Reference images in the listing page using relative paths.

### 3. Add a card to `index.html`

Duplicate the card comment block in the equipment grid. Update:
- `status-badge` class: `status-available`, `status-pending`, or `status-sold`
- Equipment name and price
- `href` on the card link to the new listing page
- Image `src` (or leave placeholder)
- For sold items, uncomment the `.sold-overlay` block

### Marking an item sold

In `index.html`:
1. Change `status-available` → `status-sold` on the badge
2. Uncomment the `.sold-overlay` block inside `.card-image`
3. Change the card link class to `link-sold` and optionally remove the `href`

## File structure

```
index.html                        ← main grid / landing page
style.css                         ← shared styles for all pages
equipment/<slug>.html             ← one file per listing
images/
  sold.png                        ← shared sold overlay image
  <slug>/                         ← photos for each listing
    main.jpg
    photo2.jpg ...
```
