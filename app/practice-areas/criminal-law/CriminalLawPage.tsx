"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gavel } from "lucide-react";
 

export default function CriminalLawPage() {
  return (
    <section className="min-h-screen bg-[#f5f7fa] px-6 md:px-16 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <Gavel size={48} className="text-accent mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Criminal Law Services
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Adv. Celine Wlasichuk  provides professional defense in criminal law matters,
          ensuring your rights are protected during FIRs, arrests, bail hearings,
          and criminal court proceedings across Pune.
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
          Criminal Cases We Handle
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">FIR & Complaint Handling</h3>
            <p>
              Assistance in FIR registration, responding to complaints, and
              protecting clients&apos; legal rights from the beginning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Bail & Arrest Cases</h3>
            <p>
              Expert legal support for bail applications, arrest representation,
              and safeguarding freedom until the trial.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Criminal Litigation</h3>
            <p>
              Representation in criminal court cases including theft, assault,
              fraud, and more to ensure fair trial and defense.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Cyber & White-Collar Crimes</h3>
            <p>
              Specialized guidance for cybercrime, online fraud, financial crimes,
              and corporate legal disputes.
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
          <li>Over 10 years of experience in criminal law defense.</li>
          <li>Confidential, professional, and personalized service.</li>
          <li>High success rate in bail and trial proceedings.</li>
          <li>Clear communication and ethical practice throughout.</li>
          <li>Strategic approach to protect your rights and reputation.</li>
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
            <p>Discuss your case confidentially and understand your legal options.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">2. Strategy Planning</h3>
            <p>We evaluate evidence and plan a strong defense tailored to your case.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-semibold text-lg mb-2">3. Representation</h3>
            <p>
              Full legal representation in police proceedings, court hearings,
              and trial advocacy.
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
            <h3 className="font-semibold">What happens after an FIR is filed?</h3>
            <p>
              We guide you through the investigation process and provide legal
              representation to protect your rights.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I get bail immediately?</h3>
            <p>
              Bail depends on the case type. We assist in filing bail applications
              and representing you in court for early release.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need a lawyer if arrested?</h3>
            <p>
              Yes. Immediate legal assistance ensures your rights are safeguarded
              and prevents procedural mistakes.
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
          Need Expert Criminal Law Assistance?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact Adv. Celine Wlasichuk  for immediate and professional criminal defense.
          Protect your rights and get reliable legal guidance.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-accent text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-red-600 transition-all"
          >
            Schedule a Consultation
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
