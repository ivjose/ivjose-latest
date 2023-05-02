import tailwind from '@astrojs/tailwind';
import { astroImageTools } from 'astro-imagetools';
import { defineConfig } from 'astro/config';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    astroImageTools,
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      // config: { applyBaseStyles: false },
    }),
  ],
});
