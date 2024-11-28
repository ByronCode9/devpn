import telegramIcon from '../../../assets/telegram.svg'
import footerIcon2 from '../../../assets/dex.svg'
import footerIcon3 from '../../../assets/uniswap.svg'
import footerIcon4 from '../../../assets/twitterx.svg'
import iconX from '../../../assets/iconX.svg'
import { Link } from 'react-router-dom'
import logo from '../../../assets/devpn-logo-icon.svg'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='mt-0 bg-black w-full'>
      <footer id='footer' className="relative w-full bg-black footer z-50 grid grid-cols-1 lg:grid-cols-3 justify-between p-10 text-lg">
        {/* Company */}
        <div className='z-20 w-full h-full items-center align-middle my-auto flex shrink-0 col-span-2'>
          <img src={logo} className='w-24 md:w-16 opacity-5 md:opacity-100 text-center md:relative absolute m-auto left-0 right-0' alt="" />
          <p className='px-0 md:px-5 text-[#adadad]'>Decentralized technology has been around for years, but adoption has been difficult due to its technical complexity and a lack of user trust resulting from low performance and capital management.
            <br /><br />This is about to change as DEVPN drives true decentralized privacy into the hands of internet users.</p>
        </div>

        {/* Products */}
        <div className="relative w-full footer flex gap-16 justify-center lg:gap-32">
          <nav className='z-20'>
            <h6 className="footer-title text-white">Quick Links</h6>
            <HashLink to="#aboutus" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">About</HashLink>
            <HashLink to="#features" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Features</HashLink>
            <HashLink to="#tokenomics" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Tokenomics</HashLink>
            <HashLink to="https://devpn.gitbook.io" target="_blank" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Documentation</HashLink>
          </nav>

          {/* Legal */}
          <nav className='z-20'>
            <h6 className="footer-title text-white">Information</h6>
            <a href="https://devpn.gitbook.io/devpn/legal/disclaimer" target="_blank" className="transition ease-in-out  hover:text-[#cececece] text-[#797E86]">Disclaimer</a>
            <a href="https://devpn.gitbook.io/devpn/legal/privacy-policy" target="_blank" className="transition ease-in-out  hover:text-[#cececece] text-[#797E86]">Privacy Policy</a>
            <a href="https://devpn.gitbook.io/devpn/legal/terms-and-conditions" target="_blank" className="transition ease-in-out  hover:text-[#cececece] text-[#797E86]">Terms and Conditions</a>

          </nav>
        </div>


      </footer>

      {/* Bottom Footer */}
      <footer className=" relative bg-black footer px-10 py-4 text-lg pb-5">
        <aside className="grid-flow-col w-full z-20 text-center lg:text-left">
          <p className="text-[#797E86] text-center">
            © 2024 DeVPN® Powered by DecentraVerse. All rights reserved.
          </p>
        </aside>
        <nav className="justify-self-center md:justify-self-end">
          <div className="flex items-center  z-20 gap-6 text-[#797E86] ">
            <HashLink to="https://t.me/DEVPNofficial" target='_blank'><img src={telegramIcon} width="29" className='footer-icon' alt="telegram" /></HashLink>
            <HashLink><img src={footerIcon2} width="25" className='footer-icon' alt="dextools" /></HashLink>
            <HashLink><img src={footerIcon3} width="31" className='mt-[-6px] footer-icon' alt="uniswap" /></HashLink>
            <HashLink to="https://x.com/DEVPNofficial" target='_blank'><img src={footerIcon4} width="25" className='footer-icon' alt="twitter" /></HashLink>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
