import { FaArrowRight } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";
import { SiSpringsecurity } from "react-icons/si";
import { TbWorldSearch } from "react-icons/tb";
import servers from "../../../assets/iphones.png"
import { Fade } from "react-awesome-reveal";

const CTA = () => {
  return (
    
    <div className="div">
      <Fade direction="right">
      <h1 id="cta" className=" text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center md:text-right md:mt-5 pb-10 md:pb-3 text-black opacity-25">Section 13</h1>
      </Fade>
      <div className="lg:w-full relative z-10 lg:space-x-16 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
        <div className="relative md:flex lg:flex lg:justify-center md:justify-center bg-transparent space-y-4 lg:space-y-2 px-6 lg:px-10 py-8">
          {/* Server List Container */}
          <Fade>
          <div className="h-1/2 rounded-xl bg-transparent">
              <img src={servers} className="rounded-xl" alt="" />
          </div>
          </Fade>
        </div>

        {/* Content Section */}
        <Fade cascade>
        <div className="mt-8 flex flex-col items-center lg:flex lg:flex-col lg:justify-center md:flex md:justify-center lg:items-start z-10 lg:w-10/12 text-center lg:text-left space-y-6 lg:space-y-7 px-6 lg:px-0">
          <h2 className="text-3xl lg:text-5xl leading-tight text-[#181818]">
            CTA
          </h2>
          <p className="text-[#797E86] py-5">
            <span className="font-bold text-black">DEVPN</span> General overview + short description of the 6 main services
            <br/>
            <br/> General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. 
            <br/>
            <br/> General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. 
          </p>
          {/* Download Apps Button */}
          {/* <button className="flex  w-[230px] btn bg-[#181818] rounded-md text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:opacity-75">
            Download Apps <FaArrowRight />
          </button> */}
        </div>
        </Fade>
      </div>
    </div>
    
  );
};

export default CTA;
