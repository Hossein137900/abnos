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
      title: "Printed Glass for Buildings: Transform Your Architecture",
      description:
        "Elevate your building's aesthetics and functionality with our custom printed glass solutions. From stunning facades to interior design, we bring your vision to life.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "Innovative Printed Glass for Architectural Design",
      description:
        "Our advanced printing technology allows for high-resolution images and designs to be directly applied to glass surfaces, transforming ordinary glass into extraordinary architectural features.  Create unique facades, eye-catching interior designs, and branded spaces with our custom printed glass.",
      metaKeywords:
        "printed glass, building glass printing, architectural glass, custom glass printing, glass facades, interior glass design, decorative glass",
      metaDescription:
        "Transform your building with custom printed glass. Create stunning facades, interiors, and branded spaces with high-resolution printing on glass.",
    },
    features: {
      title: "Exceptional Features for Building Applications",
      list: [
        "High-resolution image printing for stunning visual impact",
        "Durable, UV-resistant inks for long-lasting vibrancy",
        "Customizable designs, colors, and patterns",
        "Suitable for various glass types and thicknesses (tempered, laminated, etc.)",
        "Can be combined with other glass technologies (e.g., low-E coatings)",
        "Enhances privacy and light control",
        "Improves building aesthetics and branding",
        "Suitable for interior and exterior applications",
        "Professional installation services available",
        "Expert design consultation",
      ],
    },
    applications: {
      title: "Versatile Applications in Buildings",
      list: [
        "Building facades and curtain walls",
        "Interior partitions and feature walls",
        "Skylights and canopies",
        "Balustrades and railings",
        "Storefronts and retail displays",
        "Office branding and signage",
        "Hotel and hospitality design",
        "Museum and gallery installations",
        "Residential interior design",
        "Privacy screens and decorative panels",
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
            "Thickness: 4mm to 19mm (and beyond, depending on project)",
            "Types: Tempered, laminated, annealed, coated",
            "Sizes: Custom sizes available",
          ],
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      feedbacks: [
        {
          name: "John Smith",
          location: "London, UK",
          comment:
            "The printed glass facade has completely transformed our building. It's a real statement piece.",
          rating: "5/5",
        },
        {
          name: "Maria Garcia",
          location: "Madrid, Spain",
          comment:
            "We used printed glass for our office partitions and it has created a modern and stylish workspace.",
          rating: "4.9/5",
        },
      ],
    },
    completedProjects: {
      title: "Our Architectural Glass Projects",
      subtitle: "Explore our portfolio of printed glass installations",
      projects: [
        {
          title: "Modern Office Tower",
          location: "New York City, USA",
          description:
            "Printed glass facade featuring a custom design for a modern office tower.",
          stats: { area: "2,000 m²", completion: "2023", rating: "5/5" },
          imageUrl: "/assets/images/tempered/temp1.webp",
        },
      ],
    },
    faq: [
      {
        question: "What types of designs can be printed on building glass?",
        answer:
          "We can print virtually any high-resolution image or design, including logos, patterns, photographs, and custom artwork. Our team can assist with design development.",
      },
      {
        question: "What is the maximum size of printed glass for buildings?",
        answer:
          "The maximum size depends on the glass type and project requirements.  Contact us for specific details.",
      },
      {
        question: "How durable is the printed image on building glass?",
        answer:
          "The printed images are highly durable and UV-resistant, ensuring long-lasting vibrancy and preventing fading.",
      },
      {
        question:
          "Can printed glass be used for both interior and exterior applications?",
        answer:
          "Yes, our printed glass solutions are suitable for both interior and exterior use, depending on the glass type selected.",
      },
    ],
  },
  fa: {
    hero: {
      title: "شیشه چاپی برای ساختمان‌ها: معماری خود را متحول کنید",
      description:
        "با راه حل‌های شیشه چاپی سفارشی ما، زیبایی و عملکرد ساختمان خود را ارتقا دهید. از نماهای خیره‌کننده تا طراحی داخلی، ما دیدگاه شما را زنده می‌کنیم.",
      videoUrl: "/assets/video/video.mp4",
    },
    content: {
      title: "شیشه چاپی نوآورانه برای طراحی معماری",
      description:
        "فناوری چاپ پیشرفته ما امکان اعمال تصاویر و طرح‌های با وضوح بالا را مستقیماً روی سطوح شیشه‌ای فراهم می‌کند و شیشه‌های معمولی را به ویژگی‌های معماری خارق‌العاده تبدیل می‌کند. با شیشه چاپی سفارشی ما، نماهای منحصربه‌فرد، طرح‌های داخلی چشم‌نواز و فضاهای برنددار ایجاد کنید.",
      metaKeywords:
        "شیشه چاپی، چاپ شیشه ساختمان، شیشه معماری، چاپ شیشه سفارشی، نماهای شیشه‌ای، طراحی داخلی شیشه، شیشه تزئینی",
      metaDescription:
        "ساختمان خود را با شیشه چاپی سفارشی متحول کنید. نماهای خیره‌کننده، فضاهای داخلی و فضاهای برنددار را با چاپ با وضوح بالا روی شیشه ایجاد کنید.",
    },
    features: {
      title: "ویژگی‌های استثنایی برای کاربردهای ساختمانی",
      list: [
        "چاپ تصویر با وضوح بالا برای تأثیر بصری خیره‌کننده",
        "جوهر بادوام و مقاوم در برابر UV برای ماندگاری طولانی",
        "طرح‌ها، رنگ‌ها و الگوهای قابل تنظیم",
        "مناسب برای انواع و ضخامت‌های مختلف شیشه (سکوریت، لمینت و غیره)",
        "قابلیت ترکیب با سایر فناوری‌های شیشه (به عنوان مثال، پوشش‌های کم گسیل)",
        "افزایش حریم خصوصی و کنترل نور",
        "بهبود زیبایی و برندسازی ساختمان",
        "مناسب برای کاربردهای داخلی و خارجی",
        "خدمات نصب حرفه‌ای در دسترس است",
        "مشاوره طراحی تخصصی",
      ],
    },
    applications: {
      title: "کاربردهای متنوع در ساختمان‌ها",
      list: [
        "نماهای ساختمان و دیوارهای پرده‌ای",
        "پارتیشن‌های داخلی و دیوارهای برجسته",
        "نورگیرها و سایبان‌ها",
        "نرده‌ها و حفاظ‌ها",
        "ویترین مغازه‌ها و نمایشگرهای خرده‌فروشی",
        "برندسازی و تابلوهای اداری",
        "طراحی هتل و مهمان‌نوازی",
        "نصب موزه‌ها و گالری‌ها",
        "طراحی داخلی مسکونی",
        "صفحه‌های حریم خصوصی و پانل‌های تزئینی",
      ],
    },
    specifications: {
      title: "مشخصات فنی",
      details: [
        {
          category: "فرآیند چاپ",
          items: [
            "فناوری: چاپ دیجیتال UV قابل درمان",
            "وضوح: تا ۱۴۴۰ dpi",
            "نوع جوهر: مقاوم در برابر UV، سازگار با محیط زیست",
            "طیف رنگی: CMYK + سفید",
          ],
        },
        {
          category: "انواع شیشه",
          items: [
            "ضخامت: ۴ میلی‌متر تا ۱۹ میلی‌متر (و فراتر از آن، بسته به پروژه)",
            "انواع: سکوریت، لمینت، آنیل شده، پوشش داده شده",
            "اندازه‌ها: اندازه‌های سفارشی در دسترس است",
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
          imageUrl: "/assets/images/tempered/temp1.webp",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
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
        videoUrl="/assets/video/products.mp4"
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
                <ul className="grid gap-2 md:gap-3 mb-4">
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
            <div className="w-full lg:-mt-64">
              <Image
                src="/assets/images/page1.webp"
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
