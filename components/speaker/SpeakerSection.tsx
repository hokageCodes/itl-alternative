"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const SpeakerIntroSection = () => {
  const imageVariants = {
    hidden: { scale: 0.9, rotateY: -30, opacity: 0, x: -50 },
    visible: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative bg-bg overflow-hidden py-12 px-4 md:px-8 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Animated image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
          className="w-full lg:w-1/3 flex-shrink-0"
        >
          <Image src="/Obs.png" alt="Keynote Speaker" width={500} height={500} layout="responsive" />
        </motion.div>

        {/* Text and CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="w-full lg:w-2/3"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Keynote Speaker</h2>
          <p className="mb-6">Discover the insights and expertise of [Speaker Name], a leading figure in [Field/Industry], as they discuss [Topic].</p>
          <Link legacyBehavior href="/speakers" passHref>
            <a className="inline-block bg-ctaBg text-white hover:bg-ctaHover rounded font-bold py-2 px-4 lg:py-3 lg:px-6 rounded transition-colors duration-300">See All Speakers</a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SpeakerIntroSection;
