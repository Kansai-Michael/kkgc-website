"use client";

import { useEffect } from "react";

export default function MetaPixelEvent({ event }: { event: string }) {
  useEffect(() => {
    const fire = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", event);
        return true;
      }
      return false;
    };

    if (!fire()) {
      // Pixel script (afterInteractive) may not have run yet — retry once it loads
      const timer = setTimeout(fire, 1500);
      return () => clearTimeout(timer);
    }
  }, [event]);

  return null;
}
