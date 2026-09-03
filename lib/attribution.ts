/**
 * Visitor attribution — records where someone came from so a lead can be
 * credited to the ad that produced it.
 *
 * Why this exists: the enquiry form used to send Kihon only a program slug, so
 * a click on a Facebook ad that turned into a booking three days later was
 * filed as "website form" and nothing more. As of Sept 2026 that was true of
 * 102 of KKGC's 110 leads, which made cost-per-lead impossible to calculate.
 *
 * Two decisions worth knowing about:
 *
 * - FIRST TOUCH WINS. The ad that first brought someone here is the one that
 *   earned the lead. Later visits never overwrite it.
 * - Stored in localStorage for 30 days, not sessionStorage. People routinely
 *   click an ad on their phone, look around, then come back a day later to
 *   actually enquire; session storage would drop the attribution in between.
 *   Beyond 30 days the record is treated as stale and re-captured, so credit
 *   is not claimed for an ad clicked months earlier.
 *
 * No personal information is stored here — only campaign tags and a referrer.
 */

const STORAGE_KEY = "kkgc_attribution";
const MAX_AGE_DAYS = 30;
const MAX_VALUE_LENGTH = 200;

/** Keys read from the query string. Mirrors what the Kihon CRM will accept. */
const PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
  captured_at?: string;
};

function clean(value: string | null | undefined): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, MAX_VALUE_LENGTH) : undefined;
}

/** Treat our own domain as "no referrer" — internal navigation is not a source. */
function externalReferrer(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const ref = document.referrer;
  if (!ref) return undefined;
  try {
    if (new URL(ref).hostname === window.location.hostname) return undefined;
  } catch {
    return undefined;
  }
  return clean(ref);
}

function isFresh(record: Attribution): boolean {
  if (!record.captured_at) return false;
  const age = Date.now() - new Date(record.captured_at).getTime();
  return Number.isFinite(age) && age >= 0 && age < MAX_AGE_DAYS * 86_400_000;
}

/**
 * Record where this visitor came from, unless a recent record already exists.
 * Safe to call on every page load. Never throws — storage can be unavailable
 * in private browsing, and a failure here must never block an enquiry.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    const existing = getAttribution();
    if (existing) return; // first touch wins

    const params = new URLSearchParams(window.location.search);
    const record: Attribution = {};

    for (const key of PARAM_KEYS) {
      const value = clean(params.get(key));
      if (value) record[key] = value;
    }

    const referrer = externalReferrer();
    if (referrer) record.referrer = referrer;

    record.landing_page = clean(window.location.pathname) ?? "/";
    record.captured_at = new Date().toISOString();

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage blocked or full — proceed without attribution.
  }
}

/** The stored attribution, or null if absent, unreadable or older than 30 days. */
export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;

    const record = parsed as Attribution;
    if (!isFresh(record)) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return record;
  } catch {
    return null;
  }
}
