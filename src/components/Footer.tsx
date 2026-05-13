"use client";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="mx-auto flex max-w-7xl justify-center px-5 py-7 text-center text-sm" style={{ color: 'var(--quiet)' }}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
