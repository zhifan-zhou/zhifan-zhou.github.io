"use client";

import { type Locale } from "@/data/profile";
import { cn } from "@/lib/utils";

import { useLanguage } from "./LanguageProvider";

const options: Locale[] = ["en", "zh"];

export function LanguageToggle() {
  const { copy, locale, setLocale } = useLanguage();

  return (
    <div
      className="segmented-toggle"
      role="group"
      aria-label={copy.languageAriaLabel}
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={locale === option}
          className={cn(
            "segmented-toggle-button",
            locale === option && "segmented-toggle-button-active",
          )}
          onClick={() => setLocale(option)}
        >
          {copy.languageOptions[option]}
        </button>
      ))}
    </div>
  );
}
