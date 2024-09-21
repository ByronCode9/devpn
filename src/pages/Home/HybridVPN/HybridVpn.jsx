import { Fade } from "react-awesome-reveal";
import servers from "../../../assets/iphones.png";
import { FaArrowRight } from "react-icons/fa6";

const HybridVpn = () => {
    return (
    
        <div className="div">
          <Fade direction="right">
          <h1 id="hybridvpn" className=" text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center md:text-right md:mt-5 pb-10 md:pb-3 text-black opacity-25">Section 7</h1>
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
              <h2 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
              DeVPN Hybrid VPN
              </h2>
              <p className="text-[#797E86] py-5">
                <span className="font-bold text-black">DEVPN</span> General overview + short description of the 6 main services
                <br/>
                <br/> General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. 
                <br/>
                <br/> General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. General overview + short description of the 6 main services. 
              </p>
              {/* Download Apps Button */}
              <button className="flex-nowrap btn text-white bg-[#181818] flex rounded-md text-sm z-10 px-8 py-3 hover:text-[#181818] border-2 hover:bg-transparent hover:border-solid transition-all duration-300">
                CTA<FaArrowRight />
              </button>
            </div>
            </Fade>
          </div>
        </div>
        
      );
    };
    
export default HybridVpn;
