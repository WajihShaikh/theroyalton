# The Royalton | Staging-ready static website | v17

The `index.html` in this folder is the homepage. All 26 route folders, site assets, `_redirects`, `robots.txt` and `sitemap.xml` are required for publishing.

## Deployment

- On Netlify, deploy **this folder as the site root**, not a nested `dist` or old revision folder.
- GitHub repo replacement: copy the contents of this folder into the repository root, removing previous tracked site files not present here; keep the `.git` directory.
- Set the Netlify publish directory to the repository root (`.`) if connected via GitHub.
- Preview the corporate page at `/corporate-events/`.

## Latest requested improvements

- Three distinct corporate card photographs with stronger text contrast.
- Rebuilt corporate enquiry form with photo, introduction, organized fields and responsive mobile layout.
- Seven independent event specialization cards, with Sales Kick Offs and Client Appreciation Dinners in separate slots.
- The form preserves field names and `data-netlify=true` for Netlify Forms.
- Retains previous v16 homepage, wedding, promotion, navigation and mobile refinements.

## Integration requirements

- Netlify Forms require a site deployed on Netlify, form detection enabled in project settings, and verified notifications. Outside Netlify, configure `FORM_ENDPOINT` in `assets/js/forms.js`.
- The external LeadConnector chat, payment checkout, catering prices and client-requested imagery still need client-side/live verification.

## Files kept / removed

Kept all locally referenced assets, CSS, JavaScript, font licenses and the complete 26-page website. Removed historical development markdown/CSV reports and media files whose names had no references in any HTML/CSS/JS source. No content pages were removed.
