import { Details } from "../components/details";
import { Profile } from "../components/profile";
import { Statement } from "../components/statement";
import { PageShell } from "../components/page-shell";
import { SiteFooter } from "../components/site-footer";
import { projects } from "../lib/projects";
import { ProjectReel } from "../components/project-reel";

export default function Home() {
  return (
    <PageShell current="home">
      <div
        id="top"
        className="grid min-h-0 flex-1 lg:grid-cols-[2fr_3fr] lg:grid-rows-[2fr_3fr]"
      >
        <div className="min-h-0 min-w-0 lg:border-r lg:border-b lg:border-[#1e1e21]">
          <Profile />
        </div>
        <div className="min-h-0 min-w-0 border-t border-[#1e1e21] lg:border-t-0 lg:border-b">
          <Statement />
        </div>
        <div
          id="about"
          className="flex min-h-0 min-w-0 flex-col border-t border-[#1e1e21] lg:justify-end lg:border-r"
        >
          <Details />
        </div>
        <section
          id="work"
          className="flex min-h-0 min-w-0 flex-col overflow-hidden border-t border-[#1e1e21] bg-[#0a0a0a] p-6 lg:px-8 lg:py-5"
        >
          <ProjectReel projects={projects} />
        </section>
      </div>
      <SiteFooter />
    </PageShell>
  );
}
