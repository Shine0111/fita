"use client";

import { useEffect, useMemo, useState } from "react";
import { FormatTabs } from "./format-tabs";
import { ProjectCarousel } from "./project-carousel";
import {
  projectCollections,
  type Project,
  type ProjectCollection,
} from "../lib/projects";

type ProjectReelProps = {
  projects: Project[];
};

export function ProjectReel({ projects }: ProjectReelProps) {
  const availableCollections = useMemo(
    () =>
      projectCollections.filter((collection) =>
        projects.some((project) => project.collection === collection),
      ),
    [projects],
  );

  const [activeCollection, setActiveCollection] =
    useState<ProjectCollection | null>(availableCollections[0] ?? null);

  const activeProjects = projects.filter(
    (project) => project.collection === activeCollection,
  );

  useEffect(() => {
    if (!availableCollections.includes(activeCollection as ProjectCollection)) {
      setActiveCollection(availableCollections[0] ?? null);
    }
  }, [activeCollection, availableCollections]);

  if (!activeCollection || availableCollections.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center border border-zinc-800 text-sm text-zinc-500">
        No projects available.
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-4">
        <FormatTabs
          collections={availableCollections}
          activeCollection={activeCollection}
          onChange={setActiveCollection}
        />
      </div>

      <ProjectCarousel projects={activeProjects} />
    </div>
  );
}
