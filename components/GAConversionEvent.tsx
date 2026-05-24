"use client";

import { useEffect } from "react";

interface Props {
  event: string;
  params?: Record<string, string | number>;
}

export default function GAConversionEvent({ event, params }: Props) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const fire = () => {
      if (typeof w.gtag === "function") {
        w.gtag("event", event, params ?? {});
        return true;
      }
      return false;
    };

    // gtag loads with strategy="afterInteractive" — useEffect may win the race.
    // If gtag isn't ready yet, retry once after 1 s when it will definitely be loaded.
    if (!fire()) {
      const t = setTimeout(fire, 1000);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
