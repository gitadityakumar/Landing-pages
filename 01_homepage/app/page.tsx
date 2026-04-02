import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Works } from "./components/Works";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Works />
      <Footer />
    </main>
  );
}
