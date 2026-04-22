"use client";

import { useRef, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function BookingCalendar({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchParams = useSearchParams();

  const iframeSrc = useMemo(() => {
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    const phone = searchParams.get("phone");
    if (!email) return url;
    const params = new URLSearchParams({ email });
    if (name) params.set("name", name);
    if (phone) params.set("phone", phone);
    return `${url}?${params.toString()}`;
  }, [url, searchParams]);

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
        src={iframeSrc}
        className="w-full"
        style={{ minHeight: "650px", border: "none" }}
        title={title}
      />
    </div>
  );
}
