import { Fade } from "react-awesome-reveal";
import iphoneIcon from "../../../assets/iphone14.png";
import bottomBg from "../../../assets/bg.mp4"

const GlobalServer = () => {
  return (
    <div className="hidden md:flex flex-col items-center pt-20 z-20 ">
    <video
      autoPlay
      loop
      muted="true"
      playsInline
      class="absolute z-10 bottom-20 opacity-25"
      >
        <source
          src={bottomBg}
          type="video/mp4"
    />
        Your browser does not support the video tag.
  </video>
      {/* Server features grid */}
      <div className="w-full  flex flex-col items-center justify-center z-20">
        
        <div className=" sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-center space-y-5 sm:space-y-0 md:space-y-0 sm:gap-5 md:gap-8 lg:gap-10 rounded-lg  lg:mb-2 border border-[#ffffff35] bg-[#1a1a1a] py-3 px-20 ">
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
              100+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Countries</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
              1,000+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Servers</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
              100+
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Locations</p>
          </div>
          <div className="text-center">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-white">
              Unlimited
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">Bandwidth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalServer;
