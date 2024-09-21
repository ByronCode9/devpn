import firstIcon from "../../../assets/iconMov_1.mp4";
import secIcon from "../../../assets/iconMov_2.mp4";
import keyIcon from "../../../assets/key.mp4";
import thirdIcon from "../../../assets/iconMov_3.mp4";
import fourthIcon from "../../../assets/iconMov_4.mp4";
import fifthIcon from "../../../assets/iconMov_5.mp4";
import sixthIcon from "../../../assets/iconMov_6.mp4";

import { Fade, Slide } from 'react-awesome-reveal';

const DecentralisedVPN = () => {
  return (
      <div className="relative bg-[#F9FAFC] mt-24 lg:mt-0 z-10 ">
      {/* <Fade> */}
      <div className="container mx-auto px-4 lg:px-8 py-10 space-y-5 ">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-43xl z-10 w-full md:text-4xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">
          Explore DeVPN's Global Privacy Solutions
          </h1>
          <p className="text-blue-600 text-xl md:leading-snug tracking-tighter  font-black lg:leading-snug">
          Protect Yourself and Your Family from Hackers, Surveillance, and Data Exploitation Today!
          </p>
          <div className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-5 mt-4">
            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  DEVPN Privacy Guard
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                  DEVPN offers a free, anonymous alert system that scans the internet for leaked user data, providing real-time notifications to help you act
                  quickly when corporate companies let you down. <br /> <br /> With features like dark web monitoring and family management, we enhance safety and
                  privacy first for you and your loved ones.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={fifthIcon} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  DEVPN Privacy Mail
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                DEVPN offers free, anonymous disposable email addresses as a first line of defense against exploitation and spam! <br /> <br />This service protects
                your identity and, unlike similar services, operates without external ads, ensuring complete privacy and anonymity by safeguarding you
                from data brokers and phishing attempts.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={fourthIcon} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  DEVPN Hybrid VPN
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                DEVPN introduces the world’s most privacy-driven VPN. <br /> <br /> Unlike any of our competitors, we meet all consumer needs without compromise,
                providing superior privacy, security, performance, and global content access by seamlessly merging decentralized and corporate
                technologies into a unique hybrid framework.
                 </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={fifthIcon}loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  DEVPN Privacy Storage
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                  DEVPN introduces Privacy Storage, the world’s most privacy-focused cloud storage solution. <br /> <br /> It challenges commercial providers by offering
                  a hybrid network that protects consumer photos, videos, and files from the surveillance, commercial exploitation, and transparency issues
                  found across those same competitors.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={fifthIcon} loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                DEVPN One Home
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                DEVPN OneHomeprovides an all-in-one privacy solution for households. <br /> <br /> It ensures that family members, their devices, and
                internet-connected appliances like TVs and domestic devices remain private and secure, offering premium protection against unauthorized
                access, data exploitation, and surveillance monitoring.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={fifthIcon} loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  DEVPN One Travel
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                DEVPN OneTravel offers an all-in-one privacy solution for travelers, safeguarding online activities on any internet source, including free
 public Wi-Fi and unsecured networks. <br /> <br /> It ensures security for family vacations, business trips, and student life, providing next-generation
 protection in areas with strict internet limitations.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={thirdIcon} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </Fade> */}
    </div>
    
  );
};

export default DecentralisedVPN;
