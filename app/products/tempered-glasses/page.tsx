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
      title: "Premium Tempered Glass Manufacturing",
      description:
        "Industry-leading safety glass solutions with advanced thermal processing and superior impact resistance",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Advanced Tempered Glass Solutions",
      description:
        "State-of-the-art tempered glass manufacturing using European technology, delivering exceptional strength, safety, and versatility for modern architectural applications. Our glass undergoes rigorous heat treatment processes, resulting in glass that's 4-5 times stronger than standard glass.",
      metaKeywords:
        "tempered glass, safety glass, architectural glass, heat-strengthened glass, security glass, building materials",
      metaDescription:
        "Premium tempered glass solutions for architectural and commercial applications. Superior strength, safety features, and customization options.",
    },
    features: {
      title: "Industry-Leading Features",
      list: [
        "Heat-strengthened to 4-5 times standard glass strength",
        "Temperature resistance up to 350°C (662°F)",
        "Safety-certified breakage pattern",
        "Customizable thickness (4mm to 19mm)",
        "Advanced edge processing technology",
        "Multiple surface treatments available",
        "ISO 9001:2015 certified production",
        "Full compliance with international safety standards",
        "Precision optical quality control",
        "Automated quality inspection system",
      ],
    },
    applications: {
      title: "Versatile Applications",
      list: [
        "Commercial building facades",
        "High-rise safety windows",
        "Structural glass walls",
        "Safety balustrades and railings",
        "Frameless shower enclosures",
        "Sports facility safety barriers",
        "Vehicle and transport glazing",
        "Solar panel protective covering",
        "Industrial machinery guards",
        "Designer furniture and fixtures",
      ],
    },
    specifications: {
      title: "Technical Specifications",
      details: [
        {
          category: "Physical Properties",
          items: [
            "Density: 2.5 g/cm³",
            "Bending Strength: >120 MPa",
            "Impact Resistance: 5x standard glass",
            "Light Transmission: up to 89%",
            "Available Thicknesses: 4-19mm",
          ],
        },
        {
          category: "Performance Ratings",
          items: [
            "Safety Rating: EN 12150",
            "Heat Resistance: 350°C",
            "UV Transmission: <1%",
            "Sound Reduction: up to 35dB",
            "Energy Efficiency: A+ rated",
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
            "Excellent quality and service! Their tempered glass completely transformed our office space.",
          rating: "5/5",
        },
        {
          name: "Omar Al-Farsi",
          location: "Muscat, Oman",
          comment:
            "Top-notch tempered glass supplier! Our hotel facade is now more energy-efficient and elegant.",
          rating: "4.9/5",
        },
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
    faq: [
      {
        question: "What makes tempered glass different from regular glass?",
        answer:
          "Tempered glass undergoes a specialized heat treatment process that creates a compressed surface layer, making it 4-5 times stronger than regular glass. When broken, it shatters into small, rounded pieces rather than sharp shards, significantly reducing injury risk.",
      },
      {
        question:
          "What are the maximum dimensions available for tempered glass?",
        answer:
          "Our tempered glass can be manufactured in sizes up to 3000mm x 6000mm, with thicknesses ranging from 4mm to 19mm. Custom sizes are available based on specific project requirements.",
      },
      {
        question: "How quickly can tempered glass be produced and delivered?",
        answer:
          "Standard orders typically have a 7-10 day production timeline. Rush orders can be accommodated within 3-5 days for urgent projects, subject to size and quantity requirements.",
      },
      {
        question: "Can tempered glass be cut or drilled after tempering?",
        answer:
          "No, tempered glass cannot be modified after the tempering process. All cutting, drilling, and edge work must be specified and completed before heat treatment.",
      },
      {
        question: "What types of surface treatments are available?",
        answer:
          "We offer multiple surface treatments including anti-reflective, low-E coating, frosted finish, anti-fingerprint coating, and various tints. These can be combined based on specific requirements.",
      },
      {
        question: "How does tempered glass contribute to energy efficiency?",
        answer:
          "Tempered glass, especially with low-E coatings, can reduce solar heat gain by up to 50% and improve insulation, leading to significant energy savings in heating and cooling costs.",
      },
      {
        question: "What safety certifications does your tempered glass have?",
        answer:
          "Our tempered glass meets international safety standards including EN 12150, ANSI Z97.1, and AS/NZS 2208. Each piece is tested for surface and edge compression to ensure safety compliance.",
      },
      {
        question: "Can tempered glass be used in extreme temperatures?",
        answer:
          "Yes, tempered glass can withstand temperature differentials up to 250°C and extreme temperatures from -50°C to +350°C without compromising its structural integrity.",
      },
    ],
  },
  fa: {
    hero: {
      title: "برترین کیفیت -کمترین قیمت در شیشه سیکوریت در ایران ",
      description:
        "شرکت ابنوس جام کرج با بیش از 5 دهه تجربه در تولید شیشه های سیکوریت در خدمت شماست تا با  نازل ترین قیمت بهترین کیفیت را به دست بیاورید ",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "شیشه سیکوریت یا سکوریت چیست و چرا باید ازش استفاده کنیم؟",
      description:
        "شیشه سیکوریت یا سکوریت یک نوع شیشه مقاوم است که در فرآیند حرارتی یا شیمیایی تحت فشار قرار می‌گیرد تا ویژگی‌های استحکام بالاتری داشته باشد. این شیشه‌ها نسبت به شیشه‌های معمولی مقاوم‌تر هستند و در صورت شکستن به قطعات کوچک و بدون لبه‌های تیز تبدیل می‌شوند، که خطر آسیب‌دیدگی را کاهش می‌دهد. در این مقاله، به توضیح ویژگی‌ها و مزایای استفاده از شیشه سیکوریت می‌پردازیم و بررسی می‌کنیم که چرا استفاده از آن در بسیاری از صنایع مانند ساختمان‌سازی، خودروسازی، و وسایل الکترونیکی به یک انتخاب ضروری تبدیل شده است.",
      metaKeywords:
        "شیشه سکوریت، شیشه ایمنی، شیشه معماری، شیشه مقاوم حرارتی، شیشه امنیتی، مصالح ساختمانی",
      metaDescription:
        "راه‌حل‌های شیشه سکوریت ممتاز برای کاربردهای معماری و تجاری. استحکام برتر، ویژگی‌های ایمنی و گزینه‌های سفارشی‌سازی.",
    },
    features: {
      title: "ویژگی‌های پیشرو در صنعت",
      list: [
        "تقویت حرارتی تا ۴-۵ برابر استحکام شیشه معمولی",
        "مقاومت دمایی تا ۳۵۰ درجه سانتی‌گراد",
        "الگوی شکست تأیید شده ایمنی",
        "ضخامت قابل سفارشی‌سازی (۴ تا ۱۹ میلی‌متر)",
        "فناوری پیشرفته پردازش لبه",
        "انواع پوشش‌های سطحی در دسترس",
        "دارای گواهینامه ISO 9001:2015",
        "مطابق با استانداردهای بین‌المللی ایمنی",
        "کنترل کیفیت اپتیکی دقیق",
        "سیستم بازرسی کیفیت اتوماتیک",
      ],
    },
    applications: {
      title: "کاربردهای متنوع",
      list: [
        "نمای ساختمان‌های تجاری",
        "پنجره‌های ایمنی ساختمان‌های بلندمرتبه",
        "دیوارهای شیشه‌ای سازه‌ای",
        "نرده و حفاظ ایمنی",
        "محفظه‌های دوش بدون فریم",
        "موانع ایمنی اماکن ورزشی",
        "شیشه‌های خودرو و حمل و نقل",
        "پوشش محافظ پنل‌های خورشیدی",
        "محافظ‌های ماشین‌آلات صنعتی",
        "مبلمان و تجهیزات طراحی",
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "خواص فیزیکی",
          items: [
            "چگالی: ۲.۵ گرم بر سانتی‌متر مکعب",
            "مقاومت خمشی: بیش از ۱۲۰ مگاپاسکال",
            "مقاومت ضربه: ۵ برابر شیشه معمولی",
            "عبور نور: تا ۸۹٪",
            "ضخامت‌های موجود: ۴-۱۹ میلی‌متر",
          ],
        },
        {
          category: "رتبه‌بندی عملکرد",
          items: [
            "رتبه ایمنی: EN 12150",
            "مقاومت حرارتی: ۳۵۰ درجه سانتی‌گراد",
            "عبور UV: کمتر از ۱٪",
            "کاهش صدا: تا ۳۵ دسی‌بل",
            "بهره‌وری انرژی: رتبه +A",
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
          comment:
            "کیفیت چاپ دیجیتال فراتر از انتظارات ما بود. عالی برای پروژه دفتر مرکزی ما.",
          rating: 5,
          avatar: "/assets/images/testimonials/ali.jpg",
        },
        {
          name: "سارا احمدی",
          company: "طراحی داخلی مدرن",
          comment:
            "جزئیات و دقت رنگ استثنایی. مشتریان ما همیشه از نتایج شگفت‌زده می‌شوند.",
          rating: 5,
          avatar: "/assets/images/testimonials/sara.jpg",
        },
        {
          name: "محمد رضایی",
          company: "سازندگان نوآور",
          comment:
            "دوام و کیفیت چاپ فوق‌العاده است. یک تحول در پروژه‌های معماری ما.",
          rating: 5,
          avatar: "/assets/images/testimonials/mohammad.jpg",
        },
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
          imageUrl: "/assets/images/opal.jpg",
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
          imageUrl: "/assets/images/opal.jpg",
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
          imageUrl: "/assets/images/opal.jpg",
        },
      ],
    },
    faq: [
      {
        question: "تفاوت شیشه سکوریت با شیشه معمولی چیست؟",
        answer:
          "شیشه سکوریت تحت فرآیند حرارتی ویژه‌ای قرار می‌گیرد که لایه سطحی فشرده ایجاد می‌کند و آن را ۴ تا ۵ برابر قوی‌تر از شیشه معمولی می‌سازد. هنگام شکستن، به قطعات کوچک و گرد تبدیل می‌شود و نه تکه‌های تیز، که خطر آسیب را به طور قابل توجهی کاهش می‌دهد.",
      },
      {
        question: "حداکثر ابعاد قابل دسترس برای شیشه سکوریت چقدر است؟",
        answer:
          "شیشه سکوریت ما در ابعاد تا ۳۰۰۰ در ۶۰۰۰ میلی‌متر، با ضخامت‌های ۴ تا ۱۹ میلی‌متر قابل تولید است. ابعاد سفارشی بر اساس نیازهای خاص پروژه در دسترس است.",
      },
      {
        question: "زمان تولید و تحویل شیشه سکوریت چقدر است؟",
        answer:
          "سفارش‌های استاندارد معمولاً ۷ تا ۱۰ روز زمان تولید نیاز دارند. برای پروژه‌های فوری، سفارش‌های ضربتی در ۳ تا ۵ روز قابل انجام است، البته بسته به اندازه و تعداد سفارش.",
      },
      {
        question:
          "آیا می‌توان شیشه سکوریت را پس از تولید برش داد یا سوراخ کرد؟",
        answer:
          "خیر، شیشه سکوریت پس از فرآیند سکوریت قابل تغییر نیست. تمام برش‌کاری، سوراخ‌کاری و کار لبه باید قبل از عملیات حرارتی مشخص و انجام شود.",
      },
      {
        question: "چه نوع پوشش‌های سطحی در دسترس است؟",
        answer:
          "ما پوشش‌های متنوعی از جمله ضد انعکاس، کم‌گسیل (Low-E)، مات، ضد اثر انگشت و رنگ‌های مختلف ارائه می‌دهیم. این پوشش‌ها را می‌توان بر اساس نیازهای خاص ترکیب کرد.",
      },
      {
        question: "شیشه سکوریت چگونه به بهره‌وری انرژی کمک می‌کند؟",
        answer:
          "شیشه سکوریت، به‌ویژه با پوشش کم‌گسیل، می‌تواند جذب گرمای خورشید را تا ۵۰٪ کاهش دهد و عایق‌بندی را بهبود بخشد که منجر به صرفه‌جویی قابل توجه در هزینه‌های گرمایش و سرمایش می‌شود.",
      },
      {
        question: "شیشه سکوریت شما چه گواهینامه‌های ایمنی دارد؟",
        answer:
          "شیشه سکوریت ما با استانداردهای بین‌المللی ایمنی از جمله EN 12150، ANSI Z97.1 و AS/NZS 2208 مطابقت دارد. هر قطعه برای اطمینان از رعایت ایمنی، از نظر فشردگی سطح و لبه آزمایش می‌شود.",
      },
      {
        question: "آیا شیشه سکوریت در دماهای شدید قابل استفاده است؟",
        answer:
          "بله، شیشه سکوریت می‌تواند اختلاف دمای تا ۲۵۰ درجه سانتی‌گراد و دماهای شدید از منفی ۵۰ تا مثبت ۳۵۰ درجه سانتی‌گراد را بدون آسیب به ساختار خود تحمل کند.",
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
        className="grid md:grid-cols-2 pt-12 mt-8 gap-6 lg:mx-20 mx-4 gap-2"
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
