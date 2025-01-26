"use client";
import HeroSection from "@/components/global/heroSection";
import ContactUs from "@/components/static/contact_us";
import { useLanguage } from "@/components/global/LanguageContext";

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
  return (
    <div className="">
      <HeroSection
        title={content.title}
        description={content.description}
        videoUrl={content.videoUrl}
      />
      <ContactUs />
      <iframe
        src="https://www.google.com/maps?ll=35.891855,50.842928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13995456689188650281"
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
