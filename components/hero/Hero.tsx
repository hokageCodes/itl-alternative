"use client"

import React, { useState, useEffect } from 'react';
import VideoBackground from '../video-bg/VideoBackground'; 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  background-color: transparent;
  color: #EFE1D1;
  min-height: 100vh; // Ensure full screen height
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 4rem 1rem; // Increase padding on smaller screens
    top: 20%; // Adjust top position for better visibility
  }
`;

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 36rem; // Limit max width for better readability
  margin: 0 1rem; // Ensure some margin on smaller screens
  display: flex;
  flex-direction: column;
  align-items: center;

  h1, p {
    text-align: center;
  }

  h1 {
    font-size: 1.75rem; // Smaller base size
    @media (min-width: 640px) { font-size: 2.25rem; }
    @media (min-width: 1024px) { font-size: 3rem; } // Scale up for larger screens
  }

  p {
    font-size: 0.875rem; // Smaller base size for paragraphs
    @media (min-width: 640px) { font-size: 1rem; }
    @media (min-width: 1024px) { font-size: 1.25rem; } // Scale up for larger screens
    margin: 1rem 0; // Adds margin around paragraphs for separation
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    width: 100%; // Buttons take full width of the container
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    a {
      margin: 0.5rem 0; // Adds margin around buttons for separation
      @media (min-width: 768px) {
        margin: 0 0.5rem; // Adjusts margin for horizontal layout
      }
    }
  }
`;

const Hero: React.FC = () => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date('June 19, 2025 00:00:00').getTime();
      const currentTime = new Date().getTime();
      const timeLeft = eventDate - currentTime;

      setTimer({
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <VideoBackground src="/hero-video.mp4" />
      <ContentContainer>
        <TextContainer>
          <h1>THE ITL CONFERENCE &#39;25</h1>
          <p>Crossing Borders, Breaking Barriers.</p>
          <p>April 3-5, 2025 - Calgary, Alberta</p>
          <div className="flex justify-around space-x-4 mb-6">
            {Object.entries(timer).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <CircularProgressbar
                  value={value}
                  maxValue={unit === 'days' ? 365 : 60}
                  text={`${value} ${unit}`}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${value / 100})`,
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <p className="mt-2 capitalize">{unit}</p>
              </div>
            ))}
          </div>
          <div className="buttons-container">
            <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300">Pre-Register Now</a>
            <a href="/sponsor" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
          </div>
        </TextContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
