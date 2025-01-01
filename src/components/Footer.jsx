import React from "react";
import facebookIcon from "../assets/images/icons/facebookIcon.png";
import instaIcon from "../assets/images/icons/instaIcon.png";
import linkedInIcon from "../assets/images/icons/linkedInIcon.png";
import Logo from "@/assets/images/Haris&Co-black.svg";

const Footer = () => {
  return (
    <div className="px-[80px] pt-[44px] bg-white">
      <div className="flex w-full justify-between">
        <div className="w-[30%] flex flex-col">
          <div>
            <p className="text-[40px] text-black">Let’s Connect</p>
          </div>
          <div>
            <p className="text-[55px] text-black/65 font-medium">
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
        <div className="w-[65%] items-start">
          <div className="flex w-full flex-col items-start">
            <div className="w-full h-full flex ">
                <img className="h-full w-[780px]" src={Logo} alt="Haris&Co" />
            </div>
            <div className="flex justify-between gap-[60px] mt-[40px]">
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
      <div className="mt-[115px] flex justify-between mb-[40px]">
        <div className="w-[85%] flex gap-[60px]">
<p className="text-[18px]">Privacy</p>
<p className="text-[18px]">Terms & Conditions</p>
        </div>
        <div className="15%">
<p className="text-[18px]">© 2024.Haris&Co</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
