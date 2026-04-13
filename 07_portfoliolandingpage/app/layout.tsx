import type { Metadata } from "next";
import {  Prompt } from "next/font/google";
import "./globals.css";


const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight:["100","300","500","700"],
})



export const metadata: Metadata = {
  title: "landing page ",
  description: "Portfolio landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prompt.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
