"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Benefits from "../../../components/static/benefits";
import HeroSection from "@/components/global/heroSection";
import Image from "next/image";
import CollapseFaq from "@/components/global/collapse";
import Testimonials from "@/components/global/Testimonials";
import Specifications from "@/components/global/Specifications";

const pageContent = {
  en: {
    hero: {
      title: "Advanced Window Film Solutions",
      description:
        "High-performance architectural window films offering superior solar control, enhanced privacy, and advanced security features",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Premium Window Film Technology",
      description:
        "State-of-the-art window films engineered to deliver optimal solar control, UV protection, and enhanced security. Our films utilize multi-layer nano-technology to provide superior performance while maintaining crystal clear visibility.",
      metaKeywords:
        "window film, solar control film, security film, UV protection, architectural film, smart glass film",
      metaDescription:
        "Advanced window film solutions for commercial and residential applications. Superior UV protection, energy efficiency, and security features.",
    },
    features: {
      title: "Advanced Features",
      list: [
        "99% UV radiation blocking capability",
        "Heat reduction up to 78%",
        "Glare reduction up to 83%",
        "Advanced nano-ceramic technology",
        "Scratch-resistant coating",
        "Zero signal interference",
        "Optically clear adhesive",
        "Self-healing surface technology",
        "15-year warranty coverage",
        "Professional grade durability",
      ],
    },
    applications: {
      title: "Ideal Applications",
      list: [
        "Commercial office buildings",
        "Residential properties",
        "Retail storefronts",
        "Museums and galleries",
        "Healthcare facilities",
        "Educational institutions",
        "Government buildings",
        "Automotive applications",
        "Data centers",
        "Historical preservation",
      ],
    },
    completedProjects: {
      title: "Our Successful Implementations",
      subtitle: "Explore Our Completed Projects",
      projects: [
        {
          title: "Luxury Hotel Facade",
          location: "Dubai International Hotel",
          description:
            "Complete facade renovation with high-performance tempered glass, enhancing both aesthetics and insulation efficiency.",
          stats: { area: "2,500 m²", completion: "2023", rating: "4.9/5" },
          imageUrl: "/assets/images/opal.jpg",
        },
      ],
    },
    specifications: {
      title: "Technical Specifications",
      details: [
        {
          category: "Performance Metrics",
          items: [
            "Total Solar Energy Rejected: Up to 82%",
            "Visible Light Transmission: 15-70%",
            "Infrared Rejection: Up to 97%",
            "UV Rejection: 99.9%",
            "Glare Reduction: 83%",
          ],
        },
        {
          category: "Physical Properties",
          items: [
            "Thickness: 1.5-4.0 mil",
            "Tensile Strength: 28,500 PSI",
            "Break Strength: 190 lbs/inch",
            "Peel Strength: 5-6 lbs/inch",
            "Surface Hardness: >2H",
          ],
        },
        {
          category: "Installation",
          items: [
            "Professional installation required",
            "Curing time: 15-30 days",
            "Temperature range: -32°C to 82°C",
            "Expected lifespan: 15-20 years",
            "Warranty coverage: 15 years",
          ],
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      feedbacks: [
        {
          name: "Ali Rezaei",
          location: "Tehran, Iran",
          compaany: "Al-Farsi Group",
          comment:
            "Excellent quality and service! Their tempered glass completely transformed our office space.",
          rating: "5/5",
        },
        {
          name: "Omar Al-Farsi",
          location: "Muscat, Oman",
          company: "Al-Farsi Group",
          comment:
            "Top-notch tempered glass supplier! Our hotel facade is now more energy-efficient and elegant.",
          rating: "4.9/5",
        },
      ],
    },
    faq: [
      {
        question: "How long does window film installation take?",
        answer:
          "Professional installation typically takes 1-2 days for commercial projects. The film requires 15-30 days to fully cure for optimal clarity and adhesion.",
      },
      {
        question: "What energy savings can I expect?",
        answer:
          "Depending on building orientation and climate, our films typically reduce cooling costs by 25-35% and provide payback within 2-3 years.",
      },
      {
        question: "Does window film affect glass warranty?",
        answer:
          "Our films are approved by major glass manufacturers and come with a comprehensive 15-year warranty that includes glass coverage.",
      },
      {
        question: "Can window film be removed?",
        answer:
          "Yes, professional removal is straightforward and leaves no damage to the glass when properly performed.",
      },
      {
        question: "How does the film maintain clarity?",
        answer:
          "Our nano-ceramic technology ensures optimal clarity while blocking heat and UV rays. The self-healing coating resists scratches and maintains appearance.",
      },
    ],
  },
  fa: {
    hero: {
      title: "فیلم‌های پیشرفته پنجره",
      description:
        "فیلم‌های معماری با عملکرد بالا برای کنترل خورشید، حریم خصوصی بهتر و ویژگی‌های امنیتی پیشرفته",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "فناوری فیلم پنجره پیشرفته",
      description:
        "فیلم‌های پنجره پیشرفته مهندسی شده برای کنترل بهینه خورشید، محافظت UV و امنیت بالا. فیلم‌های ما از فناوری نانو چندلایه برای عملکرد برتر با حفظ شفافیت کریستالی استفاده می‌کنند.",
      metaKeywords:
        "فیلم پنجره، فیلم کنترل خورشید، فیلم امنیتی، محافظت UV، فیلم معماری، فیلم شیشه هوشمند",
      metaDescription:
        "راه‌حل‌های پیشرفته فیلم پنجره برای کاربردهای تجاری و مسکونی. محافظت برتر UV، بهره‌وری انرژی و ویژگی‌های امنیتی.",
    },
    features: {
      title: "ویژگی‌های پیشرفته",
      list: [
        "قابلیت مسدود کردن ۹۹٪ اشعه UV",
        "کاهش گرما تا ۷۸٪",
        "کاهش خیرگی تا ۸۳٪",
        "فناوری نانو سرامیک پیشرفته",
        "پوشش مقاوم در برابر خش",
        "بدون تداخل سیگنال",
        "چسب کاملاً شفاف",
        "فناوری سطح خود ترمیم‌شونده",
        "پوشش گارانتی ۱۵ ساله",
        "دوام حرفه‌ای",
      ],
    },
    applications: {
      title: "کاربردهای ایده‌آل",
      list: [
        "ساختمان‌های اداری تجاری",
        "املاک مسکونی",
        "ویترین فروشگاه‌ها",
        "موزه‌ها و گالری‌ها",
        "مراکز درمانی",
        "موسسات آموزشی",
        "ساختمان‌های دولتی",
        "کاربردهای خودرویی",
        "مراکز داده",
        "حفاظت تاریخی",
      ],
    },
    completedProjects: {
      title: "پروژه‌های موفق ما",
      subtitle: "برتری ما را در پروژه‌های تکمیل‌شده کشف کنید",
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
          imageUrl: "/assets/images/digital-printin-on-glasses/dig2.webp",
        },
        {
          title: "دفتر مرکزی شرکت",
          location: "مرکز تجاری تهران",
          description: "نصب شیشه هوشمند برای فضاهای اداری مدرن",
          stats: {
            area: "۱,۸۰۰ متر مربع",
            completion: "۱۴۰۲",
            rating: "۵/۵",
          },
          imageUrl: "/assets/images/digital-printin-on-glasses/dig1.webp",
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
          imageUrl: "/assets/images/digital-printin-on-glasses/dig4.webp",
        },
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "معیارهای عملکرد",
          items: [
            "انرژی خورشیدی کل رد شده: تا ۸۲٪",
            "عبور نور مرئی: ۱۵-۷۰٪",
            "رد اشعه مادون قرمز: تا ۹۷٪",
            "رد UV: ۹۹.۹٪",
            "کاهش خیرگی: ۸۳٪",
          ],
        },
        {
          category: "خواص فیزیکی",
          items: [
            "ضخامت: ۱.۵-۴.۰ میل",
            "استحکام کششی: ۲۸,۵۰۰ PSI",
            "مقاومت شکست: ۱۹۰ پوند بر اینچ",
            "قدرت چسبندگی: ۵-۶ پوند بر اینچ",
            "سختی سطح: بیش از 2H",
          ],
        },
        {
          category: "نصب",
          items: [
            "نیاز به نصب حرفه‌ای",
            "زمان عمل‌آوری: ۱۵-۳۰ روز",
            "محدوده دما: -۳۲ تا ۸۲ درجه سانتیگراد",
            "عمر مورد انتظار: ۱۵-۲۰ سال",
            "پوشش گارانتی: ۱۵ سال",
          ],
        },
      ],
    },
    testimonials: {
      title: "نظرات مشتریان",
      feedbacks: [
        {
          name: "علی محمدی",
          company: "راه‌حل‌های معماری نوین",
          location: "تهران، ایران",

          comment:
            "کیفیت چاپ دیجیتال فراتر از انتظارات ما بود. عالی برای پروژه دفتر مرکزی ما.",
          rating: " 5",
        },
        {
          name: "سارا احمدی",
          company: "طراحی داخلی مدرن",
          location: "تهران، ایران",

          comment:
            "جزئیات و دقت رنگ استثنایی. مشتریان ما همیشه از نتایج شگفت‌زده می‌شوند.",
          rating: "5",
        },
        {
          name: "محمد رضایی",
          company: "سازندگان نوآور",
          location: "تهران، ایران",

          comment:
            "دوام و کیفیت چاپ فوق‌العاده است. یک تحول در پروژه‌های معماری ما.",
          rating: "5",
        },
      ],
    },
    faq: [
      {
        question: "نصب فیلم پنجره چقدر طول می‌کشد؟",
        answer:
          "نصب حرفه‌ای معمولاً برای پروژه‌های تجاری ۱-۲ روز طول می‌کشد. فیلم برای شفافیت و چسبندگی بهینه به ۱۵-۳۰ روز زمان عمل‌آوری نیاز دارد.",
      },
      {
        question: "چه میزان صرفه‌جویی در انرژی می‌توانم انتظار داشته باشم؟",
        answer:
          "بسته به جهت‌گیری ساختمان و اقلیم، فیلم‌های ما معمولاً هزینه‌های سرمایش را ۲۵-۳۵٪ کاهش می‌دهند و در عرض ۲-۳ سال بازگشت سرمایه دارند.",
      },
      {
        question: "آیا فیلم پنجره بر گارانتی شیشه تأثیر می‌گذارد؟",
        answer:
          "فیلم‌های ما توسط تولیدکنندگان اصلی شیشه تأیید شده‌اند و با گارانتی جامع ۱۵ ساله که شامل پوشش شیشه می‌شود، ارائه می‌شوند.",
      },
      {
        question: "آیا فیلم پنجره قابل برداشتن است؟",
        answer:
          "بله، برداشتن حرفه‌ای ساده است و در صورت انجام صحیح، هیچ آسیبی به شیشه وارد نمی‌کند.",
      },
      {
        question: "فیلم چگونه شفافیت را حفظ می‌کند؟",
        answer:
          "فناوری نانو سرامیک ما شفافیت بهینه را در عین مسدود کردن گرما و اشعه UV تضمین می‌کند. پوشش خود ترمیم‌شونده در برابر خش مقاوم است و ظاهر را حفظ می‌کند.",
      },
    ],
  },
};

function CompletedProjects({
  content,
}: {
  content: typeof pageContent.en.completedProjects;
}) {
  const { state } = useLanguage();
  const contentt = pageContent[state.currentLang];
  const isRTL = state.currentLang === "fa";
  console.log(contentt);

  return (
    <section className="py-16 " dir={`${isRTL ? "rtl" : "ltr"}`}>
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
        title={content.hero.title}
        description={content.hero.description}
        videoUrl="/assets/video/video.mp4"
      />

      <div
        className="grid md:grid-cols-2 pt-12 mt-8 gap-6 lg:mx-20 mx-4"
        {...(isRTL ? { dir: "rtl" } : {})}
      >
        <div className="md:col-span-2 space-y-6">
          <section className=" p-8 rounded-xl shadow-sm">
            <h1 className="text-3xl font-bold mb-4 text-[#6FBDF5]">
              {content.content.title}
            </h1>
            <p className="text-gray-700">{content.content.description}</p>
          </section>
          <Benefits productType="temperedGlass" />
          <section className="p-8 rounded-xl shadow-sm grid grid-rows-1 lg:grid-rows-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="min-h-[400px] md:min-h-[300px] lg:h-[80px]">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#6FBDF5]">
                  {content.applications.title}
                </h2>
                <ul className="grid gap-2 md:gap-3 mb-4 md:mb-6">
                  {content.applications.list.map((application, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#6FBDF5]">•</span>
                      <span className="text-gray-700 text-sm md:text-base">
                        {application}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-h-[400px] md:min-h-[300px] lg:h-[80px]">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#6FBDF5]">
                  {content.features.title}
                </h2>
                <ul className="grid gap-2 md:gap-3">
                  {content.features.list.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#6FBDF5]">•</span>
                      <span className="text-gray-700 text-sm md:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:mt-0 lg:-mt-64">
              <Image
                src="/assets/images/page6.webp"
                alt={`${content.hero.title} 1`}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full object-cover"
                width={2000}
                height={2000}
              />
            </div>
          </section>
          <Specifications specifications={content.specifications} />

          <Testimonials testimonials={content.testimonials.feedbacks} />
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
