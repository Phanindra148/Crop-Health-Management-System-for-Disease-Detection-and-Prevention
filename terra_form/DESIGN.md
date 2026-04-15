# Design System Strategy: The Digital Greenhouse

## 1. Overview & Creative North Star
This design system moves away from the sterile, "utilitarian" feel of traditional ag-tech. Our Creative North Star is **"Editorial Organicism."** We are treating the agricultural data of 'CropDoc' not as a spreadsheet, but as a prestigious botanical journal. 

To break the "template" look, we utilize **Intentional Asymmetry**. Hero sections should feature off-center imagery, and cards should vary in vertical height to create a rhythmic, masonry-like flow. We replace rigid grids with "breathing room"—generous whitespace that signals premium quality and reduces cognitive load for farmers in high-stress environments.

## 2. Color & Tonal Architecture
The palette is rooted in the earth, but elevated through digital sophistication. We avoid the "flatness" of standard Material Design by using a hierarchy of light and transparency.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts.
*   Use `surface` (#f6fbed) for the main canvas.
*   Use `surface_container_low` (#f1f5e7) for secondary content areas.
*   Use `surface_container_highest` (#dfe4d7) to draw the eye to high-priority interactive zones.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine vellum paper. 
*   **Level 0 (Canvas):** `surface`
*   **Level 1 (Sectioning):** `surface_container_low`
*   **Level 2 (Active Cards):** `surface_container_lowest` (#ffffff) – This creates a "lifted" effect against the sage background without needing a drop shadow.

### Signature Textures (The Glass & Gradient Rule)
To provide "soul," primary actions should not be flat. Use a subtle linear gradient on `primary` buttons, transitioning from `primary` (#0d631b) to `primary_container` (#2e7d32) at a 45-degree angle. For floating navigation or overlays, apply **Glassmorphism**: use `surface` at 70% opacity with a `20px` backdrop blur to allow crop colors to bleed through softly.

## 3. Typography: Editorial Authority
We use a dual-font pairing to balance character with readability.

*   **Display & Headlines (Manrope):** This geometric sans-serif provides a modern, structural feel. Use `display-lg` (3.5rem) for "hero" data points (like soil pH or yield projections) to create a bold, editorial impact.
*   **Titles & Body (Inter):** Inter is our workhorse. Its high x-height ensures legibility in field conditions (bright sunlight). 
*   **Hierarchy Note:** Use `title-lg` (Inter, 1.375rem) for card headers, but keep `label-sm` (Inter, 0.6875rem) in all-caps with 5% letter spacing for "Metadata" (e.g., TIMESTAMP or CROP TYPE) to evoke the feel of a laboratory specimen label.

## 4. Elevation & Depth: Tonal Layering
We reject heavy, artificial shadows in favor of natural light physics.

*   **The Layering Principle:** Avoid `elevation-1` shadows. Instead, place a `surface_container_lowest` (#ffffff) element on top of a `surface_dim` (#d7dcce) background. This "tonal lift" is cleaner and more sophisticated.
*   **Ambient Shadows:** If a floating action button (FAB) or modal requires a shadow, use a large blur (32px) at 6% opacity. The shadow color must be a tinted version of our neutral: `on_surface` (#181d15) rather than pure black.
*   **The "Ghost Border" Fallback:** If a container sits on an identical color background, use a `1px` stroke of `outline_variant` (#bfcaba) at **15% opacity**. It should be felt, not seen.

## 5. Components & Primitive Styling

### Buttons
*   **Primary:** Uses the `xl` (1.5rem) roundedness. Background is the signature Forest Green gradient. Text is `on_primary` (#ffffff).
*   **Secondary:** Earth-toned (`secondary_container` - #fed7ca). No border. This provides a warm, tactile contrast to the greens.
*   **Tertiary:** Transparent background with `primary` text. No box.

### Cards & Lists
*   **The Divider Rule:** Forbid the use of 1px horizontal lines. Separate list items using `16px` of vertical white space or by alternating background tones between `surface_container_low` and `surface_container`.
*   **Corner Radius:** Apply `xl` (1.5rem) to large feature cards and `md` (0.75rem) to smaller selection chips.

### Input Fields
*   **Styling:** Fields should be "filled" style using `surface_container_high` (#e5eadc). 
*   **States:** On focus, the background transitions to `surface_container_lowest` (#ffffff) with a `2px` "Ghost Border" of `primary` (#0d631b) at 20% opacity.

### Specialized 'CropDoc' Components
*   **Health Status Chips:** Use `tertiary_container` (#966300) for "Attention Needed" alerts—the warm gold/brown is less alarming than red but signifies an organic need for care.
*   **The "Specimen Header":** A unique component for crop profiles that uses `display-md` typography overlapping a soft-focus image of the plant, utilizing the `full` roundedness scale for an organic, circular crop.

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., 24px left, 32px right) for headline elements to create a bespoke, high-end feel.
*   **Do** use `tertiary` earth tones for data visualizations (bar charts, line graphs) to complement the greens without competing for primary attention.
*   **Do** utilize `surface_bright` to highlight active "Search" or "Filter" states.

### Don't
*   **Don't** use pure black (#000000) for text. Always use `on_surface` (#181d15) to maintain the organic, soft-contrast aesthetic.
*   **Don't** use sharp 90-degree corners. Everything in nature is rounded; our UI must be too.
*   **Don't** use "Standard Green" (#00FF00). It breaks the trustworthiness and premium nature of the system. Stick strictly to the Forest and Sage tones.