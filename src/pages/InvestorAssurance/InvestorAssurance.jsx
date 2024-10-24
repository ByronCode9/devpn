import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import video from "../../assets/second.mp4"


const InvestorAssurance = () => {
  return (
    <div className="relative w-full">
      <div id="features" className="relative flex flex-col lg:flex-row justify-between items-center lg:space-x-44 py-24 overflow-hidden">
        <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left w-full lg:w-4/5 space-y-7 relative">
          <Fade>
          <h2 className="text-4xl z-10 md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
            Investor Assurance
          </h2>
          </Fade>
          <Fade>
          <p className="text-[#797E86]">
            DeVPN is designed to capture a significant portion of a rapidly growing market with over 1.5 billion consumers by offering factually
            unbeatable solutions that outperform any current competitors.
          </p>
          </Fade>
          <Fade>
          <p className="text-[#797E86]">
            Our scalable hybrid ecosystem includes investment opportunities like Sentry Nodes, which meet growing user demand and provide investors with early access to multiple expanding networks.
          </p>
          </Fade>
          <Fade>
          <p className="text-[#181818] text-md mt-5 md:leading-snug font-black lg:leading-snug">
          Investors can rely on the following features:
          </p>
        </Fade>
        <Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light">Unbeatable first-to-market technology</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light">Full DAO transparency and governance</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light">No token staking or locking mechanisms</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light"> Long-term aligned scaling growth goals</p>
              </div>
          </div>
          </Fade>
        </div>

        <div className="hidden md:flex mt-20 sm:mt-0">
          <Fade direction="right">
          <div className="my-auto"
            dangerouslySetInnerHTML={{
              __html: `<video autoPlay="autoplay" playsInLine="true" height="700" width="700" loop="true" muted="true">
                      <source src=${video} type="video/mp4" />
                      Your browser does not support the video tag.
                      </video>`,
            }}
          />
          </Fade>
          {/* <video src={video} autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" width={250} height={250} type="video/mp4"/> */}
        </div>
      </div>
    </div>
  );
};

export default InvestorAssurance;
