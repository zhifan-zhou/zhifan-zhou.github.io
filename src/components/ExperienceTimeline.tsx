"use client";

import { useState } from "react";

import type { Experience } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ExperienceTimeline({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex] ?? experiences[0];

  return (
    <div className="timeline-shell">
      <div className="timeline-rail" aria-label="Experience timeline">
        {experiences.map((experience, index) => (
          <button
            key={experience.title}
            type="button"
            className={cn(
              "timeline-node",
              activeIndex === index && "timeline-node-active",
            )}
            onClick={() => setActiveIndex(index)}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <span>
              <span className="block text-sm font-semibold">
                {experience.title}
              </span>
              <span className="block text-xs text-stone-500">
                {experience.period}
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeExperience ? (
        <article className="timeline-detail">
          <p className="text-sm font-medium text-sky-800">
            {activeExperience.organization}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-950">
            {activeExperience.title}
          </h2>
          <p className="mt-3 leading-7 text-stone-600">
            {activeExperience.summary}
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
            {activeExperience.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span className="mt-3 h-px w-5 shrink-0 bg-sky-300" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </article>
      ) : null}
    </div>
  );
}
