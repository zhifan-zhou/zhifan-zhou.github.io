import type { ReactNode } from "react";

import { CommandPalette } from "./CommandPalette";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { SiteNav } from "./SiteNav";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <SiteNav />
      <main id="main-content" className="mx-auto min-h-[calc(100vh-137px)] max-w-7xl px-5 py-10 sm:py-14">
        {children}
      </main>
      <Footer />
      <CommandPalette />
    </>
  );
}
