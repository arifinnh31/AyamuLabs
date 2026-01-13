"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative py-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-tr from-primary to-orange-400 rounded-full mb-6">
             <div className="bg-white dark:bg-surface-dark rounded-full p-2">
                <span className="text-2xl">✨</span>
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display text-gray-900 dark:text-white mb-6 tracking-tight">
            Hi! I&apos;m <span className="text-primary">Ayamu</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Digital Artist, Live2D Rigger, and Professional <br className="hidden md:inline" />
            <span className="text-orange-500 font-bold">Chicken Consumer</span> 🍗
          </p>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-300/10 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
}
