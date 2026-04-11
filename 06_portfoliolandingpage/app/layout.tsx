import type { Metadata } from "next";
import {  Prompt } from "next/font/google";
import "./globals.css";


const prompts = Prompt({
  variable : "--font-prompt",
  subsets: ["latin"],
  weight:["100","300","500","700"],
})


export const metadata: Metadata = {
  title: "A landing page ",
  description: "A portfolio website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${prompts.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
