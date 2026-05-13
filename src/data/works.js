export const works = [
  {
    id: "adjustments",
    title: "Adjustments to Nothing",
    years: "2024 - 2026",
    links: [
      {
        type: "subpage",
        label: "detail",
        slug: "adjustmentstonothing",
      },
    ],
  },
  {
    id: "igja",
    title: "IGJA collaborations",
    years: "Jesper Alvaer & Isabela Grosseová \n 2014 - ongoing",
    links: [
      {
        type: "subpage",
        label: "detail",
        slug: "collaboration-igja",
      },
    ],
  },
  {
    id: "fiordmoss",
    title: "Fiordmoss",
    years: "2008 - 2018",
    links: [
      {
        type: "external",
        label: "listen",
        href: "https://fiordmoss.bandcamp.com/album/kingdom-come",
      },
    ],
  },
];

/**
 * @param {string} slug
 */
export function getWorkBySlug(slug) {
  return works.find((w) =>
    w.links.some((l) => l.type === "subpage" && l.slug === slug),
  );
}

export function getSubpageSlugs() {
  /** @type {string[]} */
  const slugs = [];
  for (const w of works) {
    for (const link of w.links) {
      if (link.type === "subpage" && link.slug) {
        slugs.push(link.slug);
      }
    }
  }
  return [...new Set(slugs)];
}
