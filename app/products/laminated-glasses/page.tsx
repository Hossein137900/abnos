"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Laminated Glass",
    description: "Advanced safety glass featuring multiple layers bonded with high-strength interlayers, providing superior security, sound insulation, and UV protection.",
    features: {
      title: "Outstanding Features",
      list: [
        "Enhanced safety with shatter-resistant technology",
        "Superior sound reduction up to 45dB",
        "99% UV radiation protection",
        "Multiple thickness options (6.38mm to 21.52mm)",
        "Available in various colors and patterns",
        "Excellent clarity and transparency",
        "Fire-resistant options available",
      ]
    },
    applications: {
      title: "Applications of Laminated Glass",
      list: [
        "High-rise building facades",
        "Security-sensitive facilities",
        "Sound-proof meeting rooms",
        "Skylights and glass roofs",
        "Museum display cases",
        "Bank security barriers",
        "Hurricane-resistant windows",
      ]
    },
    completedProjects: {
      title: "Notable Installations",
      subtitle: "Excellence in safety and security solutions",
      projects: [
        {
          title: "Financial District Project",
          location: "Central Bank Complex",
          description: "High-security laminated glass installation",
          stats: { area: "1,200 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/bank-security.jpg"
        },
        {
          title: "Airport Terminal",
          location: "IKA International Terminal",
          description: "Acoustic and security glass solutions",
          stats: { area: "3,500 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/airport-terminal.jpg"
        },
        {
          title: "Luxury Residential Complex",
          location: "Zaferanieh Towers",
          description: "Hurricane-resistant window installation",
          stats: { area: "2,800 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/residential-complex.jpg"
        }
      ]
    },
    faq: [
      {
        question: "What makes laminated glass different from regular glass?",
        answer: "Laminated glass consists of multiple layers bonded with PVB interlayers, making it highly resistant to penetration and preventing shattering upon impact.",
      },
      {
        question: "Does laminated glass reduce noise effectively?",
        answer: "Yes, laminated glass provides excellent sound insulation, reducing noise levels by up to 45dB depending on the configuration.",
      },
      {
        question: "Can laminated glass be customized?",
        answer: "Yes, we offer customization in thickness, color, pattern, and special features like fire resistance or enhanced security.",
      },
    ]
  },
  fa: {
    title: "شیشه لمینت",
    description: "شیشه ایمنی پیشرفته با لایه‌های متعدد متصل شده با لایه‌های میانی مستحکم، ارائه دهنده امنیت برتر، عایق صوتی و محافظت در برابر اشعه UV.",
    features: {
      title: "ویژگی‌های برجسته",
      list: [
        "ایمنی بالا با فناوری مقاوم در برابر شکستگی",
        "کاهش صدا تا ۴۵ دسی‌بل",
        "محافظت ۹۹٪ در برابر اشعه UV",
        "گزینه‌های مختلف ضخامت (۶.۳۸ تا ۲۱.۵۲ میلی‌متر)",
        "موجود در رنگ‌ها و طرح‌های متنوع",
        "شفافیت و وضوح عالی",
        "گزینه‌های مقاوم در برابر آتش",
      ]
    },
    applications: {
      title: "کاربردهای شیشه لمینت",
      list: [
        "نمای ساختمان‌های بلندمرتبه",
        "تأسیسات حساس امنیتی",
        "اتاق‌های جلسات ضد صدا",
        "نورگیرها و سقف‌های شیشه‌ای",
        "ویترین‌های موزه",
        "موانع امنیتی بانک",
        "پنجره‌های مقاوم در برابر طوفان",
      ]
    },
    completedProjects: {
      title: "نصب‌های شاخص",
      subtitle: "برتری در راه‌حل‌های ایمنی و امنیتی",
      projects: [
        {
          title: "پروژه منطقه مالی",
          location: "مجتمع بانک مرکزی",
          description: "نصب شیشه لمینت با امنیت بالا",
          stats: { area: "۱,۲۰۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/projects/bank-security.jpg"
        },
        {
          title: "ترمینال فرودگاه",
          location: "ترمینال بین‌المللی فرودگاه امام",
          description: "راه‌حل‌های شیشه آکوستیک و امنیتی",
          stats: { area: "۳,۵۰۰ متر مربع", completion: "۱۴۰۲", rating: "۴.۹/۵" },
          imageUrl: "/assets/images/projects/airport-terminal.jpg"
        },
        {
          title: "مجتمع مسکونی لوکس",
          location: "برج‌های زعفرانیه",
          description: "نصب پنجره‌های مقاوم در برابر طوفان",
          stats: { area: "۲,۸۰۰ متر مربع", completion: "۱۴۰۱", rating: "۴.۸/۵" },
          imageUrl: "/assets/images/projects/residential-complex.jpg"
        }
      ]
    },
    faq: [
      {
        question: "تفاوت شیشه لمینت با شیشه معمولی چیست؟",
        answer: "شیشه لمینت از چندین لایه متصل شده با لایه‌های میانی PVB تشکیل شده که آن را در برابر نفوذ بسیار مقاوم می‌کند و از خرد شدن در هنگام ضربه جلوگیری می‌کند.",
      },
      {
        question: "آیا شیشه لمینت به طور موثر صدا را کاهش می‌دهد؟",
        answer: "بله، شیشه لمینت عایق صوتی عالی ارائه می‌دهد و بسته به پیکربندی، سطح صدا را تا ۴۵ دسی‌بل کاهش می‌دهد.",
      },
      {
        question: "آیا شیشه لمینت قابل سفارشی‌سازی است؟",
        answer: "بله، ما سفارشی‌سازی در ضخامت، رنگ، طرح و ویژگی‌های خاص مانند مقاومت در برابر آتش یا امنیت بالا را ارائه می‌دهیم.",
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
