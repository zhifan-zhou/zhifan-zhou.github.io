"use client";

import { useEffect, useState } from "react";

const storageKey = "skyzhou-site-local-views";

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
    <span className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-600">
      <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
      {views === null ? "views loading" : `${views.toLocaleString()} local views`}
    </span>
  );
}
