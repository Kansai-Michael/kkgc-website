"use client";
import { useEffect } from "react";

import { captureAttribution } from "@/lib/attribution";

/**
 * Records where the visitor came from, once per visit, on first page load.
 *
 * Deliberately reads window.location rather than useSearchParams: the latter
 * would force this component (and therefore the whole layout) into a Suspense
 * boundary for no benefit, since capture only needs to happen on mount.
 */
export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
