"use client";

import { PageHeader } from "./PageHeader";
import { PublicationList } from "./PublicationList";
import { useLanguage } from "./LanguageProvider";

export function PublicationsPageClient() {
  const { copy } = useLanguage();

  return (
    <div>
      <PageHeader title={copy.publications.title} />
      <PublicationList publications={copy.publications.items} />
    </div>
  );
}
