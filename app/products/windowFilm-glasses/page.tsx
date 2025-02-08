"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Window Film Glass",
    description: "Advanced window films that enhance glass performance through superior UV protection, heat control, and privacy features while maintaining optical clarity.",
    features: {
      title: "Outstanding Features",
      list: [
        "99% UV ray protection for furniture and interior preservation",
        "Heat reduction up to 80% for better energy efficiency",
        "Enhanced privacy with one-way visibility options",
        "Glare reduction for improved comfort",
        "Shatter-resistant security feature",
        "Available in various tints and finishes",
        "Professional-grade adhesive for long-term durability",
      ]
    },
    applications: {
      title: "Applications of Window Film",
      list: [
        "Commercial building windows and facades",
        "Residential home windows and sliding doors",
        "Vehicle windows for UV and heat protection",
        "Retail storefront displays",
        "Office partitions and meeting rooms",
        "Skylights and glass roofs",
        "Security-sensitive areas requiring privacy",
      ]
    },
    completedProjects: {
      title: "Featured Installations",
      subtitle: "Discover our excellence in window film solutions",
      projects: [
        {
          title: "Corporate Tower Enhancement",
          location: "Tehran International Tower",
          description: "Full building window film installation for heat reduction and energy savings",
          stats: { area: "15,000 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/corporate-tower.jpg"
        },
        {
          title: "Luxury Villa Privacy Solution",
          location: "Lavasan Residential Complex",
          description: "Premium privacy films with heat control features",
          stats: { area: "450 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/luxury-villa.jpg"
        },
        {
          title: "Shopping Center Upgrade",
          location: "Kish Mall",
          description: "UV protection and heat control film installation",
          stats: { area: "2,800 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/shopping-center.jpg"
        }
      ]
    },
    faq: [
      {
        question: "How long does window film last?",
        answer: "Professional-grade window films typically last 15-20 years with proper maintenance and care.",
      },
      {
        question: "Does window film reduce energy costs?",
        answer: "Yes, quality window films can reduce cooling costs by up to 30% by blocking heat and maintaining indoor temperature.",
      },
      {
        question: "Can window film be removed?",
        answer: "Yes, professional window films can be safely removed without damaging the glass when needed.",
      },
    ]
  },
  fa: {
    title: "شیشه فیلم پنجره",
    description: "فیلم‌های پیشرفته پنجره که با محافظت در برابر اشعه UV، کنترل گرما و قابلیت‌های حفظ حریم خصوصی، عملکرد شیشه را بهبود می‌بخشند.",
    features: {
      title: "ویژگی‌های برجسته",
      list: [
        "محافظت ۹۹٪ در برابر اشعه UV برای حفظ مبلمان و دکوراسیون داخلی",
        "کاهش گرما تا ۸۰٪ برای بهره‌وری بهتر انرژی",
        "حفظ حریم خصوصی با گزینه‌های دید یک‌طرفه",
        "کاهش خیرگی برای آسایش بیشتر",
        "ویژگی امنیتی مقاوم در برابر شکستگی",
        "موجود در رنگ‌ها و پرداخت‌های مختلف",
        "چسب درجه حرفه‌ای برای دوام طولانی‌مدت",
      ]
    },
    applications: {
      title: "کاربردهای فیلم پنجره",
      list: [
        "پنجره‌ها و نمای ساختمان‌های تجاری",
        "پنجره‌های منازل و درب‌های کشویی",
        "شیشه خودرو برای محافظت در برابر UV و گرما",
        "ویترین فروشگاه‌ها",
        "پارتیشن‌های اداری و اتاق‌های جلسات",
        "نورگیرها و سقف‌های شیشه‌ای",
        "مناطق حساس امنیتی نیازمند حریم خصوصی",
      ]
    },
    completedProjects: {
      title: "نصب‌های برجسته",
      subtitle: "برتری ما را در راه‌حل‌های فیلم پنجره کشف کنید",
      projects: [
        {
          title: "بهسازی برج تجاری",
          location: "برج بین‌المللی تهران",
          description: "نصب فیلم پنجره کل ساختمان برای کاهش گرما و صرفه‌جویی در انرژی",
          stats: { area: "۱۵,۰۰۰ متر مربع", completion: "۱۴۰۲", rating: "۴.۹/۵" },
          imageUrl: "/assets/images/projects/corporate-tower.jpg"
        },
        {
          title: "راه‌حل حریم خصوصی ویلای لوکس",
          location: "مجتمع مسکونی لواسان",
          description: "فیلم‌های حریم خصوصی ممتاز با ویژگی‌های کنترل گرما",
          stats: { area: "۴۵۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/projects/luxury-villa.jpg"
        },
        {
          title: "ارتقای مرکز خرید",
          location: "مرکز خرید کیش",
          description: "نصب فیلم محافظ UV و کنترل گرما",
          stats: { area: "۲,۸۰۰ متر مربع", completion: "۱۴۰۱", rating: "۴.۸/۵" },
          imageUrl: "/assets/images/projects/shopping-center.jpg"
        }
      ]
    },
    faq: [
      {
        question: "عمر فیلم پنجره چقدر است؟",
        answer: "فیلم‌های پنجره حرفه‌ای معمولاً با نگهداری و مراقبت مناسب ۱۵ تا ۲۰ سال دوام می‌آورند.",
      },
      {
        question: "آیا فیلم پنجره هزینه‌های انرژی را کاهش می‌دهد؟",
        answer: "بله، فیلم‌های پنجره با کیفیت می‌توانند با مسدود کردن گرما و حفظ دمای داخلی، هزینه‌های سرمایش را تا ۳۰٪ کاهش دهند.",
      },
      {
        question: "آیا فیلم پنجره قابل جداسازی است؟",
        answer: "بله، فیلم‌های پنجره حرفه‌ای را می‌توان در صورت نیاز بدون آسیب به شیشه به طور ایمن جدا کرد.",
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
