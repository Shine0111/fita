import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { FitaCursor } from "../components/fita-cursor";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITA — Video Editor & Filmmaker",
  description:
    "FITA is a video editor, filmmaker and creative working across YouTube, reels, social media, music videos and motion graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${syne.variable}`}>
      <body>
        <FitaCursor />
        {children}
      </body>
    </html>
  );
}
