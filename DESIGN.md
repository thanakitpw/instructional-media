# Design

> Visual system for the API Integration course site. Register: **product**.
> Direction: modern, energetic, precise — technical-docs feel (Linear / Vercel / Stripe).
> Strategy: **Restrained** (tinted neutrals + one accent ≤ 10% of surface).

## Theme

Light, content-first. A true near-white content surface (chroma ~0, NOT warm/cream) with a
slightly cooler neutral for chrome (sidebar/top). Dark, high-contrast code blocks provide the
"developer" energy. One vivid indigo accent carries actions, current selection, and links only.

Scene sentence: a Thai developer reviewing the course at a desk on a bright laptop screen, or on
a phone between tasks — needs calm, legible reading with confident wayfinding.

## Color (OKLCH)

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `oklch(0.992 0.001 264)` | content background (near-white, faint cool) |
| `--color-surface` | `oklch(0.975 0.004 264)` | sidebar / chrome (cooler neutral layer) |
| `--color-elevated` | `oklch(1 0 0)` | raised panels, code header |
| `--color-border` | `oklch(0.918 0.006 264)` | hairline borders |
| `--color-border-strong` | `oklch(0.86 0.008 264)` | emphasized dividers |
| `--color-ink` | `oklch(0.27 0.024 264)` | body text (≈ slate-900, ≥ 12:1 on bg) |
| `--color-ink-soft` | `oklch(0.42 0.022 264)` | secondary text (still ≥ 4.5:1) |
| `--color-muted` | `oklch(0.55 0.018 264)` | tertiary labels / meta (UI only, ≥ 3:1) |
| `--color-accent` | `oklch(0.55 0.205 274)` | indigo — actions, active, links |
| `--color-accent-hover` | `oklch(0.49 0.215 274)` | accent hover/pressed |
| `--color-accent-soft` | `oklch(0.955 0.028 274)` | active nav bg, accent tints |
| `--color-accent-fg` | `oklch(0.99 0 0)` | text/icon on accent |
| `--color-code-bg` | `oklch(0.205 0.014 264)` | code block surface (dark) |
| semantic note | accent family | informational callout |
| semantic warning | `oklch(0.66 0.16 70)` amber | caution callout |
| semantic key | `oklch(0.6 0.13 165)` teal/emerald | key-point callout |

Rules: accent is never decoration. Callouts use a **full hairline border + faint bg tint + a
leading icon/dot**, never a side stripe. Body never uses `--color-muted`.

## Typography

- **Family:** `Inter` (Latin) + `Noto Sans Thai` (Thai) as one coherent sans via fallback
  (`font-sans: Inter, "Noto Sans Thai", sans-serif`); `JetBrains Mono` for code (`font-mono`).
- **Scale (fixed rem, ratio ≈ 1.2 — product, not fluid):**
  - page h1 `1.75rem` / 700 · section h2 `1.375rem` / 650 · sub-heading h3 `1.0625rem` / 650
  - body `1rem` (mobile) → `1.0625rem` (desktop), 400/450, line-height 1.75 (Thai-friendly)
  - meta / labels `0.8125rem`, 500
- Prose column capped ≈ 70ch. `text-wrap: balance` on headings, `pretty` on paragraphs.
- Numbers in lesson titles (e.g. `3.2`) set in a tabular, slightly accented treatment for wayfinding.

## Components

- **Sidebar:** cooler surface, dense nav. Lesson = group header (collapsible chevron). Active
  sub-section = `accent-soft` bg + accent text + medium weight (no side stripe). Hover = subtle
  surface step. Search input with clear focus ring (accent).
- **Code block:** dark surface with a slim header bar (mono language label left, Copy button
  right — always visible, not hover-only). Rounded `lg`. JetBrains Mono.
- **Callout:** full hairline border in the semantic hue + faint tinted bg + leading dot/icon.
  Variants: note (indigo), warning (amber), key (teal).
- **Flow:** vertical steps as compact pill nodes joined by thin connectors + small accent arrow
  glyphs; not full-width identical cards.
- **Table:** hairline borders, tinted header row, comfortable padding, horizontal scroll on mobile.
- **Home (lesson index):** editorial, NOT a card grid. Big tabular lesson number + lesson title
  as a row; sub-sections as a clean indented link list. Generous vertical rhythm, hairline dividers.
- **Prev/Next & Breadcrumb:** quiet, bordered, accent on hover. Progress = thin accent top bar.
- **States:** every interactive element has hover / focus-visible (accent ring) / active.

## Layout

- App shell: fixed left sidebar (`18rem`) on `lg+`, off-canvas drawer + hamburger below.
- Content: single column, `max-w` ≈ 720px, generous padding; reading-optimized.
- Semantic z-scale: progress(40) > hamburger(30) > sidebar(20) > backdrop(10).

## Motion

- 150–250ms, `ease-out` (no bounce). Hover/active/focus feedback + nav transitions only.
- Content: a single subtle fade/translate-in on route change (≤ 200ms), gated behind an
  always-visible default; full `prefers-reduced-motion: reduce` fallback (instant).
- No orchestrated page-load sequences.
