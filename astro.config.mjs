import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const { SECRET_STORYBLOK } = loadEnv(import.meta.env.MODE, process.cwd(), '');

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [
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
        config: 'storyblok/Config',
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
        hero: 'storyblok/Hero',
        services: 'storyblok/Services',
        skillSet: 'storyblok/SkillSet',
        getInTouch: 'storyblok/GetInTouch',
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
