"use client";

import { useTiltEffect } from "@/hooks/useTiltEffect";

export function ResearchPill({ label }: { label: string }) {
  const { ref } = useTiltEffect(6);

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className="research-pill"
    >
      {label}
    </li>
  );
}
