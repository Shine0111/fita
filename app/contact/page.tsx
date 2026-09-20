import { PageShell } from "../../components/page-shell";
import { SiteFooter } from "../../components/site-footer";

export default function ContactPage() {
  return (
    <PageShell current="contact" footer={<SiteFooter />}>
      <section className="grid min-h-0 flex-1 lg:grid-cols-2">
        <div className="flex min-h-0 flex-col justify-between border-b border-[#1e1e21] p-6 lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-8 lg:py-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              01 // Contact
            </span>
            <div className="flex items-center gap-2">
              <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-red-500" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                Available for commissions
              </span>
            </div>
          </div>
          <div className="py-16 lg:py-4">
            <h1 className="headline-tight max-w-3xl font-[family-name:var(--font-syne)] text-[clamp(2.75rem,12vw,7rem)] font-extrabold uppercase lg:text-[clamp(2rem,3.2vw+3vh,5rem)]">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-zinc-500">move.</span>
            </h1>
          </div>
          <div className="border-t border-zinc-900 pt-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
              Video / Film / Creative
            </p>
          </div>
        </div>
        <div className="flex min-h-0 flex-col justify-between bg-[#0c0c0e] p-6 lg:overflow-y-auto lg:px-8 lg:py-5">
          {" "}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
              02 // Primary contact
            </span>
          </div>
          <div className="py-16 lg:py-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Send an email to
            </p>

            <a
              href="mailto:hello@fita.studio"
              className="block break-all font-[family-name:var(--font-syne)] text-3xl font-extrabold uppercase leading-tight text-white underline decoration-1 underline-offset-8 transition hover:text-zinc-400 sm:text-4xl lg:text-[clamp(1.5rem,2.4vw+2vh,2.75rem)]"
            >
              hello@fita.studio
            </a>
          </div>
          <div className="flex flex-col gap-4 border-t border-zinc-900 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
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
              className="self-start border border-zinc-700 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition hover:border-white sm:self-auto"
            >
              Start chat →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
