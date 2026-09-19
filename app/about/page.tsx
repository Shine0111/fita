import { AboutDossier } from "../../components/about-dossier";
import { PageShell } from "../../components/page-shell";
import { SiteFooter } from "../../components/site-footer";

export default function AboutPage() {
  return (
    <PageShell current="about" scroll>
      <div className="border-b border-[#1e1e21] px-6 py-5 lg:px-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          01 // About
        </span>
      </div>
      <AboutDossier />
      <SiteFooter />
    </PageShell>
  );
}
