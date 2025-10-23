"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const practiceAreas = [
    { name: "Civil Law", href: "/practice-areas/civil-law" },
    { name: "Criminal Law", href: "/practice-areas/criminal-law" },
    { name: "Property Disputes", href: "/practice-areas/property-disputes" },
    { name: "Family Law", href: "/practice-areas/family-law" },
    { name: "Corporate Law", href: "/practice-areas/corporate-law" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary to-[#0d0d0d] text-white pt-16 pb-8">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-4 gap-10 z-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-accent">Adv. Celine Wlasichuk </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            A trusted legal advocate providing professional services in civil, criminal, 
            and property law — driven by justice, integrity, and excellence.
          </p>
          <div className="space-y-2 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Pune, Maharashtra, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> Celine patil.law@gmail.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">Practice Areas</h3>
          <ul className="space-y-2">
            {practiceAreas.map((area) => (
              <li key={area.name}>
                <Link
                  href={area.href}
                  className="text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-accent">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-accent"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-accent"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-accent"
            >
              <Facebook size={20} />
            </motion.a>
          </div>
          <p className="text-gray-400 text-sm">
            Stay updated with our legal insights and latest case studies.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm z-10">
        © {year} Adv. Celine Wlasichuk . All rights reserved. | Designed with ❤️ in India
      </div>
    </footer>
  );
}
