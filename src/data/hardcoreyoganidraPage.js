import { currentProject } from "./current.js";

/**
 * Composable project page (see BlockStack.astro for block types).
 *
 * Example composition (reference layout):
 * 1. hero — full-width image only (no header)
 * 2. imageRow — small header lines, then 2× portrait images
 * 3. divider — section label ("Selected Realisations")
 * 4. divider — project lines + optional links (type: "modal" for inline video, etc.)
 * 5. hero — full-width documentation image
 */
export const hardcoreyoganidraPage = {
  title: `Roman Ne — ${currentProject.title}`,
  description: currentProject.intro,
  sectionLabel: currentProject.sectionLabel,
  heading: {
    title: "Hardcore Yoga Nidra",
    subtitle: "HCYN",
  },
  blocks: [
    {
      type: "hero",
      // mediaKind: "youtube",
      variant: "full",
      src: "/images/hcyn-bg.jpg",
      alt: "People lying on mats in a dim hall during a Hardcore Yoga Nidra session",
      caption: "Begrüntes Haus, Bangkok 2026",
      // youtubeUrl: "https://youtu.be/eBnWYTcDTuw",
    },
    {
      type: "divider",
      kind: "header",
      lines: [
        "Positioned within a sound field, attention is directed across the body and surrounding space. Internal imagery emerges.",
      ],
    },
    {
      type: "imageRow",
      images: [
        {
          src: "/images/proposal/hcyn-01.jpg",
          alt: "Large hall prepared for a Hardcore Yoga Nidra session",
          orientation: "vertical",
        },
        {
          src: "/images/bs-bg.jpg",
          alt: "Two people lying on mats during a Hardcore Yoga Nidra session",
          orientation: "vertical",
        },
        // { src: "", alt: "Atmospheric space", orientation: "vertical" },
      ],
    },
    {
      type: "divider",
      lines: ["REALISATIONS"],
    },
    {
      type: "divider",
      kind: "header",
      lines: ["Black Square", "Chiang Mai, Thailand 2025"],
    },
    {
      type: "hero",
      mediaKind: "youtube",
      variant: "full",
      youtubeUrl: currentProject.youtubeUrl,
      alt: "Hardcore Yoga Nidra, Black Square, Chiang Mai 2025",
    },
    {
      type: "imageRow",
      header: {
        lines: ["HAAN Hall", "Installation at Chiang Mai Design Week, 2025"],
      },
      images: [
        {
          src: "/images/HCYN-haan2.jpg",
          alt: "Studio detail",
          orientation: "vertical",
        },
        {
          src: "/images/HCYN-haan1.jpg",
          alt: "Studio detail",
          orientation: "vertical",
        },
        // { src: "", alt: "Atmospheric space", orientation: "vertical" },
      ],
    },
    {
      type: "divider",
      lines: ["RESEARCH"],
    },
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "Studio 88 Residency, Chiang Mai",
        "Zuitzerland Network State Residency, Laax",
        "ZHdK CAS, Arts and International Cooperation",
        "artasfoundation, Yerevan, Armenia",
      ],
    },
    {
      type: "divider",
      kind: "header",
      lines: [],
      links: [
        {
          href: "https://hardcoreyoganidra.com",
          label: "hardcoreyoganidra.com",
          external: true,
        },
      ],
    },
  ],
};
