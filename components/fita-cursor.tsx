"use client";

import ReactCursor from "@holmesdev/cursors";

export function FitaCursor() {
  return (
    <ReactCursor
      showSystemCursor={false}
      mixBlendMode="difference"
      layers={[
        {
          SVG: "arrow",
          fill: "white",
          stroke: "white",
          strokeSize: 1,
          opacity: 0.95,
          size: {
            width: 18,
            height: 18,
          },
          hotspot: {
            x: 0,
            y: 0,
          },
          delay: 0,
          effects: {
            hover: {
              scale: 1.15,
            },
            click: {
              scale: 0.85,
            },
          },
        },
      ]}
    />
  );
}
