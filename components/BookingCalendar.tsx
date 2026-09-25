"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { PREFILL_KEY } from "@/lib/bookingPrefill";

function BookingCalendarInner({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Resolved after mount (sessionStorage is browser-only); the iframe waits
  // for it so Kihon loads once, already prefilled.
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);

  useEffect(() => {
    let src = url;
    try {
      const saved = JSON.parse(sessionStorage.getItem(PREFILL_KEY) ?? "null");
      if (saved?.email) {
        const params = new URLSearchParams({ email: saved.email });
        if (saved.name) params.set("name", saved.name);
        if (saved.phone) params.set("phone", saved.phone);
        src = `${url}?${params.toString()}`;
      }
    } catch {
      // Storage blocked or malformed — load the calendar unprefilled.
    }
    setIframeSrc(src);
  }, [url]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "iframe-escape" && typeof e.data.url === "string") {
        window.location.href = e.data.url;
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      {iframeSrc ? (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          className="w-full"
          style={{ minHeight: "650px", border: "none" }}
          title={title}
        />
      ) : (
        <div style={{ minHeight: "650px" }} />
      )}
    </div>
  );
}

export default function BookingCalendar(props: { url: string; title: string }) {
  return (
    <Suspense fallback={<div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm" style={{ minHeight: "650px" }} />}>
      <BookingCalendarInner {...props} />
    </Suspense>
  );
}
