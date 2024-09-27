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
                  Our VPN and storage networks operate exclusively on premium hardware, both utilizing AI to achieve superior efficiency compared
                  to competitors by delivering optimized performance and reliability.
                </p>
                <p className="text-[#181818] text-[14px] mt-5  md:w-full lg:w-[90%] text-justify font-normal">
                  By analyzing and adapting to potential threats and internet bottlenecks in real time, our AI further solidifies DEVPN's unique capability
                  to rapidly scale and efficiently manage sudden traffic spikes.
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
                  DEVPN introduces an innovation that heavily disrupts the VPN market by offering superior privacy and content access compared to
                  competitors in both decentralized and corporate infrastructures.
                </p>
                <p className="text-[#181818] text-[14px] mt-5  md:w-full lg:w-[90%] text-justify font-normal">
                  Powered by a commercial operator framework, Sentry Nodes guarantee unmatched anonymity on specialized hardware, enabling
                  high-speed global internet access and rapid network expansion.
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
