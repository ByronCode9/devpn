import { Fade } from "react-awesome-reveal";
import keys from "../../../assets/privacy.mp4";

const OneHome = () => {
  return (
    
    <div className="div">
      <div className="lg:w-full relative z-10 lg:space-x-16 lg:grid mt-10 lg:grid-cols-3 md:grid">
        <div className="col-span-3">
          <div className="mt-8 flex flex-col items-center md:flex z-10 text-center">
            <h2 className="text-3xl z-10 md:text-3xl lg:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-[#181818]">
              Investing in Hybrid Privacy
            </h2>
            <p className="mt-8 mb-2 text-black w-3/5 text-center">
              DeVPN is redefining consumer online privacy with a market-disrupting ecosystem that combines decentralized and traditional
              technologies to set unbeatable higher industry standards.
            </p>
          </div>
          <div id="economics" className="relative mx-auto z-10 py-5">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto text-center mt-10 w-3/4">
              <div className="name px-3 py-2">
                <span>Name</span>
                <h2 className="text-black text-2xl py-2 font-bold">DEVPN</h2>
              </div>
              <div className="ticker   px-3 py-2 ">
                <span>Ticker</span>
                <h2 className="text-black text-2xl py-2 font-bold">$DEVPN</h2>
              </div>
              <div className="supply px-3 py-2 ">
                <span>Supply</span>
                <h2 className="text-black text-2xl py-2 font-bold">100,000,000</h2>
              </div>
              <div className="tax px-3 py-2">
                <span>Tax</span>
                <h2 className="text-black text-2xl py-2 font-bold">5/5</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="div my-auto">
          <div className="relative md:flex lg:flex lg:justify-center md:justify-center align-middle bg-transparent">
            <div className="rounded-xl bg-transparent pt-10">
              <div className="mt-10"
                dangerouslySetInnerHTML={{
                  __html: `<video autoPlay="autoplay" playsInLine="true" height="400" width="400" loop="true" muted="true">
                      <source src=${keys} type="video/mp4" />
                      Your browser does not support the video tag.
                      </video>`,
                }}
              />
            </div>
          </div>
        </div>
        

        {/* Content Section */}
        <div className="mt-8 flex flex-col col-span-2 items-center lg:flex lg:flex-col lg:justify-center md:flex md:justify-center lg:items-start z-10 lg:w-10/12 text-center lg:text-left px-6 lg:px-0">
          <h2 className="text-2xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">
            &gt;Token investing
          </h2>
          <p className="mt-2 text-black text-justify">
            Our hybrid ecosystem offers consumers advanced services like digital and physical VPN solutions and privacy-guaranteed cloud
            storage, all powered by $DEVPN as a utility and governance token.
          </p>
          <h2 className="text-2xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">
          &gt;Operator investing
          </h2>
          <p className="mt-2 text-black text-justify">
            Privacy nodes in our ecosystem are owned and operated in a decentralized manner, providing investors with opportunities that
            contribute to the overall growth and stability of the DeVPN network.
          </p>
          <h2 className="text-2xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">
          &gt;Investor influence
          </h2>
          <p className="mt-2 text-black text-justify">
            DAO governance by $DEVPN holders ensures transparent decisions, providing investors with full insight and enabling trust to align
            their investments with the long-term goals of the ecosystem.
          </p>
        </div>
      </div>
    </div>
    
  );
    };
    
export default OneHome;
