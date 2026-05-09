import type { Metadata } from "next";

import { PublicationsPageClient } from "@/components/PublicationsPageClient";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Publications | ${profile.name}`,
  description:
    "Publications, technical writeups, and in-progress research notes for Zhifan Zhou.",
};

export default function PublicationsPage() {
  return <PublicationsPageClient />;
}
