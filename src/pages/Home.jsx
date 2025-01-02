import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import FeatureSection from '@/components/FeatureSection';
import OurWorks from '../components/OurWorks';
import ClientsSection from '../components/ClientsSection';
import AddressSection from '../components/AddressSection';
import { BlogSection } from '../components/BlogSection';
import Footer from '../components/Footer';
import VideoBanner from '../components/VideoBanner';
import { ClientsDataSection } from '../components/ClientsDataSection';
import BrandPartnerSection from '../components/BrandPartnerSection';

export default function Home() {
  return (
    <div>
      <Header />
     <VideoBanner/>
     <ClientsDataSection/>
      <FeatureSection />
     <BrandPartnerSection/>
      <OurWorks />
      <ClientsSection />
      <AddressSection/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}
