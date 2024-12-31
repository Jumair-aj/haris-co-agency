import React from 'react';
import OurWorksData from '../utils/data/ourWorks';
import RightArrowOfBlack from "@/assets/images/icons/rightArrowOfBlack.png";
import { Link } from 'react-router-dom';


function OurWorks() {
  return (
    <div className='px-[80px] mt-[80px]'>
      <p className='text-[40px]'>See Our Works</p>
      <div className=' grid grid-cols-2 gap-[50px] mt-[80px]'>
        {OurWorksData.map((data) => (
         <div 
         key={data.id} 
         className={`h-full flex flex-col ${data.id % 2 === 0 ? 'pt-[78px]' : ''}`}
       >
         <img className='w-full h-full' src={data.image} alt={data.heading} />
      
         <p className='font-medium text-[36px] text-left ml-[-11px]'>{data.heading}</p>
         <p className='text-black opacity-55 text-left'>{data.description}</p>
       </div>
        ))}
      </div>
      <div className=" underline flex gap-[11px] mt-[150px] justify-center items-center">
            <Link
              href="/services"
              className="text-[18px] text-black text-opacity-[55%] "
            >
              Explore All Works
            </Link>
            <img
              src={RightArrowOfBlack}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain underline"
            />
          </div>
    </div>
  );
}

export default OurWorks;