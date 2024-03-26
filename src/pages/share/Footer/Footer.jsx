import telegramIcon from '../../../assets/telegram.svg'
import footerIcon2 from '../../../assets/dex.svg'
import footerIcon3 from '../../../assets/uniswap.svg'
import footerIcon4 from '../../../assets/twitterx.svg'
import iconX from '../../../assets/iconX.svg'
import { Link } from 'react-router-dom'
import logo from '../../../../public/favicon.png'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='mt-0 bg-black w-full'>
      <footer id='footer' className="relative w-full bg-black footer z-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between p-10 text-lg">
        {/* Company */}
        <div className='z-20 w-full flex shrink-0 col-span-2'>
          <img src={logo} width="100px" className='pb-5 opacity-10' alt="" />
    <p className='px-5'>We recognize the urgency of the digital security challenge, and we're proud to offer a comprehensive solution that prioritizes your online privacy and safety.
    <br/><br/>Our state-of-the-art Virtual Private Network (VPN) service acts as your digital shield, encrypting your internet connection and masking your IP address to thwart prying eyes and malicious actors.</p>
        </div>
        
        {/* Products */}
        <div className="relative w-full footer">
          <nav className='z-20'>
            <h6 className="footer-title text-white">Quick Links</h6>
                <HashLink to="#aboutus" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">About</HashLink>
                <HashLink to="#features" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Features</HashLink>
                <HashLink to="#roadmap" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Roadmap</HashLink>
                <HashLink to="#economics" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Economics</HashLink>
                <HashLink to="www" className="text-[#797E86] transition ease-in-out  hover:text-[#cececece]">Documentation</HashLink>
          </nav>
          
          {/* Legal */}
          <nav className='z-20'>
            <h6 className="footer-title text-white">Information</h6>
            <a href="doc" className="transition ease-in-out  hover:text-[#cececece] text-[#797E86]">Documentation</a>
            <a href="doc" className="transition ease-in-out  hover:text-[#cececece] text-[#797E86]">Whitepaper</a>
          </nav>
        </div>

        
      </footer>

      {/* Bottom Footer */}
      <footer className=" relative bg-black footer px-10 py-4 text-lg pb-5">
        <aside className="items-center grid-flow-col z-20">
          
          <p className="text-[#797E86] ">
          © 2023 DEVPN. All rights reserved.
          </p>
        </aside>
        <nav className=" md:place-self-center md:justify-self-end">
          <div className="flex items-center  z-20 gap-6 text-[#797E86] ">
            <Link><img src={telegramIcon} className='footer-icon' alt="telegram"/></Link>
            <Link><img src={footerIcon2} className='footer-icon' alt="dextools"/></Link>
            <Link><img src={footerIcon3} className='footer-icon' alt="uniswap"/></Link>
            <Link><img src={footerIcon4} className='footer-icon' alt="twitter"/></Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
