// import AboutFeature from "@/components/global/aboutFeature";
import BannerText from "@/components/global/bannerText";
import BlogPost from "@/components/global/blog-post";
// import ClientTestimonial from "@/components/global/our-client";
import OurProcess from "@/components/global/our-process";
import OurWork from "@/components/global/our-work";
// import Pricing from "@/components/global/pricing";
import HeroSection from "@/components/static/heroSection";
import OurStory from "@/components/static/ourStory";
import OverlayBox from "@/components/static/overlayBox";
import WhatWeDo from "@/components/static/what-we-do";
import ChatWidget from "@/components/global/ChatWidget";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <ChatWidget />
      <HeroSection />

      <OurStory />
      {/* <AboutFeature /> */}
      <BannerText imageSrc="/assets/images/bannerText.jpg" imageAlt="about" />
      <OverlayBox />
      <OurWork />

      <WhatWeDo />

      <OurProcess />
      {/*      
      <ClientTestimonial /> */}
      <BlogPost />
    </div>
  );
}
