import BlogPost from "@/components/global/blog-post";
import HeroSection from "@/components/global/heroSection";
import { useLanguage } from "@/components/global/LanguageContext";
import { BlogSchema } from "@/components/schema/blogSchema";
import React from "react";

const Blogs = () => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";
  const blogData = {
    title: isEnglish
      ? "Blog | Abnoos Jam Glass Industries"
      : "وبلاگ | صنایع شیشه آبنوس جم",
    url: "/blogs",
    images: ["/assets/video/video.mp4"],
    sections: [
      {
        heading: isEnglish
          ? "Latest Glass Industry Insights"
          : "آخرین مطالب صنعت شیشه",
        content: isEnglish
          ? "Discover the latest trends, innovations, and expert insights in the glass manufacturing industry."
          : "آخرین روندها، نوآوری‌ها و دیدگاه‌های تخصصی در صنعت تولید شیشه را کشف کنید.",
      },
      {
        heading: isEnglish ? "Technical Knowledge Hub" : "مرکز دانش فنی",
        content: isEnglish
          ? "Expert articles on glass manufacturing processes, safety standards, and innovative applications in architecture."
          : "مقالات تخصصی درباره فرآیندهای تولید شیشه، استانداردهای ایمنی و کاربردهای نوآورانه در معماری.",
      },
      {
        heading: isEnglish ? "Industry Updates" : "به‌روزرسانی‌های صنعت",
        content: isEnglish
          ? "Stay informed about the latest developments in glass technology and industry best practices."
          : "از آخرین تحولات در تکنولوژی شیشه و بهترین شیوه‌های صنعتی مطلع شوید.",
        lists: [
          isEnglish ? "Glass Manufacturing Techniques" : "تکنیک‌های تولید شیشه",
          isEnglish ? "Safety Standards" : "استانداردهای ایمنی",
          isEnglish ? "Architectural Innovations" : "نوآوری‌های معماری",
        ],
      },
    ],
  };
  return (
    <main className="">
      <BlogSchema blogData={blogData} />

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
