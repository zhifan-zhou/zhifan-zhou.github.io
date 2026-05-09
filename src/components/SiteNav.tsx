"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { ThemeToggle } from "./ThemeToggle";

export function SiteNav() {
  const pathname = usePathname();
  const { copy } = useLanguage();
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-base font-semibold text-stone-950 transition hover:text-sky-700"
        >
          {profile.shortName}
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1">
            {profile.navItems.map((item) => {
              const isActive = normalizedPathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn("nav-link", isActive && "nav-link-active")}
                >
                  {copy.nav[item.key]}
                </Link>
              );
            })}
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
