import AboutSection from "@/components/about-us/About";
import LandingFaqSection from "@/components/faq/FAQSection";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partners/PartnersSection";
import SpeakerIntroSection from "@/components/speaker/SpeakerSection";
import WhyAttendSection from "@/components/why-attend/WhyAttend";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <WhyAttendSection />
      <SpeakerIntroSection />
      <LandingFaqSection />
    </>
  );
}
