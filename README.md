# ADA-AutoFix-Test-GitHub

Fresh, self-contained accessibility test app for exercising ADA Tool's
Auto-Fix feature over a real GitHub repo + GitHub Pages site. No build step —
plain static HTML/CSS served directly from `docs/`, so Auto-Fix's source
locator always resolves a violation to exactly one real file and line.

`src/components/*.jsx` are realistic (but inert — not built or served)
component files proving the locator's `.jsx` file-type support has real
markup to search, without any risk of shadowing the live pages' classes.

## Pages

- `docs/index.html` — dashboard, header, nav, product cards
- `docs/profile.html` — profile section, forms
- `docs/contact.html` — contact form

## Seeded violations (8 Tier 1 + 8 Tier 2)

**Tier 1** (deterministic): image-alt, button-name, link-name, label,
html-has-lang, heading-order, color-contrast, svg-img-alt.

**Tier 2** (context-dependent): ancestor-scoped SVG-in-button, nested
`<path>` SVG with `aria-hidden="false"`, multi-level button→span→svg,
`role="checkbox"` missing `aria-required-attr` (intentionally not
auto-fixable), placeholder label nested in fieldset→div, classless button
wrapping a capitalized custom-component icon, the same icon-button
duplicated 4× across header/card/section/footer with distinct classes, and
a heading-order skip nested inside a card component.

See `AUTO_FIX_TEST_MATRIX.md` in the main ADA Tool repo for the full test
matrix and results.
