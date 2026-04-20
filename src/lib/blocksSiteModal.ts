/** Whether a block list needs the shared `<SiteMediaModal />` (modal block or divider modal link). */

export function linkIsModal(link: { type?: string }) {
  return link?.type === "modal";
}

export function blockUsesSiteMediaModal(block: {
  type?: string;
  links?: { type?: string }[];
}) {
  if (block.type === "modal") return true;
  if (block.type === "divider" || block.type === "textBlock") {
    return (block.links ?? []).some(linkIsModal);
  }
  return false;
}

export function blocksUseSiteMediaModal(blocks: unknown[]) {
  return blocks.some((block) =>
    blockUsesSiteMediaModal(block as Parameters<typeof blockUsesSiteMediaModal>[0]),
  );
}
