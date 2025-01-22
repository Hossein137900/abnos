import AboutFeature from "@/components/global/aboutFeature";
import BannerText from "@/components/global/bannerText";
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
      <AboutFeature />
      <BannerText
        imageSrc="/assets/images/bannerText.jpg"
        text="Comprehensive solutions for industrial excellence"
        imageAlt="about"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac semper augue. Sed euismod, nunc vel tincidunt ultricies, sapien nunc aliquet nunc, euismod euismod nunc nunc euismod nunc."
      />
      <OverlayBox />
      <OurStory />
      <WhatWeDo />
      <OurWork />
      <OurProcess />
    </div>
  );
}
