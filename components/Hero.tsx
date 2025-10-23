"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 bg-[#fdfaf7]">
      
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-snug"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expert Legal Solutions for Civil, Criminal, Property & Corporate Matters
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Adv. Celine Wlasichuk  provides personalized legal guidance backed by years of experience. 
          Protect your rights and ensure justice with professional support.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/contact">
            <button className="bg-accent text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-600 hover:text-white transition-all">
              Book a Consultation
            </button>
          </Link>
          <Link href="/practice-areas">
            <button className="border-2 border-accent text-accent font-semibold px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all">
              Explore Practice Areas
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
        <motion.div
          className="w-full max-w-lg"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/hero-lawyer.jpg"
            alt="Expert Lawyer"
            width={500}
            height={600}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
