"use client";
import { useEffect } from "react";

export default function IframeEscape() {
  useEffect(() => {
    if (window.self !== window.top) {
      window.top!.location.href = window.location.href;
    }
  }, []);
  return null;
}
