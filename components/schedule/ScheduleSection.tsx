// ScheduleSection.tsx
"use client"
import React, { useState } from 'react';
import ScheduleTab from './ScheduleTab';
import ScheduleCard from './ScheduleCard';
import { motion } from 'framer-motion';

const ScheduleSection: React.FC = () => {
  const [activeTabDate, setActiveTabDate] = useState<string>('January 14, 2019');

  const tabs = [
    { day: 'Thursday', date: 'April 3, 2025' },
    { day: 'Friday', date: 'April 4, 2025' },
    { day: 'Saturday', date: 'April 5, 2025' },
  ];

  // Sample data for the events. This would typically come from an API or a data file.
  const allEvents = [
    // Events for Monday
    {
      title: 'Dealing with Difficult People',
      speakerName: 'Gary Armstrong',
      speakerRole: 'CEO of Confer',
      time: '10:30 - 11',
      date: 'April 3, 2025',
      location: 'Mountain Resort, Phoenix, USA',
      speakerImage: '/speakers/gary-armstrong.jpg',
    },
    {
      title: 'Innovative Design Workshop',
      speakerName: 'Jane Doe',
      speakerRole: 'Lead Designer at Creatives',
      time: '12:00 - 13:30',
      date: 'April 4, 2025',
      location: 'Design Hub, Calgary, Alberta',
      speakerImage: '/speakers/jane-doe.jpg',
    },
    // ... other events for Monday

    // Events for Tuesday
    {
      title: 'Future of Technology',
      speakerName: 'John Smith',
      speakerRole: 'CTO of TechFuture',
      time: '09:00 - 10:30',
      date: 'April 5, 2025',
      location: 'Innovation Center, Calgary, Alberta',
      speakerImage: '/speakers/john-smith.jpg',
    },
    // ... other events for Tuesday

    // Events for Wednesday
    {
      title: 'Panel Discussion: Legal Trends',
      speakerName: 'Emily Johnson',
      speakerRole: 'Legal Analyst',
      time: '14:00 - 15:30',
      date: 'January 16, 2019',
      location: 'Legal Center, Phoenix, USA',
      speakerImage: '/speakers/emily-johnson.jpg',
    },
    // ... other events for Wednesday
  ];

  // Filter events for the currently active tab
  const eventsToShow = allEvents.filter((event) => event.date === activeTabDate);

  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-ctaBg text-bg py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold">Schedule Plan</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-8 space-x-2"
        >
          {tabs.map((tab) => (
            <ScheduleTab
              key={tab.date}
              day={tab.day}
              date={tab.date}
              isActive={activeTabDate === tab.date}
              onClick={() => setActiveTabDate(tab.date)}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {eventsToShow.map((event, index) => (
            <ScheduleCard
              key={index}
              title={event.title}
              speakerName={event.speakerName}
              speakerRole={event.speakerRole}
              time={event.time}
              location={event.location}
              speakerImage={event.speakerImage}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ScheduleSection;
