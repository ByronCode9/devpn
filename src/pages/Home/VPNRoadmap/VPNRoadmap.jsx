import React, { useState } from "react";
import { Fade } from 'react-awesome-reveal';

const VPNRoadmap = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  // Card content
  const cardContents = [
    {
      title: "2024 Q2 & Q3",
      content: [
        "Developing the comprehensive GitBook whitepaper",
        "DEVPN foundation conceptualized",
        "Establishing the core project team",
        "Initiation of user hardware development",
        "VPN, cloud storage, and blockchain market research"
      ]
    },
    {
      title: "2024 Q4",
      content: [
        "Community Alpha testing Cloud Storage",
        "Community Alpha testing VPN Networks",
        "Decentralized VPN Node hardware demonstration",
        "DEVPN node waiting list pre - sale",
        "DEVPN White - label sales team formation",
        "Ecosystem auditing initiation",
        "Ecosystem software architecture plan",
        "Enterprise partnership outreach",
        "Initiation of corporate service sales campaign",
        "Initiation of DEVPN Community and social media campaigns",
        "Initiation of investor KOL / media / marketing partnerships",
        "Initiation of node prototype hardware development",
        "Initiation of Tier 1 Alpha group(DAO prelude)",
        "Presentation of DEVPN Home and DEVPN Travel hardware",
        "Public $DEVPN token launch",
        "Public go - live of DEVPN Ecosystem",
        "Public go - live of DEVPN GitBook",
        "Public go - live of DEVPN Privacy Guard",
        "Public go - live of DEVPN Privacy Mail",
        "Public go - live of DEVPN Website V1",
        "Revenue - Share dApp",
        "Revenue - share initiation",
      ]
    },
    {
      title: "2025 Q1",
      content: [
        "dApp Dashboard go - live V1(revenue sharing, alpha governance, node connection)",
        "dApp Dashboard go - live V2(all features)",
        "Data - center lease contracts",
        "Extensive real - world branding and user marketing campaigns",
        "Initiation of Cloud Storage pilot case testing",
        "Initiation of customer service/ support teams",
        "Initiation of referral and reward campaigns",
        "Non - profit partnership outreach",
        "Public go - live DEVPN Cloud Storage",
        "Public go - live DEVPN VPN nodes",
        "Public go - live of DEVPN Ecosystem Website V2",
      ]
    },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-8 pt-10">
      <Fade direction="down">
        <h1 className="text-4xl z-10 w-full md:text-4xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818] my-10">
          Ecosystem Roadmap
        </h1>
      </Fade>
      <div className="tagline w-full text-center">
        <p className="mt-8 mb-2 text-black w-full lg:w-3/5 mx-auto">
          <Fade direction="up">
            Explore our key milestones from development to launch, with updates through our Alpha group and DAO formation.
          </Fade>
        </p>
      </div>
      <Fade direction="left">
      <div className="relative w-full flex justify-center my-10">
        {/* Arrow Shaft */}
        <div className="relative w-full flex items-center justify-between">
          <div className="h-2 rounded bg-blue-500 w-2/3"></div> {/* 3/4 of the arrow in blue */}
          <div className="h-2 bg-gray-300 w-1/3"></div> {/* 1/4 of the arrow in grey */}

          {/* Arrowhead (Triangle) */}
          <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-transparent border-t-blue-500 -rotate-90"></div>
        </div>
      </div>
      </Fade>
      {/* Cards below the arrow */}
      <div className="flex flex-wrap gap-4 justify-between w-full px-4 py-5">
        {/* Card 1 */}
        <div
          className={`flex flex-col w-full h-full sm:w-full md:w-full lg:w-[30%] my-5 bg-[#fff] p-4 transition-all transform cursor-pointer text-gray-800 py-5 px-8 border-gray-400  shadow-sm
            ${selectedCard === 0 ? "scale-105 text-black filter-none bg-blue-50 border-gray-100 border shadow-sm rounded-xl" : " border-gray-100 border shadow-sm rounded-xl scale-100 hover:scale-105 hover:bg-blue-100 bg-blue-50 filter blur-sm"}`}
          onClick={() => setSelectedCard(0)}
        >
          <h3 className="text-xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">{cardContents[0].title}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {cardContents[0].content.map((entry, entryIndex) => (
              <li key={entryIndex} className="text-sm">{entry}</li>
            ))}
          </ul>
        </div>

        {/* Card 2 */}
        <div
          className={`flex flex-col w-full h-full sm:w-full md:w-full lg:w-[30%] my-5  bg-[#fff] p-4 transition-all transform cursor-pointer text-gray-800 py-5 px-8 border-gray-400  shadow-sm
            ${selectedCard === 1 ? "scale-105 text-black filter-none border-gray-100 border shadow-sm rounded-xl" : " border-gray-100 border shadow-sm rounded-xl scale-100 hover:scale-105 filter blur-sm"}`}
          onClick={() => setSelectedCard(1)}
        >
          <h3 className="text-xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">{cardContents[1].title}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {cardContents[1].content.map((entry, entryIndex) => (
              <li key={entryIndex} className="text-sm">{entry}</li>
            ))}
          </ul>
        </div>

        {/* Card 3 */}
        <div
          className={`flex flex-col w-full h-full sm:w-full md:w-full lg:w-[30%] my-5  bg-[#fff] p-4 transition-all transform cursor-pointer text-gray-800 py-5 px-8 border-gray-400  shadow-sm
            ${selectedCard === 2 ? "scale-105 text-black filter-none bg-gray-50 border-gray-100 border shadow-sm rounded-xl" : " border-gray-100 border shadow-sm rounded-xl scale-100 hover:scale-105 hover:bg-gray-100 bg-gray-50 filter blur-sm"}`}
          onClick={() => setSelectedCard(2)}
        >
          <h3 className="text-xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">{cardContents[2].title}</h3>
          <ul className="list-disc pl-6 space-y-2">
            {cardContents[2].content.map((entry, entryIndex) => (
              <li key={entryIndex} className="text-sm">{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VPNRoadmap;
