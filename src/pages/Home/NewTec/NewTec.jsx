import chip from "../../../assets/Chip.mp4";
import network from "../../../assets/Network.mp4";
import { Fade, Slide } from 'react-awesome-reveal';

const HybridVpn = () => {
  return (
      <div className="relative bg-[#F9FAFC] mt-24 lg:mt-0 z-10 ">
      {/* <Fade> */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl z-10 w-full md:text-4xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">
          Introducing New Technology
          </h1>
          <div className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-5 mt-10">
            <div className="border-black/5 shadow bg-[#fff] rounded-xl p-5 border">
              <div className="flex z-10 justify-center items-center mt-5">
                <video src={chip} loop
                  muted
                  autoPlay
                  playsInline  width={150} height={150} type="video/mp4">
                </video>
              </div>
              <div className="text-center lg:flex lg:flex-col items-center  md:col-span-1 lg:col-span-2 pb-5">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  Artificial Intelligence
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-[90%] justify-center text-justify font-normal">
                  Our storage and VPN networks operate exclusively on premium hardware across both centralized and decentralized networks.
                  DeVPN utilizes AI to optimize our infrastructure, extracting the maximum possible performance and reliability from our hybrid ecosystem.
                </p>
                <p className="text-[#181818] text-[14px] mt-5  md:w-full lg:w-[90%] text-justify font-normal">
                  Our AI analyzes potential security threats and adapts to internet bottlenecks in real time, 
                  solidifying our unique ability to rapidly scale and efficiently manage sudden traffic spikes.
                </p>
              </div>
            </div>

            <div className="border-black/5 shadow bg-[#fff] rounded-xl p-5 border">
              <div className="flex z-10 justify-center items-center mt-5">
                <video src={network} loop
                  muted
                  autoPlay
                  playsInline  width={150} height={150} type="video/mp4">
                </video>
              </div>
              <div className="text-center lg:flex lg:flex-col items-center  md:col-span-1 lg:col-span-2 pb-5">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  Sentry Node Network
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-[90%] text-justify font-normal">
                  DeVPN introduces a VPN innovation that heavily disrupts the current market with unrivaled privacy and broader content access, outclassing the networks of all competitors.
                </p>
                <p className="text-[#181818] text-[14px] mt-5  md:w-full lg:w-[90%] text-justify font-normal">
                  Sentry Nodes guarantee unmatched anonymity for both consumers and commercial operators through dedicated high-speed mobile devices. 
                  Our network provides consumers with broader access to content, bypassing restrictions and driving privacy at full speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </Fade> */}
    </div>
    
  );
};

export default HybridVpn;
