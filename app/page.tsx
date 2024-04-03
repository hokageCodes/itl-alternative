"use client"
import React, { useState, useEffect } from 'react'
import AboutSection from "@/components/about-us/About";
import LandingFaqSection from "@/components/faq/FAQSection";
import Hero from "@/components/hero/Hero";
import PartnersSection from "@/components/partners/PartnersSection";
import SpeakerIntroSection from "@/components/speaker/SpeakerSection";
import WhyAttendSection from "@/components/why-attend/WhyAttend";
import Loader from '@/components/loader/Loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating data loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ): (
        <div>
          <Hero />
          <PartnersSection />
          <AboutSection />
          <WhyAttendSection />
          <SpeakerIntroSection />
          <LandingFaqSection />
        </div>
      )}
    </>
  );
}
