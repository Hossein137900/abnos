"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import InteractiveQuiz from "../../../components/global/InteractiveQuiz";

const pageContent = {
  en: {
    title: "Tempered Glass",
    description:
      "Tempered glass is a type of safety glass strengthened through special processes, offering high resistance to impact, temperature changes, and pressure.",
    features: {
      title: "Outstanding Features",
      list: [
        "High impact resistance (4-5 times stronger than regular glass)",
        "Temperature tolerance up to 300°C",
        "Enhanced safety - breaks into non-sharp pieces",
        "Customizable thickness, color, and dimensions",
        "Sound and thermal insulation - prevents energy loss",
        "Resistant to scratches and chemicals",
        "High durability and long lifespan",
      ],
    },
    applications: {
      title: "Applications of Tempered Glass",
      list: [
        "Modern and resistant glass doors and windows",
        "Interior partitions for offices and homes",
        "Glass facades for buildings and towers",
        "Shop windows and storefronts",
        "Glass railings for terraces and stairs",
        "Stylish and durable glass tables",
        "Bathroom doors and shower enclosures",
      ],
    },
    faq: [
      {
        question: "What is tempered glass?",
        answer:
          "Tempered glass is a type of safety glass that gains increased strength through heating and rapid cooling, providing high resistance to impact and heat.",
      },
      {
        question: "Is tempered glass safer than regular glass?",
        answer:
          "Yes, when broken, it shatters into small, non-sharp pieces, making it safer for high-risk areas.",
      },
      {
        question: "Can tempered glass color and thickness be modified?",
        answer:
          "Yes, it can be produced and customized in various colors, thicknesses, and dimensions.",
      },
    ],
    completedProjects: {
      title: "Our Successful Implementations",
      subtitle: "Discover our excellence through completed projects",
      projects: [
        {
          title: "Luxury Hotel Facade",
          location: "Dubai International Hotel",
          description:
            "Complete facade renovation using premium tempered glass",
          stats: { area: "2,500 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/projects/hotel-facade.jpg",
        },
        {
          title: "Corporate Headquarters",
          location: "Tehran Business Center",
          description: "Smart glass installation for modern office spaces",
          stats: { area: "1,800 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/projects/office-building.jpg",
        },
        {
          title: "Shopping Mall Interior",
          location: "Isfahan City Center",
          description: "Custom tempered glass partitions and railings",
          stats: { area: "3,200 m²", completion: "2022", rating: "4.8/5" },
          imageUrl: "/assets/images/projects/mall-interior.jpg",
        },
      ],
    },
  },
  fa: {
    title: "شیشه سکوریت",
    description:
      "شیشه سکوریت یک شیشه ایمنی تقویت شده با فرآیندهای خاص است که در برابر ضربه، تغییرات دمایی و فشار مقاومت بالایی دارد.",
    features: {
      title: "ویژگی‌های فوق‌العاده",
      list: [
        "مقاومت بالا در برابر ضربه (4 تا 5 برابر قوی‌تر از شیشه معمولی)",
        "تحمل دمای بالا تا 300 درجه سانتی‌گراد",
        "ایمنی بیشتر – خرد شدن به قطعات غیر برنده",
        "قابلیت سفارشی‌سازی در ضخامت، رنگ و اندازه‌های مختلف",
        "عایق صوتی و حرارتی – جلوگیری از اتلاف انرژی",
        "مقاوم در برابر خط و خش و مواد شیمیایی",
        "دوام بالا و طول عمر طولانی",
      ],
    },
    applications: {
      title: "کاربردهای شیشه سکوریت",
      list: [
        "درب و پنجره‌های شیشه‌ای مدرن و مقاوم",
        "پارتیشن‌های داخلی برای دفاتر و خانه‌ها",
        "نمای ساختمان‌ها و برج‌های شیشه‌ای",
        "ویترین مغازه‌ها و فروشگاه‌ها",
        "نرده‌های شیشه‌ای برای تراس و پله‌ها",
        "میزهای شیشه‌ای شیک و بادوام",
        "درب‌های حمام و کابین‌های دوش شیشه‌ای",
      ],
    },
    faq: [
      {
        question: "شیشه سکوریت چیست؟",
        answer:
          "شیشه سکوریت یک نوع شیشه ایمنی است که با حرارت‌دهی و سرد شدن سریع، استحکام بیشتری پیدا می‌کند و در برابر ضربه و حرارت مقاومت بالایی دارد.",
      },
      {
        question: "آیا شیشه سکوریت ایمن‌تر از شیشه معمولی است؟",
        answer:
          "بله، این شیشه در صورت شکستن به قطعات کوچک و غیر برنده خرد می‌شود، بنابراین برای فضاهای پرخطر ایمن‌تر است.",
      },
      {
        question: "آیا می‌توان رنگ و ضخامت شیشه سکوریت را تغییر داد؟",
        answer:
          "بله، این شیشه در رنگ‌ها، ضخامت‌ها و ابعاد مختلف قابل تولید و سفارشی‌سازی است.",
      },
    ],
    completedProjects: {
      title: "پروژه‌های موفق ما",
      subtitle: "برتری ما را در پروژه‌های تکمیل شده کشف کنید",
      projects: [
        {
          title: "نمای هتل لوکس",
          location: "هتل بین‌المللی دبی",
          description: "بازسازی کامل نما با استفاده از شیشه سکوریت درجه یک",
          stats: {
            area: "۲,۵۰۰ متر مربع",
            completion: "۱۴۰۲",
            rating: "۴.۹/۵",
          },
          imageUrl: "/assets/images/about.jpg",
        },
        {
          title: "دفتر مرکزی شرکت",
          location: "مرکز تجاری تهران",
          description: "نصب شیشه هوشمند برای فضاهای اداری مدرن",
          stats: { area: "۱,۸۰۰ متر مربع", completion: "۱۴۰۲", rating: "۵/۵" },
          imageUrl: "/assets/images/about.jpg",
        },
        {
          title: "طراحی داخلی مرکز خرید",
          location: "سیتی سنتر اصفهان",
          description: "پارتیشن و نرده‌های شیشه‌ای سفارشی",
          stats: {
            area: "۳,۲۰۰ متر مربع",
            completion: "۱۴۰۱",
            rating: "۴.۸/۵",
          },
          imageUrl: "/assets/images/about.jpg",
        },
      ],
    },
  },
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
