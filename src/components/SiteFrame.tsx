import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { SiteNav } from "./SiteNav";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto min-h-[calc(100vh-137px)] max-w-6xl px-5 py-10 sm:py-14">
        {children}
      </main>
      <Footer />
    </>
  );
}
