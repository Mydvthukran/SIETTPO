```markdown
# Design System: Institutional Prestige

## 1. Overview & Creative North Star
**Creative North Star: "The Academic Curator"**

This design system is built to evoke the gravitas of a legacy institution while maintaining the precision of modern engineering. We are moving away from the "government portal" trope of cluttered grids and flat blues. Instead, we are designing a digital experience that feels like an elite invitation—think high-end editorial journals and prestigious university archives.

The aesthetic is defined by **Intentional Asymmetry** and **Tonal Depth**. We bypass generic layouts by utilizing large, authoritative serif headings offset against minimalist sans-serif data points. We treat white space not as "empty," but as a luxury material that gives the content room to breathe and command respect.

---

## 2. Colors & Surface Architecture

The palette balances the weight of `Dark Navy` with the warmth of `Fine Stationery`.

### Palette Breakdown
*   **Primary/Hero Background (`#0A1628`):** Use for high-impact zones. This is our "Ink."
*   **Page Background (`#F5F0E8`):** A warm, parchment-inspired off-white. It feels more human and established than pure hex white.
*   **Accent/CTA (`#C9922A`):** Used sparingly for gold-leaf highlights and primary actions.
*   **Neutral Tones:** Utilize the `surface-container` tiers to create hierarchy.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for layout sectioning. Content must be separated by:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Vertical Space:** Use the `16` (5.5rem) or `20` (7rem) spacing tokens to create clear mental breaks.
3.  **Tonal Transitions:** A `primary-container` card sitting on a `primary` background.

### Glass & Signature Textures
To avoid a flat "template" feel, use **Institutional Glassmorphism**. For floating navigation elements over hero sections, use a 60% opacity version of `#0A1628` with a `backdrop-blur` of 12px. For the Hero background, integrate a subtle geometric watermark—a 2% opacity gold (`#C9922A`) grid or blueprint motif—to provide "visual soul."

---

## 3. Typography: The Editorial Voice

We pair a traditional serif with a high-performance sans to balance "Heritage" with "Future."

*   **Display & Headlines (DM Serif Display):** These are our "Statement" pieces. Use `display-lg` for Hero statements and `headline-lg` for section starts. The high contrast of the serifs conveys an authoritative, traditional voice.
*   **Body & Navigation (DM Sans):** Our "Workhorse." Used for all functional reading. It is clean, modern, and provides a necessary counter-balance to the traditional headings.
*   **Labeling:** Use `label-md` in all-caps with a `0.05em` letter-spacing for category tags (e.g., "PLACEMENT STATISTICS").

---

## 4. Elevation & Tonal Layering

We do not use shadows to "pop" elements; we use them to "settle" elements into the page.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` (pure white) card on top of a `surface-container-low` (#F8F3EB) background. This creates a soft, natural lift that mimics heavy paper stock.
*   **Ambient Shadows:** For floating modals or "Elite" cards, use an extra-diffused shadow:
    *   `box-shadow: 0 20px 40px rgba(10, 22, 40, 0.06);` (A navy-tinted shadow feels more natural than grey).
*   **The Gold Border (The Exception):** Only use borders where explicitly requested for "Prestige" framing. Use the `2px` width with `#C9922A` at 40% opacity. This creates a "Ghost Gold" frame that feels etched rather than drawn.

---

## 5. Components

### Buttons (The "Seal")
*   **Primary:** Background `#C9922A`, text `#FFFFFF`, radius `sm` (0.125rem). A sharp corner feels more institutional than a rounded one.
*   **Secondary:** Ghost style. Transparent background, 2px border in `#0A1628`, text `#0A1628`.
*   **States:** On hover, primary buttons should shift 10% darker. No "glow" effects.

### Cards (The "Dossier")
*   **Institutional Card:** Background `surface-container-lowest`, `2px` gold border on the left edge only. No dividers. Use `spacing-6` for internal padding to ensure data isn't "choked."
*   **Charcoal Card:** For dark-mode sections (Industry Partners), use `#1E2A3A`. Pair with gold typography for a premium "Black-Tie" look.

### Input Fields
*   **Surface:** `#FFFFFF` or `surface-container-lowest`.
*   **Border:** Use a 1px `outline-variant` at 20% opacity. Upon focus, transition the bottom border only to 2px `#C9922A`.

### Lists & Tables
*   **Forbid Divider Lines:** Use alternating row colors (`surface` and `surface-container-low`) or 1.5rem of vertical white space to separate list items. This keeps the interface looking like a clean academic ledger rather than a spreadsheet.

---

## 6. Do's and Don'ts

### Do:
*   **Use Intentional Asymmetry:** Align a `headline-lg` to the left but offset the `body-lg` paragraph to a 6-column width on the right.
*   **Embrace the "Warmth":** Ensure the `#F5F0E8` background is the dominant color for information-heavy pages to prevent eye strain.
*   **Tighten the Leading:** For DM Serif Display, use a slightly tighter line-height (e.g., 1.1) to make the large headings feel "locked" and powerful.

### Don't:
*   **No Generic Gradients:** Never use a standard "Top-to-Bottom" gradient. Use solid colors or very subtle "Radial Spotlight" gradients.
*   **No Purple/Inter/Roboto:** These are the marks of a generic SaaS tool. We are building a legacy institution.
*   **No 100% Black:** Use `on-primary-fixed` (#101C2E) for text. It’s softer and deeper than pure black.
*   **No Crowding:** If a section feels "busy," increase the vertical spacing to the next token in the scale. Institutional prestige is defined by the luxury of space.