import { FaXTwitter } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import coin from "../../../assets/blockchain.svg"
const TotalSupply = () => {

  return (
    <Fade>
    <div id="economics" className="relative mx-auto my-8 bg-[#F9FAFC]  py-10 z-10">
        <div className="absolute -z-5 left-20 top-1 text-center h-full w-full overflow-hidden opacity-5">
          <img className="h-2/5 md:3/5" src={coin} alt="" />
        </div>
      <h1 className="text-5xl text-black text-center py-10">Our Product Economics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto text-center mt-10 w-3/4">
        <div className="name hover:bg-white hover:card hover:shadow px-3 py-2 duration-300 ease-in-out hover:border-black/5 rounded-xl">
          <span>Name</span>
          <h2 className="text-black text-2xl py-2 font-bold">DEVPN</h2>
        </div>
        <div className="ticker hover:bg-white hover:card hover:shadow px-3 py-2 duration-300 ease-in-out hover:border-black/5 rounded-xl">
          <span>Ticker</span>
          <h2 className="text-black text-2xl py-2 font-bold">$DEVPN</h2>
        </div>
        <div className="supply hover:bg-white hover:card hover:shadow px-3 py-2 duration-300 ease-in-out hover:border-black/5 rounded-xl">
          <span>Supply</span>
          <h2 className="text-black text-2xl py-2 font-bold">100,000,000</h2>
        </div>
        <div className="tax hover:bg-white hover:card hover:shadow px-3 py-2 duration-300 ease-in-out hover:border-black/5 rounded-xl">
          <span>Tax</span>
          <h2 className="text-black text-2xl py-2 font-bold">5/5</h2>
        </div>
      </div>
    </div>
    </Fade>
  );
};

export default TotalSupply;
