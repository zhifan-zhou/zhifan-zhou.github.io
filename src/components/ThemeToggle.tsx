"use client";

import { cn } from "@/lib/utils";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const options = ["light", "dark"] as const;

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.5 14.7A8.6 8.6 0 0 1 9.3 3.5 8.7 8.7 0 1 0 20.5 14.7Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { copy } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div className="segmented-toggle" role="group" aria-label={copy.theme.ariaLabel}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={theme === option}
          className={cn(
            "segmented-toggle-button gap-1.5",
            theme === option && "segmented-toggle-button-active",
          )}
          onClick={() => setTheme(option)}
        >
          {option === "light" ? <SunIcon /> : <MoonIcon />}
          <span>{copy.theme[option]}</span>
        </button>
      ))}
    </div>
  );
}
