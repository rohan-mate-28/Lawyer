"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function PropertyDisputesPage() {
  return (
    <section className="min-h-screen bg-[#f5f7fa] px-6 md:px-16 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <Home size={48} className="text-accent mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Property Dispute Resolution
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Adv. Celine Wlasichuk  offers expert legal support in property disputes,
          helping clients in Pune resolve conflicts related to land, inheritance,
          tenancy, and real estate efficiently and fairly.
        </p>
      </motion.div>

      {/* Types of Property Disputes */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Property Disputes We Handle
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">Land & Property Ownership</h3>
            <p>
              Assistance in disputes over property ownership, title issues,
              registration conflicts, and fraudulent transactions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Boundary & Encroachment</h3>
            <p>
              Legal help in resolving disputes with neighbors over boundaries,
              encroachment, or fencing issues.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Inheritance & Succession</h3>
            <p>
              Guidance in inheritance-related conflicts, partition of property,
              and disputes among family members.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Tenancy & Rental Issues</h3>
            <p>
              Representation for landlord-tenant disputes, eviction cases,
              rental conflicts, and lease agreement disagreements.
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
          <li>Over 10 years of experience in property and real estate law.</li>
          <li>Practical solutions for fast and fair dispute resolution.</li>
          <li>Clear communication and personalized legal strategy.</li>
          <li>Representation in negotiations, mediation, and court proceedings.</li>
          <li>Protection of your legal rights and property interests.</li>
        </ul>
      </motion.div>

      {/* Our Process */}
      <motion.div
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">
          How We Handle Property Disputes
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-gray-700">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">1. Case Assessment</h3>
            <p>We evaluate your property dispute thoroughly and identify key issues.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">2. Legal Strategy</h3>
            <p>Develop a practical and effective approach to resolve disputes efficiently.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">3. Representation & Resolution</h3>
            <p>
              Representation in negotiations, mediation, or court to secure your property rights.
            </p>
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
            <h3 className="font-semibold">How long does a property dispute take?</h3>
            <p>
              Duration depends on dispute complexity; we aim for the fastest, most effective resolution.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can disputes be resolved outside court?</h3>
            <p>
              Yes. We facilitate mediation and negotiation to avoid lengthy court battles whenever possible.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need legal documents for the dispute?</h3>
            <p>
              Yes. Ownership documents, agreements, sale deeds, and correspondence help strengthen your case.
            </p>
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
          Facing a Property Dispute?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact Adv. Celine Wlasichuk  for professional guidance and effective dispute resolution.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-accent text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
          >
            Schedule a Consultation
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
