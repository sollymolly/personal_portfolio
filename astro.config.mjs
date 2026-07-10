// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Before deploying, set this to your real URL (used for canonical links/sitemaps):
  // site: 'https://yourdomain.com',

  // Keep the built HTML human-readable instead of collapsing it onto single lines.
  compressHTML: false,
});
