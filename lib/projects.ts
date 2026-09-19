export type Project = {
  title: string;
  category: string;
  format: string;
  accent: string;
  tag: string; // e.g. "LIVE REEL"
  duration: string; // e.g. "03:42 // 4K"
  credit: string; // e.g. "SOUND DESIGN + EDIT"
};

export const projects: Project[] = [
  {
    title: "Project One",
    category: "REEL / SOCIAL",
    format: "9:16",
    accent: "from-zinc-800 via-zinc-950 to-black",
    tag: "LIVE REEL",
    duration: "00:42 // 4K",
    credit: "SOUND DESIGN + EDIT",
  },
  {
    title: "Project Two",
    category: "YOUTUBE / VLOG",
    format: "16:9",
    accent: "from-stone-700 via-zinc-950 to-black",
    tag: "LIVE REEL",
    duration: "00:42 // 4K",
    credit: "SOUND DESIGN + EDIT",
  },
  {
    title: "Project Three",
    category: "EVENT HIGHLIGHT",
    format: "16:9",
    accent: "from-neutral-700 via-neutral-950 to-black",
    tag: "LIVE REEL",
    duration: "00:42 // 4K",
    credit: "SOUND DESIGN + EDIT",
  },
  {
    title: "Project Four",
    category: "MOTION / EDIT",
    format: "9:16",
    accent: "from-zinc-600 via-zinc-950 to-black",
    tag: "LIVE REEL",
    duration: "00:42 // 4K",
    credit: "SOUND DESIGN + EDIT",
  },
];
