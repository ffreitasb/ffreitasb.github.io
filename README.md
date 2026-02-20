# ffreitasb.github.io

Personal portfolio site for **Felipe Freitas** — Tech Lead, Revenue Architect & LLM Specialist.

**Live:** [ffreitasb.github.io](https://ffreitasb.github.io)

---

## About

The professional portfolio — the link for CVs, LinkedIn, and client correspondence. Built as an "Anti-Portfolio": clinical, controlled, intentionally uncomfortable. Like an internal document that shouldn't be public.

Part of a two-site ecosystem:

| Site | Energy | Audience |
|------|--------|----------|
| **ffreitasb.github.io** | Composed, layered depth | Recruiters, CTOs, clients |
| **[ffreitasb.cc](https://ffreitasb.cc)** | Tactical TUI, easter eggs | Devs, hackers, curious people |

## Stack

- **Vanilla HTML/CSS/JS** — no frameworks, no build tools, no bundlers
- **Static hosting** on GitHub Pages
- **Zero npm dependencies** — only Google Fonts CDN
- **Target load time:** < 400ms

## Design

**Direction C: "O Anti-Portfolio"**

- **Background:** `#EDECEA` (cool off-white, institutional)
- **Accent:** `#8B1A2B` (oxblood — dark red, almost brown)
- **Display:** Instrument Sans
- **Body:** Inter
- **Mono:** IBM Plex Mono
- **Signature:** Tahoma (meta-info, dates, labels, footer)

## Features

- Per-letter blur-in hero animation
- Custom cursor (oxblood dot + ring)
- 3D tilt on project cards
- Dual-speed marquee skill ticker
- Category color-coding (AI / Hardware / Finance / Infra / Business)
- Typing animation with glitch messages
- Hover-reveal one-liners on project cards
- Animated stat counters
- Scroll progress indicator
- Live clock (UTC-3)
- Respects `prefers-reduced-motion`

## Two-Layer Architecture

**Layer 1 (8 seconds):** Professional, readable, fast. Shows immediate competence with subtle "something's off" signals — Gem codenames in the hero, unexpected data points, oxblood accent.

**Layer 2 (for the curious):** HTML source code comments, console.log easter egg, hover-reveal quips on project cards. Rewards those who inspect.

## License

All rights reserved. This is a personal portfolio — not a template.
