# Royalton v7: transparent header and modern hero carousel

## Header correction

The screenshot revealed that the original body classes, including ry-over, had been lost during HTML processing. Rules responsible for overlay positioning were therefore inactive. This revision restores the original classes on all 26 pages and replaces the legacy Elementor header with a standalone compact navigation header.

- Transparent navigation overlays the hero photograph immediately below the announcement bar.
- The header is outside normal page flow, so it does not reserve a cream block above the banner.
- Desktop header: 92px. Mobile header: 80px.
- Solid navy background after scrolling for readability.
- Original page links and submenu destinations retained.
- Accessible mobile menu button, submenu buttons, Escape handling and visible focus styles.

## Hero carousel

- Existing photography, with multiple slides on every page.
- Smooth crossfades, gentle image zoom and animated captions.
- Previous/next arrows, numbered slide count and selectable thumbnails.
- Eight-second autoplay with progress indicator and pause/play control.
- Swipe navigation on touchscreens and arrow-key navigation on controls.
- Autoplay pauses during hover/focus, when the hero is offscreen and when the browser tab is hidden.
- Reduced-motion preference disables autoplay by default and removes transition effects.
- Headings are more restrained and hero spacing accounts for the overlay header and bottom controls.
- The former slideshow controller is disabled to prevent competing timers.

This is a custom static HTML/CSS/JavaScript carousel inspired by modern Slider Revolution presentations. Slider Revolution itself is not installed or required.

## Checks

- All 26 pages have the restored body classes, one replacement header and at least two hero images.
- No legacy header or competing data-ry-slides controller remains.
- 4,685 local asset/link references resolve.
- JavaScript syntax passed.
- Isolated carousel tests passed for next/previous wrapping, active image/thumbnail state, announcements, timer reset and autoplay pause conditions.
- Existing FAQ and counter logic checks passed.
- ZIP integrity verified.

Browser preview was previously blocked in this environment. These are source and isolated logic checks, not a rendered desktop/mobile visual sign-off.

## Install

Extract the complete ZIP into a new folder and open index.html. For hosting, replace the complete previous package and clear cached HTML/CSS/JS. Do not copy only the new stylesheet: the HTML header and hero markup also changed.

Existing form-endpoint and payment configuration requirements remain unchanged.
