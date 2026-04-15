import CtaFooter from "@/components/ctanfooter";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";
import Service from "@/components/service";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
 <div className="max-w-7xl w-full h-screen flex-1 mx-auto pl-6 pr-6 bg-id-bg">
  <Hero/>
  <Service/>
  <WhyChooseUs/>
  <Pricing/>
  <Testimonials/>
  <CtaFooter/>
 </div>
  );
}
