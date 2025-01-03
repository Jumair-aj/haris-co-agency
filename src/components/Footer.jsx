import React from "react";
import facebookIcon from "../assets/images/icons/facebookIcon.png";
import instaIcon from "../assets/images/icons/instaIcon.png";
import linkedInIcon from "../assets/images/icons/linkedInIcon.png";
import Logo from "@/assets/images/Haris&Co-black.svg";

const Footer = () => {
  return (
    <div className="px-[16px] md:px-[40px] lg:px-[80px] pt-[44px] bg-white text-nowrap">
      <div className="flex w-full justify-between flex-col md:flex-row gap-[50px]">
        <div className="w-[30%] flex flex-col gap-7">
          <div className="">
            <p className="text-[40px] text-black font-[thin]">Let’s Connect</p>
            <p className="text-[38px] text-black/65 font-medium leading-none xs:text-[48px]">
              bd@harisand.co
            </p>
          </div>
          <div className="flex  gap-6">
            <img src={facebookIcon} alt="facebook Icon" />
            <img src={instaIcon} alt="insta icon" />
            <img src={linkedInIcon} alt="linked in Icon" />
            <img src={facebookIcon} alt="x icon" />
          </div>
        </div>
        <div className=" items-start">
          <div className="flex w-fit flex-col items-start">
            <div className="w-fit h-full flex ">
              <img className="h-full w-[350px] md:w-[500px] lg:w-[750px]" src={Logo} alt="Haris&Co" />
            </div>
            <div className="flex justify-evenly md:justify-between gap-[35px] md:gap-[60px] mt-[40px] *:font-[thin] w-full flex-wrap">
              <p className="text-[18px]">Services</p>
              <p className="text-[18px]">Works</p>
              <p className="text-[18px]">Clients</p>
              <p className="text-[18px]">Awards</p>
              <p className="text-[18px]">About us</p>
              <p className="text-[18px]">Blogs</p>
              <p className="text-[18px]">Careers</p>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] md:mt-[80px] lg:mt-[115px] flex justify-between mb-[40px] text-black/55 text-lg font-medium items-end">
        <div className=" flex gap-4 md:gap-[40px] lg:gap-[60px] flex-col md:flex-row">
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="">
          <p>&copy; 2024.Haris&Co</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
