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
    <div className="flex min-h-0 flex-1 flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            04 // Selected cuts
          </span>
        </div>

        <span className="font-mono text-[10px] text-zinc-400">
          {String(activeProjects.length).padStart(2, "0")} projects
        </span>
      </div>

      <div className="my-5">
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
