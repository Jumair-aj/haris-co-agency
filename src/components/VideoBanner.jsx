import BannerVideo from "@/assets/videos/banner.mp4";
import React, { useState } from 'react'

export default function VideoBanner() {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <div className="bg-white  w-full flex justify-center items-center relative">
            {/* <p className="text-[44px] text-black font-bold">need</p> */}
            <video src={BannerVideo} controls={false} autoPlay={true} loop={true} muted={isMuted} />
            {/* <button className="absolute right-10 bottom-10 text-black" onClick={() => setIsMuted(!isMuted)}>Mute</button> */}
        </div>)
}
