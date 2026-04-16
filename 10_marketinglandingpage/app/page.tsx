import AudiencesSection from "@/components/audiences-section";
import HeroSection from "@/components/hero-section";
import ResultsSection from "@/components/results-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="page-shell">
      <HeroSection />
      <ResultsSection />
      <AudiencesSection />
      <TestimonialsSection />
    </main>
  );
}
