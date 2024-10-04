import prot from "../../../assets/Protection.mp4"
import secSys from "../../../assets/SecureSystem.mp4"
import monitor from "../../../assets/Monitoring.mp4"
import safe from "../../../assets/Safe.mp4"
import home from "../../../assets/HomeProtection.mp4"
import finger from "../../../assets/Fingerprint.mp4"

import { Fade, Slide } from 'react-awesome-reveal';

const DecentralisedVPN = () => {
  return (
    
    <div id="aboutus"  className="bg-[#F9FAFC] z-10">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-2">
          <Fade>
          <h1  className="text-4xl z-10 w-full md:text-4xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">
          Explore DeVPN Privacy Solutions
          </h1>
          </Fade>
          <Fade>
          <p className="text-blue-600 text-xl md:leading-snug tracking-tighter text-center font-black lg:leading-snug">
          Protect yourself from hackers, surveillance, and exploitation today!
          </p>
        </Fade>
          <div className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-5 mt-10 flex-row">
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
               <div className="text-center h-auto block lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  DeVPN Privacy Guard
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                A free, anonymous alert system that scans the dark sides of the
                internet for leaked user data, providing real-time notifications to
                help you act quickly when corporate companies let you down. <br /> <br /> With features like dark web monitoring and family management,
                we enhance safety and privacy first for you and your loved ones.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={prot} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  DeVPN Privacy Mail
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Over 10 billion breached email accounts in the past five years.
                Minimize your risks for free today and avoid the consequences! <br /> <br />DEVPN keeps your primary mailbox clean and acts as an
                anonymous first line of defense against exploitation and spam,
                protecting you from data brokers and phishing attempts.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={secSys} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  DeVPN Hybrid VPN
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Proudly introducing the world’s first privacy-driven VPN service. <br /> <br />  Unlike competitors, we exceed user needs without compromising
                consumers. By seamlessly merging decentralized and corporate
                technologies into one unique hybrid framework, DEVPN delivers
                superior privacy, security, performance, and global content access.

                 </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={monitor}
              loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  DeVPN Privacy Storage
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                World’s most privacy-driven and transparent
                cloud storage network that refuses to compromise consumer trust. <br /> <br />  Our hybrid network guarantees consumers their photos, videos, and
                files are safe from surveillance, commercial exploitation, and
                transparency issues commonly found with corporate competitors.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={safe} loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                DeVPN One Home
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                The all-in-one privacy set-top box that guarantees full household
                safety by protecting every family member and device in the home. <br /> <br />  Actively protecting every internet connection, including smart TVs
                and modern household appliances, with premium security against
                unauthorized access, data exploitation, and external surveillance.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={home} loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
            <Fade>
              <div className="lg:grid lg:flex-row md:grid-cols-2 h-full border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-2xl  lg:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818] mb-5">
                  DeVPN One Travel
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                  Your perfect travel companion, offering a portable all-in-one privacy solution, protecting you on free public Wi-Fi and unsafe networks.
                  <br /> <br />
                  This compact device guarantees security for all users and their devices, whether on family vacations or business trips, providing protection even in areas with strict internet limitations.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={finger} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    {/* </Fade> */}
    </div>
    
  );
};

export default DecentralisedVPN;
