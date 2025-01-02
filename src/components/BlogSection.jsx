import React from "react";
import Blog1 from "../assets/images/blogs/blog1.png";
import Blog2 from "../assets/images/blogs/blog2.png";
import Blog3 from "../assets/images/blogs/blog3.png";
import RightArrowOfWhite from "@/assets/images/icons/rightArrowOffwhite.png";
import { Link } from 'react-router-dom';
import { MoveRight } from "lucide-react";

export const BlogSection = () => {
  return (
    <div className="px-[80px] bg-black ">
      <div className="py-[57px] ">
        <p className="text-[40px] font-medium text-white">
          Latest News & Blogs
        </p>
      </div>

      <div className="  flex gap-[81px] pb-[81px] w-full border-b" style={{ borderColor: "rgba(255, 255, 255, 0.55)" }}>
        <div>
          <img src={Blog1} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-[50px] font-medium text-white ">
              Styling an online presence for Disha Creationz!
            </p>
            <p className="text-[24px] text-white/55">Web Development & UI/UX</p>
          </div>
          <div>
            <p className="text-white/55 text-[24px]">
              November 07, 2024 . 6 min read{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-[105px] gap-[81px] pb-[81px] w-full border-b" style={{ borderColor: "rgba(255, 255, 255, 0.55)" }}>
        <div>
          <img src={Blog2} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-[50px] font-medium text-white ">
              Styling an online presence for Disha Creationz!
            </p>
            <p className="text-[24px] text-white/55">Web Development & UI/UX</p>
          </div>
          <div>
            <p className="text-white/55 text-[24px]">
              November 07, 2024 . 6 min read{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-[105px] gap-[81px] pb-[81px] w-full " >
        <div>
          <img src={Blog3} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-[50px] font-medium text-white ">
              Styling an online presence for Disha Creationz!
            </p>
            <p className="text-[24px] text-white/55">Web Development & UI/UX</p>
          </div>
          <div>
            <p className="text-white/55 text-[24px]">
              November 07, 2024 . 6 min read{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[80px] pb-[80px]  h-full">
          <Link to="/clients" className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-white transition-all duration-300">
            <span
              
              className="text-[18px]  text-opacity-[55%] "
            >
              View All Testimonials
            </span>
            <MoveRight size={30}  className='text-white/55 transition-all duration-300 group-hover:text-white'strokeWidth={1.8}/>
{/* 
            <img
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain"
            /> */}
          </Link>
        </div>
    </div>
  );
};
