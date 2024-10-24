import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";
import { Fade } from "react-awesome-reveal";
import video from "../../../assets/Fingerprint_2.mp4"


const PrivacyStorage = () => {
  return (
    <div className="relative w-full">
      <h1 id="privacystorage" className=" text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center md:text-left md:mt-5 pb-10 md:pb-3 text-black opacity-25">Section 8</h1>
      <div id="features" className="relative flex flex-col lg:flex-row justify-between items-center lg:space-x-44 pb-10 overflow-hidden">

        <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left md:w-9/12 lg:w-1/2 space-y-7 relative">
          <h2 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
          DeVPN Privacy Storage
          </h2>
          <p className="text-[#797E86]">
          VPN providers, like locks, can differ greatly in quality, ranging from heavy-duty deadbolts that provide excellent security to flimsy little padlocks that provide little to no protection. While VPNs can offer strong encryption, fast connections, and a consistent service, the vast majority are slow, inaccurate, and unsafe. <br /><br />With DEVPN you can expect:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-2">
              <div className="flex gap-2">
                <p className="text-lg text-[#181818]">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#878787] font-light">Unrivaled superior levels of user anonymity</p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg text-[#181818]">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#878787] font-light">Future-proof and fully scalable ecosystem</p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg text-[#181818]">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#878787] font-light">100% decentralized hardware ownership</p>
              </div>
              <div className="flex gap-2">
                <p className="text-lg text-[#181818]">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#878787] font-light">An ecosystem that prioritizes stakeholders</p>
              </div>
          </div>

          <a href="https://devpn.gitbook.io" target="_blank">
          <button className="flex w-[230px] btn bg-[#181818] rounded-md text-sm font-extrabold px-8 py-3 my-3 text-white border-[#55585E] hover:opacity-75">
              Find out more <FaArrowRight />
            </button>
            </a>
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
    </div>
  );
};

export default PrivacyStorage;
