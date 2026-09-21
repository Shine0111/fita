import { PageShell } from "../../components/page-shell";
import { SiteFooter } from "../../components/site-footer";

export default function ContactPage() {
  return (
    <PageShell current="contact" footer={<SiteFooter />}>
      <section className="grid min-h-0 min-w-0 flex-1 lg:grid-cols-2">
        <div className="flex min-h-0 min-w-0 flex-col justify-between border-b border-[#1e1e21] p-6 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-5">
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              01 // Contact
            </span>

            <div className="flex min-w-0 items-center gap-2">
              <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-red-500" />
              <span className="fita-muted min-w-0 font-mono text-[10px] uppercase tracking-[0.18em]">
                Available for commissions
              </span>
            </div>
          </div>

          <div className="min-w-0 py-12 lg:py-4">
            <h1 className="headline-tight min-w-0 max-w-3xl break-words font-[family-name:var(--font-syne)] text-[clamp(2.75rem,12vw,7rem)] font-extrabold uppercase">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="fita-title-accent">move.</span>
            </h1>
          </div>

          <div className="border-t border-zinc-900 pt-3">
            <p className="fita-muted font-mono text-[10px] uppercase tracking-[0.12em]">
              Video / Film / Creative
            </p>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-between bg-[#0c0c0e] p-6 lg:overflow-y-auto lg:px-8 lg:py-5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              02 // Primary contact
            </span>
          </div>

          <div className="min-w-0 py-12 lg:py-4">
            <p className="fita-muted mb-3 font-mono text-[10px] uppercase tracking-[0.18em]">
              Send an email to
            </p>

            <a
              href="mailto:hello@fita.studio"
              className="block min-w-0 break-all font-[family-name:var(--font-syne)] text-3xl font-extrabold uppercase leading-tight text-white underline decoration-[var(--fita-accent)] decoration-1 underline-offset-8 transition hover:text-[var(--fita-accent)] sm:text-4xl lg:text-[clamp(1.5rem,2.4vw+2vh,2.75rem)]"
            >
              hello@fita.studio
            </a>
          </div>

          <div className="flex min-w-0 flex-col gap-4 border-t border-zinc-900 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="fita-muted font-mono text-[10px] uppercase tracking-[0.14em]">
                WhatsApp priority desk
              </p>
              <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-white">
                +1 (000) 000-0000
              </p>
            </div>

            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noreferrer"
              className="self-start shrink-0 border border-[var(--fita-accent)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fita-accent)] transition hover:bg-[var(--fita-accent)] hover:text-black sm:self-auto"
            >
              Start chat →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
