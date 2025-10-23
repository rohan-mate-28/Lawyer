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
  }
];

export default function PracticeAreasHome() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gradient-to-b from-[#fdfaf7] to-[#f7f5f2]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Practice Areas
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={area.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="p-8 h-full rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                {area.icon}
                <h3 className="text-2xl font-semibold text-primary">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
                <Link href={`/practice-areas/${area.slug}`}>
                  <Button className="mt-6 bg-accent text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-600 hover:text-white transition-all">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Link href="/practice-areas">
          <Button className="bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all">
            View All Practice Areas
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
