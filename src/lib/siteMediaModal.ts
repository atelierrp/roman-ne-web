/**
 * Full-screen media modal: image, YouTube, HTML5 video, Bandcamp embed, or legacy HTML.
 * Used by block pages (`data-open-site-modal`) and optionally by pages that pass `data-works-json`.
 */

export type ModalPayload = {
  type?: string;
  modalKind?: string;
  imageSrc?: string;
  imageAlt?: string;
  youtubeUrl?: string;
  videoSrc?: string;
  /** Bandcamp EmbeddedPlayer URL only (`https://bandcamp.com/EmbeddedPlayer/...`). */
  bandcampSrc?: string;
  /** Iframe height in px (default 42, Bandcamp “small” bar). */
  bandcampHeightPx?: number;
  bandcampTitle?: string;
  detailHtml?: string;
};

export type WorkRow = {
  id: string;
  links: Array<ModalPayload & { type?: string }>;
};

declare global {
  interface Window {
    /** Cleared when modal opens; set by `SiteNav` delayed close. */
    __romanNeNavCloseTimer?: ReturnType<typeof setTimeout>;
  }
}

function collapseSubpageNavMenu() {
  if (typeof window === "undefined") return;
  const t = window.__romanNeNavCloseTimer;
  if (t != null) {
    window.clearTimeout(t);
    delete window.__romanNeNavCloseTimer;
  }
  document.documentElement.removeAttribute("data-nav-menu-expanded");
  const trigger = document.querySelector(
    ".site-nav-anchor--subpage button.site-nav__category",
  );
  if (trigger instanceof HTMLButtonElement) {
    trigger.setAttribute("aria-expanded", "false");
  }
}

function escapeAttr(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/** Query string for /embed/… (everything except `v`, which is the path id). */
function youtubeEmbedSearchFromUrl(u: URL) {
  const p = new URLSearchParams(u.search);
  p.delete("v");
  const s = p.toString();
  return s ? "?" + s : "";
}

function youtubeEmbedUrl(raw: string) {
  if (!raw || typeof raw !== "string") return "";
  const trimmed = raw.trim();
  try {
    const u = new URL(trimmed, "https://www.youtube.com/");
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (!id) return "";
      const q = youtubeEmbedSearchFromUrl(u);
      return "https://www.youtube.com/embed/" + id + q;
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) return trimmed.split("#")[0];
      const v = u.searchParams.get("v");
      if (v) {
        const q = youtubeEmbedSearchFromUrl(u);
        return "https://www.youtube.com/embed/" + v + q;
      }
      const shorts = u.pathname.match(/^\/shorts\/([^/?#]+)/);
      if (shorts) {
        const q = youtubeEmbedSearchFromUrl(u);
        return "https://www.youtube.com/embed/" + shorts[1] + q;
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

function isProbablyYoutubeUrl(s: string) {
  return /youtu\.be|youtube\.com/i.test(String(s || ""));
}

function isLocalOrFileVideo(src: string) {
  const s = String(src || "").trim();
  if (!s) return false;
  if (s.startsWith("/")) return true;
  return /\.(mp4|webm|ogg|ogv)(\?|#|$)/i.test(s);
}

function isBandcampEmbedUrl(raw: string) {
  const s = String(raw || "").trim();
  if (!s) return false;
  try {
    const u = new URL(s, "https://bandcamp.com/");
    const host = u.hostname.replace(/^www\./, "");
    return host === "bandcamp.com" && u.pathname.startsWith("/EmbeddedPlayer/");
  } catch {
    return false;
  }
}

function bandcampIframeHeightPx(link: ModalPayload) {
  const n = Number(link.bandcampHeightPx);
  if (Number.isFinite(n) && n >= 20 && n <= 2000) return Math.round(n);
  return 42;
}

export function modalBodyHtml(link: ModalPayload) {
  if (link.modalKind === "image") {
    if (link.imageSrc) {
      const src = escapeAttr(link.imageSrc);
      const alt = escapeAttr(link.imageAlt || "");
      return `<figure class="work-modal__figure"><img class="work-modal__img" src="${src}" alt="${alt}" decoding="async" /></figure>`;
    }
    return '<p class="work-modal__placeholder">Image placeholder (no src yet).</p>';
  }
  if (link.modalKind === "youtube" && link.youtubeUrl) {
    const embed = youtubeEmbedUrl(link.youtubeUrl);
    if (embed) {
      const src = escapeAttr(embed);
      return `<iframe class="work-modal__iframe" src="${src}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
    }
    return '<p class="work-modal__placeholder">Invalid YouTube URL.</p>';
  }
  if (link.modalKind === "bandcamp") {
    if (!link.bandcampSrc) {
      return '<p class="work-modal__placeholder">Bandcamp embed (no src yet).</p>';
    }
    if (!isBandcampEmbedUrl(link.bandcampSrc)) {
      return '<p class="work-modal__placeholder">Invalid Bandcamp embed URL.</p>';
    }
    const src = escapeAttr(link.bandcampSrc);
    const h = bandcampIframeHeightPx(link);
    const title = escapeAttr(link.bandcampTitle || "Bandcamp");
    return `<div class="work-modal__bandcamp"><iframe class="work-modal__bandcamp-iframe" src="${src}" title="${title}" style="border:0;width:100%;height:${h}px" loading="lazy"></iframe></div>`;
  }
  if (link.modalKind === "videoFile" && link.videoSrc) {
    const src = escapeAttr(link.videoSrc);
    return `<div class="work-modal__video-wrap"><video class="work-modal__video" controls playsinline preload="metadata" src="${src}"></video></div>`;
  }
  if (link.modalKind === "video" && link.videoSrc) {
    if (isProbablyYoutubeUrl(link.videoSrc)) {
      const embed = youtubeEmbedUrl(link.videoSrc);
      if (embed) {
        const src = escapeAttr(embed);
        return `<iframe class="work-modal__iframe" src="${src}" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
      }
    }
    if (isLocalOrFileVideo(link.videoSrc)) {
      const src = escapeAttr(link.videoSrc);
      return `<div class="work-modal__video-wrap"><video class="work-modal__video" controls playsinline preload="metadata" src="${src}"></video></div>`;
    }
    const src = escapeAttr(link.videoSrc);
    return `<iframe class="work-modal__iframe" src="${src}" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>`;
  }
  if (link.modalKind === "video") {
    return '<p class="work-modal__placeholder">Video placeholder (no src yet).</p>';
  }
  if (link.detailHtml) {
    return `<div class="work-modal__html">${link.detailHtml}</div>`;
  }
  return '<p class="work-modal__placeholder">Detail placeholder.</p>';
}

function pauseModalMedia(body: HTMLElement | null) {
  if (!body) return;
  body.querySelector("video")?.pause();
  const iframe = body.querySelector("iframe");
  if (iframe) iframe.src = "";
}

/** Native `<video>` has no intrinsic size until metadata; hide until then. */
function initNativeModalMedia(body: HTMLElement) {
  for (const wrap of body.querySelectorAll<HTMLElement>(".work-modal__video-wrap")) {
    const video = wrap.querySelector("video");
    if (!video) continue;
    const reveal = () => {
      wrap.classList.add("is-ready");
    };
    if (video.readyState >= 1) {
      reveal();
    } else {
      video.addEventListener("loadedmetadata", reveal, { once: true });
      video.addEventListener("error", reveal, { once: true });
    }
  }
}

function mountModalBody(body: HTMLElement, link: ModalPayload) {
  pauseModalMedia(body);
  body.innerHTML = modalBodyHtml(link);
  initNativeModalMedia(body);
}

function readModalFromSiteTrigger(el: HTMLElement): ModalPayload {
  const modalKind = el.dataset.modalKind || "image";
  const link: ModalPayload = { modalKind };
  if (el.dataset.youtubeUrl) link.youtubeUrl = el.dataset.youtubeUrl;
  if (el.dataset.videoSrc) link.videoSrc = el.dataset.videoSrc;
  if (el.dataset.imageSrc) link.imageSrc = el.dataset.imageSrc;
  if (el.dataset.imageAlt) link.imageAlt = el.dataset.imageAlt;
  if (el.dataset.bandcampSrc) link.bandcampSrc = el.dataset.bandcampSrc;
  if (el.dataset.bandcampTitle) link.bandcampTitle = el.dataset.bandcampTitle;
  if (el.dataset.bandcampHeight) {
    const n = parseInt(el.dataset.bandcampHeight, 10);
    if (!Number.isNaN(n)) link.bandcampHeightPx = n;
  }
  if (el.dataset.detailHtml) {
    try {
      link.detailHtml = decodeURIComponent(el.dataset.detailHtml);
    } catch {
      link.detailHtml = el.dataset.detailHtml;
    }
  }
  return link;
}

export function attachSiteMediaModal() {
  if (typeof document === "undefined") return;

  const tryBind = (): boolean => {
    if (document.documentElement.dataset.siteMediaModalBound === "1")
      return true;

    const dialog = document.getElementById("work-modal");
    const scrim = document.getElementById("work-modal-scrim");
    const body = document.getElementById("work-modal-body");

    if (!(dialog instanceof HTMLDialogElement) || !scrim || !body) {
      return false;
    }

    let worksJson: WorkRow[] | null = null;
    const rawWorks = dialog.getAttribute("data-works-json");
    if (rawWorks) {
      try {
        worksJson = JSON.parse(rawWorks) as WorkRow[];
      } catch {
        worksJson = null;
      }
    }

    document.documentElement.dataset.siteMediaModalBound = "1";

    scrim.addEventListener("click", (event) => {
      if (event.target === scrim) {
        pauseModalMedia(body);
        dialog.close();
      }
    });

    dialog.addEventListener("close", () => pauseModalMedia(body));

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const siteBtn = target.closest("[data-open-site-modal]");
      if (siteBtn instanceof HTMLElement) {
        const link = readModalFromSiteTrigger(siteBtn);
        mountModalBody(body, link);
        collapseSubpageNavMenu();
        dialog.showModal();
        return;
      }

      const btn = target.closest("[data-open-modal]");
      if (!btn || !worksJson) return;
      const workId = btn.getAttribute("data-work-id");
      const indexRaw = btn.getAttribute("data-link-index");
      if (workId == null || indexRaw == null) return;
      const index = Number(indexRaw);
      const work = worksJson.find((w) => w.id === workId);
      const link = work?.links[index];
      if (!link || link.type !== "modal") return;
      mountModalBody(body, link as ModalPayload);
      collapseSubpageNavMenu();
      dialog.showModal();
    });

    return true;
  };

  if (tryBind()) return;

  document.addEventListener("DOMContentLoaded", () => {
    tryBind();
  });
  queueMicrotask(() => {
    tryBind();
  });
  window.setTimeout(() => {
    tryBind();
  }, 0);
}
