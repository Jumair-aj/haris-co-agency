import React from "react";
import Logo from "@/assets/images/Haris&Co-black.svg";

function AddressSection() {
  return (
    <div className="px-[16px] md:px-[40px] lg:px-[80px] bg-white my-[31px] md:my-[60px] lg:my-[90px]">
      <div className="">
        <p className=" text-[32px] md:text-[40px] font-medium text-black">Regions We Operate</p>
      </div>
      <div className="flex flex-col lg:flex-row  mt-[50px] md:mt-[75px] lg:mt-[90px] md:w-10/12 lg:w-9/12 mx-auto ">
      <div className="flex flex-col gap-[25px] md:gap-[40px] lg:gap-[49px] h-full lg:pr-[70px] pb-[36px] border-b lg:border-r lg:border-b-0 border-black md:border-r-black">
          <div>
          <img className="w-[252px] lg:w-full" src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex  w-full  gap-4 items-start">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="w-4/5">
              <p className=" text-[20px] md:text-2xl text-black text-start font-[thin]">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full  gap-4 items-start">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="w-4/5">
              <p className="text-[20px] md:text-2xl text-black text-start font-[thin]">
              080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full  gap-4">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="w-4/5">
              <p className="text-[20px] md:text-2xl text-black text-start font-[thin]">
              09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
         
        </div>
        <div className="flex mt-[44px] lg:mt-0 flex-col gap-[49px] h-full lg:pl-[70px] pb-[36px]">
          <div>
            <img className="w-[252px] lg:w-full" src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex  w-full  gap-4 items-start">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="w-4/5">
              <p className=" text-[20px] md:text-2xl text-black text-start font-[thin]">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full  gap-4 items-start">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="w-4/5">
              <p className="text-[20px] md:text-2xl text-black text-start font-[thin]">
            080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full  gap-4">
            <div className="w-1/5">
              <p className="text-[20px] md:text-2xl font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="w-4/5">
              <p className="text-[20px] md:text-2xl text-black text-start font-[thin]">
              09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default AddressSection;
