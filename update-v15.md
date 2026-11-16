# Royalton v15: smaller download, same site, same image quality

**ZIP size: 48.0 MB (v14) -> about 27 MB (v15), about 44% smaller.**
Nothing visible changed: same pages, same content, same design, same animations, same image quality.

## What was done

| Step | Saved (on disk) | Quality impact |
|---|---|---|
| Removed 54 media files that nothing references (old image sizes, replaced stock photos, unused font weights) | 14.0 MB | none: no page used them |
| Losslessly recompressed all PNG and JPG files (oxipng, mozjpeg lossless) | 2.0 MB | none: every image verified pixel-identical |
| Converted 47 photo PNGs to **lossless** WebP (`-ll.webp`) and updated every reference | 4.4 MB | none: every image verified pixel-identical before swapping |
| Removed legacy font formats (EOT, TTF, SVG fonts) where WOFF2/WOFF exist; font rules now list WOFF2 and WOFF only | 3.5 MB | none: all current browsers use WOFF2/WOFF |
| Removed leftover files from plugins the static site doesn't use (Slider Revolution, popups, Contact Form 7 scripts, comment-reply) | 0.6 MB | none: no page loaded them |
| Built the ZIP at maximum compression | | none |

## Not changed (on purpose)
- **Lossy WebP photos:** not re-encoded, since that would lower quality. They also carry no metadata to strip.
- **Image dimensions:** no image was resized. Every responsive size stays.
- **HTML, CSS and JS:** not minified. They make up only about 1.5 MB of the compressed ZIP, so minifying would save little at some risk.
- **Site icons and social-share images:** kept as PNG for compatibility.

## Optional further saving (needs your OK, because it lowers stored resolution)
Some images are stored far larger than they're ever displayed. For example:
- the header logo is 1888px wide (about 545 KB) but shows about 70px tall,
- the Weddings intro photo is 1662x2304 (2.3 MB).

Resizing them to twice their largest display size would look identical on every screen, including Retina, and would cut several more MB. It wasn't done, because you asked not to reduce image quality.

## Checks
- All 26 pages load with no missing references.
- In a real browser, 517 images loaded with 0 broken and 0 failed requests, and there were 0 JavaScript errors.
- Before and after screenshots match. The remaining differences come from the theme's scroll animations and auto-playing carousels, whose timing varies between page loads.
- The client's wording is identical to v14, with 0 em dashes, 0 dead links and 0 glyph icons.
