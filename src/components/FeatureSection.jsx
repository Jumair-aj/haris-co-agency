import React, { useState } from 'react'
import BrandImg from "@/assets/images/features/branding.png";
import CreativeImg from "@/assets/images/features/creative.png";
import DigitalImg from "@/assets/images/features/digital.jpeg";
import PerformanceImg from "@/assets/images/features/performance.png";
import ProductionImg from "@/assets/images/features/production.png";
import SeoImg from "@/assets/images/features/seo.png";
import SocialImg from "@/assets/images/features/social.png";
import WebImg from "@/assets/images/features/web.png";
import { RightArrow } from "@/assets/images/icons/RightArrow";


export default function FeatureSection() {
  const [isHovered, setIsHovered] = useState('')

  return (
    <div className={` h-full w-full py-[80px] px-[16px] md:px-[40px] lg:p-[80px]  flex justify-between items-center relative overflow-hidden ${isHovered ? 'featureGradient' : ''}`}>
      <div className="flex flex-col  gap-[50px] h-full select-none">
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "branding" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('branding')} onMouseLeave={() => setIsHovered('')} >
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "branding" ? 'text-white' : isHovered && ' text-white/55'}`}>
            Branding
          </p>
          <RightArrow color={isHovered == "branding" ? 'white' : isHovered ? '#ffffff55' : 'black'} />
        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "web" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('web')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "web" ? 'text-white' : isHovered && ' text-white/55'}`}>
            Web development & UI/UX
          </p>
          <RightArrow color={isHovered == "web" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "creative" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('creative')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "creative" ? 'text-white' : isHovered && ' text-white/55'}`}>Creative</p>
          <RightArrow color={isHovered == "creative" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "digital" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('digital')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "digital" ? 'text-white' : isHovered && ' text-white/55'}`}>
            Digital PR & Communication
          </p>
          <RightArrow color={isHovered == "digital" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "performance" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('performance')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "performance" ? 'text-white' : isHovered && ' text-white/55'}`}>
            Performance Marketing
          </p>
          <RightArrow color={isHovered == "performance" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "production" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('production')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "production" ? 'text-white' : isHovered && ' text-white/55'}`}>Production</p>
          <RightArrow color={isHovered == "production" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "seo" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('seo')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "seo" ? 'text-white' : isHovered && ' text-white/55'}`}>SEO</p>
          <RightArrow color={isHovered == "seo" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
        <div className={`flex gap-[20px] cursor-pointer items-center ${isHovered == "social" && 'translate-x-10'}`} onMouseEnter={() => setIsHovered('social')} onMouseLeave={() => setIsHovered('')}>
          <p className={`text-nowrap text-[22px] md:text-[30px] lg:text-[40px] text-black font-medium ${isHovered == "social" ? 'text-white' : isHovered && ' text-white/55'}`}>Social Media</p>
          <RightArrow color={isHovered == "branding" ? 'white' : isHovered ? '#ffffff55' : 'black'} />

        </div>
      </div>
      <div className="flex items-center h-full">
        {
          isHovered == "branding" ? (
            <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
              <img
                src={BrandImg}
                alt="Branding"
                className="w-full h-full featureGradient object-cover"
              />
            </div>
          ) :
            isHovered == "web" ? (
              <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                <img
                  src={WebImg}
                  alt="Branding"
                  className="w-full h-full featureGradient object-cover"
                />
              </div>
            )
              :
              isHovered == "creative" ? (
                <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                  <img
                    src={CreativeImg}
                    alt="Branding"
                    className="w-full h-full featureGradient object-cover"
                  />
                </div>
              )
                :
                isHovered == "digital" ? (
                  <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                    <img
                      src={DigitalImg}
                      alt="Branding"
                      className="w-full h-full featureGradient object-cover"
                    />
                  </div>
                )
                  :
                  isHovered == "performance" ? (
                    <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                      <img
                        src={PerformanceImg}
                        alt="Branding"
                        className="w-full h-full featureGradient object-cover"
                      />
                    </div>
                  )
                    :
                    isHovered == "production" ? (
                      <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                        <img
                          src={ProductionImg}
                          alt="Branding"
                          className="w-full h-full featureGradient object-cover"
                        />
                      </div>
                    )
                      :
                      isHovered == "seo" ? (
                        <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                          <img
                            src={SeoImg}
                            alt="Branding"
                            className="w-full h-full featureGradient object-cover"
                          />
                        </div>
                      )
                        :
                        isHovered == "social" ? (
                          <div className="featureGradient absolute top-0 left-0 -z-10 w-full h-full ">
                            <img
                              src={SocialImg}
                              alt="Branding"
                              className="w-full h-full featureGradient object-cover"
                            />
                          </div>
                        )
                          :
                          <p className="text-[150px] 2xl:text-[200px] text-black font-bold tracking-[-4.5mm] font-[sans-serif]  hidden xl:flex" >Fearless</p>
        }
      </div>
    </div>
  )
}
