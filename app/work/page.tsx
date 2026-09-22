import { PageShell } from "../../components/page-shell";
import { projects } from "../../lib/projects";
import { SiteFooter } from "../../components/site-footer";
import { ProjectReel } from "../../components/project-reel";

export default function WorkPage() {
  return (
    <PageShell current="work" footer={<SiteFooter />}>
      <section className="flex min-h-0 flex-1 flex-col p-6 lg:overflow-y-auto lg:p-10">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex flex-col gap-4 border-b border-[#1e1e21] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="mt-1 font-[family-name:var(--font-syne)] text-2xl font-extrabold uppercase text-white">
                Selected Works
              </h1>
            </div>

            <div className="fita-muted flex items-center gap-6 self-end font-mono text-[10px] uppercase tracking-[0.14em]">
              <div className="flex flex-col items-end text-right">
                <span className="text-lg font-bold text-white">
                  {projects.length}
                </span>
                Total Projects
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 py-8">
            <ProjectReel projects={projects} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
