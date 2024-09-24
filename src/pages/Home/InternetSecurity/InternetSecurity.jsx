import securityIcon from "../../../assets/internetSecurity.svg";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import halfPie from "../../../assets/halfPieIcone.svg";
import { Fade } from "react-awesome-reveal";
import video from "../../../assets/Defense.mp4"


const InternetSecurity = () => {
  return (
    <div className="relative w-full">
      <div id="features" className="relative flex flex-col lg:flex-row justify-between items-center lg:space-x-44 pb-10 overflow-hidden">

        <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left md:w-9/12 lg:w-1/2 space-y-7 relative">
          <h2 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
            DeVPN Privacy Guard
          </h2>
          <p className="text-[#797E86]">
            Hackers are increasingly targeting commercial companies. While security standards may be debatable, systematically failing to
            inform customers that their data has been stolen is inexcusable.
          </p>
          <p className="text-[#797E86]">
            DEVPN allows consumers to instantly check their credentials against historical breaches and protects them onwards by sending
            instant notifications when new security breaches are detected.
          </p>
          <p className="text-[#181818] text-md mt-5 md:leading-snug font-black lg:leading-snug">
          Consumers can rely on the following features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-2">
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

export default InternetSecurity;
