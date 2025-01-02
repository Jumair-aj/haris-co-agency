import React from "react";
import facebookIcon from "../assets/images/icons/facebookIcon.png";
import instaIcon from "../assets/images/icons/instaIcon.png";
import linkedInIcon from "../assets/images/icons/linkedInIcon.png";
import Logo from "@/assets/images/Haris&Co-black.svg";

const Footer = () => {
  return (
    <div className="px-[80px] pt-[44px] bg-white">
      <div className="flex w-full justify-between">
        <div className="w-[30%] flex flex-col gap-7">
          <div className="">
            <p className="text-[40px] text-black font-[thin]">Let’s Connect</p>
            <p className="text-[55px] text-black/65 font-medium leading-none">
              bd@harisand.co
            </p>
          </div>
          <div className="flex justify-between gap-[25px]">
            <img src={facebookIcon} alt="facebook Icon" />
            <img src={instaIcon} alt="insta icon" />
            <img src={linkedInIcon} alt="linked in Icon" />
            <img src={facebookIcon} alt="x icon" />
          </div>
        </div>
        <div className=" items-start">
          <div className="flex w-fit flex-col items-start">
            <div className="w-fit h-full flex ">
              <img className="h-full w-[870px] lg:w--[750px]" src={Logo} alt="Haris&Co" />
            </div>
            <div className="flex justify-between gap-[60px] mt-[40px] *:font-[thin] w-full">
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
      <div className="mt-[115px] flex justify-between mb-[40px] text-black/55 text-lg font-medium">
        <div className=" flex gap-[60px]">
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="">
          <p>© 2024.Haris&Co</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
