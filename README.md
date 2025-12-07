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
- `presentation.html` - Presentation page
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
