import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Team />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
