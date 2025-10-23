"use client";
import { motion } from "framer-motion";
import Image from "next/image";
 
export default function HeroSection() {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Adv. Celine Wlasichuk 
      </motion.h1>

      {/* Hero Section with Image */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="md:w-1/3">
          <Image
            src="/lawyer.jpg"
            alt="Adv. Celine Wlasichuk "
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
            Adv. Celine Wlasichuk  is a highly respected legal advocate with extensive experience
            in civil, criminal, and property law. Known for integrity, dedication, and a
            personal approach to every client.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            He continuously updates his knowledge to provide modern, effective solutions
            for all legal challenges.
          </p>
        </div>
      </motion.div>

      {/* Career Milestones */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Career Highlights
        </h2>
        <ul className="space-y-6">
          <li>
            <h3 className="text-xl font-semibold text-accent">2010 – Graduated in Law</h3>
            <p className="text-gray-700">
              Completed LL.B from [University Name], securing top ranks.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-accent">2012 – Started Practice</h3>
            <p className="text-gray-700">
              Began practicing civil and criminal law in Pune.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-accent">2018 – Recognized Awards</h3>
            <p className="text-gray-700">
              Received “Excellence in Advocacy” award from [Legal Association Name].
            </p>
          </li>
        </ul>
      </motion.div>

      {/* Legal Philosophy */}
      <motion.div
        className="bg-gray-50 p-10 rounded-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-6">Legal Philosophy</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Adv. Patil believes that every client deserves personalized attention, thorough
          understanding of their case, and strategic representation.
        </p>
      </motion.div>
    </div>
  );
}
