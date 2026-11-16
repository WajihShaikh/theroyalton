# Royalton v5: contrast, section and motion fixes

## What changed

- Isolated light and dark Royalton sections from inherited theme colours, including headings, bold copy, buttons, captions and form controls.
- Replaced the homepage culinary block with a clear photo/text layout and animated service details.
- Replaced the legacy event slider with five image cards, using existing photos and page links.
- Reworked the statistics strip with complete fallback numbers and formatted count-up animation. Figures are retained from the original source, not independently verified business claims.
- Rebalanced the wedding and South Asian wedding introductions using their existing images.
- Rebuilt the menu navigation as four clear destinations with animated borders and hover arrows.
- Rebuilt the FAQ page with 17 native expandable answers and smooth opening/closing transitions.
- Rebuilt six legacy enquiry forms with persistent labels, readable fields, native date controls and consent checkboxes. Existing field names and options are retained.
- Improved reviews, numbered feature lists, enquiry sections and mobile stacking.
- Removed two empty/decorative-only homepage blocks that added space without useful content.
- Extended staggered entrances, photo reveals, slow image motion and hover feedback to the updated sections. Retained the motion pause control and reduced-motion support.

## Validation completed

- 26 HTML pages include the v5 stylesheet.
- 5,619 local asset/link references resolve to existing files.
- All six rebuilt forms have associated labels and submit controls.
- 76 native FAQ items have valid summary/content structure.
- JavaScript syntax validation passed.
- Isolated interaction checks passed for FAQ opening, closing, rapid reversal, reduced-motion fallback and the formatted animated counter.
- Key text/background palette calculations passed:

| Text | Background | Contrast |
| --- | --- | --- |
| #4c4742 | #fcf7f4 | 8.63:1 |
| #625b55 | #fcf7f4 | 6.28:1 |
| #795017 | #ffffff | 7.06:1 |
| #e0e5e9 | #0e202d | 13.10:1 |
| #c1cbd2 | #0e202d | 10.09:1 |
| #f6b255 | #0e202d | 9.04:1 |
| #221f1e | #f6b255 | 8.90:1 |
| #ffffff | #221f1e | 16.37:1 |

## Verification limits

Browser access to the local preview was blocked. This package has source-level and isolated logic checks, but it has not had a rendered desktop/mobile visual audit. No screenshot-based accessibility or overlap claims are made. Photo overlay contrast should be checked in a browser before publication.

Forms and ticket checkout still need the existing endpoint/payment configuration described in README.md. No email delivery or payment connection was added or tested in this update.

## Installation

Extract this complete ZIP into a fresh folder and open index.html. When replacing a hosted copy, upload all included files and clear the page/cache so that the v5 stylesheet is loaded. The new stylesheet is assets/themes/eventicity/royalton/final-polish.css.
