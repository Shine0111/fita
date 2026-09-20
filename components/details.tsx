const formatFocus = [
  "Music Videos & Festival Recaps",
  "YouTube High-Production Epics",
  "Reels & Viral Brand Motion",
  "Commercials & Brand Documentaries",
];

const technicalServices = [
  "Offline & Online Assembly",
  "Custom Kinetic Sound Design",
  "Color Grading & Film Emulation",
  "2D/3D Kinetic Typography",
];

export function Details() {
  return (
    <section className="flex min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0c0c0e] p-6 lg:min-h-0 lg:px-8 lg:py-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          03 // Scope &amp; disciplines
        </span>
        <span className="fita-muted font-mono text-[10px] uppercase tracking-[0.18em]">
          Capabilities
        </span>
      </div>

      <div className="my-auto max-w-2xl py-8 lg:py-4">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-300 lg:text-[13px]">
          FITA operates at the intersection of cinematic post-production and
          digital culture. Blending narrative pacing with aggressive,
          contemporary sound architecture to build memorable commercial films,
          music videos, and viral social content.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-4 lg:gap-y-3">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              Format Focus
            </p>
            <ul className="space-y-2 lg:space-y-1">
              {formatFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-400"
                >
                  <span className="mt-1 size-1.5 shrink-0 bg-zinc-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              Technical Services
            </p>
            <ul className="space-y-2 lg:space-y-1">
              {technicalServices.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-400"
                >
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-3">
        <span className="fita-muted font-mono text-[10px] uppercase tracking-[0.1em]">
          Suite: Premiere Pro / DaVinci Resolve / After Effects
        </span>

        <a
          href="mailto:hello@fita.studio"
          className="fita-muted font-mono text-[10px] uppercase tracking-[0.1em] text-white underline decoration-[var(--fita-accent)] underline-offset-4 transition hover:text-[var(--fita-accent)]"
        >
          Initiate collaboration →
        </a>
      </div>
    </section>
  );
}
