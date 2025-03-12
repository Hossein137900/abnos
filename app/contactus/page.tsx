"use client";
import HeroSection from "@/components/global/heroSection";
import ContactUs from "@/components/static/contact_us";
import { useLanguage } from "@/components/global/LanguageContext";
import { BlogSchema } from "@/components/schema/blogSchema";
import { useEffect } from "react";

const heroContent = {
  en: {
    title: "Welcome to Abnos Glass Industries",
    description:
      "Leading manufacturer of premium architectural and industrial glass solutions",
    videoUrl: "/assets/video/video.mp4",
  },
  fa: {
    title: "به صنایع شیشه آبنوس خوش آمدید",
    description: "پیشرو در تولید شیشه‌های صنعتی و ساختمانی با کیفیت برتر",
    videoUrl: "/assets/video/video.mp4",
  },
};

const Contactus = () => {
  const { state } = useLanguage();
  const content = heroContent[state.currentLang === "en" ? "en" : "fa"];

  const blogData = {
    title:
      state.currentLang === "en"
        ? "Contact Us | Abnoos Jam Glass Industries"
        : "تماس با ما | صنایع شیشه آبنوس جم",
    url: "/contactus",
    images: ["/assets/video/video.mp4"],
    sections: [
      {
        heading:
          state.currentLang === "en"
            ? "Welcome to Abnos Glass Industries"
            : "به صنایع شیشه آبنوس خوش آمدید",
        content:
          state.currentLang === "en"
            ? "Leading manufacturer of premium architectural and industrial glass solutions"
            : "پیشرو در تولید شیشه‌های صنعتی و ساختمانی با کیفیت برتر",
      },
      {
        heading: state.currentLang === "en" ? "Get in Touch" : "ارتباط با ما",
        content:
          state.currentLang === "en"
            ? "Contact us for any inquiries about our premium glass solutions and services. Our team is ready to assist you with expert guidance and support."
            : "برای هرگونه سوال درباره محصولات و خدمات شیشه‌ای با کیفیت ما با ما تماس بگیرید. تیم ما آماده راهنمایی و پشتیبانی تخصصی از شماست.",
      },
      {
        heading:
          state.currentLang === "en"
            ? "Visit Our Facility"
            : "بازدید از کارخانه",
        content:
          state.currentLang === "en"
            ? "Experience our state-of-the-art manufacturing facility and see our advanced glass production processes firsthand."
            : "از کارخانه مدرن ما بازدید کنید و از نزدیک با فرآیندهای پیشرفته تولید شیشه ما آشنا شوید.",
        lists: [
          state.currentLang === "en"
            ? "Factory Tours Available"
            : "امکان بازدید از کارخانه",
          state.currentLang === "en"
            ? "Product Demonstrations"
            : "نمایش محصولات",
          state.currentLang === "en"
            ? "Technical Consultations"
            : "مشاوره‌های فنی",
        ],
      },
    ],
  };
  useEffect(() => {
    document.title = "تماس با ما | آبنوس جام";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "درباره ما | آبنوس جام - تولید کننده پیشرو در زمینه شیشه‌های ایمنی، دوجداره و چاپ سیلک از سال ۱۳۷۷، با بهره‌گیری از تکنولوژی پیشرفته اروپایی و دقت بالا در تولید."
      );
    }
  }, []);

  return (
    <div className="">
      <BlogSchema blogData={blogData} />

      <HeroSection
        title={content.title}
        description={content.description}
        videoUrl={content.videoUrl}
      />
      <ContactUs />
      <iframe
        src="https://nshn.ir/45_bvVCFVx7-XP"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default Contactus;
