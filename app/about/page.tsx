import { Metadata } from "next";
import HeroSection from "@/app/about/HeroSection";
import CareerSection from "./CareerSection";
import PhilosophySection from "./PhilosophySection";
// import CareerSection from "./CareerSection"; // client component for motion
// import PhilosophySection from "./PhilosophySection"; // client component

export const metadata: Metadata = {
  title: "About Adv. Celine Wlasichuk  – Expert Lawyer in Civil & Criminal Law",
  description:
    "Learn about Adv. Celine Wlasichuk , a trusted legal advocate providing expert solutions in civil, criminal, and property law with integrity and dedication.",
  openGraph: {
    title: "About Adv. Celine Wlasichuk  – Expert Lawyer",
    description:
      "Adv. Celine Wlasichuk  provides expert legal solutions in civil, criminal, and property law. Trusted advocate with years of experience.",
    url: "https://yourdomain.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Adv. Celine Wlasichuk  – Expert Lawyer",
    description:
      "Adv. Celine Wlasichuk  provides expert legal solutions in civil, criminal, and property law. Trusted advocate with years of experience.",
  },
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <HeroSection />
      <CareerSection />
      <PhilosophySection />
    </div>
  );
}
 