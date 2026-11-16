# The Royalton | Client Feedback Implementation v16

**Prepared:** November 16, 2026  
**Baseline:** provided 26-page static website ZIP  
**Goal:** preserve approved theme, page structure, animations, and performance while implementing the client’s latest review.

## Implemented

### Homepage and navigation
- Added an accessible, keyboard-dismissable, once-per-session homepage announcement modal featuring the **client-supplied New Year's Eve 2027 flyer**. The modal links to the event details page, and uses a compact desktop/mobile layout.
- Increased the contrast, size and clarity of the New Year's Eve announcement across all pages.
- All 26 pages now use the requested top-level menu: **Home / Venue / Wedding / Corporate / Socials / Menu / Catering / Promotions**.
- Added a proper **The Venue** homepage hero CTA and compact Catering/Promotions entry links directly below the hero.
- Changed **12+ Experience** to **30+ Years of Experience**.
- Changed the venue page's **Meet the halls** CTA to **The Venue**, linking directly to the main Royalton venue section.

### Wedding and cultural photography
- Added an editorial photographic section to South Asian Weddings using existing South Asian couple images already included in the client's source archive.
- Brought **Sangeet Celebrations** into the South Asian page heading and content.
- Added varied ceremony photography on the Cultural Weddings page using the project's locally available photos.
- Improved descriptive, context-aware alt text on selected images and updated relevant SEO descriptions.
- Added **IMAGE-ALT-TEXT-INVENTORY.csv**, an editable inventory of image descriptions throughout the static website.

### Promotions
- Both New Year's Eve and Winter Wedding pages now feature their **official supplied flyers prominently at the top** in a split hero composition, with colour themes inspired by each flyer.
- Full flyers stay visible without destructive cropping. They open full size when selected.
- Corrected the New Year's Eve countdown event date to **December 31, 2026, 6:30 PM Eastern**, and removed the misleading `00` placeholder before JavaScript calculates remaining time.
- The provided Winter Wedding source does **not** contain an active countdown. Rather than invent a winter end date, its 2027 January-March offer remains correctly described. A live-site mismatch still requires comparison against the published deployment.

### Corporate, catering and venue
- Removed all references to the rejected `theatre-style-setup-chandeliers` image from the HTML and deleted the unused image variants from the build. Replaced relevant placements with other venue photographs in the source archive.
- Changed Corporate Events **See the halls** to **The Venue**.
- Replaced **Launches** with **Sales Kick Offs** and added **Client Appreciation Dinners** to the corporate uses and ribbon.
- Replaced the old braised-short-rib picture with a new **illustrative** premium food photograph. This image does not purport to be the exact Royalton plate. Replace it with the approved client photograph on receipt of the revised menu.
- Fixed layout of the numbered **What sets The Royalton apart** features, especially at narrow widths.
- Removed **Still deciding?** wording across all affected pages without deleting the underlying booking contact links.
- Added a short explanation of Ontario's **Stag and Doe** pre-wedding event terminology; this is not a spelling error.

### Shared styling and quality
- Reduced the large moving text ribbons sitewide using consistent typography and spacing.
- Strengthened H1 visibility and text wrapping without introducing multiple H1 tags or keyword stuffing.
- Raised the back-to-top button above the external chat position at mobile widths to reduce collision.
- Corrected **28 unique case-sensitive asset paths** affecting 253 referenced resources in the original bundle (including font/img/plugin-related paths). Site audit now reports no unresolved local file references.
- Updated the sitemap's last-modified dates and added the previously omitted Privacy Policy canonical URL.

## Quality checks carried out
- 26/26 HTML pages retained.
- 26/26 pages have one H1 and a meta description; 26 unique page titles.
- 8-item navigation is present on all 26 pages.
- Local image/script/CSS links checked: **0 missing local references, 0 filename-case mismatches**.
- Internal anchor links checked: **0 unresolved anchor targets**.
- All pages have incoming internal links in the 26-page site graph.
- JavaScript and stylesheet syntax checks passed for new files.
- Static Chromium visual renders were checked at desktop and 390px mobile widths for homepage, promotional heroes, modal, South Asian wedding gallery and venue features. No horizontal overflow occurred in those checks.

## Requires external client/admin access to finalize or verify
1. **Chat routing and mobile black bar:** The website embeds the client's existing LeadConnector widget. Its chat destination, WhatsApp connection, message delivery, and the external widget's internal visual styling cannot be verified or edited through this static ZIP alone. The back-to-top position and host iframe constraints are refined, but a live test and LeadConnector account review remain necessary to confirm the black bar is fully gone.
2. **Instagram wedding photos:** The ZIP already contained usable South Asian imagery, which is now more prominent. We could not confirm or download new images from a client-authorized Instagram media source. The final client-preferred images can replace the illustrative/local gallery selections as soon as access and selections are supplied.
3. **Updated catering menu and real short-rib photo:** Client said a revised menu/photo would follow. The new illustration is a temporary design asset, not their actual dish.
4. **Image description editing by the client:** This is a static site, not a WordPress administration environment. Descriptions can be changed in HTML or through `IMAGE-ALT-TEXT-INVENTORY.csv` as a handoff; self-service WordPress admin editing requires a CMS migration or integration.
5. **Form/payment delivery:** The original files rely on deployment configuration for form submissions and external payment setup for NYE checkout. This revision does not invent provider credentials, connect payment accounts, or certify a payment flow without those credentials.
6. **Live external QA:** Local-source visual checks do not replace published-device QA, particularly for third-party chat scripts and payments. The final Netlify or production deployment should be tested after publishing.

## Deployment
Unzip directly to a static hosting site root, with `index.html` at the root. Keep all assets in their relative folders. Use the production site URL for canonical/sitemap inspection when deploying to the final domain.

### Key files
- `assets/themes/eventicity/royalton/client-feedback-v16.css`
- `assets/themes/eventicity/royalton/client-feedback-v16.js`
- `assets/uploads/royalton/beef-short-rib-premium-1600.webp`
- `IMAGE-ALT-TEXT-INVENTORY.csv`
