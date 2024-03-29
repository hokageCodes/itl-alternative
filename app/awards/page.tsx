"use client";

import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/hero3.png');
  background-size: cover;
  background-position: center;
`;

const Card = styled.div`
  background: #FEFBF6;
  color: #331D2C;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px; // Ensure space between cards
`;

// Breakpoints for the Masonry layout
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession.",
      icon: "/svgs/Logos.png", // Placeholder path, replace with actual path to icon
    },
    // Add other awards here following the same structure
  ];

  return (
    <>
      <Banner className='mt-[100px]'></Banner>
      <div className="px-6 py-12 bg-ctaBg">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                {/* Example content: */}
                <Image src={award.icon} alt="" width={100} height={50}/>
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </Card>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default AwardsSection;


