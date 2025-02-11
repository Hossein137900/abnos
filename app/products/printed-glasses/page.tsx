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
      title:
        "Custom Printed Glass: Elevate Your Space with Personalized Designs",
      description:
        "Transform ordinary glass into stunning works of art with our custom printed glass solutions. Add personality, branding, or artistic flair to any space.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Unleash Your Creativity with Printed Glass",
      description:
        "Our state-of-the-art printing technology allows for vibrant, high-resolution images and designs to be directly applied to glass surfaces. Create unique feature walls, eye-catching signage, or personalized décor that reflects your style.",
      metaKeywords:
        "printed glass, custom glass printing, glass art, personalized glass, decorative glass, glass signage, architectural glass",
      metaDescription:
        "Create stunning, personalized spaces with our custom printed glass solutions. High-resolution printing, vibrant colors, and endless design possibilities.",
    },
    features: {
      title: "Exceptional Printing Features",
      list: [
        "High-resolution image printing for crystal-clear details",
        "Vibrant, long-lasting UV-resistant inks",
        "Full-color spectrum for unlimited design possibilities",
        "Durable and scratch-resistant finish",
        "Suitable for various glass types and thicknesses",
        "Customizable sizes and shapes",
        "Easy to clean and maintain",
        "Indoor and outdoor applications",
        "Fast turnaround times",
        "Expert design consultation available",
      ],
    },
    applications: {
      title: "Versatile Applications for Printed Glass",
      list: [
        "Feature walls and backsplashes",
        "Office partitions and conference rooms",
        "Retail displays and signage",
        "Shower enclosures and bathroom décor",
        "Kitchen countertops and backsplashes",
        "Balustrades and railings",
        "Skylights and canopies",
        "Furniture and decorative accents",
        "Art installations and exhibitions",
        "Corporate branding and promotional materials",
      ],
    },
    specifications: {
      title: "Technical Specifications",
      details: [
        {
          category: "Printing Process",
          items: [
            "Technology: UV-curable digital printing",
            "Resolution: Up to 1440 dpi",
            "Ink Type: UV-resistant, eco-friendly",
            "Color Gamut: CMYK + White",
          ],
        },
        {
          category: "Glass Types",
          items: [
            "Thickness: 4mm to 19mm",
            "Types: Tempered, laminated, annealed",
            "Finishes: Clear, frosted, tinted",
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
          comment:
            "The printed glass backsplash in my kitchen is absolutely stunning! The colors are so vibrant and the image is incredibly sharp.",
          rating: "5/5",
        },
        {
          name: "Omar Al-Farsi",
          location: "Muscat, Oman",
          comment:
            "We used printed glass for our office partitions and it has completely transformed the space. It's modern, stylish, and adds a touch of personality.",
          rating: "4.9/5",
        },
      ],
    },
    completedProjects: {
      title: "Explore Our Printed Glass Projects",
      subtitle:
        "See how we've helped businesses and homeowners create stunning spaces",
      projects: [
        {
          title: "Luxury Hotel Lobby",
          location: "Dubai, UAE",
          description:
            "We created a custom printed glass feature wall for the lobby of a luxury hotel, featuring a stunning image of the Dubai skyline.",
          stats: { area: "100 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/printed-glass-hotel.jpg",
        },
      ],
    },
    faq: [
      {
        question: "What type of images can be printed on glass?",
        answer:
          "We can print virtually any high-resolution image on glass, including photos, logos, patterns, and custom designs. Our team can also help you source images if needed.",
      },
      {
        question: "What is the maximum size of printed glass?",
        answer:
          "The maximum size of printed glass depends on the type and thickness of the glass. Please contact us for more information.",
      },
      {
        question: "How durable is the printed image?",
        answer:
          "Our printed images are highly durable and scratch-resistant. They are also UV-resistant, so they will not fade or yellow over time.",
      },
      {
        question: "How do I clean printed glass?",
        answer:
          "Printed glass can be cleaned with a soft cloth and a mild detergent. Avoid using abrasive cleaners or harsh chemicals.",
      },
    ],
  },
  fa: {
    hero: {
      title: "شیشه چاپ شده سفارشی: فضای خود را با طرح های شخصی ارتقا دهید",
      description:
        "شیشه های معمولی را با راه حل های شیشه چاپ شده سفارشی ما به آثار هنری خیره کننده تبدیل کنید. شخصیت، برند یا استعداد هنری را به هر فضایی اضافه کنید.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "خلاقیت خود را با شیشه چاپ شده آزاد کنید",
      description:
        "فناوری چاپ پیشرفته ما امکان اعمال تصاویر و طرح های پر جنب و جوش و با وضوح بالا را مستقیماً روی سطوح شیشه ای فراهم می کند. دیوارهای برجسته منحصر به فرد، تابلوهای چشم نواز یا دکور شخصی ایجاد کنید که منعکس کننده سبک شما باشد.",
      metaKeywords:
        "شیشه چاپ شده، چاپ شیشه سفارشی، هنر شیشه، شیشه شخصی، شیشه تزئینی، تابلوی شیشه ای، شیشه معماری",
      metaDescription:
        "فضاهای خیره کننده و شخصی را با راه حل های شیشه چاپ شده سفارشی ما ایجاد کنید. چاپ با وضوح بالا، رنگ های پر جنب و جوش و امکانات طراحی بی پایان.",
    },
    features: {
      title: "ویژگی های چاپ استثنایی",
      list: [
        "چاپ تصویر با وضوح بالا برای جزئیات شفاف",
        "جوهر های مقاوم در برابر UV پر جنب و جوش و ماندگار",
        "طیف رنگی کامل برای امکانات طراحی نامحدود",
        "پایان بادوام و مقاوم در برابر خراش",
        "مناسب برای انواع و ضخامت های مختلف شیشه",
        "اندازه ها و اشکال قابل تنظیم",
        "تمیز کردن و نگهداری آسان",
        "کاربردهای داخلی و خارجی",
        "زمان تحویل سریع",
        "مشاوره طراحی تخصصی در دسترس است",
      ],
    },
    applications: {
      title: "کاربردهای متنوع برای شیشه چاپ شده",
      list: [
        "دیوارهای برجسته و صفحات پشتی",
        "پارتیشن های اداری و اتاق های کنفرانس",
        "نمایشگرهای خرده فروشی و تابلوها",
        "محفظه های دوش و دکور حمام",
        "کانترهای آشپزخانه و صفحات پشتی",
        "نرده ها و حفاظ ها",
        "نورگیرها و سایبان ها",
        "مبلمان و لهجه های تزئینی",
        "چیدمان های هنری و نمایشگاه ها",
        "برندسازی شرکتی و مواد تبلیغاتی",
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "فرآیند چاپ",
          items: [
            "فناوری: چاپ دیجیتال UV قابل درمان",
            "وضوح: تا 1440 dpi",
            "نوع جوهر: مقاوم در برابر UV، سازگار با محیط زیست",
            "طیف رنگی: CMYK + سفید",
          ],
        },
        {
          category: "انواع شیشه",
          items: [
            "ضخامت: 4 میلی متر تا 19 میلی متر",
            "انواع: سکوریت، لمینت، آنیل شده",
            "پرداخت: شفاف، مات، رنگی",
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
          imageUrl: "/assets/images/project1.jpg",
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
        title={content.hero.title}
        description={content.hero.description}
        videoUrl="/assets/video/video.mp4"
      />

      <div
        className="grid md:grid-cols-2 pt-12 mt-8 lg:mx-20 mx-4 gap-2"
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
            <div className="w-full mt-4 md:mt-0 lg:-mt-32">
              <Image
                src="/assets/images/about.jpg"
                alt={`${content.hero.title} 1`}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full object-cover"
                width={400}
                height={400}
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
