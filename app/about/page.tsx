import HeroSection from "@/components/global/heroSection";
import TeamSection from "@/components/global/our-team";
import React from "react";

const About = () => {
  return (
    <main>
      <HeroSection
        title="Welcome to Abnos About"
        description="Your vision, our innovation"
        videoUrl="/assets/video/video.mp4"
      />
      <TeamSection />
    </main>
  );
};

export default About;
