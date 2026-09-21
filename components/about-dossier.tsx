import { SpecCard } from "./spec-card";
import { ClientChip } from "./client-chip";

const specs = [
  { label: "Computation", title: "M2 Ultra", subtitle: "Mac Studio 128GB" },
  { label: "Grading", title: "DaVinci 18", subtitle: "Studio / Micro Panel" },
  { label: "Acoustics", title: "Genelec", subtitle: "8040B Active Pair" },
  { label: "Reference", title: "4K OLED Ref", subtitle: "Calibrated DCI-P3" },
];

const clients = [
  "Nike",
  "Audi",
  "Red Bull",
  "Sony Music",
  "Boiler Room",
  "Highsnobiety",
];

export function AboutDossier() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-12 lg:p-10">
      {/* Left: portrait + identity */}
      <div className="flex flex-col overflow-hidden border border-zinc-800 bg-zinc-950 lg:col-span-5 min-w-0">
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <span className="fita-muted font-mono text-[10px] uppercase tracking-[0.14em]">
            Canvas 01
          </span>
          <span className="font-mono text-[10px] text-zinc-300">
            Arri Raw / 800 ASA
          </span>
        </div>

        <div className="relative aspect-[4/4] w-full overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#777_0,#272727_28%,#111_62%,#090909_100%)] grayscale" />
          <div className="absolute inset-x-4 bottom-4">
            <span className="block font-[family-name:var(--font-syne)] text-xl font-bold uppercase text-white">
              FITA
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
              Video Editor
            </span>
          </div>
        </div>

        <div className="fita-muted space-y-2 border-t border-zinc-900 p-4 font-mono text-[10px] uppercase tracking-[0.1em]">
          <p>FITA // b. 2003</p>
          <div className="flex flex-wrap gap-4">
            <span>Awards are coming soon</span>
          </div>
        </div>
      </div>

      {/* Right: philosophy, spec grid, clients, CTA */}
      <div className="flex flex-col gap-8 lg:col-span-7">
        <div>
          <h1 className="mt-2 max-w-xl font-[family-name:var(--font-syne)] text-[clamp(1.75rem,6vw,2.25rem)] font-extrabold uppercase leading-tight text-white wrap-break-word">
            Pacing is an{" "}
            <span className="fita-title-accent">emotional architecture.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
            I am a video editor focused on producing clean, modern, and visually
            engaging content for brands, creators, and small businesses.
            <br />
            My work ranges from short-form social content to podcasts and
            cinematic sequences, always with an emphasis on clarity, rhythm, and
            strong visual identity.I handle both editing and filming, using
            tools like DaVinci Resolve, Premiere Pro, and CapCut.
          </p>
        </div>

        <blockquote className="border-l-2 border-zinc-700 bg-zinc-950 py-3 pl-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">
            Maxim
          </p>
          <p className="mt-1 font-[family-name:var(--font-syne)] text-lg font-bold uppercase text-white">
            &ldquo;Every frame has a heartbeat. Cutting at the wrong millisecond
            destroys the rhythm.&rdquo;
          </p>
        </blockquote>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            My Edit Suite
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {specs.map((spec) => (
              <SpecCard key={spec.label} {...spec} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
            Selected Clients
          </p>
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => (
              <ClientChip key={client} name={client} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-4">
          <p className="fita-muted font-mono text-[10px] uppercase tracking-[0.12em]">
            I try to reply within 24 hours
          </p>
          <a
            href="mailto:fitahiantsoarazaf@gmail.com"
            className="border border-[var(--fita-accent)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--fita-accent)] transition hover:bg-[var(--fita-accent)] hover:text-black"
          >
            Start project
          </a>
        </div>
      </div>
    </div>
  );
}
