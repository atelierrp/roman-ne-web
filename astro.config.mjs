import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Production is https://roman-ne.com (custom domain on GitHub Pages → served at site root).
// https://astro.build/config
export default defineConfig({
  site: "https://roman-ne.com",
  output: "static",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/hcyn-proposal"),
    }),
  ],
  redirects: {
    "/home": "/",
    "/current": "/hardcoreyoganidra",
  },
});
