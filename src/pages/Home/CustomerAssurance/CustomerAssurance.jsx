import { Fade } from "react-awesome-reveal";
import icon1 from "../../../assets/Data Protection-01.svg";
import icon3 from "../../../assets/Data Protection-03.svg";
import icon8 from "../../../assets/Data Protection-10.svg";

const MyVPN = () => {
  return (
  <div className="relative w-full py-20" id="features">
    
    <div className="flex flex-col justify-between w-full z-50">
      <Fade direction="down">
      {/* <h1 id="myvpn" className=" text-[46px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center md:text-right md:mt-5 pb-10 md:pb-3 text-black opacity-25">Section 3</h1> */}
      <h1 className=" text-4xl z-10 w-full md:text-5xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-[#181818]">DeVPN Consumer Assurance</h1>
      </Fade>
    </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 gap-4 grid-cols-1 grid-rows-auto mt-20">
        <Fade>
        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon8}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Privacy & Ethics</h1>
          <p className="text-[#181818] text-md text-center mt-5">
          World’s only privacy-first ecosystem that transparently delivers consumer safety others claim but never deliver.
          </p>
        </div>
        </Fade>
        <Fade>
        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon1}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Quality & Performance</h1>
          <p className="text-[#181818] text-md text-center mt-5">
          AI-powered blazing-fast speeds driving performance on premium hardware and exclusive dedicated networks.
          </p>
        </div>
      </Fade>
        <Fade>
        <div className="flex flex-col border-black/5 lg:w-auto p-4 items-center z-50">
          <img
            className="w-[70px] h-[70px]"
            src={icon3}
            alt="MyVPN"
          />
          <h1 className="text-xl md:text-3xl md:leading-snug tracking-tighter font-black lg:leading-snug text-center text-blue-600 mt-5">Access & Anonymity</h1>
          <p className="text-[#181818] text-md text-center mt-5">
          Real, unrestricted access to the internet - enjoy anything, anytime, anywhere in the world without limitations.
          </p>
        </div>
        </Fade>
      </div>
  </div>
  );
};

export default MyVPN;
