import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MobileFeature from "@/components/MobileFeature";
import IntegrationFeature from "@/components/IntegrationFeature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MobileFeature />
      <IntegrationFeature />
      <Footer />
    </main>
  );
}
