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
      title: "Premium Laminated Glass Solutions",
      description:
        "Enhance safety, security, and sound control with our high-quality laminated glass products. Perfect for a variety of applications.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Advanced Laminated Glass Technology",
      description:
        "Our laminated glass is manufactured by bonding two or more layers of glass together with an interlayer of polyvinyl butyral (PVB). This process creates a strong, durable glass that offers superior safety, security, and sound control. Ideal for applications where safety and security are paramount.",
      metaKeywords:
        "laminated glass, safety glass, security glass, soundproof glass, architectural glass, PVB glass",
      metaDescription:
        "High-quality laminated glass solutions designed for safety, security, and sound control in residential and commercial buildings.",
    },
    features: {
      title: "Key Benefits of Laminated Glass",
      list: [
        "Superior safety: holds together when shattered, reducing injury risk",
        "Enhanced security: deters break-ins and forced entry",
        "Excellent sound control: reduces noise transmission",
        "UV protection: blocks harmful UV rays, preventing fading",
        "Durable and long-lasting",
        "Versatile design options: available in various thicknesses and colors",
        "Can be combined with other glass types for added functionality",
        "Suitable for both interior and exterior applications",
        "Meets or exceeds safety standards",
        "Easy to clean and maintain",
      ],
    },
    applications: {
      title: "Versatile Applications of Laminated Glass",
      list: [
        "Windows and doors",
        "Skylights and overhead glazing",
        "Balustrades and railings",
        "Storefronts and display cases",
        "Partitions and shower enclosures",
        "Furniture and decorative elements",
        "Automotive windshields",
        "Security glazing for banks and government buildings",
        "Soundproof glazing for offices and residences",
        "Hurricane-resistant windows",
      ],
    },
    specifications: {
      title: "Technical Specifications",
      details: [
        {
          category: "Physical Properties",
          items: [
            "Glass Thickness: Customizable (typically 4mm - 20mm)",
            "PVB Interlayer Thickness: 0.38mm - 1.52mm",
            "Light Transmission: Varies depending on glass type and thickness",
            "Sound Insulation: Up to 40dB reduction",
            "UV Transmission: Blocks up to 99% of UV rays",
          ],
        },
        {
          category: "Performance Ratings",
          items: [
            "Safety Standards: Meets or exceeds ANSI Z97.1, EN 12600, etc.",
            "Security Ratings: Varies depending on application",
            "Weather Resistance: Excellent",
            "Durability: Long-lasting and resistant to weathering",
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
            "The laminated glass we installed in our office has made a huge difference in noise reduction. It's so much quieter and more productive now.",
          rating: "5/5",
        },
        {
          name: "Omar Al-Farsi",
          location: "Muscat, Oman",
          comment:
            "We used laminated glass for our storefront windows and it gives us peace of mind knowing that it's much more secure.",
          rating: "4.9/5",
        },
      ],
    },
    completedProjects: {
      title: "Explore Our Laminated Glass Projects",
      subtitle:
        "See how we've helped businesses and homeowners enhance safety and security",
      projects: [
        {
          title: "High-Rise Office Building",
          location: "Dubai, UAE",
          description:
            "We installed laminated glass windows throughout a high-rise office building to enhance safety and security.",
          stats: { area: "5,000 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/laminated-glass-office.jpg",
        },
      ],
    },
    faq: [
      {
        question:
          "What is the difference between laminated glass and tempered glass?",
        answer:
          "Laminated glass is made by bonding two or more layers of glass together with an interlayer, while tempered glass is a single pane of glass that has been heat-treated to increase its strength. Laminated glass is designed to hold together when shattered, while tempered glass breaks into small, relatively harmless pieces.",
      },
      {
        question: "Is laminated glass more expensive than tempered glass?",
        answer:
          "Laminated glass is typically more expensive than tempered glass due to the additional manufacturing process and materials involved.",
      },
      {
        question: "Can laminated glass be cut or drilled after it is made?",
        answer:
          "No, laminated glass cannot be cut or drilled after it is made. Any modifications must be done before the lamination process.",
      },
      {
        question: "How do I clean laminated glass?",
        answer:
          "Laminated glass can be cleaned with a soft cloth and a mild detergent. Avoid using abrasive cleaners or harsh chemicals.",
      },
    ],
  },
  fa: {
    hero: {
      title: "شیشه لمینت - ایمنی، امنیت و کنترل صدا",
      description:
        "با محصولات شیشه لمینت با کیفیت بالا، ایمنی، امنیت و کنترل صدا را افزایش دهید. ایده آل برای کاربردهای مختلف.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "فناوری پیشرفته شیشه لمینت",
      description:
        "شیشه لمینت ما با اتصال دو یا چند لایه شیشه به یکدیگر با یک لایه میانی از پلی وینیل بوتیرال (PVB) ساخته می شود. این فرآیند شیشه ای قوی و بادوام ایجاد می کند که ایمنی، امنیت و کنترل صدای برتر را ارائه می دهد. ایده آل برای کاربردهایی که ایمنی و امنیت در آنها اهمیت زیادی دارد.",
      metaKeywords:
        "شیشه لمینت، شیشه ایمنی، شیشه امنیتی، شیشه ضد صدا، شیشه معماری، شیشه PVB",
      metaDescription:
        "راه حل های شیشه لمینت با کیفیت بالا که برای ایمنی، امنیت و کنترل صدا در ساختمان های مسکونی و تجاری طراحی شده اند.",
    },
    features: {
      title: "مزایای کلیدی شیشه لمینت",
      list: [
        "ایمنی برتر: هنگام شکستن، تکه ها به هم می چسبند و خطر آسیب را کاهش می دهند",
        "امنیت بیشتر: از ورود سارقان و ورود اجباری جلوگیری می کند",
        "کنترل صدای عالی: انتقال صدا را کاهش می دهد",
        "محافظت در برابر UV: اشعه های مضر UV را مسدود می کند و از محو شدن جلوگیری می کند",
        "بادوام و ماندگار",
        "گزینه های طراحی متنوع: در ضخامت ها و رنگ های مختلف موجود است",
        "می توان آن را با انواع دیگر شیشه برای عملکرد بیشتر ترکیب کرد",
        "مناسب برای کاربردهای داخلی و خارجی",
        "مطابقت با استانداردهای ایمنی یا فراتر از آنها",
        "تمیز کردن و نگهداری آسان",
      ],
    },
    applications: {
      title: "کاربردهای متنوع شیشه لمینت",
      list: [
        "پنجره ها و درها",
        "نورگیرها و شیشه های بالای سر",
        "نرده ها و حفاظ ها",
        "ویترین مغازه ها و ویترین ها",
        "پارتیشن ها و محفظه های دوش",
        "مبلمان و عناصر تزئینی",
        "شیشه های جلویی خودرو",
        "شیشه های امنیتی برای بانک ها و ساختمان های دولتی",
        "شیشه های ضد صدا برای دفاتر و اقامتگاه ها",
        "پنجره های مقاوم در برابر طوفان",
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "خواص فیزیکی",
          items: [
            "ضخامت شیشه: قابل تنظیم (معمولاً ۴ تا ۲۰ میلی‌متر)",
            "ضخامت لایه میانی PVB: ۰.۳۸ تا ۱.۵۲ میلی‌متر",
            "انتقال نور: بسته به نوع و ضخامت شیشه متفاوت است",
            "عایق صدا: کاهش تا ۴۰ دسی‌بل",
            "انتقال UV: مسدود کردن تا ۹۹٪ از اشعه های UV",
          ],
        },
        {
          category: "رتبه‌بندی عملکرد",
          items: [
            "استانداردهای ایمنی: مطابق با یا فراتر از ANSI Z97.1، EN 12600 و غیره",
            "رتبه‌بندی امنیتی: بسته به کاربرد متفاوت است",
            "مقاومت در برابر آب و هوا: عالی",
            "دوام: ماندگار و مقاوم در برابر شرایط آب و هوایی",
          ],
        },
      ],
    },
    testimonials: {
      title: "مشتریان ما چه می گویند",
      feedbacks: [
        {
          name: "علی رضایی",
          location: "تهران، ایران",
          comment:
            "شیشه لمینتی که در دفتر خود نصب کردیم، تفاوت زیادی در کاهش صدا ایجاد کرده است. اکنون بسیار ساکت تر و پربارتر است.",
          rating: "5/5",
        },
        {
          name: "عمر الفارسی",
          location: "مسقط، عمان",
          comment:
            "ما از شیشه لمینت برای پنجره های فروشگاه خود استفاده کردیم و این اطمینان را به ما می دهد که بسیار امن تر است.",
          rating: "4.9/5",
        },
      ],
    },
    completedProjects: {
      title: "پروژه های شیشه لمینت ما را کاوش کنید",
      subtitle:
        "ببینید چگونه به کسب و کارها و صاحبان خانه کمک کرده ایم تا ایمنی و امنیت را افزایش دهند",
      projects: [
        {
          title: "ساختمان اداری بلند مرتبه",
          location: "دبی، امارات متحده عربی",
          description:
            "ما پنجره های شیشه ای لمینت را در سراسر یک ساختمان اداری بلند مرتبه برای افزایش ایمنی و امنیت نصب کردیم.",
          stats: { area: "۵۰۰۰ متر مربع", completion: "۲۰۲۳", rating: "5/5" },
          imageUrl: "/assets/images/laminated-glass-office.jpg",
        },
      ],
    },
    faq: [
      {
        question: "تفاوت بین شیشه لمینت و شیشه سکوریت چیست؟",
        answer:
          "شیشه لمینت با اتصال دو یا چند لایه شیشه به یکدیگر با یک لایه میانی ساخته می شود، در حالی که شیشه سکوریت یک تکه شیشه است که برای افزایش مقاومت آن تحت عملیات حرارتی قرار گرفته است. شیشه لمینت به گونه ای طراحی شده است که هنگام شکستن تکه ها به هم بچسبند، در حالی که شیشه سکوریت به قطعات کوچک و نسبتاً بی خطر تبدیل می شود.",
      },
      {
        question: "آیا شیشه لمینت گران تر از شیشه سکوریت است؟",
        answer:
          "شیشه لمینت به دلیل فرآیند تولید و مواد اضافی مورد استفاده معمولاً گران تر از شیشه سکوریت است.",
      },
      {
        question: "آیا شیشه لمینت را می توان پس از ساخت برش داد یا سوراخ کرد؟",
        answer:
          "خیر، شیشه لمینت را نمی توان پس از ساخت برش داد یا سوراخ کرد. هرگونه تغییر باید قبل از فرآیند لمینت انجام شود.",
      },
      {
        question: "چگونه شیشه لمینت را تمیز کنیم؟",
        answer:
          "شیشه لمینت را می توان با یک پارچه نرم و یک ماده شوینده ملایم تمیز کرد. از استفاده از پاک کننده های ساینده یا مواد شیمیایی خشن خودداری کنید.",
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
