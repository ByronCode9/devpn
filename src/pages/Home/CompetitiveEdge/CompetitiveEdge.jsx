import { Fade } from "react-awesome-reveal";
import icon1 from "../../../assets/Data Protection-01.svg";
import icon3 from "../../../assets/Data Protection-03.svg";
import icon8 from "../../../assets/Data Protection-10.svg";

const CompetitiveEdge = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col justify-between w-full z-50">
        <h1 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">DeVPN Competitive Edge</h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-4 grid-cols-1 grid-rows-auto mt-20">
        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon8}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Consumer First</h1>
          <p className="text-[#181818] text-md text-center mt-5">
            Our ecosystem delivers the best solutions fitting consumer needs, regardless of the technology behind them.
          </p>
        </div>

        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon1}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Disruptive & Superior</h1>
          <p className="text-[#181818] text-md text-center mt-5">
            None of the top 100 most popular VPNs can match the privacy guarantees our hybrid ecosystem provides.
          </p>
        </div>

        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon3}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Decentralized Reinvented</h1>
          <p className="text-[#181818] text-md text-center mt-5">
            Eliminating operator risks and domestic hardware that undermine trust in traditional decentralized networks
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdge;
