# Royalton v14: "The Royalton Event Venue / for all occasions" heading now animates

## Why it wasn't animating
The section-heading animation (added in v9) only targets headings with the `ry-h2` class. When this section was rebuilt in v12 to match the client's original design, its heading got its own class (`ry-occ__title`), so the animation skipped it. The client's original heading was static, so there was nothing to carry over.

## What it does now
- **Entrance:** when the section scrolls into view, "The Royalton Event Venue" glides in word by word from the right and "for all occasions" from the left, both fading up into place. The second line's words arrive right to left so they never overlap. Everything is settled within about 1 second.
- **Gold rule:** a thin gold line then draws in under the heading.
- **Scrolling (desktop):** the two lines drift gently in opposite directions while you scroll.
- **No clipping:** letters are never cut off mid-animation.
- **Reliable:** it uses keyframe animations, so it plays the same however the page loads.
- **Accessibility:** screen readers hear "The Royalton Event Venue for all occasions". Visitors with "reduce motion" on see the heading still. Without JavaScript the heading simply shows.
- **Mobile:** the entrance plays, the drift is off, and there's no sideways scrolling.

The text is unchanged and is exactly the client's.
