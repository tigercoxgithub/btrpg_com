import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: "https://btrpg.com",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
  vite: {
    build: {
      minify: false,
    },
  },
});
