# Karne Frontend

Professional e-learning platform for government officials, civil servants, and public sector professionals.

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Build CSS for production:

```bash
npm run build-css
```

3. Watch CSS changes during development:

```bash
npm run watch-css
```

## Production Build

Before deploying to production, make sure to:

1. Build the CSS:

```bash
npm run build-css
```

2. The built CSS file will be in `dist/output.css` and is already linked in `index.html`

## Project Structure

- `index.html` - Main landing page
- `script.js` - JavaScript functionality
- `styles.css` - Additional custom styles
- `src/input.css` - Tailwind CSS source file
- `dist/output.css` - Built Tailwind CSS (generated)
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Technologies

- Tailwind CSS (via PostCSS)
- Vanilla JavaScript
- EmailJS for contact form
- Cloudflare Turnstile for bot protection

## Pre-deployment Checklist

Before pushing to production (`karne.app`), make sure these are in place:

### 1. Required image assets (referenced in `index.html`, currently missing)

Drop these files at the document root. The HTML, JSON-LD, OG/Twitter metadata, and webmanifest already reference them:

| File | Size | Purpose |
| --- | --- | --- |
| `og-image.png` | 1200 × 630 | Social-share preview (LinkedIn, X, WhatsApp, Slack). Use brand colors + Karne logo + tagline. |
| `favicon-32x32.png` | 32 × 32 | Browser tab icon (standard). |
| `favicon-16x16.png` | 16 × 16 | Browser tab icon (compact). |
| `apple-touch-icon.png` | 180 × 180 | iOS home-screen icon (no transparency — iOS adds its own corners). |
| `site.webmanifest` | (JSON) | PWA manifest. Minimum template below. |

Minimum `site.webmanifest` template:

```json
{
  "name": "Karne",
  "short_name": "Karne",
  "description": "Yapay Zeka Destekli Modern Öğrenme Deneyimi Platformu",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d9488",
  "icons": [
    { "src": "/favicon-32x32.png",  "sizes": "32x32",  "type": "image/png" },
    { "src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" },
    { "src": "/logos/karne-logo-optimized.svg", "sizes": "any", "type": "image/svg+xml" }
  ]
}
```

Tip: easiest way to generate the favicon set + apple-touch-icon is to upload the existing `logos/karne-logo-optimized.svg` to https://realfavicongenerator.net and drop the output here.

### 2. Server configuration

This repo ships with `.htaccess` (Apache) and `nginx.conf.example` (Nginx). They handle:
- 301 redirect for legacy `/use-cases/uyum-egitimleri` → `/use-cases/stk-sivil-toplum`
- Extensionless URLs (`/features/oyunlastirma` serves `features/oyunlastirma.html`)
- Strip `.html` from incoming URLs (canonical-safe)
- Force HTTPS + non-www
- Security headers (CSP, HSTS, X-Frame-Options)
- Gzip + cache headers

Verify before going live: `curl -I https://karne.app/features/oyunlastirma` → 200, `curl -I https://karne.app/features/oyunlastirma.html` → 301.

### 3. Other notes

- `dist/output.css` must be rebuilt after any Tailwind class changes — run `npm run build-css`.
- The contact form uses EmailJS (no server endpoint). Form has `onsubmit="event.preventDefault()"` so it won't post to a nonexistent endpoint if JS fails.
- `script.js` ships ~300 KB mostly due to 4-language translation tables — consider splitting per-locale lazy-load later.

