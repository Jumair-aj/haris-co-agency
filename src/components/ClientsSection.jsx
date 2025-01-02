import React from "react";
import client1 from "../assets/images/clients/client1.png";
import client2 from "../assets/images/clients/client2.png";
import client3 from "../assets/images/clients/client3.png";
import client4 from "../assets/images/clients/client4.png";
import PlayIcon from "@/assets/images/icons/play.svg";
import { Link } from 'react-router-dom';
import { MoveRight } from "lucide-react";

function ClientsSection() {
  return (
    <div className="bg-black px-[80px] h-full">
      <div className="py-[80px]">
        <p className="text-white text-[40px]">What Our Clients Say</p>
      </div>
      <div className="flex justify-between gap-6">
        <div className="relative">
          <img className="w-[400px] object-contain" src={client1} alt="" />
          <div className="flex items-center justify-between w-full  absolute bottom-6 px-6">
            <div className="">
              <p className="font-medium text-black text-[32px] leading-none">Emily Wong</p>
              <p className="text-[20px] text-black font-[thin]">Chief Brand Officer</p>
            </div>
            <div className="">
              <img src={PlayIcon} className="" alt="" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="w-[400px] object-contain clientGradient" src={client2} alt="" />
          <div className="flex items-center justify-between w-full  absolute bottom-6 px-6">
            <div className="">
              <p className="font-medium text-black text-[32px]">Emily Wong</p>
              <p className="text-[20px] text-black">Chief Brand Officer</p>
            </div>
            <div className="">
              <img src={PlayIcon} className="" alt="" />
            </div>
          </div>

        </div>
        <div className="relative">
          <img className="w-[400px] object-contain" src={client3} alt="" />
          <div className="flex items-center justify-between w-full  absolute bottom-6 px-6">
            <div>
              <p className="font-medium text-black text-[32px]">Emily Wong</p>
              <p className="text-[20px] text-black">Chief Brand Officer</p>
            </div>
            <div className="">
              <img src={PlayIcon} className="" alt="" />
            </div>
          </div>

        </div>
        <div className="relative">
          <img className="w-[400px] object-contain" src={client4} alt="" />
          <div className="flex items-center justify-between w-full  absolute bottom-6 px-6">
            <div>
              <p className="font-medium text-black text-[32px]">Emily Wong</p>
              <p className="text-[20px] text-black">Chief Brand Officer</p>
            </div>
            <div className="">
              <img src={PlayIcon} className="" alt="" />
            </div>
          </div>

        </div>
      </div>
      <div className="w-full flex justify-center mt-[80px] pb-[80px]  h-full">
        <Link to="/clients" className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-b-white transition-all duration-300 ">
          <span

            className="text-[18px]  text-opacity-[55%] "
          >
            View All Testimonials
          </span>
          <MoveRight size={30} className='text-white/55 transition-all duration-300 group-hover:text-white' strokeWidth={1.8} />

          {/* <img
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain"
            /> */}
        </Link>
      </div>
    </div>
  );
}

export default ClientsSection;
