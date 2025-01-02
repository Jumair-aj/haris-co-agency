import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles for Swiper

import client1 from "../assets/images/clients/client1.png";
import client2 from "../assets/images/clients/client2.png";
import client3 from "../assets/images/clients/client3.png";
import client4 from "../assets/images/clients/client4.png";
import PlayIcon from "@/assets/images/icons/play.svg";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function ClientsSection() {
  const clients = [
    { img: client1, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client2, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client3, name: "Emily Wong", role: "Chief Brand Officer" },
    { img: client4, name: "Emily Wong", role: "Chief Brand Officer" },
  ];

  return (
    <div className="bg-black px-[17px] md:px-[80px] h-full">
      <div className="py-[36px] md:py-[80px]">
        <p className="text-white text-[32px] md:text-[40px]">
          What Our Clients Say
        </p>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            type: "bullets",
            bulletClass: "swiper-pagination-bullet", // Custom class for bullets
            bulletActiveClass: "swiper-pagination-bullet-active", // Active bullet class
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper-pagination-white" // Add custom class
        >
          {clients.map((client, index) => (
            <>
              <SwiperSlide key={index}>
              <div className="relative">
                <img
                  className="w-[400px] object-contain"
                  src={client.img}
                  alt={client.name}
                />
                <div className="flex items-center justify-between w-full absolute bottom-6 px-6">
                  <div>
                    <p className="font-medium text-black text-[32px] leading-none">
                      {client.name}
                    </p>
                    <p className="text-[20px] text-black font-[thin]">
                      {client.role}
                    </p>
                  </div>
                  <div>
                    <img src={PlayIcon} alt="Play" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </>
          
            
          ))}
        </Swiper>
       
      </div>
      <div className="w-full flex justify-center mt-[80px] pb-[80px] h-full">
        <Link
          to="/clients"
          className="group flex gap-[11px] text-white/55 border-b border-white/55 pb-0.5 hover:text-white hover:border-b-white transition-all duration-300"
        >
          <span className="text-[18px] text-opacity-[55%]">
            View All Testimonials
          </span>
          <MoveRight
            size={30}
            className="text-white/55 transition-all duration-300 group-hover:text-white"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </div>
  );
}

export default ClientsSection;
