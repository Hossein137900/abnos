"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Double-Glazed Glass",
    description: "High-performance insulated glass units featuring two glass panes separated by a sealed air space, delivering superior thermal insulation and sound reduction.",
    features: {
      title: "Outstanding Features",
      list: [
        "Superior thermal insulation (U-value up to 1.1 W/m²K)",
        "Enhanced sound reduction up to 38dB",
        "Energy cost savings up to 30%",
        "Argon gas filling option for better insulation",
        "Low-E coating available for heat retention",
        "Condensation reduction technology",
        "Various spacer options (6mm to 20mm)",
      ]
    },
    applications: {
      title: "Applications of Double-Glazed Glass",
      list: [
        "Residential windows and doors",
        "Commercial building facades",
        "Energy-efficient office spaces",
        "Educational facilities",
        "Healthcare buildings",
        "Hotels and restaurants",
        "Cold storage facilities",
      ]
    },
    completedProjects: {
      title: "Energy-Efficient Installations",
      subtitle: "Leading the way in thermal performance solutions",
      projects: [
        {
          title: "Smart Office Complex",
          location: "Tehran Business Hub",
          description: "Complete energy-efficient glazing system",
          stats: { area: "4,500 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/smart-office.jpg"
        },
        {
          title: "Eco-Friendly Residential Tower",
          location: "Eco Park Residence",
          description: "Low-E double glazing installation",
          stats: { area: "2,800 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/eco-residential.jpg"
        },
        {
          title: "Healthcare Center",
          location: "Modern Medical Complex",
          description: "Sound-proof and thermal insulation solution",
          stats: { area: "1,900 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/healthcare-center.jpg"
        }
      ]
    },
    faq: [
      {
        question: "What are the main benefits of double-glazed glass?",
        answer: "Double-glazed glass provides excellent thermal insulation, significant noise reduction, and energy cost savings while maintaining optimal natural light transmission.",
      },
      {
        question: "How long does double-glazed glass last?",
        answer: "With proper installation and maintenance, double-glazed units typically last 20-25 years before requiring replacement.",
      },
      {
        question: "Can existing windows be converted to double-glazed?",
        answer: "Yes, most window frames can be retrofitted with double-glazed units, subject to frame condition and compatibility assessment.",
      },
    ]
  },
  fa: {
    title: "شیشه دوجداره",
    description: "واحدهای شیشه عایق با عملکرد بالا شامل دو لایه شیشه با فضای هوای مهر و موم شده، ارائه دهنده عایق حرارتی و کاهش صدای برتر.",
    features: {
      title: "ویژگی‌های برجسته",
      list: [
        "عایق حرارتی برتر (ضریب U تا ۱.۱ وات بر مترمربع کلوین)",
        "کاهش صدای پیشرفته تا ۳۸ دسی‌بل",
        "صرفه‌جویی در هزینه انرژی تا ۳۰٪",
        "گزینه پر کردن گاز آرگون برای عایق بهتر",
        "پوشش Low-E برای حفظ گرما",
        "فناوری کاهش میعان",
        "گزینه‌های مختلف فاصله‌انداز (۶ تا ۲۰ میلی‌متر)",
      ]
    },
    applications: {
      title: "کاربردهای شیشه دوجداره",
      list: [
        "پنجره‌ها و درب‌های مسکونی",
        "نمای ساختمان‌های تجاری",
        "فضاهای اداری با بهره‌وری انرژی",
        "مراکز آموزشی",
        "ساختمان‌های درمانی",
        "هتل‌ها و رستوران‌ها",
        "تأسیسات سردخانه‌ای",
      ]
    },
    completedProjects: {
      title: "نصب‌های بهینه انرژی",
      subtitle: "پیشرو در راه‌حل‌های عملکرد حرارتی",
      projects: [
        {
          title: "مجتمع اداری هوشمند",
          location: "هاب تجاری تهران",
          description: "سیستم شیشه‌بندی کامل با بهره‌وری انرژی",
          stats: { area: "۴,۵۰۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/projects/smart-office.jpg"
        },
        {
          title: "برج مسکونی سازگار با محیط زیست",
          location: "مجتمع مسکونی اکو پارک",
          description: "نصب شیشه دوجداره Low-E",
          stats: { area: "۲,۸۰۰ متر مربع", completion: "۱۴۰۲", rating: "۴.۹/۵" },
          imageUrl: "/assets/images/projects/eco-residential.jpg"
        },
        {
          title: "مرکز درمانی",
          location: "مجتمع پزشکی مدرن",
          description: "راه‌حل عایق صوتی و حرارتی",
          stats: { area: "۱,۹۰۰ متر مربع", completion: "۱۴۰۱", rating: "۴.۸/۵" },
          imageUrl: "/assets/images/projects/healthcare-center.jpg"
        }
      ]
    },
    faq: [
      {
        question: "مزایای اصلی شیشه دوجداره چیست؟",
        answer: "شیشه دوجداره عایق حرارتی عالی، کاهش قابل توجه صدا و صرفه‌جویی در هزینه انرژی را همراه با حفظ انتقال نور طبیعی بهینه ارائه می‌دهد.",
      },
      {
        question: "عمر شیشه دوجداره چقدر است؟",
        answer: "با نصب و نگهداری مناسب، واحدهای دوجداره معمولاً ۲۰ تا ۲۵ سال قبل از نیاز به تعویض دوام می‌آورند.",
      },
      {
        question: "آیا پنجره‌های موجود را می‌توان به دوجداره تبدیل کرد؟",
        answer: "بله، اکثر قاب‌های پنجره را می‌توان با واحدهای دوجداره تطبیق داد، البته پس از بررسی وضعیت و سازگاری قاب.",
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
