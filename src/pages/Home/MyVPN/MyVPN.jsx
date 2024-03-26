import { Fade } from "react-awesome-reveal";
import icon1 from "../../../assets/Data Protection-01.svg";
import icon2 from "../../../assets/Data Protection-16.svg";
import icon3 from "../../../assets/Data Protection-03.svg";
import icon4 from "../../../assets/Data Protection-05.svg";
import icon5 from "../../../assets/Data Protection-09.svg";
import icon6 from "../../../assets/Data Protection-12.svg";
import icon7 from "../../../assets/Data Protection-06.svg";
import icon8 from "../../../assets/Data Protection-10.svg";
const MyVPN = () => {
  return (
  <div className="relative w-full py-20">
    
     <div className="flex flex-col justify-between w-full z-50">
     
      <div className="grid lg:grid-cols-4 xl:grid-cols-4 lg:grid-rows-2 gap-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
      <Fade>
        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon1}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l z-50 py-2 font-semibold">AI-Powered Encryption</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
            Our AI-powered encryption employs advanced protocols to secure your online activities, adapting dynamically to evolving threats for proactive cyber protection.
          </p>
        </div>
        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon2}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Lightning-fast Speed and Performance</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          Despite our advanced encryption technology, DEVPN delivers lightning-fast speed and performance, thanks to our decentralized network of servers.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon3}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Fully Decentralized Infrastructure</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
            Our network is distributed across a global ecosystem of nodes, ensuring unparalleled resilience, reliability, and security for your online activities.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon4}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Comprehensive Privacy Protection</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          Our bespoke AI-driven encryption serves to adhere to a strict no-logs policy, ensuring that your browsing history and personal information remain confidential at all times.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon5}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Dynamic Routing</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          AI-driven dynamic routing optimizes VPN connections by automatically selecting the most secure and efficient pathways based on network conditions, traffic load, and latency.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon6}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Self-Healing Network</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          In the event of server failures or network disruptions, AI algorithms dynamically reroute traffic to alternative nodes, ensuring uninterrupted service.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon7}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Dynamic Protocol Optimization</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
           DEVPN utilizes AI algorithms to dynamically optimize VPN protocols based on network conditions and user preferences allowing to browse the web seamlessly.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon8}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Cross-Platform Compatibility</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
            Our software is compatible with a wide range of devices - whether on desktop, mobile, or IoT devices, users can enjoy seamless connectivity and privacy protection with DEVPN.
          </p>
        </div>
        </Fade>
      </div>
      
    </div>
    
  </div>
  );
};

export default MyVPN;
