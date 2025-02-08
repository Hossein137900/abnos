"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Printed Glass Solutions",
    description: "State-of-the-art digital and ceramic printed glass technology offering unlimited design possibilities with exceptional durability and visual appeal.",
    features: {
      title: "Outstanding Features",
      list: [
        "High-resolution digital printing up to 720 DPI",
        "UV resistant ceramic inks for lasting colors",
        "Custom designs and patterns available",
        "Seamless integration with tempered glass",
        "Weather and scratch resistant finish",
        "Multiple opacity levels available",
        "Compatible with laminated safety glass",
      ]
    },
    applications: {
      title: "Applications of Printed Glass",
      list: [
        "Decorative interior partitions",
        "Branded corporate spaces",
        "Designer shower enclosures",
        "Artistic facade elements",
        "Custom kitchen backsplashes",
        "Museum and gallery displays",
        "Retail store branding",
      ]
    },
    completedProjects: {
      title: "Signature Installations",
      subtitle: "Experience our artistic excellence in printed glass solutions",
      projects: [
        {
          title: "Art Museum Facade",
          location: "Tehran Contemporary Art Museum",
          description: "Large-scale artistic printed glass installation",
          stats: { area: "800 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/museum-facade.jpg"
        },
        {
          title: "Corporate Identity Project",
          location: "Digital Innovation Center",
          description: "Custom branded glass partitions and walls",
          stats: { area: "350 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/corporate-branding.jpg"
        },
        {
          title: "Luxury Hotel Interior",
          location: "Grand Persian Hotel",
          description: "Decorative printed glass features throughout interior",
          stats: { area: "600 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/hotel-interior.jpg"
        }
      ]
    },
    faq: [
      {
        question: "How durable is printed glass?",
        answer: "Our ceramic printed glass is highly durable, resistant to UV, scratches, and weather conditions, lasting for decades without fading.",
      },
      {
        question: "Can any design be printed on glass?",
        answer: "Yes, we can print virtually any design, from simple patterns to complex photographs, with high resolution and accurate color reproduction.",
      },
      {
        question: "Is printed glass suitable for outdoor use?",
        answer: "Absolutely. Our ceramic printing technology ensures the designs remain vibrant and intact even in harsh outdoor conditions.",
      },
    ]
  },
  fa: {
    title: "شیشه‌های چاپی",
    description: "فناوری پیشرفته چاپ دیجیتال و سرامیکی روی شیشه با امکانات نامحدود طراحی، دوام استثنایی و جذابیت بصری.",
    features: {
      title: "ویژگی‌های برجسته",
      list: [
        "چاپ دیجیتال با کیفیت بالا تا ۷۲۰ DPI",
        "جوهرهای سرامیکی مقاوم در برابر UV برای ماندگاری رنگ‌ها",
        "امکان طراحی و الگوهای سفارشی",
        "ادغام یکپارچه با شیشه سکوریت",
        "پوشش مقاوم در برابر آب و هوا و خش",
        "سطوح مختلف شفافیت",
        "سازگار با شیشه‌های ایمنی لمینت",
      ]
    },
    applications: {
      title: "کاربردهای شیشه چاپی",
      list: [
        "پارتیشن‌های تزئینی داخلی",
        "فضاهای شرکتی برندسازی شده",
        "محفظه‌های دوش طراحی شده",
        "المان‌های هنری نما",
        "پشت آشپزخانه سفارشی",
        "نمایشگرهای موزه و گالری",
        "برندسازی فروشگاه‌ها",
      ]
    },
    completedProjects: {
      title: "نصب‌های شاخص",
      subtitle: "تجربه برتری هنری ما در راه‌حل‌های شیشه چاپی",
      projects: [
        {
          title: "نمای موزه هنر",
          location: "موزه هنر معاصر تهران",
          description: "نصب شیشه چاپی هنری در مقیاس بزرگ",
          stats: { area: "۸۰۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/projects/museum-facade.jpg"
        },
        {
          title: "پروژه هویت سازمانی",
          location: "مرکز نوآوری دیجیتال",
          description: "پارتیشن‌ها و دیوارهای شیشه‌ای برندسازی شده",
          stats: { area: "۳۵۰ متر مربع", completion: "۱۴۰۲", rating: "۴.۹/۵" },
          imageUrl: "/assets/images/projects/corporate-branding.jpg"
        },
        {
          title: "طراحی داخلی هتل لوکس",
          location: "هتل بزرگ پارسیان",
          description: "المان‌های شیشه چاپی تزئینی در سراسر فضای داخلی",
          stats: { area: "۶۰۰ متر مربع", completion: "۱۴۰۱", rating: "۴.۸/۵" },
          imageUrl: "/assets/images/projects/hotel-interior.jpg"
        }
      ]
    },
    faq: [
      {
        question: "دوام شیشه چاپی چقدر است؟",
        answer: "شیشه‌های چاپی سرامیکی ما بسیار بادوام هستند و در برابر UV، خش و شرایط جوی مقاوم بوده و دهه‌ها بدون رنگ‌پریدگی دوام می‌آورند.",
      },
      {
        question: "آیا هر طرحی را می‌توان روی شیشه چاپ کرد؟",
        answer: "بله، ما می‌توانیم تقریباً هر طرحی را، از الگوهای ساده تا عکس‌های پیچیده، با وضوح بالا و بازتولید دقیق رنگ چاپ کنیم.",
      },
      {
        question: "آیا شیشه چاپی برای استفاده در فضای باز مناسب است؟",
        answer: "کاملاً. فناوری چاپ سرامیکی ما اطمینان می‌دهد که طرح‌ها حتی در شرایط سخت محیطی، شفاف و سالم باقی می‌مانند.",
      },
    ]
  }
};

function CompletedProjects({
  content,
}: {
  content: typeof pageContent.en.completedProjects;
}) {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#6FBDF5] mb-4">
            {content.title}
          </h2>
          <p className="text-gray-600">{content.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-[#6FBDF5] mb-3">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-3 gap-4 border-t pt-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-semibold">{project.stats.area}</p>
                  </div>
                  <div className="text-center border-x">
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold">{project.stats.completion}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-semibold">{project.stats.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Manufacturing() {
  const { state } = useLanguage();
  const content = pageContent[state.currentLang];
  const isRTL = state.currentLang === "fa";

  return (
    <div className="min-h-screen bg-gray-50 gap-2">
      <HeroSection
        title={content.title}
        description={content.description}
        videoUrl="/assets/video/video.mp4"
      />

      <div
        className="grid md:grid-cols-2 pt-12 mt-8 gap-6 lg:mx-20 mx-4 gap-2"
        {...(isRTL ? { dir: "rtl" } : {})}
      >
        <div className="md:col-span-2 space-y-6">
          <section className=" p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold mb-4 text-[#6FBDF5]">
              {content.title}
            </h1>
            <p className="text-gray-700">{content.description}</p>
          </section>
          <Benefits productType="temperedGlass" />
          <section className=" p-8 rounded-xl shadow-sm grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4  ">
              <div className="h-[80px]">
                <h2 className="text-2xl font-bold mb-6 text-[#6FBDF5]">
                  {content.applications.title}
                </h2>
                <ul className="grid gap-3 mb-6">
                  {content.applications.list.map((application, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#6FBDF5]">•</span>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-[80px]">
                <h2 className="text-2xl font-bold mb-6 text-[#6FBDF5]">
                  {content.features.title}
                </h2>
                <ul className="grid gap-3">
                  {content.features.list.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#6FBDF5]">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full -mt-48">
              <Image
                src="/assets/images/about.jpg"
                alt={`${content.title} 1`}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full "
                width={400}
                height={400}
              />
            </div>
          </section>

          <InteractiveQuiz />
        </div>
      </div>

      <CompletedProjects content={content.completedProjects} />

      <div className="py-12">
        <CollapseFaq
          title={
            state.currentLang === "en"
              ? "Frequently Asked Questions"
              : "سوالات متداول"
          }
          faqItems={content.faq}
        />
      </div>
    </div>
  );
}
