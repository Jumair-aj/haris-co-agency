import React from 'react'
import LandingButton from '../../ui/common/LandingButton'
import { Link } from 'react-router-dom'
import Logo from '@/assets/images/Haris&Co.svg';

const LandingHeader = () => {
    return (
        <div className='flex justify-between bg-black md:px-[80px] lg:px-[100px] md:py-[40px] items-center'>
            <img src={Logo} className='h-[30px] md:h-[35px] lg:h-[40px] ' />
            <div className={"flex justify-between items-center gap-[30px] xl:gap-[40px] text-white/80 *:font-light  "}>
                <Link to="/" className="text-[18px] font-[thin] text-white">Home</Link>
                <Link to="/services" className="text-[18px] font-[thin] ">Services</Link>
                <Link to="/culture" className="text-[18px] font-[thin]">Culture</Link>
                <Link to="/casestudies" className="text-[18px] font-[thin]">Case Studies</Link>
                <Link to="/contact" className="text-[18px] font-[thin]">Contact Us</Link>
            </div>
            <LandingButton text={'GET A PROPOSAL'}/>
        </div>
    )
}

export default LandingHeader