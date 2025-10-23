import { Metadata } from "next";
import PracticeAreasPage from "./PracticeAreasPage";
 
// ✅ SEO Meta
export const metadata: Metadata = {
  title: "Practice Areas – Adv. Celine Wlasichuk  | Civil, Criminal & Property Law Expert",
  description:
    "Explore legal practice areas offered by Adv. Celine Wlasichuk  — Civil, Criminal, and Property Law with trusted expertise and integrity.",
  openGraph: {
    title: "Practice Areas – Adv. Celine Wlasichuk ",
    description:
      "Adv. Celine Wlasichuk  provides trusted expertise in Civil, Criminal, and Property Law with integrity and personalized attention.",
    url: "https://yourdomain.com/practice-areas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Areas – Adv. Celine Wlasichuk ",
    description:
      "Adv. Celine Wlasichuk  provides trusted expertise in Civil, Criminal, and Property Law with integrity and personalized attention.",
  },
};

 export default function Practice() {
   return <PracticeAreasPage />;
 }