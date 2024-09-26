import { FaArrowRight } from "react-icons/fa6";
import "./GetPivien.css";
import { Fade } from 'react-awesome-reveal';
import { HashLink } from "react-router-hash-link";
import hero from "../../../assets/x.mp4";
import { RxCross2 } from "react-icons/rx";

const GetPivien = () => {
  return (
    <div className="flex flex-col w-full md:flex-row lg:flex-row items-center py-20 justify-between">
      <div className="text-center w-full md:w-1/2 z-10 md:text-left lg:text-left">
        <h2 className="text-[#181818] text-2xl md:text-3xl lg:text-5xl md:leading-snug tracking-tighter  font-black lg:leading-snug">
        Protect yourself with DeVPN®
        </h2>
        <h2 className="text-[#181818] text-xl md:text-2xl lg:text-3xl md:leading-snug lg:leading-snug ">
        The global privacy ecosystem you CAN trust!
        </h2>
        <ul className="text-[#181818] ml-3 py-10">
          <li className="p-1 flex">
            <p className="text-2xl mr-4"><RxCross2 /></p>
            Hackers are constantly&nbsp;<span className="text-red-600 font-semibold">breaching</span>&nbsp;corporate security.
          </li>
          <li className="p-1 flex">
            <p className="text-2xl mr-4"><RxCross2 /></p>
            Marketing companies are&nbsp;<span className="text-red-600 font-semibold"> exploiting</span>&nbsp;your online behavior.
          </li>
          <li className="p-1 flex">
            <p className="text-2xl mr-4"><RxCross2 /></p>
            Internet service and solution providers are&nbsp;<span className="text-red-600 font-semibold">selling</span>&nbsp;your data.
          </li>
          <li className="p-1 flex">
            <p className="text-2xl mr-4"><RxCross2 /></p>
            Governments monitor consumers through digital&nbsp;<span className="text-red-600 font-semibold">surveillance</span>.
          </li>
        </ul>
        <h2 className="text-[#181818] text-md md:text-xl lg:text-3xl md:leading-snug lg:leading-snug">
        Get free <HashLink to="#"><span className="text-blue-600 hover:underline font-black">Privacy Guard</span></HashLink> and <HashLink to="www"><span className="font-black text-blue-600 hover:underline">Privacy Mail</span></HashLink> today!
        </h2>
        <div className="flex md:justify-content-lg-start justify-content-lg-center gap-2 my-6 h-10 justify-center md:justify-start lg:h-14">
            <HashLink to="" data-tooltip-target="tooltip-default" className=" flex-nowrap btn text-white bg-[#181818] flex rounded-md text-sm z-10 px-8 py-3 hover:text-[#181818] border-2 hover:bg-transparent hover:border-solid transition-all duration-300">
                Learn More <FaArrowRight />
            </HashLink>
        </div>
        {/* <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3 mr-5 hover:bg-transparent text-white hover:text-[#181818] border-[#55585E] ">
          Get DEVPN <FaArrowRight />
        </button>
        <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3  text-white hover:text-[#181818] border-[#55585E] hover:bg-transparent">
          Learn More <FaArrowRight />
        </button> */}
      </div>
      <div className="w-full lg:w-1/2 lg:mt-0 my-5 z-10">
        <video
          autoPlay
          loop
          muted="true"
          playsInline
          class="mx-auto lg:mx-0 md:w-full lg:w-full lg:max-w-2xl"
          >
            <source
              src={hero}
              type="video/mp4"
        />
            Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default GetPivien;
