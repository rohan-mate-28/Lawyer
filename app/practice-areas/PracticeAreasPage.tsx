// ✅ CLIENT COMPONENT for Animation
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Gavel, Landmark, Users, Briefcase } from "lucide-react";

const practiceAreas = [
      {
            title: "Civil Law",
            description:
                  "Expert representation for disputes, contracts, compensation claims, and more with complete confidentiality.",
            icon: <Scale size={36} className="text-black" />,
            slug: "civil-law",
      },
      {
            title: "Criminal Law",
            description:
                  "Comprehensive defense and legal strategy in criminal cases ensuring justice and fair representation.",
            icon: <Gavel size={36} className="text-black" />,
            slug: "criminal-law",
      },
      {
            title: "Property Disputes",
            description:
                  "Specialized support for real estate conflicts, ownership disputes, and legal documentation.",
            icon: <Landmark size={36} className="text-black" />,
            slug: "property-disputes",
      },    
      {
            title: "Family Law",
            description: "Guidance in divorce, custody, adoption, and family-related disputes.",
            icon: <Users size={36} className="text-black" />,
            slug: "family-law",
      },
      {
            title: "Corporate Law",
            description: "Expertise in company formation, contracts, compliance, and corporate disputes.",
            icon: <Briefcase size={36} className="text-black" />,
            slug: "corporate-law",
      },
];

export default function PracticeAreasPage() {
      return (
            <section className="min-h-screen bg-gradient-to-b from-[#fdfaf7] to-[#f7f5f2] px-6 md:px-16 py-20">
                  {/* Heading */}
                  <motion.h1
                        className="text-4xl md:text-5xl font-bold text-primary text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                  >
                        Practice Areas
                  </motion.h1>

                  {/* Intro */}
                  <motion.p
                        className="max-w-3xl mx-auto text-center text-gray-600 text-lg mb-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                  >
                        Adv. Celine Wlasichuk  offers a wide range of legal services backed by years of
                        experience, professionalism, and a client-first approach.
                  </motion.p>

                  {/* Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {practiceAreas.map((area, index) => (
                              <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.03 }}
                              >
                                    <Card className="p-8 h-full rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl transition-shadow">
                                          <div className="flex flex-col items-center text-center space-y-4">
                                                {area.icon}
                                                <h3 className="text-2xl font-semibold text-primary">
                                                      {area.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">
                                                      {area.description}
                                                </p>
                                                <Link href={`/practice-areas/${area.slug}`}>
                                                      <Button
                                                            size="lg"
                                                            className="mt-6 bg-accent text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-600 hover:text-white transition-all"
                                                      >
                                                            Learn More
                                                      </Button>
                                                </Link>

                                          </div>
                                    </Card>
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
                              Need Legal Guidance?
                        </h2>
                        <p className="text-gray-600 mb-6">
                              Get personalized legal assistance today. Schedule a consultation to discuss your case.
                        </p>
                        <Link href="/contact">
                              <Button
                                    size="lg"
                                    className="bg-accent text-black hover:bg-yellow-600 px-8 py-6 rounded-full shadow-md transition-all"
                              >
                                    Book a Consultation
                              </Button>
                        </Link>
                  </motion.div>
            </section>
      );
}
