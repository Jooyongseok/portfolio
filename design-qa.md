# Design QA

## Evidence

- Selected source: `C:\Users\주용석\.codex\generated_images\01a0ff36-9d0a-7722-b2dc-663e8f5f1217\exec-43d613cb-8b23-40a1-9852-9134b8cb13f3.png`
- Desktop implementation: `C:\Users\주용석\OneDrive\바탕 화면\VibeCoding\tmp\portfolio-audit\final-desktop.png`
- Mobile implementation: `C:\Users\주용석\OneDrive\바탕 화면\VibeCoding\tmp\portfolio-audit\final-mobile.png`
- CV implementation: `C:\Users\주용석\OneDrive\바탕 화면\VibeCoding\tmp\portfolio-audit\final-cv-html.png`
- Side-by-side comparison: `C:\Users\주용석\OneDrive\바탕 화면\VibeCoding\tmp\portfolio-audit\design-comparison-final.png`

## Test state

- Source image: 1488 × 1059
- Desktop viewport: 1440 × 1024, initial route, dark-navy theme
- Mobile viewport: 360 × 900, initial route, responsive top identity band
- CV: English, two explicit A4 pages

## Comparison history

1. The first desktop render had excessive vertical space inside the hero grid. The row gap was removed.
2. The mobile display heading clipped visually. Responsive line groups were introduced and the 360px scroll width was verified.
3. The desktop heading wrapped to three lines instead of the source's two. The type scale and line grouping were adjusted.
4. The initial CV layout broke the second experience grid. It was replaced by two explicit A4 pages generated from the shared portfolio data.

## Final findings

- P0: none
- P1: none
- P2: none
- P3: the implementation uses system-available serif and sans-serif fallbacks, so exact glyph metrics vary slightly from the generated concept.
- Browser console: clean
- Horizontal overflow: none at 1440px and 360px
- Selected design structure: matched — navy identity rail, research-interest block, editorial content column, and Problem / Contribution / Result evidence rows

Final result: `passed`
