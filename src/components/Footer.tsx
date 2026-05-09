"use client";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/65">
      <div className="mx-auto flex max-w-6xl justify-center px-5 py-8 text-center text-sm text-stone-500">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
