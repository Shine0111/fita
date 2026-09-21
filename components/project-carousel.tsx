"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import type { Project } from "../lib/projects";

type ProjectCarouselProps = {
  projects: Project[];
  layout?: "wide" | "reel";
};

type ProjectCardProps = {
  project: Project;
  layout: "wide" | "reel";
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
  layout,
  className = "",
  isPreview = false,
  onDragEnd,
}: ProjectCardProps) {
  const isReel = layout === "reel";

  const thumbnailUrl = project.youtubeId
    ? `https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`
    : null;

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
      {thumbnailUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
      )}
      <div
        className={`absolute flex items-center ${
          isReel ? "left-2 top-2 gap-1.5" : "left-4 top-4 gap-2"
        }`}
      >
        <span
          className={`bg-red-600 font-mono font-bold uppercase tracking-wider text-white ${
            isReel ? "px-1.5 py-0.5 text-[7px]" : "px-2 py-1 text-[9px]"
          }`}
        >
          {project.tag}
        </span>

        <span
          className={`font-mono text-zinc-300 ${
            isReel ? "text-[8px]" : "text-[10px]"
          }`}
        >
          {project.duration}
        </span>
      </div>

      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,.12)_50%,transparent_100%)]" />

      {!isPreview && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`grid place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm ${
              isReel ? "size-9 text-xs" : "size-14 text-base"
            }`}
          >
            {!isPreview && project.youtubeId && (
              <a
                href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch ${project.title} on YouTube`}
                className={`grid place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition hover:border-[var(--fita-accent)] hover:bg-[var(--fita-accent)] hover:text-black ${
                  isReel ? "size-9 text-xs" : "size-14 text-base"
                }`}
              >
                ▶
              </a>
            )}
          </div>
        </div>
      )}

      <div
        className={`absolute flex items-end justify-between ${
          isReel ? "inset-x-2 bottom-2 gap-2" : "inset-x-4 bottom-4 gap-3"
        }`}
      >
        <div className="min-w-0">
          <p
            className={`uppercase tracking-[0.16em] text-zinc-400 ${
              isReel
                ? "font-mono text-[7px] tracking-[0.1em]"
                : "font-mono text-[10px]"
            }`}
          >
            {project.category}
          </p>

          <h3
            className={`mt-1 truncate font-[family-name:var(--font-syne)] font-bold uppercase tracking-tight text-white ${
              isReel ? "text-sm leading-tight" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
        </div>

        {!isPreview && !isReel && (
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

export function ProjectCarousel({
  projects,
  layout = "wide",
}: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const projectKeys = projects.map((project) => project.title).join("|");

  useEffect(() => {
    setIndex(0);
    setDirection(1);
  }, [projectKeys]);

  if (projects.length === 0) {
    return (
      <div className="fita-muted flex min-h-0 flex-1 items-center justify-center border border-zinc-800 text-sm">
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
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-[var(--fita-accent)] hover:text-[var(--fita-accent)]"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-[var(--fita-accent)]"
          >
            →
          </button>
        </div>
      </div>

      <div className="fita-accent-ambient relative isolate my-3 min-h-[280px] flex-1 overflow-hidden border border-zinc-800 bg-zinc-950 lg:min-h-0">
        {" "}
        {hasPreviews && (
          <ProjectCard
            project={previousProject}
            isPreview
            layout={layout}
            className={`z-0 h-full scale-[0.92] opacity-35 ${
              layout === "reel"
                ? "left-[34%] aspect-[9/16] w-auto"
                : "left-[-60%] w-[78%]"
            }`}
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
            className={`absolute inset-y-0 z-10 h-full touch-pan-y ${
              layout === "reel"
                ? "left-1/2 w-auto -translate-x-1/2 aspect-[9/16]"
                : "left-[11%] w-[78%]"
            }`}
          >
            <ProjectCard
              project={project}
              layout={layout}
              className="inset-0 h-full w-full"
              onDragEnd={handleDragEnd}
            />
          </motion.div>
        </AnimatePresence>
        {hasPreviews && (
          <ProjectCard
            project={nextProject}
            isPreview
            layout={layout}
            className={`z-0 h-full scale-[0.92] opacity-35 ${
              layout === "reel"
                ? "right-[34%] aspect-[9/16] w-auto"
                : "right-[-60%] w-[78%]"
            }`}
          />
        )}
      </div>
    </div>
  );
}
