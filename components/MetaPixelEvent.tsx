"use client";

import { useEffect } from "react";

export default function MetaPixelEvent({ event }: { event: string }) {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as Window & { fbq?: Function }).fbq === "function") {
      (window as Window & { fbq?: Function }).fbq("track", event);
    }
  }, [event]);

  return null;
}
