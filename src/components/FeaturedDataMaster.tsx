"use client";

import { ExternalLink } from "./ExternalLink";
import { DataMasterWorkflow } from "./DataMasterWorkflow";
import { useLanguage } from "./LanguageProvider";

export function FeaturedDataMaster() {
  const { copy } = useLanguage();
  const project = copy.experiences.projects[0];
  const isChinese = copy.experiences.title === "经历";

  if (!project) {
    return null;
  }

  return (
    <section id="datamaster-preview" className="feature-case-study">
      <div className="feature-kicker">
        <span>{copy.experiences.projectsTitle}</span>
        <strong>{project.status}</strong>
      </div>

      <div className="feature-body">
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="feature-tags" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="feature-links">
            {project.links.map((link) => (
              <ExternalLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <DataMasterWorkflow isChinese={isChinese} />
      </div>
    </section>
  );
}
