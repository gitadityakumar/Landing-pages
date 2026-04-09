"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-6 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Elementum 2.0 is now live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            Design the future <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
              with Elementum
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-white/60 max-w-xl leading-relaxed"
          >
            Empower your team to build extraordinary digital experiences. The ultimate component library for the modern web, meticulously crafted for perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-semibold">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-12 text-base font-medium border-white/20 hover:bg-white/5 text-white hover:text-white">
              View Components
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 relative w-full aspect-square max-w-lg lg:max-w-none"
        >
          {/* Abstract 3D shape representation using Unsplash abstract image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              alt="Abstract 3D Shape"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
