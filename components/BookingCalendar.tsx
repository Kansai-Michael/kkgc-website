"use client";

import { useRef, useEffect } from "react";

export default function BookingCalendar({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
      <iframe
        ref={iframeRef}
        src={url}
        className="w-full"
        style={{ minHeight: "650px", border: "none" }}
        title={title}
      />
    </div>
  );
}
