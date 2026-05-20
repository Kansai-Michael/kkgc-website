"use client";

import { useEffect } from "react";

interface Props {
  event: string;
  params?: Record<string, string | number>;
}

export default function GAConversionEvent({ event, params }: Props) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    if (typeof gtag !== "function") return;
    gtag("event", event, params ?? {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
