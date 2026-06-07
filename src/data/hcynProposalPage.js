import { currentProject } from "./current.js";

export const hcynProposalPage = {
  title: "Roman Ne — Hardcore Yoga Nidra (HCYN)",
  description:
    "Proposal and presentation information for Hardcore Yoga Nidra (HCYN).",
  ogTitle: "HCYN — Black Square",
  ogDescription: "Participatory closed-eyes listening session.",
  heading: {
    title: "Hardcore Yoga Nidra",
    description: "Black Square: Proposal & Presentation Information",
  },
  blocks: [
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "\nHardcore Yoga Nidra (HCYN) is an ongoing artistic practice by Roman Ne exploring attention, perception, and shared experience through voice, silence, spatial sound, and listening. Through guided listening sequences, participants are invited to explore the relationship between body, imagination, and environment.",
        "\n",
        "",
        "",
        "Black Square is a 60-minute participatory closed-eyes listening sequence. Participants lie down or sit with eyes closed while voice, low frequencies, silence, and spatial sound gradually shift attention. The work unfolds collectively while leaving space for individual interpretation and experience.",
        "",
        "\n",
        "Language: English",
      ],
    },
    {
      type: "hero",
      mediaKind: "youtube",
      variant: "full",
      youtubeUrl: currentProject.youtubeUrl,
      alt: "Black Square — hardcore yoga nidra",
    },
    {
      type: "divider",
      lines: ["Selected Presentations"],
    },
    {
      type: "textBlock",
      kind: "list",
      lines: [
        "Studio 88 Artist Residency, Chiang Mai, Thailand (2025)",
        "Living Room / Artas Foundation, Yerevan, Armenia (2026), as part of the ZHdK Arts and International Cooperation programme",
        "HCYN Studio, Zurich, Switzerland (2026–ongoing)",
      ],
    },
    {
      type: "hero",
      variant: "full",
      src: "/images/hcyn4.jpg",
      alt: "Hardcore Yoga Nidra presentation, Chiang Mai 2025",
    },
    {
      type: "imageRow",
      images: [
        {
          src: "/images/proposal/hcyn-01.jpg",
          alt: "Hardcore Yoga Nidra presentation, Chiang Mai 2025",
          orientation: "vertical",
        },
        {
          src: "/images/proposal/hcyn-03.jpg",
          alt: "Hardcore Yoga Nidra presentation, Chiang Mai 2025",
          orientation: "vertical",
        },
        {
          src: "/images/proposal/hcyn-05.jpg",
          alt: "Hardcore Yoga Nidra presentation, Chiang Mai 2025",
          orientation: "vertical",
        },
      ],
    },
    {
      type: "divider",
      kind: "header",
      lines: ["Live Listening Format"],
    },
    {
      type: "textBlock",
      kind: "text",
      lines: [
        "Currently presented as a small-group session. The setup is designed for studios, galleries, community spaces and small venues.",
      ],
    },
    {
      type: "hero",
      mediaKind: "youtube",
      variant: "contained",
      orientation: "vertical",
      youtubeUrl: "https://youtube.com/shorts/DAL9C6LonkA?si=8j6WekMoxNtAYGq4",
      alt: "Audio preview — setup for small live session",
    },
    {
      type: "divider",
      kind: "header",
      lines: ["Duration and capacity"],
    },
    {
      type: "textBlock",
      kind: "list",
      lines: [
        "The listening sequence lasts approximately 60 minutes.",
        "The venue should allow approximately 90 minutes for audience arrival, introduction, the listening sequence, and departure.",
        "Setup time is required prior to the event. For morning presentations, access to the space on the previous evening is preferred whenever possible.",
        "Capacity depends on the space and layout.",
        "Depending on the venue and audience demand, multiple sessions may be presented within a single day.",
      ],
    },
    {
      type: "divider",
      kind: "header",
      lines: ["Venue requirements"],
    },
    {
      type: "textBlock",
      kind: "list",
      lines: [
        "Quiet indoor space, or a sheltered outdoor space with limited interruption from external activity.",
        "Direct visual distraction should be minimized. Darkness is not required, though a contained environment with reduced visual stimulation is preferred.",
        "Environmental sounds may become part of the experience. Constant or low-level ambient noise is acceptable, while loud or unpredictable interruptions should be avoided.",
        "Participants are invited to lie on the floor throughout the session. Seating against a wall is possible for those who prefer not to lie down.",
        "If floor mats, carpets, cushions, or other suitable floor surfaces are not available at the venue, participants may be asked to bring their own yoga mat, blanket, or cushion.",
        "Access to power is required.",
        "The artist can provide the complete sound setup. If the venue already has a suitable sound system, particularly one capable of reproducing low frequencies, it may be incorporated into the presentation.",
      ],
    },
    {
      type: "divider",
      kind: "header",
      lines: ["For presentation inquiries:"],
      links: [
        {
          href: "/contact",
          label: "roman-ne.com/contact",
        },
      ],
    },
  ],
};
