import ClientLogoSection from "@/components/home/ClientLogoSection";
import FAQSection from "@/components/home/FAQSection";
import FeatureSection from "@/components/home/FeatureSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import NavBar from "@/components/home/NavBar";
import PricingSection from "@/components/home/PricingSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 text-black dark:bg-black dark:text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <NavBar />
      <HeroSection />
      <ClientLogoSection />
      <FeatureSection />
      <ShowcaseSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default page;
