import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import RightArrowOfWhite from "@/assets/images/icons/rightArrowOffwhite.png";
import BrandPartnerFirst from "@/assets/images/brandPartnerFirst.png";
import BrandPartnerSecond from "@/assets/images/brandPartnerSecond.png";
import BannerVideo from "@/assets/videos/banner.mp4";
import FeatureSection from '@/components/FeatureSection';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-white  w-full flex justify-center items-center">
        {/* <p className="text-[44px] text-black font-bold">need</p> */}
        <video src={BannerVideo} controls={false} autoPlay={true} loop={true} muted />
      </div>
      <div className="py-[96px]  bg-[#0E0E0E] w-full flex flex-col gap-[87px] items-center justify-center">
        <div className="text-center px-[20%]">
          <p className="text-[64px] text-white opacity-100 font-medium leading-tight">
            <span className="font-light opacity-50">  Crafting transformative </span>digital experiences<span className="font-light opacity-50"> for the world's leading
              brands by seamlessly blending design, technology,</span> and marketing.
          </p>
        </div>

        <div className=" w-full flex justify-around">
          <div className="flex flex-col text-start leading-none">
            <p className="text-[64px] font-medium  text-white text-opacity-50">500+</p>
            <p className="text-[34px] text-white text-opacity-50 font-extralight">Clients</p>
          </div>
          <div className="flex flex-col text-start leading-none">
            <p className="text-[64px] font-medium  text-white text-opacity-50">1000+</p>
            <p className="text-[34px] text-white text-opacity-50 font-extralight">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col text-start leading-none">
            <p className="text-[64px] font-medium  text-white text-opacity-50">4.9</p>
            <p className="text-[34px] text-white text-opacity-50 font-extralight">
              Rating on Google
            </p>
          </div>
        </div>
      </div>

      <FeatureSection />
      <div className="h-[620px] w-full bg-black p-[80px] flex flex-col gap-[91px] ">
        <div className="flex flex-col gap-[50px]">
          <img
            src={BrandPartnerFirst}
            alt="Right arrow"
            className="w-full  font-medium h-full object-contain"
          />
          <img
            src={BrandPartnerSecond}
            alt="Right arrow"
            className="w-full  font-medium h-full object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="underline flex gap-[11px]">
            <Link
              href="/services"
              className="text-[18px] text-white text-opacity-[55%] "
            >
              View All Clients
            </Link>
            <img
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
