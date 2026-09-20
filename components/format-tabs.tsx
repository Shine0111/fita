"use client";

import type { ProjectCollection } from "../lib/projects";

type FormatTabsProps = {
  collections: ProjectCollection[];
  activeCollection: ProjectCollection;
  onChange: (collection: ProjectCollection) => void;
};

export function FormatTabs({
  collections,
  activeCollection,
  onChange,
}: FormatTabsProps) {
  return (
    <div
      aria-label="Project collections"
      className="flex gap-5 overflow-x-auto border-b border-zinc-900"
      role="tablist"
    >
      {collections.map((collection) => {
        const isActive = collection === activeCollection;

        return (
          <button
            key={collection}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(collection)}
            className={`shrink-0 border-b-2 pb-3 font-mono text-[10px] uppercase tracking-[0.16em] transition ${
              isActive
                ? "fita-accent-active border-[var(--fita-accent)] text-[var(--fita-accent)]"
                : "border-transparent text-zinc-600 hover:text-zinc-300"
            }`}
          >
            {collection}
          </button>
        );
      })}
    </div>
  );
}
