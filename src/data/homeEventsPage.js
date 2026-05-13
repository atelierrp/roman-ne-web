/**
 * Homepage “HCYN events” list. Each row:
 * - `line` — display text (e.g. "13 June 2026 — Zurich")
 * - `href` — optional; omit or empty string for plain text (no link)
 * - `external` — when true, link opens in a new tab (use for off-site URLs)
 *
 * `heroImage` — hero below the list (`RevealImage`; sizing in global.css).
 */
export const homeEventsPage = {
  title: "Roman Ne",
  description:
    "HCYN sessions and events — Roman Ne, sound, attention, spatial situations.",
  heading: "HCYN sessions",
  heroImage: {
    src: "/images/hcyn3-high.jpg",
    alt: "Hardcore yoga nidra — session",
  },
  upcoming: [
    { line: "July 2026 — Bangkok" },
    { line: "6 - 20 June 2026 — Zurich", href: "/hcyn" },
    { line: "29 May 2026 — Yerevan", href: "/hcyn-yerevan" },
  ],
  past: [
    { line: "20 December 2025 — Chiang Mai" },
    { line: "12 December 2025 — CMDW" },
    { line: "16 May 2025 — Laax" },
  ],
};
