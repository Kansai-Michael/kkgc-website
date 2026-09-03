/**
 * Server-side whitelist for the attribution object before it is forwarded to
 * Kihon.
 *
 * The API routes are public, so the browser's payload cannot be trusted: this
 * value ends up in `families.lead_source_detail` on a real row. Kihon performs
 * its own whitelisting too — this is the outer layer, so junk never leaves our
 * origin in the first place.
 */

const ALLOWED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "referrer",
  "landing_page",
  // When the visitor first arrived. Kept because the gap between this and the
  // enquiry is useful — it shows how long people deliberate after clicking.
  "captured_at",
] as const;

const MAX_VALUE_LENGTH = 200;

export type LeadAttribution = Partial<Record<(typeof ALLOWED_KEYS)[number], string>>;

/**
 * Returns only known string keys, trimmed and length-capped, or undefined if
 * nothing survived. Unknown keys, nested objects and non-strings are dropped.
 */
export function sanitizeAttribution(input: unknown): LeadAttribution | undefined {
  if (!input || typeof input !== "object" || Array.isArray(input)) return undefined;

  const source = input as Record<string, unknown>;
  const picked: LeadAttribution = {};

  for (const key of ALLOWED_KEYS) {
    const value = source[key];
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (trimmed) picked[key] = trimmed.slice(0, MAX_VALUE_LENGTH);
  }

  return Object.keys(picked).length ? picked : undefined;
}
