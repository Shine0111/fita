export function Statement() {
  return (
    <section className="relative flex min-h-[50svh] flex-col justify-between overflow-hidden bg-[#0c0c0e] p-6 lg:min-h-0 lg:px-8 lg:py-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          02 // Manifesto
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          Rhythm & emotion
        </span>
      </div>

      <div className="my-auto py-8 lg:py-4">
        <h2 className="headline-tight max-w-2xl font-[family-name:var(--font-syne)] text-[clamp(2rem,3.6vw,4.5rem)] font-extrabold uppercase text-zinc-100 lg:text-[clamp(1.75rem,2.2vw+1.6vh,3.75rem)]">
          I edit <span className="text-zinc-500">stories</span> that move.
        </h2>
        <div className="mt-7 flex max-w-xl items-start gap-3 lg:mt-4">
          <span className="mt-2 h-px w-8 shrink-0 bg-zinc-600" />
          <p className="text-xs uppercase leading-relaxed tracking-[0.08em] text-zinc-400 sm:text-sm">
            Cinematic storytelling and energetic content built around rhythm,
            emotion, and attention.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
        Editing / Sound / Motion / Story
      </div>

      <span className="pointer-events-none absolute -bottom-10 -right-5 select-none font-[family-name:var(--font-syne)] text-[10rem] font-black tracking-[-0.08em] text-white/[0.025]">
        CUT
      </span>
    </section>
  );
}
