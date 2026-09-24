"use client";
import { useEffect } from "react";

/**
 * Reports every tap on a tel: link to GA4 as `phone_click`, so phone enquiries
 * show up alongside form leads instead of being invisible.
 *
 * One delegated listener on the document covers every current and future
 * phone link without touching each component that renders one.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "phone_click", { page_path: window.location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
