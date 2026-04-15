import CtaFooter from "@/components/ctanfooter";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Service from "@/components/service";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <div className="mx-auto max-w-7xl px-6">
        <Service />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <CtaFooter />
      </div>
    </div>
  );
}
