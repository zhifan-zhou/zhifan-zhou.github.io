"use client";

import { useEffect, useState } from "react";

const storageKey = "zhifan-site-page-views";

export function LocalViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const nextViews =
        Number(window.localStorage.getItem(storageKey) ?? "0") + 1;

      window.localStorage.setItem(storageKey, String(nextViews));
      setViews(nextViews);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <span className="page-views-badge">
      <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
      {views === null ? "Page Views" : `Page Views: ${views.toLocaleString()}`}
    </span>
  );
}
