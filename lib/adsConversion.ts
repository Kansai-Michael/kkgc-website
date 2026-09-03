// Google Ads conversion tracking for the "Register Clicks" conversion action
// (Google Ads account AW-880936617).
//
// The site has two ways a visitor can register, and they can pass through both
// in one visit:
//   1. The Book a Free Lesson popup (ContactModal) — fires on form submit.
//   2. A Kihon booking or Kihon enquiry form, which lands them on /thank-you.
//
// Someone who uses the popup and then completes a Kihon booking would otherwise
// report two conversions for one person, so we mark the session on the first
// fire and skip any later ones.

export const ADS_CONVERSION_SEND_TO = "AW-880936617/gnR-CN3lm50YEKmNiKQD";

const SESSION_KEY = "kkgc_ads_conversion_fired";

export function fireAdsConversion(): void {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Private browsing can block sessionStorage. Reporting a possible duplicate
    // beats reporting nothing, so carry on.
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: ADS_CONVERSION_SEND_TO });
  }
}
