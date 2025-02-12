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
      title: "Premium Double-Glazed Glass Solutions",
      description:
        "Enhance energy efficiency, noise reduction, and security with our state-of-the-art double-glazed glass systems.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Advanced Double-Glazed Glass Technology",
      description:
        "Our double-glazed glass units are engineered to provide superior thermal insulation, soundproofing, and enhanced security. Using cutting-edge European technology, our insulated glass units (IGUs) reduce energy costs, minimize condensation, and increase indoor comfort. Perfect for modern architectural applications requiring high performance and durability.",
      metaKeywords:
        "double-glazed glass, insulated glass, energy-efficient glass, soundproof glass, thermal insulation glass, architectural glass",
      metaDescription:
        "High-performance double-glazed glass solutions designed for energy efficiency, soundproofing, and durability in residential and commercial buildings.",
    },
    features: {
      title: "Unmatched Benefits of Double-Glazed Glass",
      list: [
        "Superior thermal insulation, reducing energy costs",
        "Significant noise reduction for a quieter environment",
        "Minimizes condensation and prevents mold formation",
        "Customizable glass thickness and spacer widths",
        "Available with low-E coatings for enhanced efficiency",
        "Laminated or toughened options for increased security",
        "UV protection to prevent interior fading",
        "Environmentally friendly and sustainable design",
        "Certified for international energy efficiency standards",
        "Advanced gas-filled options for improved performance",
      ],
    },
    applications: {
      title: "Ideal Applications",
      list: [
        "Residential windows and doors",
        "Commercial building facades",
        "Office partitions and meeting rooms",
        "High-rise buildings for energy savings",
        "Noise-reduction glazing for urban areas",
        "Glass conservatories and sunrooms",
        "Skylights and overhead glazing",
        "Cold storage and refrigeration units",
        "Security-enhanced glazing for banks and offices",
        "Energy-efficient greenhouse construction",
      ],
    },
    specifications: {
      title: "Technical Specifications",
      details: [
        {
          category: "Physical Properties",
          items: [
            "Glass Thickness: 4mm - 12mm per pane",
            "Spacer Width: 6mm - 24mm",
            "U-Value: As low as 1.1 W/m²K",
            "Sound Insulation: Up to 45dB",
            "Gas Fill Options: Argon, Krypton, or Xenon",
          ],
        },
        {
          category: "Performance Ratings",
          items: [
            "Energy Efficiency Rating: A++",
            "Light Transmission: Up to 82%",
            "UV Protection: Up to 99%",
            "Condensation Resistance: High",
            "Safety Standards: EN 1279, ISO 9001:2015",
          ],
        },
      ],
    },
    testimonials: {
      title: "Customer Feedback",
      feedbacks: [
        {
          name: "James Carter",
          location: "London, UK",
          comment:
            "The double-glazed glass from this company has drastically improved our office energy efficiency and comfort.",
          rating: "5/5",
        },
        {
          name: "Sophie Martinez",
          location: "Madrid, Spain",
          comment:
            "Outstanding quality! Our home is now quieter, and the heating bills have reduced significantly.",
          rating: "4.9/5",
        },
      ],
    },
    completedProjects: {
      title: "Our Successful Projects",
      subtitle: "Explore Our Completed Installations",
      projects: [
        {
          title: "Luxury Apartment Complex",
          location: "New York City, USA",
          description:
            "Complete installation of energy-efficient double-glazed glass for enhanced thermal performance and noise reduction.",
          stats: { area: "5,000 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/tempered/temp2.webp",
        },
      ],
    },
    faq: [
      {
        question: "How does double-glazed glass improve energy efficiency?",
        answer:
          "Double-glazed glass creates an insulating barrier that reduces heat transfer, keeping interiors warmer in winter and cooler in summer, leading to lower energy costs.",
      },
      {
        question: "Can double-glazed glass reduce outside noise?",
        answer:
          "Yes, it significantly reduces noise pollution, making it ideal for urban environments, near highways, or in busy commercial spaces.",
      },
      {
        question: "What gas is used between the panes?",
        answer:
          "Our double-glazed units can be filled with argon, krypton, or xenon gas to enhance insulation and thermal performance.",
      },
      {
        question: "Is double-glazed glass suitable for all climates?",
        answer:
          "Yes, it helps regulate indoor temperatures in both hot and cold climates, providing year-round comfort and efficiency.",
      },
      {
        question: "Can I customize the glass coating and tint?",
        answer:
          "Absolutely! We offer low-E coatings, tinted glass, frosted finishes, and laminated options to meet your specific needs.",
      },
      {
        question: "How long does double-glazed glass last?",
        answer:
          "With proper installation and maintenance, double-glazed glass can last over 25 years while maintaining its efficiency.",
      },
      {
        question: "Is double-glazed glass impact-resistant?",
        answer:
          "Yes, when combined with laminated or toughened glass, it provides added security and impact resistance.",
      },
      {
        question: "Can double-glazed glass help with condensation?",
        answer:
          "Yes, it reduces condensation build-up, preventing mold growth and improving indoor air quality.",
      },
    ],
  },
  fa: {
    hero: {
      title: "شیشه دوجداره - کیفیت برتر، عایق‌بندی فوق‌العاده",
      description:
        "شرکت آبنوس جام کرج با بهره‌گیری از تکنولوژی روز دنیا، شیشه‌های دوجداره‌ای با حداکثر عایق‌بندی حرارتی و صوتی تولید می‌کند.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "شیشه دوجداره چیست و چرا باید از آن استفاده کنیم؟",
      description:
        "شیشه دوجداره از دو لایه شیشه‌ای تشکیل شده که توسط فضای پر شده با گاز یا خلأ از یکدیگر جدا شده‌اند. این طراحی موجب کاهش انتقال حرارت و صدا، افزایش بهره‌وری انرژی، و بهبود امنیت می‌شود. در این مقاله، به بررسی مزایا، کاربردها و ویژگی‌های برتر این محصول می‌پردازیم.",
      metaKeywords:
        "شیشه دوجداره، عایق حرارتی، عایق صوتی، شیشه ساختمانی، شیشه امنیتی، پنجره دوجداره",
      metaDescription:
        "شیشه‌های دوجداره با کیفیت بالا برای افزایش بهره‌وری انرژی، کاهش صدا و بهبود امنیت در ساختمان‌های مسکونی و تجاری.",
    },
    features: {
      title: "ویژگی‌های کلیدی شیشه دوجداره",
      list: [
        "کاهش اتلاف انرژی تا ۴۰٪",
        "عایق صوتی تا ۳۵ دسی‌بل",
        "افزایش امنیت و مقاومت در برابر ضربه",
        "امکان استفاده از گاز آرگون یا کریپتون برای عایق‌بندی بهتر",
        "تنوع در پوشش‌های کم‌گسیل (Low-E) و ضد UV",
        "کاهش تشکیل بخار و تعریق داخلی",
        "مطابقت با استانداردهای بین‌المللی انرژی",
        "امکان تولید در ضخامت‌های متنوع (۶ تا ۲۴ میلی‌متر)",
        "دوام بالا و کاهش نیاز به تعمیر و نگهداری",
      ],
    },
    applications: {
      title: "کاربردهای شیشه دوجداره",
      list: [
        "پنجره‌های ساختمانی مسکونی و تجاری",
        "دیوارهای شیشه‌ای عایق",
        "نمای ساختمان‌های مدرن",
        "درهای شیشه‌ای بالکن و پاسیو",
        "ساختمان‌های اداری و مراکز خرید",
        "هتل‌ها و اماکن تفریحی",
        "محفظه‌های نمایشگاهی و ویترین‌ها",
        "اتاق‌های کنترل صدا و استودیوهای ضبط",
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "خواص فیزیکی",
          items: [
            "ضخامت کلی: ۶ تا ۲۴ میلی‌متر",
            "عبور نور: تا ۸۵٪",
            "کاهش انتقال حرارت: تا ۴۰٪",
            "کاهش صوتی: تا ۳۵ دسی‌بل",
          ],
        },
        {
          category: "رتبه‌بندی عملکرد",
          items: [
            "رتبه بهره‌وری انرژی: A+",
            "استاندارد ایمنی: EN 1279",
            "نفوذپذیری هوا: کمتر از ۰.۱٪",
            "مقاومت در برابر رطوبت: بسیار بالا",
          ],
        },
      ],
    },
    testimonials: {
      title: "نظرات مشتریان",
      feedbacks: [
        {
          name: "احمد رضایی",
          location: "تهران، ایران",
          comment:
            "شیشه‌های دوجداره این شرکت کیفیت بی‌نظیری دارند. کاهش صدا و مصرف انرژی به‌وضوح احساس می‌شود.",
          rating: "5/5",
        },
        {
          name: "لیلا مرادی",
          location: "اصفهان، ایران",
          comment:
            "از زمانی که از شیشه دوجداره استفاده کردیم، دمای خانه ثابت‌تر شده و قبض برق هم کمتر شده است!",
          rating: "4.8/5",
        },
      ],
    },
    completedProjects: {
      title: "پروژه‌های موفق ما",
      subtitle: "نصب موفق شیشه دوجداره در پروژه‌های مختلف",
      projects: [
        {
          title: "برج مسکونی لوکس",
          location: "تهران",
          description:
            "نصب شیشه‌های دوجداره در تمامی واحدهای برج برای بهبود عایق‌بندی صوتی و حرارتی.",
          stats: {
            area: "۱۰,۰۰۰ متر مربع",
            completion: "۱۴۰۲",
            rating: "۴.۹/۵",
          },
          imageUrl: "/assets/images/tempered/temp2.webp",
        },
      ],
    },
    faq: [
      {
        question: "مزیت شیشه دوجداره نسبت به شیشه معمولی چیست؟",
        answer:
          "شیشه دوجداره عایق بهتری برای گرما و صدا است، که موجب کاهش مصرف انرژی و افزایش آسایش داخل ساختمان می‌شود.",
      },
      {
        question: "چه گازهایی در شیشه دوجداره استفاده می‌شود؟",
        answer:
          "معمولاً از گاز آرگون یا کریپتون برای بهبود خاصیت عایق‌بندی حرارتی و صوتی استفاده می‌شود.",
      },
      {
        question:
          "چقدر می‌توان از طریق شیشه دوجداره در هزینه‌های انرژی صرفه‌جویی کرد؟",
        answer:
          "بسته به شرایط، شیشه دوجداره می‌تواند تا ۴۰٪ در هزینه‌های گرمایشی و سرمایشی صرفه‌جویی کند.",
      },
      {
        question: "آیا شیشه دوجداره ضد بخار است؟",
        answer:
          "بله، فضای بین دو لایه شیشه با گاز خشک پر شده و از تشکیل بخار و مه در سطح شیشه جلوگیری می‌کند.",
      },
      {
        question: "آیا امکان سفارشی‌سازی شیشه دوجداره وجود دارد؟",
        answer:
          "بله، ضخامت، نوع پوشش، رنگ و ابعاد قابل تنظیم بر اساس نیاز مشتری است.",
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
            <div className="w-full lg:-mt-96">
              <Image
                src="/assets/images/page2.webp"
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
