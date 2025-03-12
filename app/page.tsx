import { BlogSchema } from "@/components/schema/blogSchema";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports with lazy loading
const HeroSection = dynamic(() => import("@/components/static/heroSection"), {
  ssr: true,
  loading: () => <div aria-busy="true">Loading...</div>,
});

const WhatWeDo = dynamic(() => import("@/components/static/what-we-do"), {
  ssr: true,
});

const BannerText = dynamic(() => import("@/components/global/bannerText"), {
  ssr: true,
});

const OverlayBox = dynamic(() => import("@/components/static/overlayBox"), {
  ssr: true,
});

const OurWork = dynamic(() => import("@/components/global/our-work"), {
  ssr: true,
});

const OurStory = dynamic(() => import("@/components/static/ourStory"), {
  ssr: true,
});

const OurProcess = dynamic(() => import("@/components/global/our-process"), {
  ssr: true,
});

const BlogPost = dynamic(() => import("@/components/global/blog-post"), {
  ssr: true,
});

export const metadata = {
  title: " آبنوس جام | تولید کننده و تجارت شیشه‌ای با کیفیت بالا",
  description: " آبنوس جام، تولید کننده و تجارت شیشه‌ای با کیفیت بالا",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1",
  themeColor: "#ffffff",
};

export default function Home() {
  const blogData = {
    title: "ارتباط با ما | تومک",
    url: "/contact",
    images: ["/assets/images/contact-header.webp"],
    sections: [
      {
        heading: "ارتباط با تومک",
        content:
          "آیا سوالی دارید؟ یا نیاز به راهنمایی بیشتر دارید؟ تیم ما آماده است تا پاسخگوی شما باشد. با استفاده از فرم زیر می‌توانید سوالات خود را بپرسید، درخواست مشاوره کنید یا هر گونه نظری دارید با ما در میان بگذارید. همین حالا به ما پیام دهید تا در سریع‌ترین زمان با شما تماس بگیریم.",
      },
      {
        heading: "ما دوست داریم از شما بشنویم!",
        content: "با پر کردن فرم زیر با ما در ارتباط باشید",
        formFields: [
          {
            label: "نام و نام خانوادگی",
            type: "text",
            placeholder: "نام و نام خانوادگی",
          },
          {
            label: "آدرس ایمیل",
            type: "email",
            placeholder: "you@example.com",
          },
          {
            label: "پیام شما",
            type: "textarea",
            placeholder: "پیام شما...",
          },
        ],
      },
    ],
  };
  return (
    <>
      <BlogSchema blogData={blogData} />
      <main
        className="grid items-center justify-items-center min-h-screen"
        aria-label="Main Content"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />

          <WhatWeDo />
          <BannerText
            imageSrc="/assets/images/bannerText.jpg"
            imageAlt="about"
          />
          <OverlayBox />
          <OurWork />
          <OurStory />
          <OurProcess />
          <BlogPost />
        </Suspense>
      </main>
    </>
  );
}
