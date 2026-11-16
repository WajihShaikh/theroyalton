# The Royalton: focused design refinements, v4

This update preserves the page structure, existing content, photography, cream/navy/gold palette and fonts. It refines the original static HTML package rather than replacing the design.

## Issues addressed

| Area | Finding | Update |
| --- | --- | --- |
| Small text | Muted grey was too pale on light backgrounds | Darker captions, metadata, descriptions and form placeholders |
| Dark sections and footer | Some small text and links inherited light-section colours | Dedicated readable navy-section and footer colours, including hover states |
| Hero and image cards | Original overlays became very light behind parts of the copy | Stronger layered overlays and solid white copy |
| Hero proportions | Large headings and tall inner banners dominated pages | More restrained responsive typography and banner heights |
| Section spacing | Large section padding combined with internal spacers | Tighter shared spacing, heading gaps and homepage logo/statistics strips |
| Empty legacy sections | Spacer-only sections introduced blank gaps | Hide only sections without text, media, links, forms or background settings |
| Venue halls | Tall portraits could leave excessive space beside short descriptions | More balanced photo proportions, heading sizes and column gaps |
| Reviews | Quotes needed stronger hierarchy | Clearer gold rules, readable line spacing and attribution |
| Menu tabs | Panel content lacked definition | Light panel, subtle border, gold top rule and clearer selected tab |
| Catering | Uneven product action positions and a weak order panel | Aligned card actions, stronger order-panel hierarchy and larger remove controls |
| Forms | Pale field outlines and unclear placeholders | Darker outlines, readable placeholders and stronger focus indicators |
| Small screens | CTA, ticket details and order fields could become cramped | Responsive stacking, wrapping and smaller gaps |
| What we do | Expanding descriptions moved neighbouring rows | Stable descriptions with smooth photo crossfades |
| Motion | Deep reveal thresholds could keep tall content hidden | Earlier one-time entrances, shorter travel and gentler easing |
| FAQs | Content appeared/disappeared abruptly | Cancellable opening and closing height animations |
| Hero motion | Strong parallax and continuous background work | Softer desktop-only parallax; pause/resume control; slideshow pauses offscreen or in a hidden tab |
| Reduced motion | Some decorative and line effects escaped the old rules | Unified reduced-motion styles and native FAQ behaviour |

## Checks completed

- All 26 HTML pages load the refinement stylesheet.
- Local HTML links, script paths, image sources, stylesheets and responsive image candidates resolve to existing files.
- JavaScript syntax validation passed.
- FAQ opening, closing, rapid reversal and reduced-motion logic passed isolated checks.
- Eight key solid-colour text/background pairs were calculated at 5.73:1 or higher. This is not a full rendered-page accessibility certification; image backgrounds need visual review.
- The package was checked for archive integrity.

## Verification limitation

The available browser could not launch in this environment, so desktop/mobile screenshots, rendered overlap checks and live interaction testing were not completed. Review the package in a browser before publishing, especially the retained Elementor sections and mobile navigation.

## Use

Extract the complete ZIP and open index.html, or upload the extracted files to your static host. The refinement stylesheet loads after the existing page styles. All original assets are included.

The existing form endpoint and ticket checkout setup requirements described in README.md still apply. This styling update does not connect payments or email delivery.
