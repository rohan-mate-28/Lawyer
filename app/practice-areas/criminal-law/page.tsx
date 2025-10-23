
import { Metadata } from "next";
import CriminalLawPage from "./CriminalLawPage";
export const metadata: Metadata = {
  title: "Criminal Law – Adv. Celine Wlasichuk  | Pune Legal Services",
  description:
    "Expert criminal defense lawyer in Pune — handling criminal cases, FIRs, arrests, bail, and court representation with professionalism and discretion.",
  openGraph: {
    title: "Criminal Law – Adv. Celine Wlasichuk ",
    description:
      "Professional criminal law services in Pune — defense against FIRs, arrests, criminal charges, and court representation with trusted legal expertise.",
    url: "https://yourdomain.com/practice-areas/criminal-law",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criminal Law – Adv. Celine Wlasichuk ",
    description:
      "Trusted criminal defense services in Pune — get expert legal assistance for FIRs, arrests, bail, and criminal proceedings.",
  },
};

 export default function CrimainalLaw() {
   return <CriminalLawPage />;
 } 