type SpecCardProps = {
  label: string;
  title: string;
  subtitle: string;
};

export function SpecCard({ label, title, subtitle }: SpecCardProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-950 p-4">
      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-600">
        {label}
      </p>
      <p className="mt-1 font-[family-name:var(--font-syne)] text-sm font-bold uppercase text-white">
        {title}
      </p>
      <p className="mt-0.5 font-mono text-[10px] text-zinc-500">{subtitle}</p>
    </div>
  );
}
