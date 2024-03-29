// components/Hero.tsx
"use client"
import { useState, useEffect } from 'react';
import VideoBackground from '../video-bg/VideoBackground'; // Adjust the import path as needed

interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimerState => {
  const eventDate = new Date('June 19, 2025 00:00:00').getTime();
  const currentTime = new Date().getTime();
  const timeLeft = eventDate - currentTime;

  return {
    days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
  };
};

const Hero: React.FC = () => {
  const [timer, setTimer] = useState<TimerState>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimer(calculateTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="relative bg-transparent text-[#EFE1D1] min-h-screen">
      <VideoBackground src="/hero-vid.mp4" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start z-10 p-4 text-center lg:text-left">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-xl ml-4 lg:ml-20">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-4">
            THE ITL CONFERENCE '25
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4">
            Crossing Borders, Breaking Barriers.
          </p>
          <p className="text-md sm:text-lg lg:text-xl font-semibold mb-8">
            April 3-5, 2025 - Calgary, Alberta
          </p>
          {/* Timer Display */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.entries(timer).map(([unit, value]) => (
              <div key={unit} className="bg-[#3D3C42] bg-opacity-80 p-4 rounded-lg shadow-inner">
                <div className="text-4xl font-bold">{value}</div>
                <div className="text-xl capitalize">{unit}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300">Pre-Register Now</a>
            <a href="#" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
