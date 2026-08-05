# Xlectrical NEC — Installable Web App (PWA)

This `web/` folder is the **installable Progressive Web App**. Once it's hosted
on an HTTPS URL, your technicians open the link on their phone or tablet and can
**"Add to Home Screen"** — it then opens like a native app and works **offline**
in the field.

## What's in here
- `index.html` — the whole app (self-contained)
- `manifest.webmanifest` — app name, icons, standalone display
- `service-worker.js` — offline caching (cache-first)
- `icons/` — app icons (192, 512, maskable, apple-touch)

> A PWA must be served over **HTTPS** (or `localhost`) — it cannot be installed
> from the Claude preview/Artifact link, which is sandboxed. Host this folder on
> any static host and you're done.

## Fastest way to launch (Netlify Drop — free, ~1 min)
1. Go to **https://app.netlify.com/drop**
2. Drag this entire **`web`** folder onto the page.
3. You instantly get an HTTPS URL (e.g. `https://xlectrical-nec.netlify.app`).
   Create a free account to keep it permanent and rename it.
4. Open that URL on a phone → browser menu → **Add to Home Screen / Install**.

## Other hosts (any static host works)
- **Cloudflare Pages / Vercel** — drag-drop or connect a repo.
- **GitHub Pages** — put these files in a repo, enable Pages (works from a
  subpath because all links are relative).
- **Your own web server** — upload the contents of `web/` to a folder served
  over HTTPS.

## Rebuilding after content changes
The app is generated from the data in `../server/src/data/`. After editing it:

```bash
python3 standalone/build.py
```

That rewrites `web/index.html` (and the standalone/artifact copies). Re-upload
`web/` to your host. Bump the cache name in `service-worker.js`
(`xlectrical-nec-v1` → `-v2`) when you want clients to force-refresh.
