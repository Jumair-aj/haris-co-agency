import React from 'react'
import Img1 from '@/assets/images/landing/case-study/img1.svg'
import Img2 from '@/assets/images/landing/case-study/img2.svg'
import Img3 from '@/assets/images/landing/case-study/img3.svg'
import { Clock } from 'lucide-react'
import LandingButton from '../common/LandingButton'


const CaseStudy = () => {
    return (
        <div className='px-[100px] py-[50px]'>
            <div className="flex justify-center items-center flex-col mb-[70px]">
                <h3 className='font-[Abrobold] text-[48px]'>Our Case Studies</h3>
                <p className='text-[20px] poppins-medium'>Read in detail about our stories of victories.</p>
            </div>
            <div className="flex gap-5 poppins-regular">
                <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl w-1/2 space-y-9">
                    <img src={Img1} className="" alt="" />
                    <div className="flex flex-col gap-7 px-5">
                        <h6 className='text-[32px] poppins-semibold w-3/4'>From 0 to ₹6 Million Revenue per month (4+ ROAS)</h6>
                        <div className="flex gap-3 text-xl items-center"><Clock color='#fff' fill='#888888' /><p className='text-[#929090]'>March 8, 2024</p></div>
                        <p className='text-xl w-10/12 mb-4'>Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
                    </div>
                </div>

                <div className="flex flex-col w-1/2 gap-7">
                    <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl grid grid-cols-[1fr_1.1fr] gap-10">
                        <img src={Img2} className="" alt="" />
                        <div className=" flex flex-col gap-5 justify-center pr-5 ">
                            <h6 className='text-[25px] poppins-medium'>Generated a Massive ₹10 Million in 6 Months</h6>
                            <div className="flex gap-3 text-xl items-center"><Clock color='#fff' fill='#888888' /><p className='text-[#929090]'>March 8, 2024</p></div>
                            <p className='text-xl text-[#929090] mt-5'>Dive in to learn how we improved the online sales rate of Walkaroo - one of India's leading footwear brands.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-[6.91px_6.91px_20.74px_0px_#00000026] px-4 py-3 rounded-3xl grid grid-cols-[1fr_1.1fr] gap-10">
                        <img src={Img3} className="" alt="" />
                        <div className="flex flex-col gap-7 justify-center ">
                            <h6 className='text-[25px] poppins-medium'>Scaled From ₹900K to ₹2 Million
                            </h6>
                            <div className="flex gap-3 text-xl items-center"><Clock color='#fff' fill='#888888' /><p className='text-[#929090]'>March 8, 2024</p></div>
                            <p className='text-xl text-[#929090]'>Explore how we transformed Bluetyga into a revenue-generating company from scratch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <LandingButton text={'View More'} className={'mx-auto mt-[60px]'}/>
        </div>
    )
}

export default CaseStudy