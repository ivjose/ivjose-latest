import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { astroImageTools } from 'astro-imagetools';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const { SECRET_STORYBLOK } = loadEnv(import.meta.env.MODE, process.cwd(), '');

export default defineConfig({
  output: 'server',
  integrations: [
    astroImageTools,
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      // config: { applyBaseStyles: false },
    }),
    storyblok({
      accessToken: SECRET_STORYBLOK,
      apiOptions: {
        region: 'eu',
      },
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        hero: 'storyblok/Hero',
        services: 'storyblok/Services',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
