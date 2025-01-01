import React from "react";
import Logo from "@/assets/images/Haris&Co-black.svg";

function AddressSection() {
  return (
    <div className="px-[80px] bg-white mb-[43px]">
      <div className="mt-[80px] mb-[80px]">
        <p className="text-[40px] font-medium text-black">Regions We Operate</p>
      </div>
      <div className="flex justify-center">
      <div className="flex flex-col gap-[49px] h-full pr-[70px] border-r border-r-gray-300">
          <div>
            <img src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Address :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Phone :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
               080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Hours :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
              09:30 AM - 06:30 PM
              </p>
            </div>
          </div>
         
        </div>
        <div className="flex flex-col gap-[49px] pl-[70px]">
          <div>
            <img src={Logo} alt="Haris&Co-logo" />
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Address :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
                4, 6QGR+7PW WING Avenue, Panniyankara, Kozhikode, Kerala 673003
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Phone :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
               080757 72921
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[20%]">
              <p className="text-[24px] font-bold text-black">Hours :</p>
            </div>
            <div className="w-[80%]">
              <p className="text-[24px] text-black text-start">
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
