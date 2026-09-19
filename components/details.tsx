const services = [
  "Video editing",
  "YouTube & vlogs",
  "Reels & short-form",
  "Music videos",
  "Event highlights",
  "Motion graphics",
];

export function Details() {
  return (
    <section className="flex min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0c0c0e] p-6 lg:min-h-0 lg:p-10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          03 // Scope & disciplines
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          Capabilities
        </span>
      </div>

      <div className="my-auto max-w-2xl py-8">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-300">
          FITA works across cinematic post-production and modern digital
          content, shaping raw footage into clear, memorable visual stories —
          from long-form YouTube work to fast, energetic social edits.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="border-t border-zinc-900 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-400"
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">
          Premiere Pro / After Effects / DaVinci
        </span>
        <a
          href="mailto:hello@fita.studio"
          className="font-mono text-[10px] uppercase tracking-[0.1em] text-white underline underline-offset-4 transition hover:text-zinc-300"
        >
          Start a project →
        </a>
      </div>
    </section>
  );
}