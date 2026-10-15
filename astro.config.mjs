import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/** Open http(s) markdown links in a new tab (e.g. CAS research → ZHdK). */
function rehypeExternalLinks() {
  return (tree) => {
    const walk = (node) => {
      if (node?.type === "element" && node.tagName === "a") {
        const href = node.properties?.href;
        if (typeof href === "string" && /^https?:\/\//i.test(href)) {
          node.properties.target = "_blank";
          node.properties.rel = ["noopener", "noreferrer"];
        }
      }
      for (const child of node?.children ?? []) walk(child);
    };
    walk(tree);
  };
}

// Production is https://roman-ne.com (custom domain on GitHub Pages → served at site root).
// https://astro.build/config
export default defineConfig({
  site: "https://roman-ne.com",
  output: "static",
  trailingSlash: "never",
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/hcyn-proposal") &&
        !page.includes("/cas-research"),
    }),
  ],
  redirects: {
    "/home": "/",
    "/current": "/hardcoreyoganidra",
  },
});
