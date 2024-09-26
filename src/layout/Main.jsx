import { Outlet } from "react-router-dom";
import Header from "../pages/share/Header/Header";
import Footer from "../pages/share/Footer/Footer";
import spinAbstract from "../assets/OBJECTS.svg";
import rightSideBg from "../assets/rightSideBg.svg";
import leftSideBg from "../assets/9057764-02 1.svg";

import { Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    
    <div className="w-full bg-[#fff] relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 -z-5 h-screen w-screen">
      </div>
      <div className="absolute -z-5 top-1/2 lg:top-[2%] left-0 lg:left-0 transform -translate-y-1/2 rotate-180 rounded-l-full overflow-hidden opacity-25 ">
        <img
          className="w-full  h-auto lg:h-full mb-[200px]"
          src={leftSideBg}
          alt=""
        />
      </div>
      <div className="hidden lg:block overflow-hidden z-0">
        <div className="absolute -z-5 top-[15%] right-0 bottom-0  rounded-l-full overflow-hidden opacity-25">
          <img className="w-full" src={rightSideBg} alt="" />
        </div>
      </div>
      <div className="hidden lg:block overflow-hidden z-0">
        {/* Background image on the right side for MyVPN section */}
        <div className="absolute -z-5 top-[50%] right-0 bottom-0 rounded-l-full overflow-hidden opacity-25">
          <img className="w-full" src={leftSideBg} alt="" />
        </div>
      </div>
      <div className="hidden lg:block overflow-hidden z-0">
        <div className="absolute -z-5 top-1/2 lg:top-[50%] left-0 lg:left-0 transform -translate-y-1/2 rotate-180 overflow-hidden opacity-25">
          <img className="w-full" src={leftSideBg} alt="" />
        </div>
      </div>
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
};

export default Main;
