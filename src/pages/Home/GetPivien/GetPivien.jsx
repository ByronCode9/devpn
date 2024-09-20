import { FaArrowRight } from "react-icons/fa6";
import "./GetPivien.css";
import { Fade } from 'react-awesome-reveal';
import { HashLink } from "react-router-hash-link";
import hero from "../../../assets/x.mp4";

const GetPivien = () => {
  return (
    <div className="flex flex-col w-full md:flex-row lg:flex-row items-center py-10 lg:py-10 justify-between">
      <div className="text-center w-full md:w-1/2 z-10 md:text-left lg:text-left space-y-5">
        <h2 className="text-[#181818] text-4xl md:text-3xl lg:text-5xl md:leading-snug tracking-tighter  font-black lg:leading-snug">
        Safeguard your family with DeVPN® free <HashLink to="#"><span className="text-blue-600">Privacy Guard</span></HashLink> and <HashLink to="#"><span className="text-blue-600">Privacy Mail</span></HashLink> today!
        </h2>
        <h2 className="text-[#181818] pt-5 text-xl md:leading-snug tracking-tighter  font-black lg:leading-snug ">
        Why your internet privacy matters:
        </h2>
        <ul className="text-[#181818] list-disc ml-5 pb-5">
          <li>Hackers are <span className="text-red-600 font-semibold">breaching</span> more security than ever.</li>
          <li>Advertising firms are <span className="text-red-600 font-semibold">exploiting</span> your online behavior.</li>
          <li>Internet service and solution providers are <span className="text-red-600 font-semibold">selling</span> your data.</li>
          <li>Governments globally track consumers through digital <span className="text-red-600 font-semibold">surveillance</span>.</li>
        </ul>
        <div className="flex md:justify-content-lg-start justify-content-lg-center gap-2 mb-4 h-10 justify-center md:justify-start lg:h-14">
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
      <div className="w-full md:w-1/3 lg:w-1/2 lg:mt-0 mx-2 z-10">
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
