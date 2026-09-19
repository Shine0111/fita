import { ProjectCarousel } from "../../components/project-carousel";

export default function WorkPage() {
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
          <a href="/work" className="text-white">
            Work
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>
      <section className="min-h-[calc(100vh-3.5rem)] p-6 lg:p-10">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col">
          <div className="flex items-center justify-between border-b border-[#1e1e21] pb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              01 // Work
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Selected projects
            </span>
          </div>

          <div className="flex flex-1 py-8">
            <ProjectCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
