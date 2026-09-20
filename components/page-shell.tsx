import { SiteHeader, type SiteHeaderCurrent } from "./site-header";

type PageShellProps = {
  current: SiteHeaderCurrent;
  scroll?: boolean;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function PageShell({
  current,
  scroll = false,
  footer,
  children,
}: PageShellProps) {
  return (
    <main
      className={`flex flex-col bg-[#0a0a0a] font-[family-name:var(--font-jakarta)] text-zinc-100 ${
        scroll ? "min-h-screen" : "min-h-screen lg:h-screen"
      }`}
    >
      <div className="shrink-0">
        <SiteHeader current={current} />
      </div>
      <div
        className={`flex flex-1 flex-col ${
          scroll ? "" : "min-h-0 lg:overflow-hidden"
        }`}
      >
        {children}
      </div>
      {footer && <div className="shrink-0">{footer}</div>}
    </main>
  );
}
