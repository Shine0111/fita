const NAV_ITEMS = [
  { key: "work", href: "/work", label: "Work" },
  { key: "about", href: "/about", label: "About" },
  { key: "contact", href: "/contact", label: "Contact" },
] as const;

export type SiteHeaderCurrent = "home" | (typeof NAV_ITEMS)[number]["key"];

export function SiteHeader({ current }: { current: SiteHeaderCurrent }) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[#1c1c1f] bg-[#0a0a0a] px-6 lg:px-10">
      <div className="flex items-center gap-3">
        <a
          href="/"
          className="font-[family-name:var(--font-syne)] text-xs font-extrabold uppercase tracking-[0.25em] text-white"
        >
          FITA
        </a>
        <span className="hidden items-center gap-2 border-l border-zinc-800 pl-3 sm:flex">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
            Available for select projects
          </span>
        </span>
      </div>

      <nav className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-400 sm:gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={
              current === item.key
                ? "border-b border-white pb-0.5 text-white"
                : "transition hover:text-white"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
