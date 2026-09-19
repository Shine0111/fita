import { Details } from "../../components/details";

export default function AboutPage() {
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
          <a href="/about" className="text-white">
            About
          </a>
          <a href="/contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>
      <section className="min-h-[calc(100vh-3.5rem)] border-b border-[#1e1e21]">
        <div className="border-b border-[#1e1e21] px-6 py-5 lg:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            01 // About
          </span>
        </div>

        <div className="min-h-[calc(100vh-8rem)]">
          <Details />
        </div>
      </section>
    </main>
  );
}
