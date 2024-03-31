"use client"
import React from 'react';
import styled from 'styled-components';
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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; // Keeps cards evenly spaced
  margin: 0 auto;
  max-width: 1200px; // Adjust based on your design preference
`;

const Card = styled.div`
  width: 45%; // Adjusts each card to take up roughly half of the container width
  background: #FEFBF6;
  color: #331D2C;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px; // Spacing between rows of cards
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Diversity Champion",
      description: "Honoring an individual or organization that has shown outstanding dedication to promoting equity, diversity and inclusion within the legal profession, particularly in supporting internationally trained lawyers. This can also be awarded to a law firm that has demonstrated outstanding commitment to diversity and inclusion, particularly in supporting and advancing the careers of internationally trained lawyers within their organization.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 2,
      title: "Community Impact Award",
      description: "Awarded to an ITL who has demonstrated exceptional dedication to serving and making a positive impact in their local community through advocacy, legal advocacy, pro bono work, or community initiatives. This will also be awarded to an ITL who has displayed exemplary advocacy skills and commitment to justice, making a significant impact in advocating for ITLs, their clients and communities", 
      icon: "/plaque.png",
    },
    {
      id: 3,
      title: "Leadership in Legal Education Award",
      description: "Honoring an individual or institution that has shown outstanding leadership and innovation in providing educational support and resources for internationally trained lawyers to integrate into the Canadian legal profession. This can also be awarded to an ITL who has made exceptional contributions to legal scholarship through their research, publications, and academic endeavors within the Canadian legal education system. This individual demonstrates excellence in advancing legal knowledge, promoting critical thinking, and shaping discourse within their field of expertise. Their scholarly work enhances the academic community, enriches legal education, and contributes to the development of legal theory and practice in Canada.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 4,
      title: "Trailblazer in Technology Award",
      description: "Recognizing an ITL who has leveraged technology and innovation to advance the practice of law, improve access to justice, or enhance legal services delivery in Canada. This also includes groundbreaking legal solutions developed or implemented by an internationally trained lawyer or legal team to address complex challenges in the Canadian legal landscape.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 5,
      title: "Lifetime Achievement Award",
      description: "Presented to an esteemed ITL who has made a lasting impact on promoting diversity, equity, and inclusion within the Canadian legal profession throughout their career.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 6,
      title: "Rising Star Award",
      description: "Acknowledging an up-and-coming ITL who shows exceptional promise, leadership, and dedication to advancing international law and diplomacy within the Canadian legal context.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 7,
      title: "Mentorship Excellence Award",
      description: "Presented to a law firm, individual or organization that has excelled in providing mentorship programs and opportunities for internationally trained lawyers to enhance their professional development and integration into the Canadian legal profession.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 8,
      title: "Innovative Recruitment Award",
      description: "Awarded to a law firm that has implemented innovative and effective strategies to recruit, retain, and support internationally trained lawyers within their organization, fostering diversity and talent acquisition.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 9,
      title: "Entrepreneurial Excellence Award",
      description: "This award honors an ITL who has demonstrated exceptional entrepreneurial spirit, innovation, and leadership in the business sector. Whether through founding a startup, leading a successful business venture, or driving innovation within an established company, this individual exemplifies excellence in business acumen, strategic thinking, and transformative leadership. Their entrepreneurial endeavors contribute to economic growth, job creation, and industry innovation, showcasing the valuable skills and expertise of internationally trained lawyers in the Canadian business landscape.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
    {
      id: 10,
      title: "The Nobel Award:",
      description: "This is the flagship award of the year. This award recognizes an outstanding ITL who has shown exemplary leadership, advocacy, and dedication to advancing the interests and rights of internationally trained lawyers within the Canadian legal profession. This ITL would have displayed exceptional mentorship qualities and be a model and exemplary ITL in the Canadian Legal community.",
      icon: "/plaque.png", // Placeholder path, replace with actual path to icon
    },
  ];
  return (
    <>
      <Banner></Banner>
      <div className="px-6 py-12 text-ctaBg text-textPrimary">
        <h2 className="text-center text-3xl font-bold mb-8">The ITL Conference &#39;25 Awards</h2>
        <p className="text-center mb-12 max-w-[700px] ml-[380px]">At the upcoming ITL Conference, we will be recognizing the remarkable achievements and
        contributions of internationally trained lawyers (ITLs) and the stakeholders, community partners
        and law firms that support them. These awards celebrate excellence, innovation, and leadership
        within the Canadian legal profession, fostering a culture of equity, diversity, inclusion, and
        collaboration.
        </p>
        <p className="text-center mb-12 max-w-[700px] ml-[380px]">We invite ITLs, law firms, and legal professionals across Canada to participate in this prestigious
        recognition of talent and dedication. Below are the award categories designed to honor outstanding
        individuals, organizations, and initiatives that have made a significant impact on the Canadian legal
        landscape:
        </p>
        <CardsContainer>
          {awards.map((award, index) => (
            <Card key={index}>
              <Image src={award.icon} alt={award.title} width={100} height={50} />
              <h4 className="mt-4 font-bold">{award.title}</h4>
              <p className="mt-2 text-center">{award.description}</p>
            </Card>
          ))}
        </CardsContainer>
        <div className="text-center mt-12">
          <a href="http://www.itlconference.ca" className="inline-block bg-ctaBg text-white font-bold py-2 px-4 rounded hover:bg-ctaHover transition-colors duration-300">Please visit www.itlconference.ca to nominate</a>
        </div>
      </div>
    </>
  );
};

export default AwardsSection;
