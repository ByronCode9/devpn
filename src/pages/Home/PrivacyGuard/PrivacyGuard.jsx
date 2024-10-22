import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";
import { Fade } from "react-awesome-reveal";
import video from "../../../assets/Defense.mp4"


const PrivacyGuard = () => {
  return (
    <div className="div" id="privacyguard">
      <div className="lg:w-full relative z-10 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3">
        <div className="mt-8 col-span-2 flex flex-col lg:flex lg:flex-col md:flex z-10 text-center lg:text-left space-y-8 lg:space-y-10 w-full md:w-4/5">
        <Fade direction="left">
          <h2 className="text-4xl z-10 lg:w-full lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">
            DeVPN Privacy Guard
          </h2>
        </Fade>
        <Fade direction="left">
          <p className="text-[#797E86]">
            Hackers are increasingly targeting commercial companies. While security standards may be debatable, systematically failing to
            inform customers that their data has been stolen is inexcusable.
          </p>
        </Fade>
        <Fade direction="left">
          <p className="text-[#797E86]">
            DEVPN allows consumers to instantly check their credentials against historical breaches and protects them onwards by sending
            instant notifications when new security breaches are detected.
          </p>
        </Fade>
          <div className="grid mx-auto md:mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex gap-2">
              <p className="text-xl text-blue-600">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#181818] font-light">100% free and fully anonymous protection</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xl text-blue-600">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#181818] font-light">Dark web scanning for compromised data</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xl text-blue-600">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#181818] font-light">Real-time breach alerts on new incidents</p>
            </div>
            <div className="flex gap-2">
              <p className="text-xl text-blue-600">
                <IoCheckmarkCircleSharp />
              </p>{" "}
              <p className="text-[#181818] font-light">Safe monitoring across multiple accounts</p>
            </div>
          </div>
          <a href="https://guard.devpn.io" className="w-1/3 mx-auto" target="_blank">
            <div className="bg-white hover:bg-gray-100 text-center  text-gray-800 font-semibold py-2 my-4 px-4 border border-gray-400 rounded shadow">
              Open App
            </div>
          </a>
        
        </div>
        <div className="hidden relative col-span-1 mx-auto md:flex lg:flex lg:justify-center md:justify-center bg-transparent my-auto space-y-4 lg:space-y-2 py-8">
          <Fade direction="right">
          <div className="my-auto"
            dangerouslySetInnerHTML={{
              __html: `<video autoPlay="autoplay" playsInLine="true" height="250" width="250" loop="true" muted="true">
                        <source src=${video} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>`,
            }}
          />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PrivacyGuard;
