import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import DesignProjectsSection from "@/components/sections/DesignProjectsSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TravelSection from "@/components/sections/TravelSection";

export default function Home() {
  return (
    <>
      <OverviewSection />
      <AboutSection />
      <ServicesSection />
      <DesignProjectsSection />
      <TravelSection />
      <ContactSection />
    </>
  );
}
