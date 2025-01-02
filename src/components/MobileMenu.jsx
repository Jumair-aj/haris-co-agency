import React from 'react'
import { Link } from 'react-router-dom'
import ContactButton from './ContactButton'
import Logo from '@/assets/images/Haris&Co-logo.svg';


export default function MobileMenu({ isOpen }) {
    return (
        <div className={`bg-[#141414] fixed top-0 left-0 z-40 w-full h-screen text-white transform transition-transform duration-300 overflow-hidden p-11 space-y-10  ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            <div className=''>
                <img
                    src={Logo}
                    alt="Haris & Co."
                    className=" h-[30px] "
                />
            </div>
            <div className="flex flex-col justify-between gap-[20px] text-white *:font-light">
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
    )
}
