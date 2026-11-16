> **Current client-feedback release: v16, November 16, 2026.** See `CHANGELOG-v16-CLIENT-FEEDBACK.md` for implemented changes, QA results, and items needing client access. The older notes below document the original v7 build.

# The Royalton – static website (HTML + CSS + JS), version 7: transparent header and hero carousel

A standalone, fully animated site. It needs no WordPress, PHP or database.

See `UPDATE-v7.md` for the latest changes, completed checks and visual verification limitation. `DESIGN-REFINEMENTS-v4.md` describes the earlier revision.

## Open it

- **Locally:** double-click `index.html`. Every link is relative, so it works straight from the folder.
- **Online:** upload the folder to any static host (Netlify, Cloudflare Pages, Vercel, cPanel, Apache or Nginx). It also works from a sub-folder.

## What changed in version 3

### Footer (every page)
- The old footer is replaced with a new one: seal logo, short intro, and Book a Tour and Promotions buttons.
- Contact details are clickable: address opens Google Maps, phone and email open the right app.
- Four link columns: Venue, Weddings, Events, Explore.
- A large animated "The Royalton" wordmark, and a bottom bar with Privacy policy, Get directions and Back to top.
- Columns animate in as you scroll.

### Homepage (client: too much whitespace, needs better organization)
- **Fixed the "What we do" section.** Its 4 hover photos were missing from the export, and the left column was empty. It's now an interactive list of Weddings, Corporate, Social, Catering and Themed evenings. Hovering an item swaps the large photo, and every item links to its page. The old "+" items looked like FAQs but didn't open, and all just linked to the contact form.
- **Fixed the "The Royalton Event Venue for all occasions" heading,** which ran off the screen on phones.
- **Added** the hall carousel and guest reviews.
- **Tightened spacing** between sections.

### Menu
- **New Executive Chef section** for Pasquale Di Petta: photo collage, his bio, his specialities, and Plan your menu / Order catering buttons.
- **New menu tabs:** Weddings, Corporate, Social, Catering and Late-night stations, showing cuisines, service styles and dietary options.
- **Removed** the duplicate "Culinary Excellence" band (it had a broken overlapping image) and the old chef block.

### Catering: online ordering
- Each platter has a quantity selector and an "Add to order" button.
- The order panel stays visible while scrolling, and you can remove items.
- Checkout collects name, phone, email, date, pickup or delivery, and notes. The order lines are sent along with the form.
- Prices show as "confirmed with your order". To show real prices and an estimated total, add them to `data-price=""` on each item in `catering/index.html`.

### Blog
- **Listing:** the newest article is featured large, with a 3-column grid of the rest, read-more links and dates.
- **Articles:** a full banner with the title, date and reading time; a narrower, more readable text column with styled headings; a "More from our blog" row; and a Book a Tour band.

### Other pages
- **Weddings and South Asian Weddings:** "Book a consultation" in the banner and a consultation band after the reviews.
- **South Asian Weddings:** a new "Every event of your wedding" row (engagement, mehndi, sangeet, nikah, anand karaj, Hindu ceremony, reception, walima).
- **Corporate** (in the style of Oakville Conference Centre): a "Built for every corporate need" facts bar (400+ free parking spaces, A/V, 4 halls, 950 guests) and image cards for Conferences, Galas and Holiday parties.

### Bugs fixed
- **New sections sat 10px off the left edge on phones,** on pages built with Elementor.
- **5 images showed as blank boxes on phones.** They pointed to small image sizes that were never exported (Weddings, South Asian, Social).
- **The FAQ accordions** now animate open.

## From version 2 (still included)

- **Menu:** HOME | VENUE | WEDDING | CORPORATE | SOCIAL | MENU, with the Book a Tour button.
- **Header:** transparent over a full banner on every page, solid after scrolling.
- **Mobile:** working mobile menu, with The Royalton logo.
- **Animations:** banner slideshows with zoom and parallax, word-by-word titles, scroll reveals, image wipes, count-up numbers, marquees, hall carousel, New Year's Eve countdown.
- **Reduced motion:** the site respects the "reduce motion" setting.

## Forms and payments

- **Forms:** set `FORM_ENDPOINT` in `assets/js/forms.js` (Formspree, Getform, Basin or your own mailer), or host on Netlify, where forms work automatically.
- **New Year's Eve checkout:** point the `data-ry-checkout` link in `promotions/new-years-eve/index.html` at a payment page (Square or Stripe Payment Link, Eventbrite, or Squarespace).
- **Catering:** orders arrive through the same form service. Card payment can be added later with WooCommerce or a payment link.

## Still needed from the client

1. **Squarespace content:** the real menu content and packages, plus the venue photos (the /config area needs his login). The menu tabs currently show cuisines and service styles, not dish lists.
2. **Chef photo:** a real photo of Chef Pasquale.
3. **Lobby and outdoor photos:** for The Venue page.
4. **Hall photos:** confirm which photo is which hall.
5. **Postal code:** L4L 1A6 or L4L 0J6?
6. **Capacities:** confirm all of them.
7. **Social links:** real Facebook and Instagram links (none are shown in the footer until we have them).
8. **NYE details:** menu and entertainment.
9. **Catering:** prices, and pickup or delivery details.
10. **Content review:** review all new copy.
11. **Privacy policy:** a legal review.
