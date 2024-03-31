"use client";
import { useState, useEffect } from 'react';
import VideoBackground from '../video-bg/VideoBackground'; 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
    <div className="relative bg-transparent text-[#EFE1D1] min-h-screen">
      <VideoBackground src="/hero-video.mp4" />
      <div className="absolute top-10 left-0 w-full h-full flex items-center z-10 p-4 lg:p-20">
        <div className="bg-black bg-opacity-60 p-8 lg:p-12 rounded-lg shadow-lg max-w-xl space-y-6">
          <h1 className="hero-deco text-3xl sm:text-5xl lg:text-5xl font-bold mb-4">
            THE ITL CONFERENCE &#39;25
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 font-bold">
            Crossing Borders, Breaking Barriers.
          </p>
          <p className="text-md sm:text-lg lg:text-xl font-bold mb-8">
            April 3-5, 2025 - Calgary, Alberta
          </p>
          <div className="flex justify-around space-x-4 mb-6">
            {Object.entries(timer).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center font-black">
                <CircularProgressbar
                  value={value}
                  maxValue={unit === 'days' ? 365 : 60}
                  text={`${value}`}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${value / 100})`,
                    textColor: '#fff',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <p className="text-white mt-2 capitalize">{unit}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4">
            <a href="/pre-register" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-textPrimary font-bold py-3 px-6 rounded-lg transition-colors duration-300">Pre-Register Now</a>
            <a href="/sponsor" className="border border-[#A78295] hover:bg-ctaBg hover:text-bg text-bg font-bold py-3 px-6 rounded-lg transition-colors duration-300">Become a Sponsor</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
