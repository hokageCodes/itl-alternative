``// PartnerLogo.tsx
import Image from 'next/image';
import React from 'react';

interface PartnerLogoProps {
  name: string;
  logoSrc: string;
  url: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logoSrc, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="mx-4 my-2 hover:scale-110 transition-transform duration-300">
      <Image src={logoSrc} alt={name} width={120} height={60} objectFit="contain"/>
    </a>
  );
};

export default PartnerLogo;
