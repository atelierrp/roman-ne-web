import { defineConfig } from "astro/config";

// Production is https://roman-ne.com (custom domain on GitHub Pages → served at site root).
// https://astro.build/config
export default defineConfig({
  site: "https://roman-ne.com",
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/home": "/",
    "/current": "/hardcoreyoganidra",
  },
});
