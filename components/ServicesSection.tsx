"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Star, FileText } from "lucide-react";

const services = [
  {
    title: "Years of Experience",
    description: "Decades of experience handling civil, corporate, property, and criminal law cases.",
    icon: <UserCheck size={36} className="text-black" />,
  },
  {
    title: "Personalized Guidance",
    description: "Tailored legal strategies to suit each client's unique situation and needs.",
    icon: <FileText size={36} className="text-black" />,
  },
  {
    title: "High Success Rate",
    description: "Proven track record of successful case outcomes and satisfied clients.",
    icon: <Star size={36} className="text-black" />,
  },
  {
    title: "Confidentiality",
    description: "Complete discretion and privacy in handling all legal matters.",
    icon: <ShieldCheck size={36} className="text-black" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Adv. Celine Wlasichuk  provides expert legal guidance, personalized solutions, and ensures client confidentiality.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
