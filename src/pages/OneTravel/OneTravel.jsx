import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaArrowDown, FaArrowUp, FaArrowRight } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import video from "../../assets/Fingerprint_2.mp4"


const OneTravel = () => {
  return (
    <div className="relative w-full">
      <div id="features" className="relative flex flex-col lg:flex-row justify-between items-center lg:space-x-44 py-36 overflow-hidden">

        <div className="flex flex-col items-center lg:block text-center z-10 lg:text-left md:w-9/12 lg:w-1/2 space-y-7 relative">
          <h2 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
            Investor Assurance
          </h2>
          <p className="text-[#797E86]">
            DeVPN is designed to capture a significant portion of a rapidly growing market with over 1.5 billion consumers by offering factually
            unbeatable solutions that outperform any current competitors.
          </p>
          <p className="text-[#797E86]">
            Our scalable hybrid networks include investment opportunities like Sentry Nodes, meeting and exceeding growing user demand,
            offering investors early access to a rapidly expanding ecosystem
          </p>
          <p className="text-[#181818] text-md mt-5 md:leading-snug font-black lg:leading-snug">
          Investors can rely on the following features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-2">
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

export default OneTravel;
