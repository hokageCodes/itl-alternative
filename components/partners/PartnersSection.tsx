// PartnersSection.tsx
import React from 'react';
import PartnerLogo from './PartnerLogo'; // Ensure PartnerLogo.tsx is correctly referenced

// Define your partner data
const partners = [
  {
    name: 'Google',
    logoSrc: '/svgs/anothest.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/svgs/Logos.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/svgs/another.png',
    url: 'https://google.com',
  },
  {
    name: 'Google',
    logoSrc: '/svgs/another.png',
    url: 'https://google.com',
  },
  // Add more partners as needed
];

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-[#FEFBF6] py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#7F5283]">Conference Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
