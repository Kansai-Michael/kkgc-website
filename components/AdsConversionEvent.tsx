"use client";

import { useEffect } from "react";

import { fireAdsConversion, fireTrialBookedConversion } from "@/lib/adsConversion";

// Reports Google Ads conversions when this page loads. Drop it only on a page
// that a visitor can reach solely by completing a booking — currently just
// /thank-you, which the Kihon calendar redirects to.
//
// Fires BOTH actions: someone who lands here has handed over their details
// (Register Clicks) and booked a class (Free Trial Booked). They are separate
// conversion actions in different categories, and the Performance Max campaign
// bids only on the booking one, so reporting just the lead would leave it
// optimising blind. Each is deduplicated per session inside adsConversion.
export default function AdsConversionEvent() {
  useEffect(() => {
    const fire = () => {
      fireAdsConversion();
      fireTrialBookedConversion();
    };

    // gtag loads with strategy="afterInteractive", so useEffect can win the
    // race on a fast connection. Retry once when it will definitely be there.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof (window as any).gtag === "function") {
      fire();
      return;
    }

    const t = setTimeout(fire, 1000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
