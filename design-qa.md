# Archive redesign QA

final result: passed

## Visual target and evidence

- Original direction: the user's attached black-and-white filing-cabinet poster (conversation attachment).
- Source visual truth: `public/images/archive-cabinet.png`, generated with the built-in Image Gen tool using the attached poster.
- Implementation: `outputs/design-qa/home-desktop.png`, browser capture at 930 × 811 CSS pixels.
- Source raster: 1121 × 1403. Compared the full artwork proportionally scaled inside the implementation, excluding the page's horizontal margins. No stretching or artwork cropping.
- Open reading state: `outputs/design-qa/week2-paper.png`.
- Mobile evidence: `outputs/design-qa/home-mobile.png`; viewport override requested 390 × 844, browser reported 433 × 938 CSS pixels because of existing browser zoom. The mobile screenshot backend scales the output differently from the CSS viewport; absolute pixel comparison is limited to desktop. Mobile geometry, overflow, controls, image loading, and dialog behavior were checked in the rendered DOM.

## Comparison

- Typography: generated typewriter lettering is retained within the art, including Silvia Zhang, thesis documentation, and week1–week5. Reading pages use Courier New with 16px body copy and 1.75 line height.
- Layout: the homepage now has stacked staggered folder tabs, a central document, and the large trapezoid drawer front. It is a full raster illustration, not CSS geometry. Supplemental mobile links have 44px minimum touch height.
- Colors: monochrome ink, near-white paper, fine photocopy grain. No colored decorative UI.
- Image quality: artwork is scaled proportionally and loaded successfully. The original five documentation photographs remain unchanged.
- Content: both obsolete index/archive lines are removed. Silvia Zhang is present in the art and semantic heading. Week 1/2 content and the revised checklist remain intact; weeks 3–5 retain empty states.
- Focused check: week label text, clickable label positions, title, author, and drawer handle inspected in the full-resolution art and browser capture together. No additional image crop was necessary.
- Intentional adaptation from reference: exactly five labeled folders and thesis-specific title replace the source poster's unrelated labels and event content. Reading views are functional additions, not present in the source poster.

## Comparison history

1. P2: Tailwind reset placed the native dialog at the upper-left corner. Added explicit margin:auto to both stylesheets.
2. Re-captured the desktop reading state; centered paper, close control, content width, and scroll bounds now pass.
3. Re-captured homepage with no focus state; artwork retains source proportions, labels and lettering, with no additional headings overlaid.

## Interactions checked

- Opened all five folder buttons; correct week content appeared.
- Close button and Escape return to the cabinet and restore focus.
- Week 1 photo and four Week 2 photos loaded.
- Week 2 checklist text is present and unchanged.
- Mobile supplemental week2 button opens the reading view; no horizontal overflow.
- Static GitHub Pages version: week2 open/close, checklist, all six image assets, and removed text checks passed.
- Browser error console: no errors on either local version.

No remaining actionable P0/P1/P2 issues. Mobile screenshot density is a capture limitation documented above; no matching page layout defect was found.
