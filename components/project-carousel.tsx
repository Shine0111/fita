"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import type { Project } from "../lib/projects";

type ProjectCarouselProps = {
  projects: Project[];
};

type ProjectCardProps = {
  project: Project;
  className?: string;
  isPreview?: boolean;
  onDragEnd?: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => void;
};

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.35,
    scale: 0.94,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0.35,
    scale: 0.94,
  }),
};

function ProjectCard({
  project,
  className = "",
  isPreview = false,
  onDragEnd,
}: ProjectCardProps) {
  return (
    <motion.div
      drag={isPreview ? false : "x"}
      dragDirectionLock={!isPreview}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.15}
      onDragEnd={onDragEnd}
      aria-hidden={isPreview}
      className={`absolute inset-y-0 overflow-hidden bg-gradient-to-br ${project.accent} ${className}`}
    >
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="bg-red-600 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
          {project.tag}
        </span>

        <span className="font-mono text-[10px] text-zinc-300">
          {project.duration}
        </span>
      </div>

      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,.12)_50%,transparent_100%)]" />

      {!isPreview && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid size-14 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm">
            ▶
          </div>
        </div>
      )}

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
            {project.category}
          </p>

          <h3 className="mt-1 truncate font-[family-name:var(--font-syne)] text-xl font-bold uppercase tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        {!isPreview && (
          <>
            <span className="hidden shrink-0 font-mono text-[10px] text-zinc-400 sm:block">
              {project.format}
            </span>

            <span className="hidden shrink-0 font-mono text-[10px] text-zinc-400 lg:block">
              {project.credit} ↗
            </span>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projectKeys = projects.map((project) => project.title).join("|");

  useEffect(() => {
    setIndex(0);
    setDirection(1);
  }, [projectKeys]);

  if (projects.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center border border-zinc-800 text-sm text-zinc-500">
        No projects in this collection.
      </div>
    );
  }

  const wrapIndex = (value: number) =>
    (value + projects.length) % projects.length;

  const previousProject = projects[wrapIndex(index - 1)];
  const project = projects[index];
  const nextProject = projects[wrapIndex(index + 1)];
  const hasPreviews = projects.length > 1;

  const next = () => {
    setDirection(1);
    setIndex((current) => wrapIndex(current + 1));
  };

  const previous = () => {
    setDirection(-1);
    setIndex((current) => wrapIndex(current - 1));
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeDistance = 60;
    const swipeVelocity = 500;

    if (info.offset.x < -swipeDistance || info.velocity.x < -swipeVelocity) {
      next();
    } else if (
      info.offset.x > swipeDistance ||
      info.velocity.x > swipeVelocity
    ) {
      previous();
    }
  };

  return (
    <div
      className="grid min-h-0 min-w-0 flex-1 grid-rows-[auto_minmax(0,1fr)]"
      tabIndex={0}
      aria-label="Project carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          next();
        }

        if (event.key === "ArrowLeft") {
          previous();
        }
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            04 // Selected cuts
          </span>

          <span className="font-mono text-[10px] text-zinc-400">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous project"
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-white hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-white hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative isolate my-4 min-h-[170px] flex-1 overflow-hidden border border-zinc-800 bg-zinc-950 lg:my-3 lg:min-h-[180px]">
        {hasPreviews && (
          <ProjectCard
            project={previousProject}
            isPreview
            className="left-[-60%] w-[78%] scale-[0.92] opacity-35"
          />
        )}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={project.title}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 320,
                damping: 30,
              },
              opacity: {
                duration: 0.2,
              },
              scale: {
                duration: 0.25,
              },
            }}
            className="absolute inset-y-0 left-[11%] w-[78%] touch-pan-y"
          >
            <ProjectCard
              project={project}
              className="inset-0 w-full"
              onDragEnd={handleDragEnd}
            />
          </motion.div>
        </AnimatePresence>
        {hasPreviews && (
          <ProjectCard
            project={nextProject}
            isPreview
            className="right-[-60%] w-[78%] scale-[0.92] opacity-35"
          />
        )}
      </div>
    </div>
  );
}
