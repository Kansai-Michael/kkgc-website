"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MetaPixelTracker() {
  const pathname = usePathname();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.fbq === "function") {
      win.fbq("track", "PageView");
    }
  }, [pathname]);
  return null;
}
