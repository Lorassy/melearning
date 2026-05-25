#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Karne — production build
# Collects only deploy-ready files into ./build/, ready to
# upload to the server (Apache via .htaccess, Nginx via the
# nginx.conf.example template).
#
# Usage:  ./build.sh
#         (or: npm run build)
# ─────────────────────────────────────────────────────────────

set -euo pipefail

# 1. Locate ourselves so the script works from any CWD
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

OUT="build"

echo "▸ Compiling Tailwind CSS"
npm run --silent build-css

echo "▸ Wiping previous $OUT/"
rm -rf "$OUT"
mkdir -p "$OUT"

echo "▸ Copying production files"

# ── Top-level HTML & assets ─────────────────────────────────
cp index.html              "$OUT/"
cp 404.html                "$OUT/"
cp error.html              "$OUT/"
cp script.js               "$OUT/"
cp styles.css              "$OUT/"
cp .htaccess               "$OUT/"
cp robots.txt              "$OUT/"
cp sitemap.xml             "$OUT/"
cp llms.txt                "$OUT/"

# Optional root assets — copy if they exist (favicons, og-image, manifest)
for asset in og-image.png favicon-32x32.png favicon-16x16.png \
             apple-touch-icon.png site.webmanifest favicon.ico; do
  [ -f "$asset" ] && cp "$asset" "$OUT/"
done

# ── Compiled CSS ────────────────────────────────────────────
mkdir -p "$OUT/dist"
cp dist/output.css         "$OUT/dist/"

# ── Asset folders (recursive) ───────────────────────────────
cp -R logos                "$OUT/"
cp -R screenshots          "$OUT/"
cp -R features             "$OUT/"
cp -R use-cases            "$OUT/"

# ── Server-config reference (not served, just kept alongside) ─
# Comment out the next line if you don't want it in the upload bundle.
cp nginx.conf.example      "$OUT/"

# ── Strip macOS noise ───────────────────────────────────────
find "$OUT" -name ".DS_Store" -delete

# ── Quick summary ───────────────────────────────────────────
total_files=$(find "$OUT" -type f | wc -l | tr -d ' ')
total_size=$(du -sh "$OUT" | cut -f1)

echo ""
echo "✓ Build complete"
echo "  output: $SCRIPT_DIR/$OUT"
echo "  files:  $total_files"
echo "  size:   $total_size"
echo ""
echo "Top-level contents:"
ls -1A "$OUT"
echo ""
echo "▸ Next step: upload the contents of $OUT/ to your web root."
echo "  Apache: .htaccess is included → URL rewrites + 301s + security headers active."
echo "  Nginx:  nginx.conf.example is reference only; merge into your server block."
