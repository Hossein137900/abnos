// import AboutFeature from "@/components/global/aboutFeature";
import BannerText from "@/components/global/bannerText";
import BlogPost from "@/components/global/blog-post";
import ClientTestimonial from "@/components/global/our-client";
import OurProcess from "@/components/global/our-process";
import OurWork from "@/components/global/our-work";
import Pricing from "@/components/global/pricing";
import HeroSection from "@/components/static/heroSection";
import OurStory from "@/components/static/ourStory";
import OverlayBox from "@/components/static/overlayBox";
import WhatWeDo from "@/components/static/what-we-do";
const pricingPlans = [
  {
    title: "Beginner",
    price: "Free",
    description: "Etiam ac convallis enim, eget euismod dolor.",
    features: [
      { text: "Aenean quis" },
      { text: "Morbi semper" },
      { text: "Tristique enim nec" },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Pro",
    price: "$24",
    period: "month",
    description: "Morbi cursus ut sapien sit amet consectetur.",
    features: [
      { text: "Everything in Free" },
      { text: "Phasellus tellus" },
      { text: "Praesent faucibus" },
      { text: "Aenean et lectus blandit" },
    ],
    buttonText: "Get Started",
    highlighted: true,
  },
  {
    title: "Team",
    price: "$72",
    period: "month",
    description: "Phasellus ultrices bibendum nibh in vehicula.",
    features: [
      { text: "Everything in Pro" },
      { text: "Fusce sem ligula" },
      { text: "Curabitur dictum" },
      { text: "Duis odio eros" },
      { text: "Vivamus ut lectus ex" },
    ],
    buttonText: "Get Started",
  },
];

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <HeroSection />

      <OurStory />
      {/* <AboutFeature /> */}
      <BannerText
        imageSrc="/assets/images/bannerText.jpg"
        text="Comprehensive solutions for industrial excellence"
        imageAlt="about"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac semper augue. Sed euismod, nunc vel tincidunt ultricies, sapien nunc aliquet nunc, euismod euismod nunc nunc euismod nunc."
      />
      <OverlayBox />
      <OurWork />

      <WhatWeDo />

      <OurProcess />
      <Pricing plans={pricingPlans} />
      <ClientTestimonial />
      <BlogPost />
    </div>
  );
}
