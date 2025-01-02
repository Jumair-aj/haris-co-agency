import React from 'react'

export const ClientsDataSection = () => {
  return (
    <div className="py-[56px] md:py-[96px]  bg-[#0E0E0E] w-full flex flex-col gap-[56px] md:gap-[87px] items-center justify-center">
        <div className="text-center px-[16px]  md:px-[150px]">
          <p className="text-[32px] md:text-[64px] text-white opacity-100 font-medium leading-tight">
            <span className="font-light opacity-50">  Crafting transformative </span>digital experiences<span className="font-light opacity-50"> for the world's leading
              brands by seamlessly blending design, technology,</span> and marketing.
          </p>
        </div>

        <div className="w-full flex flex-col gap-[20px] md:gap-0 items-center md:flex-row md:justify-around">
          <div className="flex flex-col text-center md:text-start leading-none">
            <p className="text-[36px] md:text-[64px] font-medium  text-white text-opacity-50">500+</p>
            <p className="text-[24px] md:text-[34px] text-white text-opacity-50 font-[thin]">Clients</p>
          </div>
          <div className="flex flex-col text-center md:text-start leading-none">
            <p className="text-[36px] md:text-[64px] font-medium  text-white text-opacity-50">1000+</p>
            <p className="text-[24px] md:text-[34px] text-white text-opacity-50 font-[thin]">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col text-center md:text-start leading-none">
            <p className="text-[36px] md:text-[64px] font-medium  text-white text-opacity-50">4.9</p>
            <p className="text-[24px] md:text-[34px] text-white text-opacity-50 font-[thin]">
              Rating on Google
            </p>
          </div>
        </div>
      </div>
  )
}
