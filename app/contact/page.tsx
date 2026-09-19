export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-[family-name:var(--font-jakarta)] text-zinc-100">
      {" "}
      <header className="flex h-14 items-center justify-between border-b border-[#1c1c1f] bg-[#0a0a0a] px-6 lg:px-10">
        {" "}
        <a
          href="/"
          className="font-[family-name:var(--font-syne)] text-xs font-extrabold uppercase tracking-[0.25em] text-white"
        >
          FITA{" "}
        </a>
        <nav className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:gap-8">
          <a href="/work" className="transition hover:text-white">
            Work
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </nav>
      </header>
      <section className="grid min-h-[calc(100vh-3.5rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-between border-b border-[#1e1e21] p-6 lg:border-b-0 lg:border-r lg:p-10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              01 // Contact
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Start a project
            </span>
          </div>

          <div className="py-16">
            <h1 className="headline-tight max-w-3xl font-[family-name:var(--font-syne)] text-[clamp(3.5rem,7vw,7rem)] font-extrabold uppercase">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-zinc-500">move.</span>
            </h1>
          </div>

          <div className="border-t border-zinc-900 pt-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              Video / Film / Creative
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-[#0c0c0e] p-6 lg:p-10">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              02 // Reach out
            </span>
          </div>

          <div className="py-16">
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Have a project in mind? Send a message and tell me what you are
              working on, what you need edited, and where you want the project
              to go.
            </p>

            <a
              href="mailto:hello@fita.studio"
              className="mt-8 inline-block border-b border-white pb-2 font-mono text-sm uppercase tracking-[0.12em] text-white transition hover:text-zinc-400"
            >
              hello@fita.studio →
            </a>
          </div>

          <div className="border-t border-zinc-900 pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
            Open for selected projects
          </div>
        </div>
      </section>
    </main>
  );
}
