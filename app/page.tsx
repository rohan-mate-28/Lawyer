import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PracticeCard from "@/components/PracticeCard";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreasHome from "@/components/PracticeCard";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Adv. Celine Wlasichuk  – Expert Lawyer in Civil & Criminal Law Pune",
  description:
    "Professional legal services in civil, criminal, and property law. Trusted advocate delivering justice with integrity and precision.",
  openGraph: {
    title: "Adv. Celine Wlasichuk  – Legal Expert Pune",
    description:
      "Experienced lawyer in Pune specializing in civil, criminal, and property matters. Get expert legal advice today.",
    url: "https://yourdomain.com",
    siteName: "Adv. Celine Wlasichuk  Law Chambers",
    images: ["/og-image-home.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Celine Wlasichuk  – Legal Expert Pune",
    description:
      "Trusted civil & criminal law advocate offering expert legal representation in Pune and Maharashtra.",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
       <PracticeAreasHome />
      <AboutSection/>
      <ServicesSection />
       
    </div>
  );
}
