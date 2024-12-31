import React from "react";
import client1 from "../assets/images/clients/client1.png";
import client2 from "../assets/images/clients/client2.png";
import client3 from "../assets/images/clients/client3.png";
import client4 from "../assets/images/clients/client4.png";
import RightArrowOfWhite from "@/assets/images/icons/rightArrowOffwhite.png";
import { Link } from 'react-router-dom';

function ClientsSection() {
  return (
    <div className="bg-black px-[80px] h-full">
      <div className="py-[80px]">
        <p className="text-white text-[40px]">What Our Clients Say</p>
      </div>
      <div className="flex justify-between gap-[10px]">
        <div className="relative">
          <img className="w-[300px] object-contain" src={client1} alt="" />
          <div className="flex flex-col  absolute bottom-0 left-[20px]">
            <p className="font-medium text-black text-[32px]">Emily Wong</p>
            <p className="text-[20px] text-black">Chief Brand Officer</p>
          </div>
        </div>
        <div className="relative">
          <img className="w-[300px] object-contain" src={client2} alt="" />
          <div className="flex flex-col  absolute bottom-0 left-[20px]">
            <p className="font-medium text-black text-[32px]">Emily Wong</p>
            <p className="text-[20px] text-black">Chief Brand Officer</p>
          </div>
      
        </div>
        <div className="relative">
          <img className="w-[300px] object-contain" src={client3} alt="" />
          <div className="flex flex-col  absolute bottom-0 left-[20px]">
            <p className="font-medium text-black text-[32px]">Emily Wong</p>
            <p className="text-[20px] text-black">Chief Brand Officer</p>
          </div>
      
        </div>
        <div className="relative">
          <img className="w-[300px] object-contain" src={client4} alt="" />
          <div className="flex flex-col  absolute bottom-0 left-[20px]">
            <p className="font-medium text-black text-[32px]">Emily Wong</p>
            <p className="text-[20px] text-black">Chief Brand Officer</p>
          </div>
      
        </div>
      </div>
      <div className="w-full flex justify-center mt-[80px] pb-[80px]  h-full">
          <Link to="/clients" className=" flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5">
            <span
              
              className="text-[18px]  text-opacity-[55%] "
            >
              View All Testimonials
            </span>
            <img
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain"
            />
          </Link>
        </div>
    </div>
  );
}

export default ClientsSection;
