---
# gstack: design-md-format=spec
name: Lilu & Marci — Toszkán old money
description: Sunlit, calm Tuscan old-money invitation — linen beige, cream cards, sage and olive, gold only as a hairline detail; poster-scale names, very readable body.
colors:
  ground: "#FDFBF7"        # page background (near-white) — the one background
  cream: "#F7EFDB"         # cards, form surface, sun disc
  sand: "#D5C7AC"          # hairlines, chips, quiet fills
  sage: "#8E9B6D"          # transfer board, soft accent fills (ink text on it)
  olive: "#66754C"         # decorative olive (illustration, large display only)
  olive-text: "#4F5C39"    # small olive text, primary buttons (AA on ground and cream)
  dusk: "#5A6843"          # spare dark olive (not used as a surface now)
  text: "#2B2E22"
  text-muted: "#57554A"
  on-dark: "#FFFDF8"       # text on olive (4.8:1)
  on-dark-muted: "#FFFDF8"
  gold: "#A88A4C"          # detail only: the "&", hairlines, the sun ring — never a surface
  error: "#9E4A33"
typography:
  display:
    fontFamily: Instrument Serif
    fontWeight: 400
    fontSize: clamp(5rem, 17vw, 9.6rem)
    letterSpacing: -0.035em
  heading:
    fontFamily: Instrument Serif
    fontWeight: 400
    fontSize: clamp(2.8rem, 7.5vw, 4.8rem)
    letterSpacing: -0.01em
  body:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    lineHeight: 1.65
  label:
    fontFamily: Atkinson Hyperlegible Next
    fontWeight: 700
    fontSize: 15px
    letterSpacing: 0
  mono:
    fontFamily: Atkinson Hyperlegible Mono
    fontWeight: 500
    fontFeature: tnum
rounded:
  sm: 10px
  md: 16px
  lg: 28px
  arch: 999px 999px 28px 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.olive-text}"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
  button-outline:
    borderColor: "{colors.text}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
  card:
    backgroundColor: "{colors.cream}"
    rounded: "{rounded.lg}"
  input:
    backgroundColor: "{colors.cream}"
    borderColor: "{colors.sand}"
    rounded: "{rounded.sm}"
---

# Lilu & Marci — Toszkán old money

## Overview

**Creative North Star:** effortless elegance — a sunny Tuscan-style summer day in Etyek, told with restraint: linen beige, sage and olive, one cream sun that follows the day.
**Product context:** single-page Hungarian wedding invitation for Lilla & Marton (2027. július 10., Etyeki templom → Kálna Mátyás Malom). Guests of every age, mostly on phones from the invite link.
**Mode per surface:** hero = Experience; program, locations, transfers, FAQ = Read; RSVP = Operate.
**Reference:** the bride's palette board (cream, sand beige, sage, olive), minimal.gallery for confidence and whitespace.
**Key characteristics:** one near-white background; huge upright serif names; an arched photo window in the hero only (everywhere else rounded rectangles); a cream sun moving with the scroll; 18px body everywhere.

## Colors

**Strategy:** Fixed palette, no scroll colour shifts. Near-white page; the bride's four colours are the boxes: cream (countdown, chips, location cards, team, form), sand (accommodation), sage (transfer board), olive (RSVP panel). Gold stays a hairline detail.
**Light or dark:** light. Guests read it in daylight on phones; the only dark surface is the olive RSVP panel. Text on sand and sage is ink (olive-text fails 4.5:1 there).
`olive-text` is the interactive colour (buttons, small labels, links). `olive` (#66754C) is the bride's board colour but fails 4.5:1 for small text on cream, so it is used for large display and illustration only. On `sage` and `cream` text is always `text` (ink). Gold never fills an area: the "&" in the names, 1px rules, the sun's ring.

## Typography

Instrument Serif (Google Fonts, latin-ext, weight 400) is the display voice: names, headings, numbers. Always upright, never italic. Atkinson Hyperlegible Next (latin-ext, 400/700), designed for low-vision readers, carries every sentence at 18px / 1.65. Labels are 15px bold sentence case — no tiny letter-spaced capitals. Atkinson Hyperlegible Mono for times on the program and transfer board. Loaded with `next/font/google`.

## Layout

Max width 1200px, 22px side padding on phones, 48px from 900px. Sections breathe (88px phone / 128px desktop). The hero is a poster: names left, arched photo right (stacked on phones). Content of unequal weight gets unequal containers.

## Elevation & Depth

Flat by default. Cards lift 4px with a soft offset shadow on hover (`0 30px 60px -40px`). No glows.

## Shapes

Big soft radii: 28px cards, 16px images, 999px pills for buttons and chips, arch (`999px 999px 28px 28px`) for the hero photo only — a nod to church and mill windows; every other photo is a 16px rounded rectangle.

## Components

daisyUI 5, theme `lilu` (globals.css), shared with /admin: `btn` (primary/outline, rounded-full), `collapse collapse-plus` FAQ accordion, `countdown`, `text-rotate`, `hover-3d` on the hero photo, `hover-gallery` (desktop gallery), `fab` (phone RSVP shortcut), `input`/`select`/`textarea`/`validator` in the RSVP form, `toast` after submit. Public page classes are prefixed `lm-` so they never collide with daisyUI names.

## Do's and Don'ts

- Do keep one page background (`ground`); colour comes as cards and panels.
- Do keep body text ≥18px and labels ≥15px.
- Do use `olive-text` for any small olive text or button fill.
- Don't use gold as a fill, gradient or glow.
- Don't use brick/terracotta surfaces (the couple rejected them).
- Don't use italic display or tracked uppercase micro-labels.
- Don't show the couple's internal schedule (készülődés, buffer): only the main guest-facing points.

## Motion

- **Approach:** expressive but gentle; everything off under `prefers-reduced-motion`.
- **Easing:** cubic-bezier(.22, 1, .36, 1) for enter and move.
- **Duration:** micro 150ms, short 350ms, medium 900ms reveals, long 2.4s branch drawing.
- **The one authored moment:** the cream sun follows the day — rising behind the hero arch, high over the program, setting at the transfers, rising again at the RSVP.
- Also: letter-by-letter name rise, drawn olive branch, gold program line that fills on scroll, parallax inside arches, daisyUI countdown roll and rotating words.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-11-18 | Initial design system created | /design-consultation with Codex + Claude outside voices; HTML previews v1–v5 |
| 2026-11-18 | Brick removed, dress-code section removed, quiz section removed | Couple feedback |
| 2026-11-18 | Near-white page (#FDFBF7), fixed colours; the four board colours as boxes; arch only in the hero | Bride: whiter background, no colour transition, no arches lower down |
| 2026-11-18 | Gold demoted to detail; palette L from the bride's board (cream, sand, sage, olive) on beige | Bride preferred pastel greens, Tuscan old-money mood |
