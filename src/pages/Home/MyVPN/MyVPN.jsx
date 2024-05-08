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
     
      
      <Fade>
      <div className="grid lg:grid-cols-4 xl:grid-cols-4 lg:grid-rows-2 gap-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 grid-rows-auto">
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
            src={icon2}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Lightning-fast Speed and Performance</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
            DEVPN ensures top-tier speed and performance by leveraging its decentralized infrastructure and incorporating AI for dynamic pattern analysis.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto h-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon1}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l z-50 py-2 font-semibold">True Log Flushing</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
            Unlike other VPN providers who falsely claim to have a No-Log Policy, DEVPN guarantees complete anonymity with its AI-powered Log Flushing technology.
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
          DEVPN combines the benefits of decentralized hardware, AI assistance, military-grade security, and advanced service features into a simple and guaranteed secure user experience.
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
            DEVPN is aimed at billions of potential VPN users and natively supports a wide range of devices, including Windows and Mac computers as well as iOS and Android phones.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon5}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Friends and Family Program</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
           To celebrate our community and its users, DEVPN provides a friends and family referral program in which both parties can receive an additional 30 days of service for free.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon6}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">Decentralised Rewards</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          DEVPN offers a unique revenue-sharing and reward mechanism that provides passive financial incentives to encourage growth, benefiting and rewarding both users and investors.
          </p>
        </div>

        <div className="flex flex-col card shadow border border-black/5 lg:w-auto p-4 rounded-lg bg-[#fff] z-50">
          <img
            className="w-[45px] h-[45px]"
            src={icon7}
            alt="MyVPN"
          />
          <h1 className="text-[#181818] tracking-tight text-l py-2 font-semibold">DEVPN On The Go</h1>
          <p className="text-[#181818] mt-1 text-sm font-light">
          Our first innovative consumer hardware device with the goal of providing the ultimate market-leading solution to the anticipated market demand for mobile VPN devices.
          </p>
        </div>
        </div>
        </Fade>
      
      
    </div>
    
  </div>
  );
};

export default MyVPN;
