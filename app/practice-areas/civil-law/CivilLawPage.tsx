"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
 
 

export default function CivilLawPage() {
  return (
    <section className="min-h-screen bg-[#fdfaf7] px-6 md:px-16 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <Scale size={48} className="text-accent mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Civil Law Services
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Adv. Celine Wlasichuk  provides expert representation in civil law matters,
          including disputes, contracts, property issues, and compensation claims
          across Pune and Maharashtra.
        </p>
      </motion.div>

      {/* What We Handle */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">
          What We Handle
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">Contract Disputes</h3>
            <p>
              Drafting, reviewing, and resolving disputes in contracts — ensuring
              your rights are protected in business and personal agreements.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Property & Real Estate</h3>
            <p>
              Handling ownership disputes, property transfers, boundary issues,
              and landlord-tenant conflicts with precision.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Compensation Claims</h3>
            <p>
              Assisting clients in seeking fair compensation for losses, damages,
              or contractual breaches.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Inheritance & Family Property</h3>
            <p>
              Resolving disputes in inheritance, wills, and property succession
              ensuring legal compliance and fairness.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Why Choose Adv. Celine Wlasichuk ?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Over 10+ years of civil law expertise in Pune courts.</li>
          <li>Personalized attention to each client and case.</li>
          <li>High success rate in dispute resolution and litigation.</li>
          <li>Transparent communication and ethical practice.</li>
          <li>Efficient case management ensuring timely resolution.</li>
        </ul>
      </motion.div>

      {/* How We Work */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          Our Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-gray-700">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">1. Consultation</h3>
            <p>Initial discussion to understand your case and objectives.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">2. Case Evaluation</h3>
            <p>In-depth analysis and legal strategy formulation for your matter.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">3. Representation</h3>
            <p>Professional representation and advocacy in negotiations or court proceedings.</p>
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">FAQs</h2>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-semibold">How long does a civil dispute take?</h3>
            <p>Duration varies by case complexity; we ensure efficient resolution wherever possible.</p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need a lawyer for a contract dispute?</h3>
            <p>Professional legal guidance helps protect your rights and achieve favorable outcomes.</p>
          </div>
          <div>
            <h3 className="font-semibold">Can I claim compensation for damages?</h3>
            <p>Yes, we assist clients in filing claims and representing them to ensure fair compensation.</p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Need Expert Civil Law Advice?
        </h2>
        <p className="text-gray-600 mb-6">
          Schedule a consultation today and let Adv. Celine Wlasichuk  guide you through
          your legal matter with professionalism and expertise.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-accent text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
          >
            Book a Consultation
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
