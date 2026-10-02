# anish-kurra-site

Personal website for Anish Kurra, served at https://anishkurra.com.

Plain static HTML with no JavaScript framework and no build step. Vercel serves the repo root and deploys every push to `main`.

- `index.html`, `experience.html`, `honors.html`, `skills.html`, `contact.html`: one file per page, served at `/`, `/experience`, `/honors`, `/skills` and `/contact` (`cleanUrls` in `vercel.json`). Each page carries its own title, meta description, canonical URL and JSON-LD.
- `404.html`: the not-found page (marked `noindex`).
- `assets/site.css`: fonts and shared styles, including the phone layout.
- `assets/contact.js`: builds the "Open in email" link on the contact page.
- `sitemap.xml` and `robots.txt`: update `sitemap.xml` when you add a page.

The nav and footer are repeated in every page, so change them in all six files.

## Security headers

`vercel.json` sets CSP, HSTS, and the other security headers for every path. The CSP allows scripts only from the site itself, so keep JavaScript in files under `assets/` rather than inline.
