"use client";
import { useEffect } from "react";

export default function IframeEscape() {
  useEffect(() => {
    if (window.self !== window.top) {
      // Direct navigation blocked by browser site isolation when iframe was cross-origin.
      // Use postMessage so the parent frame can navigate itself.
      window.parent.postMessage({ type: "iframe-escape", url: window.location.href }, "*");
    }
  }, []);
  return null;
}
