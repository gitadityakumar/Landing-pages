import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({
  variable:"--font-raleway",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Landing page",
  description: "A Learning app landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
