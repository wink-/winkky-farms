import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://winkkyfarms.com/',
  // Hugo's `public/` folder is stale build output from the previous stack and
  // Hugo's `static/` holds CMS files for the Hugo workflow. Neither should ship
  // in the Astro build, so the Astro copy-dir is a fresh, dedicated folder.
  publicDir: './public-assets',
  // The repo's legacy CommonJS `postcss.config.js` (from the Hugo/Ananke CSS
  // pipeline) breaks Vite under "type": "module". Declare an inline PostCSS
  // config so Vite never loads that file; the Astro site needs no plugins.
  vite: {
    css: { postcss: { plugins: [] } },
  },
});
