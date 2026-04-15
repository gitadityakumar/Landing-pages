import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const aeonik = localFont({
  variable: "--font-aeonik",
  src: [
    {
      path: "../fonts/Aeonik Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Identityhub",
  description: "A landing page about an imaginary brand Identityhub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${aeonik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
