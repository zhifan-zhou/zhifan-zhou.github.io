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
    <header className="sticky top-0 z-40 border-b backdrop-blur" style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--background) 92%, transparent)' }}>
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="site-logo">
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
