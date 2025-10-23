"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <motion.div
      className="bg-gray-50 p-10 rounded-2xl text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">
        Legal Philosophy
      </h2>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        Adv. Celine Wlasichuk  believes that justice begins with understanding.
        His approach blends empathy, research, and strategy — ensuring every client feels heard, respected, and protected.
      </p>
    </motion.div>
  );
}
