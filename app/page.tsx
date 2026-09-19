import { Details } from "../components/details";
import { Profile } from "../components/profile";
import { ProjectCarousel } from "../components/project-carousel";
import { Statement } from "../components/statement";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] font-(family-name:--font-jakarta) text-zinc-100 lg:h-screen lg:overflow-hidden">
      <header className="flex h-14 items-center justify-between border-b border-[#1c1c1f] bg-[#0a0a0a] px-6 lg:px-10">
        <a
          href="#top"
          className="font-(family-name:--font-syne) text-xs font-extrabold uppercase tracking-[0.25em] text-white"
        >
          FITA
        </a>

        <nav className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:gap-8">
          <a href="work" className="transition hover:text-white">
            Work
          </a>
          <a href="about" className="transition hover:text-white">
            About
          </a>
          <a href="contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <div
        id="top"
        className="grid lg:h-[calc(100vh-3.5rem)] lg:grid-cols-2 lg:grid-rows-2"
      >
        <div className="lg:border-r lg:border-b lg:border-[#1e1e21]">
          <Profile />
        </div>

        <div className="border-t border-[#1e1e21] lg:border-t-0 lg:border-b">
          <Statement />
        </div>

        <div id="about" className="border-t border-[#1e1e21] lg:border-r">
          <Details />
        </div>

        <section
          id="work"
          className="min-h-[50svh] border-t border-[#1e1e21] bg-[#0a0a0a] p-6 lg:min-h-0 lg:p-10"
        >
          <ProjectCarousel />
        </section>
      </div>
    </main>
  );
}
