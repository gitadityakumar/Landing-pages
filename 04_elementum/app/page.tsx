import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import Offer from "@/components/Offer";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans scroll-smooth">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <SectionTwo />
        <SectionThree />
        <Offer />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
