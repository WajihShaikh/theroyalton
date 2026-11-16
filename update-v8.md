# Royalton v8: client's original content restored, gallery upgrade

Built on your v7 (transparent header and hero carousel). The design, layout, classes and animations are unchanged. This update changes wording only, except for the new Gallery page.

## 1. The client's original website wording is back

Every sentence from the client's original site was checked against this version.

**Homepage**
- **Hero:** "About Us" / **We Create Unforgettable Events** / "From Weddings to Corporate events and Social Celebrations, The Royalton brings people together in a space designed for lasting memories." / **Pricing & Availability** button.
- **What we do:** the original paragraph, the "View More" button, and the original 4 services (Buffet catering, Weddings catering, Corporate Celebration, Themed Evening).
- **Catering:** "Royalton Catering: Satisfying your taste, creating memories one bite at a time", "About Us", "Crafting culinary memories", and the items Royalton Gourmet Cuisine, Halal & Kosher Menus, The Art of Serving.
- **All occasions:** "The Royalton Event Venue for all occasions", with the cards Weddings, South Asian Wedding, Corporate Events, Special Events, The Grand Royalton and "Read More".
- **Contact:** "Contact Us / Let's Plan Your Next Event", the address, and a "Contact Form" heading with the original field names, consent text and "Get in Touch" button.
- **Blog section removed.**

**Weddings and South Asian Weddings**
- **Heroes:** "Weddings / Designed Around Your Story".
- **Intros:** "In the heart of Vaughan / A Signature Space for Unforgettable Events" and "At Royalton / We welcome celebrations from all cultures…".
- **Halls:** "Vaughan Event Venue for Wedding and Corporate Events / The Royalton Event Space" and "The best for you / Wedding planning services".
- **Galleries:** "Wedding stories" and "Wedding memories", with their original paragraphs.
- **Contact:** "Contacts / We'll plan your dream wedding".
- **South Asian form:** the original fields (Name, Last Name, Email, Phone, Message).

**Social Events**
- "Events / Designed Around Your Story".
- The "Social Celebrations" gallery text.
- The original contact heading.

**Corporate**
- **Hero:** "Corporate Events With the Right Balance of Elegance and Efficiency" and its original sentence (no longer repeated below).
- **Form:** the original field names (Your Name, Company Name, Your Email, Phone, Event Type, Event Date, Guest Count, Message) and the "Submit" button.

**Menu**
- **Hero:** "MADE with LOVE" with its original sentence.
- **Chef section:** "The Royalton event venue / The Perfect Space, The Perfect Menu / Celebrate Big. We Handle the Details."
- **Dishes:** "Culinary Excellence for Every Celebration / Signature Dishes, Stunning Presentation".
- **Cards:** "Read more".

**The Venue (was About Us)**
- "Vaughan Event Venue for Wedding and Corporate Events / The Royalton Event Space".
- "Woodbridge Event Space & Catering" and its paragraph.
- The original hall descriptions.
- "Host with us, where charm meets flawless service."

**Contact**
- "Contact Us", "Contact details", "8201 Weston Rd. Vaughan, Ontario L4L 1A6", "+1 905-851-2325".

**Every page**
- Hall carousels use the client's hall descriptions.
- Guest reviews are the full original reviews, word for word.

## 2. Em dashes removed

There are no em dashes anywhere on the site (2 replaced with commas or colons). One en dash used as a dash in the schema data was also replaced.

## 3. Gallery page, rebuilt

- **Intro:** a counts bar (photos, halls, guests, categories).
- **Featured mosaic:** an asymmetric grid with hover captions and category tags.
- **Film strip:** two rows of photos moving in opposite directions, pausing on hover.
- **Filters:** chips with live counts, animated filtering and a live "Showing X photos" status.
- **Full-screen viewer:** previous/next arrows, keyboard (← → Esc), swipe on phones, an "X / Y" counter, captions, and focus kept inside the viewer.
- **"Explore by space":** the 4 halls with the client's own descriptions, linking to the Venue page.
- **Reduced motion:** visitors who have turned on "reduce motion" get a still version.
- **Files:** `assets/themes/eventicity/royalton/gallery.css` and `gallery.js` (loaded on the Gallery page only).

## Deliberate differences from the original (please confirm with the client)

- **Typo:** "The Royaton Event Space" is corrected to "Royalton".
- **Corporate:** the Princess Hall card repeated Baroness Hall's description (200 guests / 120 seated). It now uses the client's Princess Hall description (350 / 210).
- **Kept from the original but probably copy errors:**
  - "We'll plan your dream wedding" on the Social Events page.
  - A second "Common Inquiries" heading over the Corporate call-to-action band.
- **Not brought back:** theme demo content (fake couple galleries, the demo blog posts, the Lorem Ipsum event calendar, the repeated "Sarah Jenkins, FinTech Global" testimonial, and the fake reviewer cities).
- **New pages and sections:** pages the client asked for that had no original text keep their current copy. These are Cultural Weddings, the 5 social pages, Catering, Promotions, New Year's Eve, Winter Wedding, Features and FAQs. The promotion pages follow the client's flyers.

## Checks

- 26 pages, 0 missing files or links.
- Exactly one H1 per page.
- 0 em dashes.
- No JavaScript errors on the key pages.
- Gallery filter and viewer tested in a browser; no sideways scrolling on mobile.
