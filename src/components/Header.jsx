import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/images/Haris&Co-logo.svg';
import ContactButton from './ContactButton';


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
          <Link to="/services" className="text-[18px] font-[thin]">Services</Link>
          <Link to="/works" className="text-[18px] font-[thin]">Works</Link>
          <Link to="/clients" className="text-[18px] font-[thin]">Clients</Link>
          <Link to="/awards" className="text-[18px] font-[thin]">Awards</Link>
          <Link to="/about" className="text-[18px] font-[thin]">About us</Link>
          <Link to="/blogs" className="text-[18px] font-[thin]">Blogs</Link>
          <Link to="/careers" className="text-[18px] font-[thin]">Careers</Link>


        </div>
       <ContactButton text='Contact Us' href='/contact'/>
      </div>


    </div>
  );
}