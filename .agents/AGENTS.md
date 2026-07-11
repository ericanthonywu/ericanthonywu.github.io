# Eric Anthony — Personal Portfolio Website

## Project Overview
This is a static personal portfolio/website for **Eric Anthony**, a Senior Software Engineer specializing in backend development. The site is designed to attract recruiters and clients for both freelance and full-time opportunities.

## Tech Stack
- **HTML5** — Semantic structure with SEO meta tags and Open Graph
- **Vanilla CSS** — Custom design system with CSS custom properties, glassmorphism, animations
- **Vanilla JavaScript** — No frameworks; uses IntersectionObserver, fetch API, requestAnimationFrame
- **PWA** — Full Progressive Web App with manifest.json and service-worker.js (network-first strategy)
- **Lottie** — dotlottie-player for subtle hero animations
- **Web3Forms** — Contact form email delivery (requires access key setup)

## File Structure
```
/Users/ericanthony/Projects/ericanthony/
├── index.html          # Main HTML — all sections in single page
├── styles.css          # Complete stylesheet with responsive breakpoints
├── script.js           # All interactivity, animations, PWA registration
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline-capable service worker
├── AGENTS.md           # This file
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
- **Cursor glow effect** — Follows mouse on desktop, disabled on mobile
- **Scroll animations** — IntersectionObserver-based fade-up with staggered delays
- **Counter animation** — Stats count up with eased cubic animation
- **Typed text effect** — Hero subtitle cycles through roles
- **Parallax orbs** — Decorative background elements move on scroll
- **Mobile nav** — Hamburger menu with slide-in drawer
- **Experience accordion** — Cards collapse on mobile, expanded on desktop
- **PWA** — Installable, offline-capable, themed splash screen
- **Lottie** — Animated coding illustration in hero section

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
