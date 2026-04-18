"use client";

import { useRef } from "react";

export default function BookingCalendar({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    try {
      const pathname = iframeRef.current?.contentWindow?.location.pathname;
      if (pathname === "/thank-you") {
        window.location.href = "/thank-you";
      }
    } catch {
      // cross-origin frame — ignore until it navigates to our domain
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        ref={iframeRef}
        src={url}
        onLoad={handleLoad}
        className="w-full"
        style={{ minHeight: "650px", border: "none" }}
        title={title}
      />
    </div>
  );
}
