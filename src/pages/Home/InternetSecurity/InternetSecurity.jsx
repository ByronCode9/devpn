import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";
import { Fade } from "react-awesome-reveal";
import video from "../../../assets/Fingerprint_2.mp4"


const InternetSecurity = () => {
  return (
    <div id="features" className="relative flex flex-col lg:flex-row justify-between items-center lg:space-x-44 py-10 lg:py-16 overflow-hidden">
      <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left md:w-9/12 lg:w-1/2 space-y-7 relative">
        <h2 className="text-[#181818] text-4xl lg:text-5xl  leading-tight">
          Shield Your Digital Footprint
        </h2>
        <p className="text-[#797E86]">

        Take charge of your online journey and break free from the shackles of digital dangers and prying eyes. With DEVPN by your side, explore the vast realm of the internet with unwavering assurance. Feel empowered knowing that your digital well-being is fortified, shielded from any lurking threats or invasive snooping
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-2">
            <div className="flex gap-2">
              <p className="text-lg text-[#181818]">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#878787] font-light">Military-grade encryption for maximum data security.</p>
            </div>
            <div className="flex gap-2">
              <p className="text-lg text-[#181818]">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#878787] font-light">No-logs policy to protect your privacy.</p>
            </div>
            <div className="flex gap-2">
              <p className="text-lg text-[#181818]">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#878787] font-light">Multi-platform support for seamless integration across devices.</p>
            </div>
            <div className="flex gap-2">
              <p className="text-lg text-[#181818]">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#878787] font-light">Dedicated customer support team available 24/7.</p>
            </div>
        </div>
       
        <button className="flex w-[230px] btn bg-[#181818] rounded-md text-sm font-extrabold px-8 py-3 text-white border-[#55585E] hover:opacity-75">
            Find out more <FaArrowRight />
          </button>
      </div>

      <div className="relative z-0 my-20 mx-auto lg:w-1/3">
        <div
          dangerouslySetInnerHTML={{
            __html: `<video autoPlay="autoplay" playsInLine=" height="250" width="250" playsinline" loop="true" muted="true">
                    <source src=${video} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>`,
          }}
        />
        {/* <video src={video} autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" width={250} height={250} type="video/mp4"/> */}
      </div>
    </div>
  );
};

export default InternetSecurity;
