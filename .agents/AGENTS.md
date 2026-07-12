# Eric Anthony — Personal Portfolio Website

## Project Overview
This is a static personal portfolio/website for **Eric Anthony**, a Senior Software Engineer specializing in backend development. The site is designed to attract recruiters and clients for both freelance and full-time opportunities.

## Tech Stack
- **HTML5** — Semantic structure with SEO meta tags and Open Graph
- **Vanilla CSS** — Custom design system with CSS custom properties, glassmorphism, animations
- **Vanilla JavaScript** — No frameworks for app logic; script.js is an IIFE of isolated init systems
- **GSAP 3.13 + ScrollTrigger + SplitText + ScrambleTextPlugin** — self-hosted in `vendor/`, drives all scroll choreography and text reveals
- **Native scrolling** — Lenis was tried and removed (Eric found virtual scrolling laggy); anchor links use `window.scrollTo({behavior:'smooth'})`. Don't reintroduce scroll hijacking
- **WebGL (raw, no three.js)** — hero aurora fragment shader (`initHeroAurora`), CSS-orb fallback when unavailable
- **Canvas 2D** — interactive hero node-mesh with traveling packets (`initHeroMesh`)
- **PWA** — Full Progressive Web App with manifest.json and service-worker.js (network-first strategy)
- **Lottie** — lottie-player for hero/section accent animations
- **Web3Forms** — Contact form email delivery (requires access key setup)

### Build steps after editing script.js
1. `npx terser script.js -c -m -o script.min.js` (index.html loads script.min.js)
2. Bump `CACHE_NAME` in service-worker.js so returning visitors get the new bundle

### Animation architecture rules
- NEVER put `scroll-behavior: smooth` back on `html`: it turns load-time #hash/scroll-restoration jumps into slow glides that ScrollTrigger's on-load refresh interrupts mid-flight (page strands near the top). Anchor/back-to-top pass `behavior:'smooth'` explicitly in JS instead
- Refresh always restarts at the top: the inline head script sets `history.scrollRestoration = 'manual'` because browser restoration races reveal/ScrollTrigger setup and left mid-page content blank (Eric chose this fix). Deep links (#section) still navigate, handled by `restoreMidPageLoad()`, which fast-forwards animation-linked triggers born past their start and force-reveals stragglers after `ScrollTrigger.refresh()`; callback-based systems (odometer counters, back-to-top) each do their own born-visible check. Any new reveal/trigger must handle the #hash-load case
- The snap assist (`initSnapAssist`) stays disarmed until initial scrolling settles, and any programmatic scroll must call `markProgrammaticScroll()` or the assist will hijack it
- Scrubbed effects that must be *seen* to finish (e.g. the experience timeline) need end points at positions where scroll-snap allows resting — `end: 'bottom bottom'`, not `'bottom 75%'`
- All copy is sacred — animations must never add/remove/alter visible words
- Content hiding is gated behind the `html.js` class (added by an inline head script with a 2.5s boot-guard that removes it if the bundle fails) — crawlers/no-JS always see everything
- `prefers-reduced-motion` skips preloader, canvases, Lenis, and all GSAP motion (checked in JS + targeted CSS overrides)
- Touch devices: no custom cursor/magnetic/tilt/Lenis; scroll reveals and canvases still run at reduced density
- Any element GSAP animates needs `transition-property` excluding `transform` AND `opacity` (see the override block in styles.css). A CSS transition on a GSAP-tweened property both drags the tween and can corrupt `gsap.from()` end-values (mid-transition computed styles get recorded on ScrollTrigger refresh — this once left the About highlight cards invisible)
- Prefer `gsap.set(...) + gsap.to(...)` with explicit values over `gsap.from()` for reveals — explicit end values are immune to computed-style corruption
- Use `clearProps` when a reveal's inline styles would permanently override a CSS `:hover` transform (e.g. skills tags)

## File Structure
```
/Users/ericanthony/Projects/ericanthony/
├── index.html          # Main HTML — all sections in single page
├── styles.css          # Complete stylesheet with responsive breakpoints
├── script.js           # All interactivity, animations, PWA registration
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline-capable service worker
├── AGENTS.md           # This file
├── animations/
│   ├── hero-coding.json        # Hero section: animated terminal with typing code lines
│   ├── skills-network.json     # Skills section: orbiting network nodes constellation
│   ├── experience-rocket.json  # Experience section: rocket with flame trail
│   └── contact-envelope.json   # Contact section: animated envelope with letter
└── icons/
    ├── icon-72x72.svg
    ├── icon-96x96.svg
    ├── icon-128x128.svg
    ├── icon-144x144.svg
    ├── icon-152x152.svg
    ├── icon-192x192.svg
    ├── icon-384x384.svg
    └── icon-512x512.svg
```

## Design System

### Color Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0a0a0f` | Main background |
| `--bg-secondary` | `#111118` | Alternate sections |
| `--bg-tertiary` | `#1a1a24` | Deeper elements |
| `--accent-primary` | `#6c5ce7` | Primary purple |
| `--accent-secondary` | `#a29bfe` | Lighter purple |
| `--text-primary` | `#f0f0f5` | Headings |
| `--text-secondary` | `#8888a0` | Body text |
| `--success` | `#00b894` | Active/available indicators |

### Typography
- **Primary**: Inter (Google Fonts) — all UI text
- **Monospace**: JetBrains Mono — labels, dates, code-like elements

### Responsive Breakpoints
| Breakpoint | Target |
|------------|--------|
| ≤1024px | Tablet landscape |
| ≤900px | Tablet portrait |
| ≤768px | Mobile (hamburger nav) |
| ≤480px | Small mobile |
| ≤360px | Very small devices |
| max-height: 500px + landscape | Landscape mobile |

## Page Sections
1. **Hero** — Name, typed title animation, CTA buttons, stats counters, Lottie animation
2. **About** (01) — Bio + 3 highlight cards (Performance, Full-Stack, Leadership)
3. **Skills** (02) — 5 categories: Languages, Frameworks, Databases, Cloud, Specializations
4. **Experience** (03) — Timeline: GoTo/GoPay → Noice → 1Engage → Ajaib → Halodoc → PT Inovatif
5. **Portfolio** (04) — 12 project cards including: The Luxe Week, 1Engage, Niosoapp, Splitoff, Socialbread, Blanjaseru, Edodon, Optics POS, GoPay Insurance, Noice, Halodoc, Ajaib
6. **Education** (05) — Universitas Tarumanagara, Purwadhika, SMK Immanuel
7. **Contact** (06) — Info panel + Web3Forms contact form with mailto fallback
8. **Footer** — Logo + copyright

## Contact Form Setup
The contact form uses **Web3Forms** (free tier). To activate:
1. Go to https://web3forms.com
2. Enter email: `ericanthonywu89@gmail.com`
3. Check email for access key
4. Replace `YOUR_WEB3FORMS_KEY` in `index.html` (hidden input field in the contact form)

**Fallback**: If the key is not set, the form falls back to `mailto:` which opens the user's email client.

## Key Features
- **Preloader** — `<EA />` + progress bar, once per session, curtain-wipe into hero intro
- **Hero intro timeline** — SplitText char-cascade title (per-char gradient preserved via `preserveNameGradient`), staggered badge/desc/buttons/stats
- **WebGL aurora + node mesh** — cursor-reactive hero background; click/tap fires packets between nodes plus an expanding "broadcast" wave that ignites nodes; ambient wave every ~8s
- **Custom cursor** — dot + lagging ring, morphs over interactive elements (fine pointer only)
- **Cursor constellation trail** — site-wide canvas (`initCursorTrail`, screen-blended, z 1300); cursor movement leaves linked fading nodes
- **Hero title ripple** — post-intro, hovering the h1 lifts characters in a gaussian wave (`enableTitleRipple`; char masks released after intro)
- **Rolling-text hover** — hero buttons roll letters up on hover (`initRollingLinks` builds duplicate spans, aria-labels preserve a11y). Nav links excluded at Eric's request
- **Energy border** — featured portfolio cards get a rotating conic-gradient ring on hover (CSS `@property --ea-angle`). (A company-name scramble-on-hover was tried and removed at Eric's request — don't reintroduce hover scrambles on content text; the section-label scramble on scroll reveal stays)
- **Section title parallax** — titles drift ±28px against scroll for depth (velocity-skew was tried and removed — Eric dislikes scroll-feel modifiers, same reason Lenis went)
- **Odometer stats** — hero counters are rolling digit columns (`buildOdometer`), aria-labels carry the real values
- **Hero title proximity glow** — the char ripple also casts a cursor-following text-shadow glow
- **Hero Lottie tilt** — the terminal leans toward the cursor (desktop)
- **Gyroscope parallax** — hero background shifts with device tilt on Android (iOS skipped: permission prompt not worth it)
- **Smart nav** — header hides scrolling down past 400px, returns scrolling up; never hides with the drawer open
- **Timeline dot ignite** — hovering an experience card lights its timeline dot (CSS only)
- **Back-to-top** — injected node-styled button, appears after 600px
- **Konami code** — ↑↑↓↓←→←→BA triggers a 4s mesh "system overload" (packet storm + waves + burst)
- **Footer reveal** — via the catch-all batch; its start threshold must stay near 'top 98%' or bottom-hugging elements never trigger
- **Section snap** — native CSS `scroll-snap-type: y mandatory` on `html` with `scroll-snap-align: start; scroll-margin-top: 60px` per `section[id]` and `scroll-snap-align: end` on `.footer` (without it the footer is unreachable). Bidirectional, gesture-integrated, works mid-scroll. Explicitly requested by Eric ("less scrolling to move between sections") after a JS debounced version felt wrong — a JS re-implementation was written and then replaced by this; don't bring the JS one back. Anchor links use `scrollIntoView` so they land on the same snap geometry. Tall sections still scroll freely inside (per spec). If mandatory ever feels too aggressive, the one-word fallback is `proximity`
- **Magnetic elements** — buttons, nav links, contact rows attract toward cursor
- **Tilt + spotlight cards** — portfolio/about/education/skills cards tilt in 3D with pointer-tracked glow
- **Scroll choreography** — ScrollTrigger reveals per section: scramble-in labels, masked title lines, skills tag pops, education flip-ups, About paragraphs scrub word-by-word
- **Experience timeline** — progress line draws on scroll with a glowing packet riding it; dots ignite as passed
- **Nav** — scroll-spy + sliding magic-line indicator (desktop), staggered drawer links (mobile)
- **Scroll progress bar** — gradient bar at viewport top
- **Counter animation** — Stats count up with eased cubic animation
- **Typed text effect** — Hero subtitle cycles through roles
- **Contact form** — ripple on submit, packet burst on success; Web3Forms + mailto fallback
- **Mobile nav** — Hamburger menu with slide-in drawer
- **Experience accordion** — Cards collapse on mobile, expanded on desktop
- **PWA** — Installable, offline-capable, themed splash screen (vendor libs precached)
- **Lottie** — Self-hosted JSON animations via `lottie-player` in Hero (code terminal), Skills (network nodes), Experience (rocket), and Contact (envelope) sections

## Personal Information
- **Name**: Eric Anthony
- **Email**: ericanthonywu89@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/ericanthonywu/
- **DO NOT** display WhatsApp number on the website

## Content Guidelines
- **Tone**: Professional but approachable, confident without being arrogant
- **Focus**: Backend engineering expertise with full-stack capability
- **Goal**: Attract freelance clients and full-time recruiters
- **Keywords**: Scalable, production-ready, clean architecture, performance optimization
- **Experience**: 6+ years, 10+ projects, 5+ companies

## Deployment Notes
- Static site — can deploy to Vercel, Netlify, GitHub Pages, or any static host
- Service worker requires HTTPS in production
- For local development: `python3 -m http.server 8080` or any static server
- Manifest paths assume root deployment (all paths start with `/`)
