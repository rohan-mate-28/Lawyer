"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="px-6 md:px-16 py-20 bg-gray-50 min-h-screen">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Adv. Celine Wlasichuk 
      </motion.h1>

      <p className="max-w-2xl mx-auto text-gray-600 text-center mb-12">
        Get in touch for expert legal assistance. Fill out the form or contact directly via phone or email.
      </p>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
