const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="fita-muted flex flex-col items-center justify-between gap-3 border-t border-[#1e1e21] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.1em] sm:flex-row lg:px-10">
      <div className="flex items-center gap-3">
        <span className="text-zinc-300">2024 Ed.</span>
        <span className="text-zinc-700">/</span>
        <span>Berlin &amp; Global</span>
      </div>
      <div className="flex items-center gap-3">
        {SOCIALS.map((social, i) => (
          <span key={social.href} className="flex items-center gap-3">
            {i > 0 && <span className="text-zinc-700">/</span>}

            <a
              href={social.href}
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
