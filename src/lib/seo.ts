import { useEffect } from 'react';

// TODO: replace with the real production domain once it's live.
export const SITE_URL = 'https://hoteljatashankar.com';
export const DEFAULT_OG_IMAGE = '/hero-bg.jpg';

interface SEOOptions {
  /** Page-specific title. Rendered as "{title} | Hotel Jatashankar" (Home uses the bare title). */
  title: string;
  description: string;
  /** Path used to build the canonical/og:url, e.g. "/rooms". Defaults to "/". */
  path?: string;
  /** Override the social preview image. Defaults to the hero image. */
  image?: string;
  noindex?: boolean;
  /**
   * Page-specific JSON-LD (FAQPage, Restaurant/Menu, BreadcrumbList, etc.), on top of
   * the site-wide Hotel schema already present in index.html. Pass one schema object
   * or an array of them. Only reaches crawlers that execute JS (Google, Bing) — it is
   * not a substitute for the static schema, which is what non-JS AI crawlers see.
   */
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Updates document.title and the relevant <meta>/<link> tags on mount so every
 * route gets its own title, description, and social-preview data instead of
 * the single static index.html values (Phase 1 audit finding #2).
 *
 * Client-side only: fine for Google/Bing (they execute JS) and for anyone
 * clicking a link after the app has hydrated. It will NOT change what a
 * crawler sees on the very first byte of HTML — if pre-render/SSR previews
 * become a requirement later, revisit with a static prerender step.
 */
export function useSEO({ title, description, path = '/', image, noindex, structuredData }: SEOOptions) {
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} | Hotel Jatashankar`;
    const url = `${SITE_URL}${path === '/' ? '' : path}`;
    const ogImage = `${SITE_URL}${image ?? DEFAULT_OG_IMAGE}`;

    document.title = fullTitle;

    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    setLink('canonical', url);

    let script: HTMLScriptElement | null = null;
    if (structuredData) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-structured-data';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Route changes unmount/remount the page component, so this removes the
    // previous page's JSON-LD before the next page's useSEO call adds its own.
    return () => {
      script?.remove();
    };
  }, [title, description, path, image, noindex, structuredData]);
}
