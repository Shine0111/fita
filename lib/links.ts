export type Link = {
  label: string;
  url: string;
};

export const links = {
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fitahiantsoa-r-44963a313/",
  },
  instagram: {
    label: "Instagram",
    url: "https://instagram.com/",
  },
  youtube: {
    label: "YouTube",
    url: "https://youtube.com/",
  },
} satisfies Record<string, Link>;
