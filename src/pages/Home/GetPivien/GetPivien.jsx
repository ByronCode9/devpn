import mackbookIphone from "../../../assets/main.png";
import { FaArrowRight } from "react-icons/fa6";
import "./GetPivien.css";
import apple from '../../../assets/app-store.svg';
import android from '../../../assets/google-play.svg';
import { Fade } from 'react-awesome-reveal';

const GetPivien = () => {
  return (
    <div className="flex flex-col w-full md:flex-row lg:flex-row items-center py-10 lg:py-10 justify-between">
      <div className="text-center w-full md:w-1/2 z-10 md:text-left lg:text-left space-y-5">
        <h2 className="text-[#6874E8]  text-xl md:leading-snug tracking-tighter  font-black lg:leading-snug ">
        Discover Decentralized VPN Privacy Control.
        </h2>
        <h2 className="text-[#181818] text-4xl md:text-3xl lg:text-5xl md:leading-snug tracking-tighter  font-black lg:leading-snug">
        The New Standard in VPN Safety and Privacy.
        </h2>
        <p className="text-[#797E86] py-4">
        Surf the web without leaving a trace, protected and certified anonymous, without relying on a central organization as your Achilles heel.
        </p>
        <div className="flex md:justify-content-lg-start justify-content-lg-center gap-2 mb-4 h-10 justify-center md:justify-start lg:h-14">
          <img data-tooltip-target="tooltip-default2" className="hover:opacity-75 transition-all me-0" src={apple} alt="apple-store" />
          <img data-tooltip-target="tooltip-default" className="hover:opacity-75 transition-all me-0" src={android} alt="google-play" />
          <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Coming soon!
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div id="tooltip-default2" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Coming soon!
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        {/* <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3 mr-5 hover:bg-transparent text-white hover:text-[#181818] border-[#55585E] ">
          Get DEVPN <FaArrowRight />
        </button>
        <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3  text-white hover:text-[#181818] border-[#55585E] hover:bg-transparent">
          Learn More <FaArrowRight />
        </button> */}
      </div>
      <div className="mt-10 w-full md:w-1/3 lg:w-2/3 lg:mt-0 mx-2 z-10">
        <img
          src={mackbookIphone}
          alt="hero"
          className="mx-auto lg:mx-0 md:w-full lg:w-full lg:max-w-2xl"
        />
      </div>
    </div>
  );
};

export default GetPivien;
