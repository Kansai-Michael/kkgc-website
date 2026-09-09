// Google Ads conversion tracking (account AW-880936617).
//
// Two distinct conversion actions, because they measure two different things
// and the ad campaigns bid on them differently:
//
//   Register Clicks    SUBMIT_LEAD_FORM  — someone handed over their details.
//   Free Trial Booked  BOOK_APPOINTMENT  — someone actually booked a class.
//
// A booking is the stronger signal, and it is the one "NMN SR25 - Leads-PM"
// bids on: that campaign has a campaign-level goal override restricting it to
// BOOK_APPOINTMENT. Until 2026-09-09 nothing on the site fired a
// BOOK_APPOINTMENT conversion at all, so the campaign was optimising toward an
// event that could never happen — it recorded zero conversions and lost 74% of
// its impression share on Ad Rank while underspending its budget by ~80%.
//
// Each action is deduplicated separately, per session. Someone who fills in the
// popup and then completes a Kihon booking genuinely did both things and should
// report one of each — but neither twice.

export const ADS_CONVERSION_SEND_TO = "AW-880936617/gnR-CN3lm50YEKmNiKQD";
export const ADS_TRIAL_BOOKED_SEND_TO = "AW-880936617/Qk7CCOCo1JQcEKmNiKQD";

const REGISTER_KEY = "kkgc_ads_conversion_fired";
const TRIAL_BOOKED_KEY = "kkgc_ads_trial_booked_fired";

function fireOnce(sendTo: string, sessionKey: string): void {
  if (typeof window === "undefined") return;

  try {
    if (sessionStorage.getItem(sessionKey)) return;
    sessionStorage.setItem(sessionKey, "1");
  } catch {
    // Private browsing can block sessionStorage. Reporting a possible duplicate
    // beats reporting nothing, so carry on.
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: sendTo });
  }
}

/** Details submitted — the Book a Free Lesson popup, or a Kihon form. */
export function fireAdsConversion(): void {
  fireOnce(ADS_CONVERSION_SEND_TO, REGISTER_KEY);
}

/** A class actually booked — only ever reached via the Kihon booking redirect. */
export function fireTrialBookedConversion(): void {
  fireOnce(ADS_TRIAL_BOOKED_SEND_TO, TRIAL_BOOKED_KEY);
}
