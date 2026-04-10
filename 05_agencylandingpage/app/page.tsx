import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Stats />
      <Process />
      <Portfolio />
      <Footer />
    </>
  );
}
