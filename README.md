# roman-ne.com

Static artist site built with **[Astro](https://astro.build/)** (`output: "static"`). Each route is **pre-rendered HTML** (good for indexing and link previews). **No TypeScript** in app code (optional `tsconfig` only for editor/Astro tooling).

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Routes

| URL | Source |
|-----|--------|
| `/` | Redirects to `/home` (see `astro.config.mjs` + host rules) |
| `/home` | [`src/pages/home.astro`](src/pages/home.astro) |
| `/current` | Redirects to `/hardcoreyoganidra` |
| `/hardcoreyoganidra` | [`src/pages/hardcoreyoganidra.astro`](src/pages/hardcoreyoganidra.astro) + [`src/data/hardcoreyoganidraPage.js`](src/data/hardcoreyoganidraPage.js) |
| `/:slug` (work detail) | [`src/pages/[slug].astro`](src/pages/[slug].astro) — e.g. `/adjustments-to-nothing`; `getStaticPaths` from [`getSubpageSlugs()`](src/data/works.js). Legacy `/selected-works/*` → 301 to `/*` (see `_redirects` / `vercel.json`). |
| `/bio`, `/contact` | [`src/pages/bio.astro`](src/pages/bio.astro), [`src/pages/contact.astro`](src/pages/contact.astro) |

## Content

- **Works metadata + subpage slugs:** [`src/data/works.js`](src/data/works.js)
- **Current project copy:** [`src/data/current.js`](src/data/current.js)
- **HCYN page blocks + SEO fields:** [`src/data/hardcoreyoganidraPage.js`](src/data/hardcoreyoganidraPage.js)
- **Bio page copy + SEO + image meta:** [`src/content/bio/intro.md`](src/content/bio/intro.md), [`src/content/bio/aside.md`](src/content/bio/aside.md) (collection `bio` in [`src/content.config.ts`](src/content.config.ts))
- **Optional per-slug detail blocks:** [`src/data/workDetailPages.js`](src/data/workDetailPages.js)

## Composable blocks

Tokens live in [`src/styles/global.css`](src/styles/global.css): `--space-unit` scales vertical rhythm; `--block-margin-after-images` (40× unit by default); derived gaps (e.g. divider title = ⅕ of that, header text = ⅛); `--page-padding-inline`, `--hero-contained-max-width`, `--row-image-max-height`, `--image-row-gap`. Horizontal padding is only on [`.page-frame`](src/layouts/BaseLayout.astro); blocks stay flush to that width.

[`src/components/BlockStack.astro`](src/components/BlockStack.astro) maps `block.type` to:

| Type | Component | Notes |
|------|-----------|--------|
| `hero` | [`Hero.astro`](src/components/blocks/Hero.astro) | `variant`, optional `header`, `src` / `alt` / `caption`, optional `aspectRatio` (default `16 / 9`) to reserve space before load. |
| `imageRow` | [`ImageRow.astro`](src/components/blocks/ImageRow.astro) | Optional `header`. `images[]`: `src`, `alt`, optional `orientation` (`vertical` \| `portrait` \| `horizontal`), optional `aspectRatio` override, optional `width` / `height` (intrinsic hints). Defaults: `16 / 9` landscape, `2 / 3` portrait. |
| `textBlock` | [`Divider.astro`](src/components/blocks/Divider.astro) | `lines[]`, optional `links[]`, optional `kind`: `"title"` (default, bottom margin = ⅕ of large block gap) or `"text"` (full `--block-margin-after-images`). |
| `prose` | [`Prose.astro`](src/components/blocks/Prose.astro) | Simple paragraphs (legacy). |

**Legacy aliases** (still supported): `divider` → same as `textBlock`; `imageWide` → hero; `imagePairTall` → two vertical `imageRow` cells; `sectionTitle` → text block lines.

**Responsive:** image rows use one column ≤640px (see `global.css`).

Example page data: [`src/data/hardcoreyoganidraPage.js`](src/data/hardcoreyoganidraPage.js); bio uses markdown under `src/content/bio/` (see above).

Add a new block type: new component under `src/components/blocks/` + one branch in `BlockStack.astro`.

## Layout and SEO

[`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) sets `<title>`, `meta name="description"`, and optional `rel="canonical"` when `site` is set in [`astro.config.mjs`](astro.config.mjs) (currently `https://roman-ne.com` — change if needed).

## Styling

Global structural CSS: [`src/styles/global.css`](src/styles/global.css). Visual design system can replace/extend this later.

## Hosting

- **Netlify:** [`public/_redirects`](public/_redirects) — `/current` → `/hardcoreyoganidra`, `/home` → `/`, `/selected-works/*` → `/:splat` (301). No SPA catch-all.
- **Vercel:** [`vercel.json`](vercel.json) mirrors those redirects; framework preset detects Astro and `dist/`.
