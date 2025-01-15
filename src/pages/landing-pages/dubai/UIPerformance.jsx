import React from 'react'
import LandingHeader from '../../../components/layout/landing/LandingHeader'
import LandingFooter from '../../../components/layout/landing/LandingFooter'
import { Faq } from '../../../components/ui/LandingPage/Faq'
import ConsultBanner from '../../../components/ui/LandingPage/ConsultBanner'
import CaseStudy from '../../../components/ui/LandingPage/CaseStudy'
import Testimonial from '../../../components/ui/LandingPage/Testimonial'

export const UIPerformance = () => {
  const faqList = [{ question: 'What kind of businesses benefit from performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'What is the typical budget for a performance marketing campaign?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." }, { question: 'How do I get started with performance marketing?', answer: "Performance marketing is ideal for businesses of all sizes and industries looking for measurable, results-driven campaigns. Whether in e-commerce, B2B, services, or tech, performance marketing can help you drive traffic, generate leads, and increase sales. Working with a Performance Marketing Agency in Dubai like Haris&Co. can help tailor campaigns to your specific goals, ensuring maximum ROI and efficiency across all digital channels." },]
  return (
    <>
      <LandingHeader />
      <ConsultBanner/>
      <CaseStudy />
      <Testimonial/>
      <Faq faqList={faqList} />
      <LandingFooter />
    </>
  )
}
