import BlogPost from "@/components/global/blog-post";
import HeroSection from "@/components/global/heroSection";
import React from "react";

const Blogs = () => {
  return (
    <main className="">
      <HeroSection
        title="Our Latest Blogs"
        videoUrl="/assets/video/video.mp4"
        description="Explore our latest blogs on various topics."
      />
      <BlogPost />
    </main>
  );
};

export default Blogs;
