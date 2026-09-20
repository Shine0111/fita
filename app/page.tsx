import { Details } from "../components/details";
import { Profile } from "../components/profile";
import { ProjectCarousel } from "../components/project-carousel";
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
        className="grid flex-1 min-h-0 lg:grid-cols-2 lg:grid-rows-2"
      >
        <div className="lg:min-h-0 lg:overflow-y-auto lg:border-r lg:border-b lg:border-[#1e1e21]">
          <Profile />
        </div>
        <div className="lg:min-h-0 lg:overflow-y-auto border-t border-[#1e1e21] lg:border-t-0 lg:border-b">
          <Statement />
        </div>
        <div
          id="about"
          className="lg:min-h-0 lg:overflow-y-auto border-t border-[#1e1e21] lg:border-r"
        >
          <Details />
        </div>
        <section
          id="work"
          className="min-h-[50svh] border-t border-[#1e1e21] bg-[#0a0a0a] p-6 lg:px-8 lg:py-5 lg:min-h-0 lg:overflow-y-auto"
        >
          <ProjectCarousel projects={projects} />{" "}
        </section>
      </div>
      <SiteFooter />
    </PageShell>
  );
}
