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
          <h1 className="text-4xl z-10 md:w-[60%] lg:w-1/2 leading-snug lg:text-5xl lg:leading-snug text-center text-[#181818] mb-8">
          Explore Our Secure Solutions
          </h1>
          <div className="grid z-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 lg:gap-5">
            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  Fully Decentralised Infrastructure
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Our decentralized network guarantees reliability and resilience against censorship, providing uninterrupted access to the internet. 
                With no single point of failure, you can trust our platform to maintain your privacy and freedom online, regardless of external pressures.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={sixthIcon} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  Secure Metamask Integration
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Experience seamless access to our decentralized VPN services without the need for traditional account creation. 
                With our secure Metamask integration, users can log in and utilize our platform effortlessly using their Ethereum wallet. 
                This innovative approach not only streamlines the user experience but also enhances security by leveraging blockchain technology for authentication. 
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={firstIcon} loop
          muted
          autoPlay
          playsInline width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  End-to-End Encryption
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Experience ultimate privacy with our end-to-end encryption feature. Your data is shielded from prying eyes throughout its journey, 
                ensuring that only you and your intended recipient can access it.
                With end-to-end encryption, your communication remains secure and confidential, giving you peace of mind in the digital world.
                </p>
              </div>
              <div className="flex z-10 justify-center items-center mt-5">
              <video src={keyIcon}loop
          muted
          autoPlay
          playsInline  width={150} height={150} type="video/mp4">
              </video>
              </div>
            </div>

            <div className="grid md:grid-cols-2 border-black/5 shadow lg:grid-cols-3 bg-[#fff] rounded-xl p-5 border">
              <div className="text-center lg:flex lg:flex-col lg:text-start lg:justify-center md:col-span-1 lg:col-span-2">
                <h1 className="text-xl  lg:text-2xl font-semibold text-[#181818] mb-6">
                  Cross-Platform Compatibility
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Experience seamless protection across all your devices with our VPN, ensuring consistent privacy and security no matter where you are. 
                Whether you're using a desktop computer, smartphone, or tablet, our platform offers comprehensive coverage to keep your data safe and secure.
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
                  No-Logs Policy
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                We uphold a strict no-logs policy, safeguarding your privacy by refraining from monitoring or storing your online activities. 
                This commitment ensures that your browsing history, connection timestamps, and IP addresses remain confidential, allowing you to explore the web without fear of surveillance or data breaches.
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
                  Anonymous Browsing
                </h1>
                <p className="text-[#181818] text-[14px]  md:w-full lg:w-full font-normal">
                Enjoy anonymity online as our VPN masks your IP address and encrypts your internet traffic, shielding you from targeted ads and location-based tracking. 
                With anonymous browsing, you can reclaim your privacy and explore the internet without leaving a digital footprint behind.
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
