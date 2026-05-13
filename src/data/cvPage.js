/**
 * Full CV — linked from Bio only; not listed in SiteNav.
 * Uses `cvSection` blocks: header + yearBlocks (see BlockStack + CvSection.astro).
 */
export const cvPage = {
  title: "Roman Ne — CV",
  description:
    "Selected works, exhibitions, residencies, professional experience, and education.",
  blocks: [
    {
      type: "cvSection",
      header: "recent",
      yearBlocks: [
        {
          year: "2026",
          lines: ["Adjustments to Nothing"],
        },
        {
          year: "2025",
          lines: [
            "Hardcore Yoga Nidra — Black Square, Chiang Mai",
            "Hardcore Yoga Nidra — HAAN Hall, Chiang Mai Design Week",
            "Skopje / Delay and Recognition (commissioned film)",
          ],
        },
        {
          year: "2024",
          lines: [
            "No Feeling Is Final — National Gallery Prague",
            "(with Jesper Alvaer & Isabela Grosseová)",
          ],
        },
      ],
    },
    {
      type: "cvSection",
      header: "Exhibitions & performances",
      yearBlocks: [
        {
          year: "2008–2018",
          lines: ["Fiordmoss — performances across Europe"],
        },
        {
          year: "2014",
          lines: [
            "Mor, kjære mor — Kunstnernes Hus, Oslo",
            "(with Jesper Alvaer)",
          ],
        },
        {
          year: "2013",
          lines: ["Sonar Stockholm; Bergen Kunsthall", "(with Boska)"],
        },
        {
          year: "2012",
          lines: ["Exkurs Brno — Kunstraum Düsseldorf (group exhibition)"],
        },
        {
          year: "2010",
          lines: ["Concsepto Grosso — Budapest (group exhibition)"],
        },
        {
          year: "2008",
          lines: [
            "Self-Ignition — Academy of Fine Arts Prague (group exhibition)",
          ],
        },
      ],
    },
    {
      type: "cvSection",
      header: "residencies & recognitions",
      yearBlocks: [
        {
          year: "2026",
          lines: ["ZHdK field trip — Yerevan, Armenia"],
        },
        {
          year: "2025",
          lines: [
            "Studio88 Residency — Chiang Mai, Thailand",
            "Zuitzerland Network State Residency — Laax, Switzerland",
          ],
        },
        {
          year: "2018",
          lines: ["Czech Grammy Anděl Award — Best Electronic Act (Fiordmoss)"],
        },
        {
          year: "2013",
          lines: ["Vinyla Award — Discovery of the Year (Fiordmoss)"],
        },
        {
          year: "2011",
          lines: [
            "Red Bull Music Academy — Madrid (Fiordmoss)",
            "ArtMill Residency — Czechia",
            "Ateliér Banja Luka — Bosnia and Herzegovina",
          ],
        },
      ],
    },
    {
      type: "cvSection",
      header: "professional",
      yearBlocks: [
        {
          year: "2020–2026",
          lines: ["W3F — Research Foundation, Switzerland"],
        },
        {
          year: "2015–2020",
          lines: ["ACUD Macht Neu — Kunsthaus Berlin, Germany"],
        },
        {
          year: "2008–2018",
          lines: ["Fiordmoss — Europewide"],
        },
      ],
    },
    {
      type: "cvSection",
      header: "education",
      yearBlocks: [
        {
          lines: [
            "Faculty of Fine Arts — Multimedia, Video, Performance",
            "Brno, Czechia",
          ],
        },
        {
          lines: [
            "Académie Royale des Beaux-Arts — Art in Public Space",
            "Brussels, Belgium",
          ],
        },
        {
          lines: [
            "ZHdK — CAS Arts and International Cooperation (ongoing)",
            "Zurich, Switzerland",
          ],
        },
      ],
    },
  ],
};
