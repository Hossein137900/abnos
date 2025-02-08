"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Digital Glass Printing",
    description: "Revolutionary digital printing technology for glass surfaces, offering unlimited design possibilities with exceptional color accuracy and durability.",
    features: {
      title: "Outstanding Features",
      list: [
        "Ultra-high resolution printing up to 1440 DPI",
        "Permanent ceramic ink fusion technology",
        "Full-color CMYK + White printing capability",
        "Seamless large-format printing up to 3x6 meters",
        "Weather and UV resistant inks",
        "Variable opacity printing (20% to 100%)",
        "Compatible with tempered and laminated glass",
      ]
    },
    applications: {
      title: "Applications of Digital Glass Printing",
      list: [
        "Architectural glass facades",
        "Interior design elements",
        "Corporate branding displays",
        "Artistic glass installations",
        "Decorative room dividers",
        "Custom shower enclosures",
        "Retail storefront graphics",
      ]
    },
    completedProjects: {
      title: "Creative Installations",
      subtitle: "Where technology meets artistic expression",
      projects: [
        {
          title: "Cultural Center Facade",
          location: "Tehran Arts Complex",
          description: "Large-scale artistic facade printing",
          stats: { area: "850 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/cultural-center.jpg"
        },
        {
          title: "Corporate Headquarters",
          location: "Digital Innovation Hub",
          description: "Custom branded glass partitions",
          stats: { area: "420 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/corporate-hq.jpg"
        },
        {
          title: "Luxury Hotel Design",
          location: "Persian Gulf Resort",
          description: "Artistic glass installations throughout",
          stats: { area: "680 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/hotel-design.jpg"
        }
      ]
    },
    faq: [
      {
        question: "How durable is digital printing on glass?",
        answer: "Our ceramic ink technology fuses permanently with the glass during tempering, ensuring decades of color stability and scratch resistance.",
      },
      {
        question: "What types of designs can be printed?",
        answer: "Any design from simple patterns to complex photographic images can be printed with precise color matching and fine detail reproduction.",
      },
      {
        question: "Is digitally printed glass suitable for exteriors?",
        answer: "Yes, our UV-resistant ceramic inks are specifically designed for both interior and exterior applications, maintaining color integrity for years.",
      },
    ]
  },
  fa: {
    title: "چاپ دیجیتال روی شیشه",
    description: "فناوری انقلابی چاپ دیجیتال برای سطوح شیشه‌ای، با امکانات نامحدود طراحی همراه با دقت رنگی و دوام استثنایی.",
    features: {
      title: "ویژگی‌های برجسته",
      list: [
        "چاپ با وضوح فوق‌العاده بالا تا ۱۴۴۰ DPI",
        "فناوری ذوب جوهر سرامیکی دائمی",
        "قابلیت چاپ تمام رنگی CMYK + سفید",
        "چاپ یکپارچه در ابعاد بزرگ تا ۳×۶ متر",
        "جوهرهای مقاوم در برابر آب و هوا و UV",
        "چاپ با شفافیت متغیر (۲۰٪ تا ۱۰۰٪)",
        "سازگار با شیشه‌های سکوریت و لمینت",
      ]
    },
    applications: {
      title: "کاربردهای چاپ دیجیتال روی شیشه",
      list: [
        "نمای شیشه‌ای ساختمان",
        "المان‌های طراحی داخلی",
        "نمایشگرهای برند شرکتی",
        "نصب‌های هنری شیشه‌ای",
        "جداکننده‌های تزئینی اتاق",
        "محفظه‌های دوش سفارشی",
        "گرافیک ویترین فروشگاه‌ها",
      ]
    },
    completedProjects: {
      title: "نصب‌های خلاقانه",
      subtitle: "جایی که فناوری با بیان هنری تلاقی می‌کند",
      projects: [
        {
          title: "نمای مرکز فرهنگی",
          location: "مجتمع هنری تهران",
          description: "چاپ نمای هنری در مقیاس بزرگ",
          stats: { area: "۸۵۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/projects/cultural-center.jpg"
        },
        {
          title: "دفتر مرکزی شرکت",
          location: "مرکز نوآوری دیجیتال",
          description: "پارتیشن‌های شیشه‌ای برند سفارشی",
          stats: { area: "۴۲۰ متر مربع", completion: "۱۴۰۲", rating: "۴.۹/۵" },
          imageUrl: "/assets/images/projects/corporate-hq.jpg"
        },
        {
          title: "طراحی هتل لوکس",
          location: "هتل خلیج فارس",
          description: "نصب شیشه‌های هنری در سراسر مجموعه",
          stats: { area: "۶۸۰ متر مربع", completion: "۱۴۰۱", rating: "۴.۸/۵" },
          imageUrl: "/assets/images/projects/hotel-design.jpg"
        }
      ]
    },
    faq: [
      {
        question: "دوام چاپ دیجیتال روی شیشه چقدر است؟",
        answer: "فناوری جوهر سرامیکی ما در طول فرآیند سکوریت به طور دائم با شیشه ترکیب می‌شود و دهه‌ها ثبات رنگ و مقاومت در برابر خش را تضمین می‌کند.",
      },
      {
        question: "چه نوع طرح‌هایی را می‌توان چاپ کرد؟",
        answer: "هر نوع طرح از الگوهای ساده تا تصاویر پیچیده عکاسی را می‌توان با تطبیق دقیق رنگ و بازتولید جزئیات ظریف چاپ کرد.",
      },
      {
        question: "آیا شیشه چاپ دیجیتال برای فضای خارجی مناسب است؟",
        answer: "بله، جوهرهای سرامیکی مقاوم در برابر UV ما به طور خاص برای کاربردهای داخلی و خارجی طراحی شده‌اند و یکپارچگی رنگ را برای سال‌ها حفظ می‌کنند.",
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
