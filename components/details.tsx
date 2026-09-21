const coreCompetencies = [
  "Video editing & storytelling",
  "Color grading & sound design",
  "Short-form content production",
  "Camera operation",
  "Lighting setup for interviews & scenes",
];

const technicalServices = [
  "Offline & Online Assembly",
  "Custom Kinetic Sound Design",
  "Color Grading & Film Emulation",
  "2D/3D Kinetic Typography",
];

export function Details() {
  return (
    <section className="flex h-full min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0c0c0e] p-6 lg:min-h-0 lg:px-8 lg:py-5">
      <div className="my-auto max-w-2xl py-8 lg:py-4">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-300 lg:text-[13px]">
          I aim to deliver content that feels polished, intentional, and
          aligned.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-4 lg:gap-y-3">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
              My Core Competencies
            </p>
            <ul className="space-y-2 lg:space-y-1">
              {coreCompetencies.map((item) => (
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
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-3">
        <span className="fita-muted font-mono text-[10px] uppercase tracking-[0.1em]">
          Premiere Pro / DaVinci Resolve / After Effects
        </span>

        <a
          href="mailto:fitahiantsoarazaf@gmail.com"
          className="self-start shrink-0 border border-[var(--fita-accent)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fita-accent)] transition hover:bg-[var(--fita-accent)] hover:text-black"
        >
          Initiate collaboration →
        </a>
      </div>
    </section>
  );
}
