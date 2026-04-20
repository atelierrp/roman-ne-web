/**
 * Bio page — two-column layout (see bio.astro):
 * blocks[0] intro (left, top), blocks[1] image (left, under intro),
 * blocks[2…] aside (right column, top-aligned with intro; spans beside image).
 */
export const bioPage = {
  title: "Roman Ne — Bio",
  description:
    "Roman Ne works with sound, attention, and spatial situations — bio and background.",
  blocks: [
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "Roman Ne works with sound, attention, and spatial situations.",
        {
          segments: [
            "He created Adjustments to Nothing, and develops ",
            {
              href: "/hardcoreyoganidra",
              label: "Hardcore Yoga Nidra",
            },
            " (",
            {
              href: "/hardcoreyoganidra",
              label: "HCYN",
              variant: "plain",
            },
            "). ",
            "His work includes collaborations with Jesper Alvaer and Isabela Grosseová",
            {
              href: "/collaboration-igja",
              label: "(IGJA)",
            },
            ".",
          ],
        },
        "Based in Zurich, working between Europe and Asia.",
      ],
    },
    {
      type: "imageRow",
      images: [
        {
          src: "/images/roman-ne.jpg",
          alt: "Atelier Zurich",
          orientation: "vertical",
        },
      ],
    },
    {
      type: "divider",
      kind: "title",
      lines: ["2026"],
    },
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "Adjustments to Nothing",
        "CAS Arts and International Cooperation, ZHdK (ongoing)",
      ],
    },
    {
      type: "divider",
      kind: "title",
      lines: ["2025"],
    },
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "HCYN: Black Square, Chiang Mai",
        "HCYN: HAAN Hall, Design Week Chiang Mai",
        "Studio88 Residency, Doi Saket",
        "Skopje / Delay and Recognition (film)",
        "Zuitzerland Network State Residency, Laax",
      ],
    },
    // {
    //   type: "divider",
    //   kind: "title",
    //   lines: ["2024"],
    // },
    // {
    //   type: "textBlock",
    //   kind: "text",
    //   lines: [
    //     "No Feeling is Final, National Gallery Prague",
    //     "(with J. Alvaer and I. Grosseová)",
    //   ],
    // },
    {
      type: "textBlock",
      kind: "text",
      links: [{ label: "FULL CV", href: "/cv" }],
    },
  ],
};
