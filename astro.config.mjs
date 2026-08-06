import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://wuchuan.xyz",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404") && !page.endsWith("/rss.xml"),
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    plugins: [tailwindcss()],
  },
});
