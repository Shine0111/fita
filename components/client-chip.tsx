export function ClientChip({ name }: { name: string }) {
  return (
    <span className="border border-zinc-800 bg-zinc-950 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400">
      {name}
    </span>
  );
}
