import React, { useState } from 'react'
import RightArrow from "@/assets/images/icons/rightArrowBlack.svg";


export default function FeatureSection() {
  const [isHovered, setIsHovered] = useState('')

  return (
    <div className=" h-full p-[80px] bg-white flex justify-between items-center">
      <div className="flex flex-col  gap-[45px] h-full">
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "branding" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('branding')} onMouseLeave={() => setIsHovered('')} >
          <p className={`text-[40px] text-black font-medium ${isHovered == "branding" && 'text-white'}`}>
            Branding
          </p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "web" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('web')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "web" && 'text-white'}`}>
            Web development & UI/UX
          </p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "creative" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('creative')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "creative" && 'text-white'}`}>Creative</p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "digital" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('digital')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "digital" && 'text-white'}`}>
            Digital PR & Communication
          </p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "performance" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('performance')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "performance" && 'text-white'}`}>
            Performance Marketing
          </p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "production" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('production')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "production" && 'text-white'}`}>Production</p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "seo" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('seo')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "seo" && 'text-white'}`}>SEO</p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "social" ? 'translate-x-10' : isHovered && 'opacity-40 text-white'}`} onMouseEnter={() => setIsHovered('social')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-[40px] text-black font-medium ${isHovered == "social" && 'text-white'}`}>Social Media</p>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-[40px] font-medium h-full"
          />
        </div>
      </div>
      <div className="flex items-center h-full">
        <p className="text-[200px] text-black font-bold">Fearless</p>
      </div>
    </div>
  )
}
