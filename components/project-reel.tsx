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
      <div className="fita-muted flex min-h-0 flex-1 items-center justify-center border border-zinc-800 text-sm">
        No projects available.
      </div>
    );
  }

  return (
    <div className="grid min-h-0 min-w-0 flex-1 grid-rows-[auto_minmax(0,1fr)]">
      <div className="mb-3 min-w-0">
        <FormatTabs
          collections={availableCollections}
          activeCollection={activeCollection}
          onChange={setActiveCollection}
        />
      </div>
      <ProjectCarousel
        projects={activeProjects}
        layout={activeCollection === "Reels" ? "reel" : "wide"}
      />
    </div>
  );
}
