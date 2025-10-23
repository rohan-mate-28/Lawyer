"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/lawyer.jpg" // your image in public folder
            alt="Adv. Celine Wlasichuk "
            width={500}
            height={600}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Bio / Info */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Meet Adv. Celine Wlasichuk 
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Adv. Celine Wlasichuk  is an <strong>expert lawyer in Pune</strong> with years of experience
            in civil law, corporate law, property disputes, and family law. Known for professionalism,
            integrity, and client-focused solutions, he has successfully represented countless clients
            in complex legal matters.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            His credentials include <strong>high-profile cases, certifications, and extensive legal training</strong>,
            ensuring comprehensive legal guidance and strategic advice for every client.
          </p>

          <Link href="/contact">
            <button className="bg-accent text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-600 hover:text-white transition-all">
              Schedule a Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
