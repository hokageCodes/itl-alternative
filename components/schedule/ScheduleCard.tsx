// ScheduleCard.tsx

import React from 'react';
import Image from 'next/image';

interface ScheduleCardProps {
  title: string;
  speakerName: string;
  speakerRole: string;
  time: string;
  location: string;
  speakerImage: string;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  speakerName,
  speakerRole,
  time,
  location,
  speakerImage,
}) => {
  return (
    <div className="bg-bg rounded-lg shadow-lg p-4 flex flex-col items-center text-center space-y-4" style={{ width: '300px' }}>
      <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-textPrimary">
        <Image src={speakerImage} alt={speakerName} layout="fill" objectFit="cover" />
      </div>
      <h3 className="font-black text-textPrimary">{title}</h3>
      <p className="text-sm text-textPrimary">{`${speakerName} / ${speakerRole}`}</p>
      <div className="text-xs text-black">
        <p>{time}</p>
        <p>{location}</p>
      </div>
      <button className="bg-ctaBg text-white hover:bg-ctaHover rounded px-4 py-2 text-sm">View More →</button>
    </div>
  );
};

export default ScheduleCard;
