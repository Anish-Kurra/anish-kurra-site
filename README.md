# anish-kurra-site

Personal website for Anish Kurra, served at https://anishkurra.com.

Built with [Astro](https://astro.build) as a fully static site and deployed on Vercel (pushes to `main` deploy to production).

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static output in dist/
```

Content lives in `src/pages/index.astro`; shared layout and styles in `src/layouts/Base.astro`.
