import type { Publication } from "@/data/profile";

import { ExternalLink } from "./ExternalLink";

export function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  return (
    <div className="space-y-6">
      {publications.map((publication) => (
        <article key={publication.title} className="paper-row">
          <div className="paper-status">{publication.status}</div>
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold leading-tight text-stone-950">
              {publication.title}
            </h2>
            <p
              className="mt-2 text-sm text-stone-600"
              dangerouslySetInnerHTML={{ __html: publication.authors }}
            />
            <p className="mt-2 text-sm font-medium text-sky-800">
              {publication.venue}
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600">
              {publication.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {publication.links.map((link) => (
                <ExternalLink key={link.label} link={link} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
