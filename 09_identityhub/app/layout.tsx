import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";
import Aeonik from "next/font/local"

const sora = Sora({
  variable:"--font-sora",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"]
})


const aeonik = Aeonik({
  variable: "--font-aeonik",
  src: [
    {
      path: "../public/fonts/aeonik-regular.ttf",
      weight: "400",
    },
  ],
})



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
