import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Haris&Co-logo.svg';
import menuIcon from '@/assets/images/icons/menu.svg';
import ContactButton from './ContactButton';
import { useState } from 'react';
import MobileMenu from './MobileMenu';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.height = "100vh"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      document.body.style.height = "auto"; // Prevent scrolling
    }
  };
  return (
    <div className="px-[16px] md:px-[40px] lg:px-[80px] py-[35px] w-full bg-[#141414]  flex justify-between items-center">
      <div className=''>
        <img
          src={Logo}
          alt="Haris & Co."
          className="w-full h-[30px] md:h-[50px] lg:h-[66px]"
        />
      </div>
      <div className='items-center gap-[49px] hidden lg:flex'>
        <div className="flex justify-between gap-[40px] text-white *:font-light">
          <Link to="/services" className="text-[18px] font-[thin]">Services</Link>
          <Link to="/works" className="text-[18px] font-[thin]">Works</Link>
          <Link to="/clients" className="text-[18px] font-[thin]">Clients</Link>
          <Link to="/awards" className="text-[18px] font-[thin]">Awards</Link>
          <Link to="/about" className="text-[18px] font-[thin]">About us</Link>
          <Link to="/blogs" className="text-[18px] font-[thin]">Blogs</Link>
          <Link to="/careers" className="text-[18px] font-[thin]">Careers</Link>
        </div>
        <ContactButton text='Contact Us' href='/contact' />
      </div>

      <div className="lg:hidden flex">
        <button onClick={toggleMenu}>
          {/* {menuIcon ? */}
          {/* // <img src={menuIcon} alt="Menu Icon" className="" /> */}
          <button
            className="relative z-50 flex flex-col items-end justify-center w-10 h-10 gap-1 md:gap-1.5 bg-transparent border-none cursor-pointer md:w-15 md:h-15"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-[2px] w-6 md:w-9 bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px] w-5 md:w-[30px] bg-white rounded-sm transition-opacity duration-300  ${menuOpen ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-[2px]  bg-white rounded-sm transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] md:-translate-y-[7.5px] -rotate-45 w-6 md:w-9" : "w-4 md:w-6"
                }`}
            ></span>
          </button>
          {/* :
          <img src={menuIcon} alt="Menu Icon" className="" /> */}
          {/* } */}
        </button>
        <MobileMenu isOpen={menuOpen} />
      </div>


    </div>
  );
}