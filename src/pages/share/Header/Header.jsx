import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
import logo from "../../../assets/Union.png";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="py-10">
      {/* Header container */}
      <div className="container mx-auto  flex w-full px-5 items-center">
        {/* Logo and mobile menu button */}
        <div className="flex w-full items-center justify-between">
          <Fade direction="left">
            <div className="logo z-10 px-3 mt-3">
              <HashLink to="#">
                <img src={logo} alt="Logo" className="z-10 image-rendering-smooth h-3/5 w-3/5 md:h-2/3 md:w-2/3 " />
              </HashLink>
            </div>
          </Fade>
          {/* Mobile menu button */}
          <button
            className="block lg:hidden mt-1 text-black focus:outline-none z-10"
            onClick={toggleMenu}
          >
            {/* Toggle menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <Fade direction="right">
        <div className="hidden lg:flex lg:items-center text-md font-normal lg:space-x-8 px-10 z-10  hover:text-[#cececece]">
          <HashLink to="#aboutus" className="text-[#181818] transition ease-in-out  hover:text-[#cececece]">About</HashLink>
          <HashLink to="#features" className="text-[#181818] transition ease-in-out  hover:text-[#cececece]">Features</HashLink>
          <HashLink to="#tokenomics" className="text-[#181818] transition ease-in-out  hover:text-[#cececece]">Tokenomics</HashLink>
          <HashLink to="https://devpn.gitbook.io" target="_blank" className="text-[#181818] transition ease-in-out  hover:text-[#cececece]">Documentation</HashLink>
          <HashLink to="#" target="_blank" className="text-[#181818] transition ease-in-out  hover:text-[#cececece]">
              <button data-tooltip-target="tooltip-default" type="button" disabled class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-6 border border-gray-400 rounded shadow-sm whitespace-nowrap">dApp</button>
              <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Coming soon
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
          </HashLink>
  
        </div>
        </Fade>
        {/* Mobile Navigation Menu */}
        <div className={`fixed inset-0 text-white z-50 transition-opacity duration-300 ease-in-out overflow-hidden ${menuOpen ? "opacity-100 pointer-events-auto text-center  font-bold text-xl " : "opacity-0 pointer-events-none"}`}>
          <div className="absolute top-0 left-0 w-full text-white bg-[#1f1f1f] shadow-lg transform transition-transform duration-300 ease-in-out" style={{ height: '50vh' }}>
            <div className="container mx-auto px-4 lg:px-8 py-5">
              {/* Close menu button */}
              <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Menu items */}
              <ul className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:space-x-8">
                <li><HashLink to="#aboutus" className="text-[#FFF] transition ease-in-out  hover:text-[#cececece]">About</HashLink></li>
                <li><HashLink to="#features" className="text-[#FFF] transition ease-in-out  hover:text-[#cececece]">Features</HashLink></li>
                <li><HashLink to="#tokenomics" className="text-[#FFF] transition ease-in-out  hover:text-[#cececece]">Tokenomics</HashLink></li>
                <li><HashLink to="https://devpn.gitbook.io" target="_blank" className="text-[#FFF] transition ease-in-out  hover:text-[#cececece]">Documentation</HashLink></li>
                <HashLink to="https://devpn.gitbook.io" target="_blank" className="text-[#FFF] transition ease-in-out  hover:text-[#cececece]">
                  <button data-tooltip-target="tooltip-default" type="button" disabled class=" text-white bg-black font-semibold py-1 px-6 border border-gray-600 rounded shadow-sm whitespace-nowrap">dApp</button>
                  <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Coming soon
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div></HashLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Login and Download buttons */}
        
        {/* <div className="hidden lg:flex lg:items-center">
        <Fade direction="right">
          <HashLink to="" data-tooltip-target="tooltip-default" className=" flex-nowrap btn text-white bg-[#181818] flex rounded-md text-sm z-10 px-8 py-3 hover:text-[#181818] border-2 hover:bg-transparent hover:border-solid transition-all duration-300">
              Download <FaArrowRight />
          </HashLink>
        </Fade>
          <div id="tooltip-default" role="tooltip" class="absolute z-100 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Coming soon!
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div> */}
      </div>
    </div>
  );
};

export default Header;
