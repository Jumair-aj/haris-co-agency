import React from 'react'
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import BrandPartnerFirst from "@/assets/images/brandPartnerFirst.png";
import BrandPartnerSecond from "@/assets/images/brandPartnerSecond.png";


const BrandPartnerSection = () => {
  return (
    <div className=" bg-[#0E0E0E] py-[64px]  md:p-[80px] flex flex-col gap-[50px] md:gap-[91px] overflow-hidden">
        <div  iv className="flex flex-col gap-[50px] w-max lg:w-fit">
          <img
            src={BrandPartnerFirst}
            alt="Right arrow"
            className="w-max  font-medium h-full object-cover opacity-[0.5]"
          />
          <img
            src={BrandPartnerSecond}
            alt="Right arrow"
            className="w-max  font-medium h-full object-contain opacity-[0.5]"
          />
        </div>
        <div className=" flex justify-center">
          <Link to="/clients" className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300">
            <span
              className="text-[18px]  text-opacity-[55%] "
            >
              View All Clients
            </span>
            <MoveRight size={30}  className='text-white/55 transition-all duration-300 group-hover:text-white'strokeWidth={1.8}/>
          </Link>
        </div>
      </div>
  )
}

export default BrandPartnerSection