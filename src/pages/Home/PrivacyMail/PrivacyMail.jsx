import padlock from "../../../assets/SecurityPadlock.mp4";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const PrivacyMail = () => {
    return (
      <div className="div mt-20">
          <div className="lg:w-full relative z-10 lg:space-x-16 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3">
            <div className="relative col-span-1 md:flex lg:flex justify-left  bg-transparent space-y-4 lg:space-y-2 py-8">
              <div className="my-auto"
              dangerouslySetInnerHTML={{
                __html: `<video autoPlay="autoplay" playsInLine="true" height="250" width="250" loop="true" muted="true">
                        <source src=${padlock} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>`,
              }}
              />
            </div>

            <div className="mt-8 col-span-2 flex flex-col items-center lg:flex lg:flex-col md:flex lg:items-start z-10 lg:text-left space-y-8 lg:space-y-10 w-4/5">
              <h2 className="text-center text-3xl z-10 md:w-[60%] lg:w-full md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818]">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
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
    
export default PrivacyMail;
