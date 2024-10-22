import padlock from "../../../assets/SecurityPadlock.mp4";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

const PrivacyMail = () => {
    return (
      <div className="div mt-20" id="privacymail">
        <div className="lg:w-full relative z-10 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 justify-items-end">
          <div className="hidden relative col-span-1 md:flex lg:flex mx-auto bg-transparent space-y-4 lg:space-y-2 py-8">
            <Fade direction="left">
              <div className="my-auto"
              dangerouslySetInnerHTML={{
                __html: `<video autoPlay="autoplay" playsInLine="true" height="250" width="250" loop="true" muted="true">
                        <source src=${padlock} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>`,
              }}
              />
              </Fade>
            </div>

            <div className="mt-8 col-span-2 flex flex-col z-10 text-center lg:text-left space-y-8 lg:space-y-10 w-full md:w-4/5">
            <Fade direction="right">
              <h2 className="text-center text-4xl z-10  md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818]">
                DeVPN Privacy Mail
              </h2>
            </Fade>
            <Fade direction="right">
              <p className="text-[#797E86]">
                Hacking, phishing, and commercial breaches heavily exploit consumer email addresses, heavily impacting over 10 billion accounts in
                the last five years, averaging two compromises per internet user.
              </p>
            </Fade>
            <Fade direction="right">
              <p className="text-[#797E86]">
                Whether Privacy Safeguard alerted you to a breach of your credentials or you just want to actively protect yourself, our free
                disposable email service is here to reduce your risks starting today.
              </p>
            </Fade>
              <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <Fade direction="right">
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
            </Fade>
              </div>
            <div className="bg-white hover:bg-gray-100 text-center mx-auto text-gray-800 font-semibold py-2 my-4 px-4 border w-1/3 border-gray-400 rounded shadow">
              <a href="https://mail.devpn.io" target="_blank">Open App</a>
            </div>
            </div>
          </div>
        </div>
      );
    };
    
export default PrivacyMail;
