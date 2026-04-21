/** Optional blocks + SEO overrides per work subpage slug */
export const workDetailPages = {
  "adjustments-to-nothing": {
    description: "Adjustments to Nothing",
    blocks: [
      // {
      //   type: "imageRow",
      //   images: [
      //     {
      //       src: "/images/atn2.jpg",
      //       alt: "Studio detail",
      //       orientation: "vertical",
      //     },
      //   ],
      // },
      {
        type: "divider",
        kind: "header",
        lines: [
          "Inner and outer merge, sound moves over.",
          "Design by Anymade Studio Prague",
        ],
      },
    ],
  },
  "collaboration-igja": {
    description: "TBD",
    blocks: [
      // {
      //   type: "prose",
      //   lines: [""],
      // },
      {
        type: "hero",
        // mediaKind: "youtube",
        header: {
          // lines: [
          //   "Collaborations with J. Alvaer & I. Grosseová",
          //   "2014 - ongoing",
          // ],
        },
        variant: "full",
        src: "/images/igja-skopje.jpg",
        // youtubeUrl: "https://www.youtube.com/watch?v=gQwNlzhPPjY",
      },
      // {
      //   type: "hero",
      //   mediaKind: "youtube",
      //   youtubeUrl:
      //     "https://www.youtube.com/watch?v=gQwNlzhPPjY&controls=0&modestbranding=1&controls=0&rel=0",
      // },

      {
        type: "divider",
        kind: "title",
        lines: ["FILM"],
      },
      {
        type: "divider",
        kind: "header",
        // mediaKind: "youtube",
        lines: ["Skopje / Delay and Recognition"],
        links: [
          {
            type: "modal",
            label: "Watch video",
            modalKind: "youtube",
            youtubeUrl: "https://www.youtube.com/watch?v=gQwNlzhPPjY",
          },
        ],
        header: {},
        // variant: "full",
        // src: "/images/igja-skopje.jpg",
        // youtubeUrl: "https://www.youtube.com/watch?v=gQwNlzhPPjY",
      },
      {
        type: "divider",
        kind: "title",
        lines: ["INSTALLATIONS"],
      },
      {
        type: "divider",
        kind: "header",
        lines: [
          "National Gallery Prague",
          "No Feeling is Final",
          "Sound installation",
        ],
      },
      {
        type: "imageRow",
        images: [
          {
            src: "/images/igja3.jpg",
            alt: "Studio detail",
            orientation: "vertical",
          },
          // {
          //   src: "/images/igja4.jpg",
          //   alt: "Studio detail",
          //   orientation: "vertical",
          // },
        ],
      },
      {
        type: "divider",
        kind: "header",
        lines: [
          "Kunstnernes Hus Oslo",
          "Mor, kjære mor, light installation",
          "Light installation",
        ],
      },
      {
        type: "hero",
        variant: "full",
        src: "/images/igja2.jpg",
        alt: "Studio detail",
      },
      {
        type: "divider",
        kind: "title",
        lines: ["OTHER PROJECTS"],
      },
      {
        type: "textBlock",
        kind: "text",
        lines: [
          "Gravity of Artistic Competence",
          "Representing the Nation / Compensation Portraits",
          "Figure and Ground",
        ],
      },
    ],
  },
};
