import BannerText from "@/components/global/bannerText";
import BlogPost from "@/components/global/blog-post";
import OurProcess from "@/components/global/our-process";
import OurWork from "@/components/global/our-work";
import HeroSection from "@/components/static/heroSection";
import OurStory from "@/components/static/ourStory";
import OverlayBox from "@/components/static/overlayBox";
import WhatWeDo from "@/components/static/what-we-do";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <HeroSection />
      <WhatWeDo />

      {/* <AboutFeature /> */}
      <BannerText imageSrc="/assets/images/bannerText.jpg" imageAlt="about" />
      <OverlayBox />
      <OurWork />

      <OurStory />
      <OurProcess />
      {/*      
      <ClientTestimonial /> */}
      <BlogPost />
    </div>
  );
}
