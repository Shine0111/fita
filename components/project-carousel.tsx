"use client";

import { useEffect, useState } from "react";
import type { Project } from "../lib/projects";
import { AnimatePresence, motion } from "motion/react";

type ProjectCarouselProps = {
  projects: Project[];
};

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [projects]);
  if (projects.length === 0) {
    return (
      <div className="flex min-h-0 flex-1 items-center justify-center border border-zinc-800 text-sm text-zinc-500">
        No projects in this collection.
      </div>
    );
  }

  const project = projects[index];

  const next = () => setIndex((current) => (current + 1) % projects.length);
  const previous = () =>
    setIndex((current) => (current - 1 + projects.length) % projects.length);

  return (
    <div
      className="flex min-h-0 flex-1 flex-col justify-between"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          next();
        }

        if (event.key === "ArrowLeft") {
          previous();
        }
      }}
      aria-label="Project carousel"
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
            onClick={previous}
            aria-label="Previous project"
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-white hover:text-white"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="grid size-8 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition hover:border-white hover:text-white"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative my-5 min-h-[220px] flex-1 overflow-hidden border border-zinc-800 bg-zinc-950 lg:my-3 lg:min-h-[clamp(120px,20vh,220px)]">
        {" "}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.title}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              const swipeDistance = 60;
              const swipeVelocity = 500;

              if (
                info.offset.x < -swipeDistance ||
                info.velocity.x < -swipeVelocity
              ) {
                next();
              } else if (
                info.offset.x > swipeDistance ||
                info.velocity.x > swipeVelocity
              ) {
                previous();
              }
            }}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`absolute inset-0 touch-pan-y bg-gradient-to-br ${project.accent}`}
          >
            {/* top-left tag + duration, add inside the motion.div, above the play button */}
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="bg-red-600 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
                {project.tag}
              </span>
              <span className="font-mono text-[10px] text-zinc-300">
                {project.duration}
              </span>
            </div>
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,.12)_50%,transparent_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid size-14 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm">
                ▶
              </div>
            </div>

            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                  {project.category}
                </p>
                <h3 className="mt-1 truncate font-[family-name:var(--font-syne)] text-xl font-bold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
              <span className="hidden font-mono text-[10px] text-zinc-400 sm:block">
                {project.format}
              </span>

              <span className="hidden font-mono text-[10px] text-zinc-400 lg:block">
                {project.credit} ↗
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
