export function Profile() {
  return (
    <section className="group relative flex min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0a0a0a] p-6 lg:min-h-0 lg:px-8 lg:py-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          01 // Identity
        </span>
        <span className="fita-muted font-mono text-[10px] uppercase tracking-[0.18em]">
          Berlin &amp; Global
        </span>
      </div>

      <div className="my-auto flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-end lg:gap-4 lg:py-4">
        <div className="relative size-36 shrink-0 overflow-hidden border border-zinc-800 bg-zinc-900 sm:size-44 lg:size-[clamp(10rem,14vh,9rem)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#777_0,#272727_28%,#111_62%,#090909_100%)] grayscale transition duration-700 group-hover:grayscale-0" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
            <span className="bg-red-600 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
              Rec
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-300">
              4K raw
            </span>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold uppercase tracking-tight text-white lg:text-4xl">
            FITA
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-zinc-300">
            Video Editor <span className="text-zinc-700">/</span> Filmmaker{" "}
            <span className="text-zinc-700">/</span> Creative
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">
          <a href="#" className="transition hover:text-[var(--fita-accent)]">
            Instagram ↗
          </a>
          <a href="#" className="transition hover:text-[var(--fita-accent)]">
            YouTube ↗
          </a>
          <a href="#" className="transition hover:text-[var(--fita-accent)]">
            Vimeo ↗
          </a>
          <a href="#" className="transition hover:text-[var(--fita-accent)]">
            LinkedIn ↗
          </a>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-600">
          2024 Ed.
        </span>
      </div>
    </section>
  );
}
