export function Profile() {
  return (
    <section className="group relative flex min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0a0a0a] p-6 lg:min-h-0 lg:p-10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          01 // Identity
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          Video / Film / Creative
        </span>
      </div>

      <div className="my-auto flex flex-col items-center gap-6 py-8 sm:flex-row sm:items-end lg:gap-8">
        <div className="relative size-36 shrink-0 overflow-hidden border border-zinc-800 bg-zinc-900 sm:size-44 lg:size-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#777_0,#272727_28%,#111_62%,#090909_100%)] grayscale transition duration-700 group-hover:grayscale-0" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-zinc-400">
            Portrait
          </span>
        </div>

        <div className="text-center sm:text-left">
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold uppercase tracking-tight text-white lg:text-5xl">
            FITA
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-zinc-300">
            Video Editor <span className="text-zinc-700">/</span> Filmmaker{" "}
            <span className="text-zinc-700">/</span> Creative
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-900 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400">
        <a href="#" className="transition hover:text-white">Instagram ↗</a>
        <a href="#" className="transition hover:text-white">YouTube ↗</a>
        <a href="#" className="transition hover:text-white">LinkedIn ↗</a>
      </div>
    </section>
  );
}