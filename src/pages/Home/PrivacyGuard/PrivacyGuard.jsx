import { Fade } from "react-awesome-reveal";
import padlock from "../../../assets/SecurityPadlock.mp4";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const PrivacyGuard = () => {
    return (
    
        <div className="div">
          <div className="lg:w-full relative z-10 lg:space-x-16 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
            <div className="relative md:flex lg:flex lg:justify-center md:justify-center bg-transparent space-y-4 lg:space-y-2 px-6 lg:px-10 py-8">
            <div className="my-auto"
            dangerouslySetInnerHTML={{
              __html: `<video autoPlay="autoplay" playsInLine=" height="250" width="250" playsinline" loop="true" muted="true">
                      <source src=${padlock} type="video/mp4" />
                      Your browser does not support the video tag.
                      </video>`,
            }}
          />
          {/* <video src={video} autoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" width={250} height={250} type="video/mp4"/> */}
            </div>
    
            {/* Content Section */}
            <div className="mt-8 flex flex-col items-center lg:flex lg:flex-col lg:justify-center md:flex md:justify-center lg:items-start z-10 lg:w-10/12 text-center lg:text-left space-y-6 lg:space-y-7 px-6 lg:px-0">
              <h2 className="text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-left text-[#181818]">
                DeVPN Privacy Mail
              </h2>
              <p className="text-[#797E86]">
                Hacking, phishing, and commercial breaches heavily exploit consumer email addresses, heavily impacting over 10 billion accounts in
                the last five years, averaging two compromises per internet user.
              </p>
              <p className="text-[#797E86]">
                Whether Privacy Safeguard alerted you to a breach of your credentials or you just want to actively protect yourself, our free
                disposable email service is here to reduce your risks starting today.
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
                <p className="text-[#181818] font-light">Safe access on any device and browser</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light">Simple, intuitive, and user-friendly menu</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xl text-blue-600">
                  <IoCheckmarkCircleSharp />
                </p>{" "}
                <p className="text-[#181818] font-light">Automatic email deletion after 24 hours</p>
              </div>
          </div>
            </div>

          </div>
        </div>
        
      );
    };
    
export default PrivacyGuard;
