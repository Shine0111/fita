import { AboutDossier } from "../../components/about-dossier";
import { PageShell } from "../../components/page-shell";
import { SiteFooter } from "../../components/site-footer";

export default function AboutPage() {
  return (
    <PageShell current="about" scroll footer={<SiteFooter />}>
      <AboutDossier />
    </PageShell>
  );
}
