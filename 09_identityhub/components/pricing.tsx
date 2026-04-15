type PricingPlan = {
  name: string;
  description: string;
  price: string;
  highlighted?: boolean;
  features: string[];
};

const plans: PricingPlan[] = [
  {
    name: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Type of threat",
      "Online presence",
      "Access to all modules",
      "Notability",
    ],
  },
  {
    name: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    highlighted: true,
    features: [
      "Type of threat",
      "Online presence",
      "Access to all modules",
      "Notability",
      "Optimize existing websites",
    ],
  },
  {
    name: "Enterprise",
    description: "AI chatbot, personalized recommendations",
    price: "20.99",
    features: [
      "Type of threat",
      "Online presence",
      "Access to all modules",
      "Notability",
    ],
  },
];

function PricingCard({
  name,
  description,
  price,
  highlighted,
  features,
}: PricingPlan) {
  return (
    <article
      className={`rounded-[28px] border px-6 py-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] md:px-7 ${
        highlighted
          ? "border-white/14 bg-[radial-gradient(circle_at_70%_12%,rgba(120,120,182,0.24),rgba(23,20,33,0.98)_55%,rgba(8,7,13,1)_100%)]"
          : "border-white/10 bg-[radial-gradient(circle_at_78%_10%,rgba(116,116,164,0.18),rgba(20,17,31,0.98)_58%,rgba(7,6,11,1)_100%)]"
      }`}
    >
      <h3 className="font-sora text-[28px] font-semibold leading-none text-white md:text-[34px]">
        {name}
      </h3>

      <p className="mt-6 max-w-75 text-[18px] leading-[1.35] text-[#c4bdd4]">
        {description}
      </p>

      <div className="mt-8 flex items-start text-white">
        <span className="mt-2 text-[28px] leading-none">$</span>
        <span className="ml-1 font-sora text-[70px] font-semibold leading-[0.9] tracking-[-0.05em] md:text-[78px]">
          {price}
        </span>
      </div>

      <button
        className={`mt-8 flex w-full items-center justify-center rounded-xl border px-5 py-3 text-[18px] font-medium text-white transition ${
          highlighted
            ? "border-[#de53f1]/35 bg-[linear-gradient(90deg,#2931ff_0%,#e22ac0_100%)] shadow-[0_18px_36px_rgba(112,71,255,0.22)] hover:brightness-110"
            : "border-[#5b2cff] bg-[linear-gradient(180deg,rgba(31,26,44,0.95),rgba(22,18,34,0.95))] shadow-[inset_0_0_0_1px_rgba(226,42,192,0.16)] hover:border-[#a249ff]"
        }`}
      >
        Get Started
      </button>

      <ul className="mt-10 space-y-0">
        {features.map((feature, index) => (
          <li
            key={feature}
            className={`${index !== 0 ? "border-t border-white/18" : ""} flex items-center gap-4 py-5`}
          >
            <span className="h-4 w-4 shrink-0 rounded-full bg-[#6a3cff] shadow-[0_0_16px_rgba(109,68,255,0.4)]" />
            <span className="text-[18px] text-[#d3cedf]">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="mx-auto max-w-310">
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-[28px] border border-[#c58fff]/60 bg-[linear-gradient(180deg,rgba(198,136,255,0.48),rgba(126,77,226,0.22))] px-6 py-3 shadow-[0_12px_32px_rgba(179,106,255,0.3),inset_0_0_12px_rgba(255,255,255,0.16)] backdrop-blur-[10px]">
            <span className="rounded-full bg-[#24202d] px-5 py-1.5 text-[14px] leading-none text-[#e6e0f5]">
              Pricing
            </span>
          </div>

          <h2 className="mt-7 font-sora text-[44px] font-semibold leading-[1.03] tracking-[-0.05em] text-[#dcd9eb] md:text-[56px]">
            Our{" "}
            <span className="bg-[linear-gradient(180deg,#9d6bff_0%,#6c2ee6_100%)] bg-clip-text text-transparent">
              Pricing Package
            </span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
