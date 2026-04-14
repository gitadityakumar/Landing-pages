import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MobileFeature from "@/components/MobileFeature";
import IntegrationFeature from "@/components/IntegrationFeature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      
      {/* Centered Overlapping Mockup */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 -mt-32 sm:-mt-48 lg:-mt-72 mb-24 lg:mb-32">
        <Image 
          src="/mockup2.webp" 
          alt="Dashboard Interface" 
          width={1200} 
          height={800}
          className="w-full h-auto shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] rounded-xl lg:rounded-2xl object-cover border-4 border-slate-800/80 mx-auto"
        />
      </div>

      <MobileFeature />
      <IntegrationFeature />
      <Footer />
    </main>
  );
}
