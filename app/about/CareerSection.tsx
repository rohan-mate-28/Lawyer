"use client";

import { motion } from "framer-motion";

export default function CareerSection() {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Career Highlights
      </h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-semibold text-accent">
            2010 – Graduated in Law
          </h3>
          <p className="text-gray-700">
            Completed LL.B from Pune University, securing top ranks in legal studies.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-accent">
            2012 – Started Practice
          </h3>
          <p className="text-gray-700">
            Began independent practice in civil and criminal law, earning client trust through honesty and results.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-accent">
            2018 – Recognized Excellence
          </h3>
          <p className="text-gray-700">
            Honored with “Excellence in Advocacy” award for outstanding contribution to justice.
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold text-accent">
            2023 – Leading Legal Expert
          </h3>
          <p className="text-gray-700">
            Today, Adv. Patil is recognized as one of the most trusted advocates in Pune and across Maharashtra.
          </p>
        </li>
      </ul>
    </motion.div>
  );
}
