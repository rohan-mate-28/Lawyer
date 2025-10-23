 
import { Metadata } from "next";
import PropertyDisputesPage from "@/app/practice-areas/property-disputes/PropertyDisputesPage";
 
// ✅ SEO Meta
export const metadata: Metadata = {
  title: "Property Disputes – Adv. Celine Wlasichuk  | Pune Legal Services",
  description:
    "Expert legal assistance for property disputes in Pune — resolving land, property, boundary, inheritance, and real estate conflicts efficiently.",
  openGraph: {
    title: "Property Disputes – Adv. Celine Wlasichuk ",
    description:
      "Professional legal services for property disputes in Pune — land, inheritance, tenancy, boundary, and real estate conflicts handled effectively.",
    url: "https://yourdomain.com/practice-areas/property-disputes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Disputes – Adv. Celine Wlasichuk ",
    description:
      "Trusted property dispute resolution services in Pune — expert advice and representation for land, inheritance, tenancy, and boundary issues.",
  },
};
 
 export default function PropertyDisputes() {
   return <PropertyDisputesPage />;
 } 