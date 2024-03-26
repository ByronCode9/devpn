import { Fade } from "react-awesome-reveal";
import dotIcon from "../../../../public/favicon.png";

const VPNRoadmap = () => {
  return (
    
    <div id="roadmap" className="my-[150px] relative overflow-hidden">
      {/* Roadmap Title */}
      <h1 className="text-[48px] text-center text-[#181818] ">Navigate through Roadmap</h1>

      {/* Roadmap Items */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10 pt-[75px] sm:flex-row sm:justify-center sm:gap-5">
      <Fade cascade>
        {/* Roadmap Item 1 */}
        
        <div className="grid-col w-full">
          <p className="text-[11px] font-light text-[#181818] mb-5 sm:mb-10">
            END OF Q2 2024
          </p>
          <div className="rounded-xl border border-black/5 shadow bg-white px-5 py-5">
            <div className="flex items-center gap-5 mb-5">
              <img src={dotIcon} className="h-5" alt="" />
              <h1 className="text-[24px] text-[#181818]">STAGE 1</h1>
            </div>
            <h2>Token Listing and Exchange Integration</h2>
            <p className="text-[13px] text-[#181818]">
            We'll ensure our token is listed on major exchanges, making it easier for you to access and trade.
            </p>

            <h2 className="mt-5">Enhanced Platform Security</h2>
            <p className="text-[13px] text-[#181818]">
            Your security is our top priority. We're implementing additional measures to fortify our VPN application against potential threats.
            </p>

            <h2 className="mt-5">User Feedback Integration</h2>
            <p className="text-[13px] text-[#181818]">
            Your feedback matters. We'll be gathering insights from you to improve our platform based on your needs.
            </p>

            <h2 className="mt-5">Marketing and Awareness Campaigns</h2>
            <p className="text-[13px] text-[#181818]">
            Stay tuned for exciting campaigns aimed at raising awareness about our decentralized VPN application and its benefits.
            </p>

            <h2 className="mt-5">Partnership Expansion</h2>
            <p className="text-[13px] text-[#181818] pb-2">
            We're expanding our network by collaborating with blockchain projects, VPN providers, and cybersecurity firms to offer you more value.
            </p>
          </div>
        </div>

        <div className="w-full grid-col">
          <p className="text-[11px] font-light text-[#181818] mb-5 sm:mb-10">
            END OF Q3 2024
          </p>
          <div className="rounded-xl border border-black/5 shadow bg-white px-5 py-5">
            <div className="flex items-center gap-5 mb-5">
              <img src={dotIcon} className="h-5" alt="" />
              <h1 className="text-[24px] text-[#181818]">STAGE 2</h1>
            </div>
            <h2>User ability to participate</h2>
            <p className="text-[13px] text-[#181818]">
            We are enabling users to share their device accesibility and introduce a reward system for node sharing.
            </p>

            <h2 className="mt-5">Geographical Expansion</h2>
            <p className="text-[13px] text-[#181818]">
            We are expanding our reach to new regions to ensure more users can benefit from our decentralized VPN.
            </p>

            <h2 className="mt-5">User Acquisition Strategies</h2>
            <p className="text-[13px] text-[#181818]">
            Expect targeted strategies aimed at growing our user base and increasing adoption
            </p>

            <h2 className="mt-5">Token Utility Enhancement</h2>
            <p className="text-[13px] text-[#181818]">
            We are adding more utility to our token within the ecosystem, making it more valuable for you.
            </p>

            <h2 className="mt-5">Continuous Security Audits</h2>
            <p className="text-[13px] text-[#181818] pb-2">
            Your security remains our priority. We will be conducting regular audits to keep our platform secure.
            </p>
          </div>
        </div>

        <div className="w-full grid-col">
          <p className="text-[11px] font-light text-[#181818] mb-5 sm:mb-10">
            END OF Q4 2024
          </p>
          <div className="rounded-xl border border-black/5 shadow bg-white px-5 py-5">
            <div className="flex items-center gap-5 mb-5">
              <img src={dotIcon} className="h-5" alt="" />
              <h1 className="text-[24px] text-[#181818]">STAGE 3</h1>
            </div>
            <h2>Scalability Improvements</h2>
            <p className="text-[13px] text-[#181818]">
            We are optimizing our infrastructure to accommodate more users and ensure seamless performance.
            </p>

            <h2 className="mt-5">Advanced Privacy Features</h2>
            <p className="text-[13px] text-[#181818]">
            Enjoy enhanced privacy with new features like multi-hop VPN connections and zero-knowledge encryption.
            </p>

            <h2 className="mt-5">Token Staking and Governance</h2>
            <p className="text-[13px] text-[#181818]">
            Get ready to stake your tokens and participate in governance decisions to shape the future of our ecosystem.
            </p>

            <h2 className="mt-5">Research and Development</h2>
            <p className="text-[13px] text-[#181818]">
            We're investing in research and development to bring you the latest innovations in the decentralized VPN space.
            </p>

            <h2 className="mt-5">Year-End Review and Planning</h2>
            <p className="text-[13px] text-[#181818] pb-2">
            As the year comes to a close, we'll review our progress and plan for an even more exciting year ahead.
            </p>
          </div>
        </div>
        </Fade>
      </div>
      
    </div>
  );
};

export default VPNRoadmap;
