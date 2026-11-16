# Royalton v9: card padding, more animation, no dead links, client photos

Built on v8. The client's original wording is unchanged (re-checked line by line against his original website). No em dashes.

## 1. Padding fixes
- **Review cards (every page with reviews):** the text was touching the card border. Cards now have proper inner padding, a gold top rule, a large quote mark, a divider above the name, a gold avatar dot and gold stars. They lift on hover.
- **Catering product cards:** the title, description, price note and quantity/Add-to-order row now sit inside the card with even padding. The action row is aligned at the bottom, and cards lift on hover.
- **Promotion cards:** consistent inner padding.
- **Corporate page:** the original Elementor blocks ("Common Inquiries", icon titles, buttons) used a plain Arial font. They now use the site's DM Sans and Marcellus, and the buttons are rounded to match.
- **Load order:** the new stylesheet (`polish-v9.css`) now loads last, so older styles can't override these fixes.

## 2. More animation (all sections)
- **Headings:** section headings rise in word by word, and the gold rule beside each section label draws in.
- **Navy sections:** a gold line sweeps across the top of each one.
- **Reviews:** stars light up one by one.
- **Numbers:** capacity figures, facts and stats pop in.
- **Other content:** forms, enquiry blocks, menu cards, tabs, ticket and order panels, tour steps and event tiles fade up in sequence.
- **Card images:** ease in from a slight zoom.
- **Large photos:** gentle parallax on the section, hall, feature, kitchen, wedding and chef photos (desktop only).
- **Cards:** 3D tilt that follows the mouse (desktop only) on photo cards, promotion cards, review cards, event tiles and the Gallery's hall cards.
- **Buttons:** gold buttons get a soft glow and a periodic shine.
- **Seals:** the wax seals in the call-to-action bands and footer float gently.
- **Links:** animated underlines on text links.
- **Never hidden:** a safety net shows content even if an animation can't run, and visitors who have turned on "reduce motion" get a still version.
- **Files:** `assets/themes/eventicity/royalton/polish-v9.css` and `polish-v9.js`.

## 3. No dead links
All 26 pages were checked: 0 dead links, 0 broken in-page anchors (including links like `the-venue/#princess`) and 0 missing files.
- **Back-to-top arrow (all pages):** was `#`, now goes to the top of the page.
- **Social Events boxes:** Birthday Parties, Engagement Parties, Baby Showers and Bridal Showers were `#`. They now link to the Birthdays and Bridal Showers pages.
- **New Year's Eve "Continue to checkout":** was `#`. It is now a real button that shows the reservation message until a payment link is added.
- **Blog articles:** removed the "0 Likes" counter (a WordPress-only feature that does nothing on a static site).
- **Homepage:** removed "Follow on Instagram". It pointed to a numeric Instagram address that doesn't open, and the real profile could not be found publicly. Add it back once the client sends his Instagram link.

## 4. The client's photos replace stock photos

| Where | Was (stock) | Now (client photo) |
|---|---|---|
| Weddings intro | stock couple | reception with white floral centrepieces |
| South Asian intro | stock bride, stock sweets | head table with floral arches, reception with arches |
| Social Events | stock candy bar | kids' birthday with balloon arch |
| Homepage event card | Unsplash photo | conference hall with chandeliers |
| Social, Corporate, Stags banners and cards | stock party dancing | reception with blue uplighting |
| Social, Birthdays, Bridal Showers banners | stock candy bar | crème brûlée from The Royalton kitchen |

Alt text is updated to describe the new photos.

## Checks
- 26 pages, 0 dead links, 0 missing files.
- Exactly one H1 per page.
- 0 em dashes.
- No content left invisible after scrolling every page (desktop and mobile).
- Review and catering cards checked on desktop and mobile.

## Still needed from the client
- His Instagram link, to restore "Follow on Instagram".
- A payment link for New Year's Eve tickets.
- A form service for the enquiry forms (see README).
