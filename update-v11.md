# Royalton v11: homepage banner follows the client's original slider exactly

## Why "About Us" was showing above the headline
In the client's original homepage slider (Slider Revolution), "About Us" was **not** a label for the headline. The slider's own settings show:

| Original layer | Size | Role |
|---|---|---|
| We Create / Unforgettable / Events | 110px, 3 lines | main headline |
| Pricing & Availability | 16px | button (click action: scroll down the page) |
| About Us | 18px | heading of a separate small text box (click action: `scrollbelow`, scrolls to the content below) |
| From Weddings to Corporate events and Social Celebrations, The Royalton brings people together in a space designed for lasting memories. | 17px | text of that same box |

v8 to v10 used the right words, but put "About Us" above the headline as if it were the headline's label, which changed its meaning.

## What v11 does
- **Headline:** "We Create / Unforgettable / Events", with the client's original three-line break. Screen readers hear "We Create Unforgettable Events".
- **"Pricing & Availability":** scrolls to the enquiry form on the homepage, like the original button.
- **"About Us" box:** sits apart from the headline (to the right on desktop, below on mobile). "About Us" is a link with a down arrow that scrolls to the "What we do / The Royalton Event Space" section, like the original, and the client's sentence sits inside the box.
- **Banner animation (all pages):** the old word animation slid each word up from behind a clipping mask, which looked broken mid-way (as in your screenshot). It also let the button appear before the headline. It's now a calm fade-up that always runs in order: label, headline (word by word), text, button, About box. Everything is settled within 1.5 seconds, and visitors with "reduce motion" on see it still.

## Other banners checked against the original sliders
- **Weddings and South Asian Weddings:** "Weddings" + "Designed Around Your Story" (one group in the original), as now.
- **Social Events:** "Events" + "Designed Around Your Story", as now.
- **Menu:** "MADE with LOVE" with its original sentence, as now.

## Checks
- Every original sentence from the client's website is still present (same as v10).
- 0 dead links (the new #about and #contact anchors resolve), 0 missing files, 0 em dashes, 0 glyph icons, one H1 per page.
- No JavaScript errors.
- Banner checked at 1653px wide and on mobile; both scroll links tested.
