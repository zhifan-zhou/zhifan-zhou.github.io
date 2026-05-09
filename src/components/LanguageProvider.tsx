"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { type Locale, siteCopy } from "@/data/profile";

type LanguageContextValue = {
  locale: Locale;
  copy: (typeof siteCopy)[Locale];
  setLocale: (nextLocale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "skyzhou-site-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLocale = window.localStorage.getItem(storageKey);
      if (savedLocale === "en" || savedLocale === "zh") {
        setLocale(savedLocale);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const selectLocale = (nextLocale: Locale) => {
      window.localStorage.setItem(storageKey, nextLocale);
      setLocale(nextLocale);
    };

    const toggleLocale = () => {
      setLocale((currentLocale) => {
        const nextLocale = currentLocale === "en" ? "zh" : "en";
        window.localStorage.setItem(storageKey, nextLocale);
        return nextLocale;
      });
    };

    return {
      locale,
      copy: siteCopy[locale],
      setLocale: selectLocale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
