import type { Metadata } from "next";

import { ExperiencesPageClient } from "@/components/ExperiencesPageClient";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Experiences | ${profile.name}`,
  description:
    "Education, projects, and work experience for Zhifan Zhou.",
};

export default function ExperiencesPage() {
  return <ExperiencesPageClient />;
}
