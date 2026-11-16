# Royalton v10: SVG icons everywhere (no Unicode or icon-font glyphs)

Built on v9. The client's wording is unchanged (re-checked against his original website). No em dashes, no dead links, no missing files.

## What changed
All icons that were drawn with Unicode characters or icon fonts are now proper inline SVG icons. They share one style (24x24 grid, 1.75 stroke, rounded ends) and use `currentColor`, so they inherit each button's colour and hover state. They're inline, so they also work when pages are opened straight from the folder.

| Icon | Was | Where | Count |
|---|---|---|---|
| Menu dropdown chevron | ⌄ (Unicode) | header submenu toggles, all pages | 104 |
| Back to top | icon font + ↑ | theme button and footer link, all pages | 52 |
| Arrows | → ← ↗ (Unicode) | read-more links, What we do, event and route cards, hall carousels, buttons | 64 |
| Review stars | ★ (Unicode) | every review card | 24 sets |
| Enlarge | ⤢ (Unicode) | gallery tiles | 30 |
| Quantity − / + | − + (text) | catering cards | 16 |
| Close, previous, next | × ← → | gallery viewer | 3 |
| Hero slider controls | ← → ▶ Ⅱ (in JavaScript) | arrows and play/pause on every banner | all pages |
| Cart | × and ✓ (in JavaScript) | remove-item button and "Added" confirmation | catering |
| Font Awesome icons | icon font | Corporate: check-circles, FAQ +/−, location, guests, Wi-Fi, menus, parking, staff | 15 |
| Theme icons | icon font | Social Events: Special Event Planning boxes | 4 |
| CSS arrows | ↗ ↓ in CSS `content` | promotion cards, Venue hall-jump links, old gallery badge | 3 rules |
| Review quote mark | “ glyph in CSS | review cards | 1 rule (SVG background) |

## Small improvements along the way
- **Social Events icons:** the boxes now use icons that fit their titles (cake for Birthdays, rings for Engagements, balloons for Baby Showers, dress for Bridal Showers). The theme had a map pin on "Birthday Parties". They are also coloured to stay visible on their background blobs.
- **Corporate check-circles:** they now render as outlined circles with a check, instead of solid dots.
- **Menu chevrons:** they flip when a submenu opens.
- **Arrow links:** arrows nudge on hover.
- **Accessibility:** each review's stars have a label ("5 out of 5 stars"), and the cart's remove buttons name the item they remove.

## Intentionally unchanged
- The arrows inside the client's blog article sentences (for example "registration → program → breaks → networking") are part of his written text, not icons.
- The hamburger menu button is already drawn with CSS lines, not a glyph.

## Checks
- 0 Unicode or icon-font glyph icons left in the HTML, CSS or JavaScript.
- 0 dead links, 0 broken anchors, 0 missing files.
- One H1 per page, 0 em dashes.
- The client's wording is identical to v9.
- No JavaScript errors on key pages.
- Icons checked on desktop and mobile: menu, slider, cards, stars, catering steppers, cart, gallery viewer, Corporate and Social Events icons, back-to-top.
