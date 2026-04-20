export const works = [
  {
    id: "adjustments",
    title: "Adjustments to Nothing",
    years: "2024 - 2026",
    links: [
      {
        type: "subpage",
        label: "detail",
        slug: "adjustments-to-nothing",
      },
    ],
  },
  {
    id: "igja",
    title: "Collaborations with J. Alvaer & I. Grosseová",
    years: "2014 - ongoing",
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
