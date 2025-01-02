import React from 'react';
import OurWorksData from '../utils/data/ourWorks';
import RightArrowOfBlack from "@/assets/images/icons/rightArrowOfBlack.png";
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';


function OurWorks() {
  return (
    <div className='px-[80px] mt-[80px]'>
      <p className='text-[40px]'>See Our Works</p>
      <div className=' grid grid-cols-2 gap-y-[150px] gap-x-[120px] mt-[80px]'>
        {OurWorksData.map((data) => (
          <div
            key={data.id}
            className={`h-full flex flex-col ${data.id % 2 === 0 ? 'mt-[78px]' : ''}`}
          >
            <img className='w-full h-full' src={data.image} alt={data.heading} />

            <p className='font-medium text-[36px] text-left ml-[-11px]'>{data.heading}</p>
            <p className='text-black opacity-55 text-left'>{data.description}</p>
          </div>
        ))}
      </div>
      <Link
        href="/services"
        className="group text-[18px] text-black/55 border-b border-b-black/55 flex w-fit mx-auto gap-[11px] my-[150px] justify-center items-center hover:text-black hover:border-b-black transition-all duration-300"
      >
        <span className="">
          Explore All Works
        </span>
        <MoveRight size={30} className='text-black/55 transition-all duration-300 group-hover:text-black' strokeWidth={1.8} />
        {/* <img
          src={RightArrowOfBlack}
          alt="Right arrow"
          className="w-[26px] font-medium h-full object-contain underline filter-"
        /> */}
      </Link>
    </div >
  );
}

export default OurWorks;