"use client";

import { useSyncExternalStore } from "react";

import type { MotionMode } from "@/types/content";

const queries = [
  "(prefers-reduced-motion: reduce)",
  "(min-width: 1100px)",
  "(hover: hover)",
] as const;

function getSnapshot(): MotionMode {
  if (typeof window === "undefined") {
    return "lite";
  }

  const prefersReducedMotion = window.matchMedia(queries[0]).matches;

  if (prefersReducedMotion) {
    return "reduced";
  }

  const isDesktop = window.matchMedia(queries[1]).matches;
  const canHover = window.matchMedia(queries[2]).matches;

  return isDesktop && canHover ? "full" : "lite";
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const mediaQueries = queries.map((query) => window.matchMedia(query));

  mediaQueries.forEach((mediaQuery) => mediaQuery.addEventListener("change", onStoreChange));

  return () => {
    mediaQueries.forEach((mediaQuery) => mediaQuery.removeEventListener("change", onStoreChange));
  };
}

function getServerSnapshot(): MotionMode {
  return "lite";
}

export function useRuntimeMotionMode() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
