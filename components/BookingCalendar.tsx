"use client";

import { useRef, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function BookingCalendar({ url, title }: { url: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const searchParams = useSearchParams();

  const iframeSrc = useMemo(() => {
    const email = searchParams.get("email");
    const name = searchParams.get("name");
    if (!email) return url;
    const params = new URLSearchParams({ email });
    if (name) {
      const [first, ...rest] = name.trim().split(" ");
      params.set("first_name", first);
      if (rest.length) params.set("last_name", rest.join(" "));
    }
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
