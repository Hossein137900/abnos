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
// import { FaRegStar, FaCrown, FaUsers } from "react-icons/fa";

// const pricingPlans = [
//   {
//     title: "Beginner",
//     price: "Free",
//     description: "Etiam ac convallis enim, eget euismod dolor.",
//     icon: (
//       <FaRegStar className="w-full h-full text-[#6FBDF5]  group-hover:text-white" />
//     ),

//     features: [
//       { text: "Aenean quis" },
//       { text: "Morbi semper" },
//       { text: "Tristique enim nec" },
//     ],
//     buttonText: "Get Started",
//   },
//   {
//     title: "Pro",
//     price: "$24",
//     period: "month",
//     description: "Morbi cursus ut sapien sit amet consectetur.",
//     icon: (
//       <FaCrown className="w-full h-full text-[#ffffff] group-hover:text-white" />
//     ),

//     features: [
//       { text: "Everything in Free" },
//       { text: "Phasellus tellus" },
//       { text: "Praesent faucibus" },
//       { text: "Aenean et lectus blandit" },
//     ],
//     buttonText: "Get Started",
//     highlighted: true,
//   },
//   {
//     title: "Team",
//     price: "$72",
//     period: "month",
//     description: "Phasellus ultrices bibendum nibh in vehicula.",
//     icon: (
//       <FaUsers className="w-full h-full text-[#6FBDF5] group-hover:text-white" />
//     ),

//     features: [
//       { text: "Everything in Pro" },
//       { text: "Fusce sem ligula" },
//       { text: "Curabitur dictum" },
//       { text: "Duis odio eros" },
//       { text: "Vivamus ut lectus ex" },
//     ],
//     buttonText: "Get Started",
//   },
// ];

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen">
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
