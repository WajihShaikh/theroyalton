# Royalton v12: homepage testimonials removed, "for all occasions" matches the client's original

## 1. Homepage testimonials removed
The "What our guests say" section is gone from the homepage. The client's original homepage had no testimonials section either. Reviews still appear on the inner pages (Venue, Weddings, South Asian, Social, Corporate and others).

## 2. "The Royalton Event Venue / for all occasions": the client's original design
I rebuilt it from the client's website export, using the theme's own settings ("QW Case" portfolio) so it behaves like his original:

- **Heading:** "The Royalton Event Venue" (pushed right) and "for all occasions" (indented below), each line 5vw with the original tight letter spacing. The original sizes apply on smaller screens: 7vw on tablet, 9vw on mobile, both lines left-aligned.
- **Cards:** five tall photo cards in a row, in the original order: Weddings, South Asian Wedding, Corporate Events, Special Events, The Grand Royalton.
- **Open card:** the first card starts open and wide. Hovering (or keyboard-focusing) another card opens it, with the same 0.6s width animation and easing as the original.
- **Inside the open card:** the photo shrinks from 620px to 460px tall to reveal "Services", the title slides up, and "Read More" fades in. The photo eases from slightly zoomed to normal.
- **Breakpoints (from the original theme):** 400px tall cards on laptops and 325px on tablets. Phones get a 2-column grid showing every card with its photo, "Services", title and "Read More".
- **Touch screens:** the first tap opens a card and the second tap follows its link.
- **Content:** exactly the client's text ("Services", the five titles, "Read More").
- **Photos:** the client's original photos for Weddings, South Asian Wedding, Special Events and The Grand Royalton. The Corporate Events card originally used a stock Unsplash photo, so it uses the client's own chandelier hall photo instead, as agreed in v9.
- **Links:** the original cards all pointed to the contact form. They now open the matching page (Weddings, South Asian Weddings, Corporate Events, Social Events, The Venue). Easy to point back at the form if you prefer.

## Checks
- Every original sentence from the client's website is still present (same as v11).
- 0 dead links, 0 missing files, 0 em dashes, 0 glyph icons, one H1 per page.
- No JavaScript errors.
- Checked at 1653px and on mobile, including hovering.
