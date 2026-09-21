import Link from "next/link";
import { links } from "../lib/links";

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="fita-muted flex flex-col items-center justify-between gap-3 border-t border-[#1e1e21] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.1em] sm:flex-row lg:px-10">
      <div className="flex items-center gap-3">
        <span className="text-zinc-300">2026 Ed.</span>
        <span className="text-zinc-700">|</span>
        <Link
          href="https://github.com/Shine0111"
          className="transition hover:text-[var(--fita-accent)]"
        >
          Shine Ran.
        </Link>
      </div>
      <div className="flex items-center gap-3">
        {Object.entries(links).map(([key, social], i) => (
          <span key={key} className="flex items-center gap-3">
            {i > 0 && <span className="text-zinc-700">/</span>}

            <a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--fita-accent)]"
            >
              {social.label}
            </a>
          </span>
        ))}
      </div>
    </footer>
  );
}
