import React from "react";
import Logo from "@/assets/images/Haris&Co-black.svg";

function AddressSection() {
  return (
    <div className="px-[80px] bg-white my-[90px]">
      <div className="">
        <p className="text-[40px] font-medium text-black">Regions We Operate</p>
      </div>
      <div className="flex  mt-[90px] w-9/12 mx-auto">
      <div className="flex flex-col gap-[49px] h-full pr-[70px] border-r border-r-gray-300">
          <div>
            <img src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex w-full  gap-4 items-start">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="">
              <p className="pl-[18px] text-2xl text-black text-start font-[thin]">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full  gap-4 items-start">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="">
              <p className="text-2xl text-black text-start font-[thin]">
              080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full  gap-4">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="">
              <p className="text-2xl text-black text-start font-[thin]">
              09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
         
        </div>
        <div className="flex flex-col gap-[49px] pl-[70px]">
          <div>
            <img src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex w-full  gap-4">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Address :</p>
            </div>
            <div className="">
              <p className="pl-[18px] text-2xl text-black text-start font-[thin]">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full  gap-4">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Phone :</p>
            </div>
            <div className="">
              <p className="text-2xl text-black text-start font-[thin]">
              080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full  gap-4">
            <div className="w-[20%]">
              <p className="text-2xl font-medium text-black text-nowrap">Hours :</p>
            </div>
            <div className="">
              <p className="text-2xl text-black text-start font-[thin]">
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
