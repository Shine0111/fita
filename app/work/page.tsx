import { ProjectCarousel } from "../../components/project-carousel";
import { PageShell } from "../../components/page-shell";
import { projects } from "../../lib/projects";
import { SiteFooter } from "../../components/site-footer";

export default function WorkPage() {
  return (
    <PageShell current="work">
      <section className="min-h-[calc(100vh-3.5rem)] p-6 lg:p-10">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#1e1e21] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                01 // Work
              </span>
              <h1 className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-extrabold uppercase text-white">
                Selected Works
              </h1>
            </div>

            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold text-white">
                  {projects.length}
                </span>
                Total Projects
              </div>
              <span className="h-8 w-px bg-zinc-800" />
              <div className="flex flex-col items-end">
                <span className="text-lg font-bold text-white">4K</span>
                Master Delivery
              </div>
            </div>
          </div>

          <div className="flex flex-1 py-8">
            <ProjectCarousel />
          </div>
        </div>
      </section>
      <SiteFooter />
    </PageShell>
  );
}
