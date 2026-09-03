"use client";

import { useEffect } from "react";

import { fireAdsConversion } from "@/lib/adsConversion";

// Reports a Google Ads "Register Clicks" conversion when this page loads.
// Drop it on any page that only a registered visitor can reach.
export default function AdsConversionEvent() {
  useEffect(() => {
    // gtag loads with strategy="afterInteractive", so useEffect can win the
    // race on a fast connection. Retry once when it will definitely be there.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ready = () => typeof (window as any).gtag === "function";

    if (ready()) {
      fireAdsConversion();
      return;
    }

    const t = setTimeout(fireAdsConversion, 1000);
    return () => clearTimeout(t);
  }, []);

  return null;
}
