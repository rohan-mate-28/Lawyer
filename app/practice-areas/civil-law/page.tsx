import { Metadata } from "next";
import CivilLawPage from "./CivilLawPage";
 
// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Civil Law – Adv. Celine Wlasichuk  | Pune Legal Services",
  description:
    "Expert representation in Civil Law cases — disputes, contracts, compensation, and litigation with trusted legal expertise in Pune.",
  openGraph: {
    title: "Civil Law – Adv. Celine Wlasichuk ",
    description:
      "Trusted Civil Law services in Pune — contracts, property disputes, compensation claims handled with professionalism and integrity.",
    url: "https://yourdomain.com/practice-areas/civil-law",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Law – Adv. Celine Wlasichuk ",
    description:
      "Get expert legal assistance in Civil Law cases — Pune-based lawyer providing professional, reliable solutions.",
  },
};

 export default function CivilLaw() {
   return <CivilLawPage />;
 } 