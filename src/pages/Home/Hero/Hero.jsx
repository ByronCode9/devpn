import { FaArrowRight } from "react-icons/fa6";
import "./Hero.css";
import { Fade } from 'react-awesome-reveal';
import { HashLink } from "react-router-hash-link";
import hero from "../../../assets/x.mp4";
import { RxCross2 } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center lg:py-5 xl:py-20 justify-between">
      
      <div className="text-center w-full lg:w-1/2 z-10 md:text-left lg:text-left">
        <Fade direction="left">
          <h2 className="text-[#181818] pb-5 lg:pb-0 text-5xl lg:text-5xl md:leading-snug tracking-tighter  font-black lg:leading-snug">
          Protect yourself with DeVPN®
          </h2>
        </Fade>
        <Fade direction="left">
        <h2 className="text-[#181818] text-xl md:text-2xl lg:text-3xl md:leading-snug lg:leading-snug ">
        The global privacy ecosystem you CAN trust!
        </h2>
        </Fade>
        {/* <Fade direction="left"> */}
        <ul className="text-[#181818] md:ml-3 ml-0 py-10 text-sm md:text-lg list text-left">
            <li className="p-1 list-item">
                Hackers are constantly&nbsp;<strong>breaching</strong>&nbsp;corporate security.
            </li>
          <li className="p-1 list-item">
                Marketing companies are&nbsp;<strong>exploiting</strong>&nbsp;your online behavior.
            </li>
          <li className="p-1 list-item">
                Internet service and solution providers are&nbsp;<strong>selling</strong>&nbsp;your data.
            </li>
          <li className="p-1 list-item">
                Governments monitor consumers through digital&nbsp;<strong>surveillance</strong>.
            </li>
          </ul>
        {/* </Fade> */}
        <Fade direction="left">
          <h2 className="text-[#181818] text-2xl lg:text-3xl md:leading-snug lg:leading-snug pb-5 lg:pb-0">
        Get free <HashLink to="#privacyguard"><span className="text-blue-600 hover:underline font-black">Privacy Guard</span></HashLink> and <HashLink to="#privacymail"><span className="font-black text-blue-600 hover:underline">Privacy Mail</span></HashLink> today!
        </h2>
        </Fade>
        {/* <Fade direction="left">
        <div className="flex md:justify-content-lg-start justify-content-lg-center gap-2 my-6 h-10 justify-center md:justify-start lg:h-14">
            <HashLink to="" data-tooltip-target="tooltip-default" className=" flex-nowrap btn text-white bg-[#181818] flex rounded-md text-sm z-10 px-8 py-3 hover:text-[#181818] border-2 hover:bg-transparent hover:border-solid transition-all duration-300">
                Learn More <FaArrowRight />
            </HashLink>
        </div>
        </Fade> */}
        {/* <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3 mr-5 hover:bg-transparent text-white hover:text-[#181818] border-[#55585E] ">
          Get DEVPN <FaArrowRight />
        </button>
        <button className="btn bg-[#414141] rounded-sm text-sm font-extrabold px-8 py-3  text-white hover:text-[#181818] border-[#55585E] hover:bg-transparent">
          Learn More <FaArrowRight />
        </button> */}
      </div>
      <div className="hidden md:block lg:w-1/2 w-full lg:mt-0 my-5 z-10">
        <video
          autoPlay
          loop
          muted="true"
          playsInline
          class="mx-auto lg:mx-0 "
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

export default Hero;
