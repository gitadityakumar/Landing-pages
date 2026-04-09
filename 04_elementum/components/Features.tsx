"use client";

import { motion } from "framer-motion";
import { MoveRight, Zap, Shield, Sparkles, Layers } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built on modern architecture ensuring sub-millisecond response times.",
    icon: Zap,
    span: "md:col-span-2 md:row-span-2",
    theme: "from-blue-500/10 to-purple-500/10 border-blue-500/20"
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security protocols out of the box.",
    icon: Shield,
    span: "md:col-span-1 md:row-span-1",
    theme: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
  },
  {
    title: "AI Powered",
    description: "Intelligent features that adapt to your specific workflow.",
    icon: Sparkles,
    span: "md:col-span-1 md:row-span-1",
    theme: "from-orange-500/10 to-red-500/10 border-orange-500/20"
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools in just a few clicks.",
    icon: Layers,
    span: "md:col-span-2 md:row-span-1",
    theme: "from-pink-500/10 to-rose-500/10 border-pink-500/20"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black text-white px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-indigo-400 uppercase"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Everything you need to scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl text-lg mt-4"
          >
            A comprehensively designed set of tools right at your fingertips. Discover what makes Elementum the perfect choice for next-gen products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-8 flex flex-col justify-between hover:border-white/10 transition-colors ${feature.span}`}
            >
              <div className={`absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.theme}`} />
              
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{feature.title}</h3>
                <p className="text-white/60 text-base max-w-sm">{feature.description}</p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors mt-8">
                Explore feature <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
