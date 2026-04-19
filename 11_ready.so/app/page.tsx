import Hero from "@/components/hero-section";
import Upgrade from "@/components/meeting-upgrade";
import Meetings from "@/components/superpowered-meetings";
import Ready from "@/components/feeling-ready";
import AllInCalendar from "@/components/all-in-calendar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f0ea] text-[#2e2d30]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-14 mix-blend-screen"
        style={{ backgroundImage: "url('/ready/bg.png')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-115 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(255,255,255,0.45)_40%,transparent_75%)]"
      />
      <div className="relative mx-auto w-full max-w-360">
        <Hero />
        <Meetings/>
        <Upgrade />
        <Ready />
        <AllInCalendar />
      </div>
    </main>
  );
}
