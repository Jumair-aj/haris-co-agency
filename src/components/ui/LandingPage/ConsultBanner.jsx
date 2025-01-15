import React from 'react'
import LandingButton from '../common/LandingButton'

const ConsultBanner = () => {
    return (
        <div className=" px-[16px] py-[50px] md:px-[80px] lg:px-[100px]">
        <div className='bg-[#F1C644] w-full rounded-[40px] flex justify-between px-[70px] py-[55px] items-center gap-10'>
            <p className='text-[90px] bebas-neue-regular font-bold text-white '>Let’s Discuss How We Can 2x Your Brand With Ads</p>
            <LandingButton text={'Consult Us'} className={'px-[45px] py-[25px] '} />
        </div>
        </div>
    )
}

export default ConsultBanner