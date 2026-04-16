
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  display: "swap",
  src: [
    { path: "./fonts/manrope-400.ttf", style: "normal", weight: "400" },
    { path: "./fonts/manrope-500.ttf", style: "normal", weight: "500" },
    { path: "./fonts/manrope-600.ttf", style: "normal", weight: "600" },
    { path: "./fonts/manrope-700.ttf", style: "normal", weight: "700" },
    { path: "./fonts/manrope-800.ttf", style: "normal", weight: "800" },
  ],
  variable: "--font-manrope",
});

const ramabhadra = localFont({
  display: "swap",
  src: [{ path: "./fonts/ramabhadra-400.ttf", style: "normal", weight: "400" }],
  variable: "--font-ramabhadra",
});

const ibmPlexMono = localFont({
  display: "swap",
  src: [{ path: "./fonts/ibm-plex-mono-500.ttf", style: "normal", weight: "500" }],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Halal_Lab | Predictive Intelligence Landing Page",
  description:
    "Predictive intelligence for profitable growth, implemented from the supplied Figma design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${ramabhadra.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-(--color-page-bg)">{children}</body>
    </html>
  );
}
