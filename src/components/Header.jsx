import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Haris&Co-logo.svg';
import RightArrow from '@/assets/images/icons/rightArrow.png'

export default function Header() {
  return (
    <div className="px-[80px] py-[35px] w-full bg-[#141414]  flex justify-between items-center">
      <div>
        <img
          src={Logo}
          alt="Haris & Co."
          className="w-full h-[66px]"
        />
      </div>
      <div className='flex items-center gap-[49px]'>
        <div className="flex justify-between gap-[40px] text-white *:font-light">
          <Link to="/services" className="text-[16px]">Services</Link>
          <Link to="/works" className="text-[16px]">Works</Link>
          <Link to="/clients" className="text-[16px]">Clients</Link>
          <Link to="/awards" className="text-[16px]">Awards</Link>
          <Link to="/about" className="text-[16px]">About Us</Link>
          <Link to="/blogs" className="text-[16px]">Blogs</Link>
          <Link to="/careers" className="text-[16px]">Careers</Link>


        </div>
        <div className="flex items-center">
          <Link to="/careers" className="text-[18px] text-white">
            <div className="px-[22px] py-[12px] flex items-center gap-[10px] border border-solid border-white">
              Contact Us
              <img
                src={RightArrow}
                alt="Right arrow"
                className="w-[26px] h-full"
              />
            </div>
          </Link>
        </div>
      </div>


    </div>
  );
}