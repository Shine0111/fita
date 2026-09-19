import { SiteHeader, type SiteHeaderCurrent } from "./site-header";

type PageShellProps = {
  current: SiteHeaderCurrent;
  /** true = page is allowed to grow/scroll (About). Default: locked to viewport on desktop. */
  scroll?: boolean;
  children: React.ReactNode;
};

export function PageShell({
  current,
  scroll = false,
  children,
}: PageShellProps) {
  return (
    <main
      className={`min-h-screen bg-[#0a0a0a] font-[family-name:var(--font-jakarta)] text-zinc-100 ${
        scroll ? "" : "lg:h-screen lg:overflow-hidden"
      }`}
    >
      <SiteHeader current={current} />
      {children}
    </main>
  );
}
