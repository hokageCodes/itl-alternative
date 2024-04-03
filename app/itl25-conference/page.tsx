'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import AboutSection from '@/components/about-us/About';
import PartnersSection from '@/components/partners/PartnersSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import Loader from '@/components/loader/Loader';

export default function HomePage() {
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

        <div className='pt-24'>
          {/* Swiper carousel setup */}
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper h-screen"
          >
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <Image src="/hero1.png" alt="Slide 1" layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <Image src="/hero2.png" alt="Slide 2" layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[80vh] relative">
                <Image src="/hero3.png" alt="Slide 3" layout="fill" objectFit="cover" />
              </div>
            </SwiperSlide>
          </Swiper>
          <main className='mt-[-130px]'>
            <AboutSection />
            <PartnersSection />
            <ScheduleSection />
          </main>
        </div>
      )}
    </>
  );
}
