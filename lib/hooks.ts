"use client";
import { useSyncExternalStore } from "react";

/** SSR-safe media query hook (no hydration mismatch). */
export function useMedia(query: string, serverValue = false) {
  return useSyncExternalStore(
    (cb) => { const m = window.matchMedia(query); m.addEventListener("change", cb); return () => m.removeEventListener("change", cb); },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}
