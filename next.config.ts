import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fita",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
