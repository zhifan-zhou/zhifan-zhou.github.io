import type { Metadata } from "next";

import { ContactPageClient } from "@/components/ContactPageClient";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description:
    "Contact information for Zhifan Zhou, including email, GitHub, LinkedIn, and Carnegie Mellon University location.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
