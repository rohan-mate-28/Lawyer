"use client"
// pages/practice-areas/corporate-law.tsx
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
 
export default function CorporateLawPage() {
      return (
            <section className="min-h-screen bg-gradient-to-b from-[#fdfaf7] to-[#f7f5f2] px-6 md:px-16 py-20">
                  {/* Heading */}
                  <motion.h1
                        className="text-4xl md:text-5xl font-bold text-primary text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                  >
                        Corporate Law
                  </motion.h1>

                  {/* Intro */}
                  <motion.p
                        className="max-w-3xl mx-auto text-center text-gray-600 text-lg mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                  >
                        Corporate law governs the formation, operation, and regulation of companies. Adv. Celine Wlasichuk  provides expert legal guidance to businesses of all sizes, ensuring compliance, risk mitigation, and strategic growth.
                  </motion.p>

                  {/* Key Areas */}
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {[
                              {
                                    title: "Company Formation & Registration",
                                    description:
                                          "Assistance in starting new companies, registering LLPs, private and public limited companies, and ensuring legal compliance from day one.",
                                    icon: <Briefcase size={36} className="text-primary" />,
                              },
                              {
                                    title: "Corporate Compliance",
                                    description:
                                          "Ensuring adherence to statutory requirements, corporate governance norms, annual filings, and regulatory compliance.",
                                    icon: <Briefcase size={36} className="text-primary" />,
                              },
                              {
                                    title: "Contract Drafting & Review",
                                    description:
                                          "Preparation and review of commercial contracts, agreements, NDAs, and business deals to protect your company interests.",
                                    icon: <Briefcase size={36} className="text-primary" />,
                              },
                              {
                                    title: "Mergers, Acquisitions & Restructuring",
                                    description:
                                          "Legal support for mergers, acquisitions, corporate restructuring, and other strategic business transactions.",
                                    icon: <Briefcase size={36} className="text-primary" />,
                              },
                              {
                                    title: "Corporate Dispute Resolution",
                                    description:
                                          "Representation in commercial disputes, shareholder conflicts, and corporate litigation with professional expertise.",
                                    icon: <Briefcase size={36} className="text-primary" />,
                              },
                        ].map((item, index) => (
                              <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.03 }}
                              >
                                    <div className="p-8 h-full rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl transition-shadow flex flex-col items-center text-center space-y-4">
                                          {item.icon}
                                          <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                              </motion.div>
                        ))}
                  </div>

                  {/* CTA Section */}
                  <motion.div
                        className="text-center mt-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                  >
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                              Need Corporate Legal Assistance?
                        </h2>
                        <p className="text-gray-600 mb-6">
                              Protect your business, ensure compliance, and resolve corporate disputes with expert guidance. Schedule a consultation today.
                        </p>
                        <a href="/contact" className="inline-block">
                              <button className="bg-accent text-black hover:bg-yellow-600 px-8 py-6 rounded-full shadow-md transition-all text-lg font-semibold">
                                    Book a Consultation
                              </button>
                        </a>
                  </motion.div>
            </section>
      );
}
