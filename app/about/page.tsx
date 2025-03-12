"use client";
import CollapseFaq from "@/components/global/collapse";
import HeroSection from "@/components/global/heroSection";
import { useLanguage } from "@/components/global/LanguageContext";
import Stats from "../../components/global/Stats";
import Process from "../../components/global/Process";
import Certificates from "../../components/global/Certificates";
import AbnousCompanyInfo from "@/components/global/AbnousCompanyInfo";
import { BlogSchema } from "@/components/schema/blogSchema";

const About = () => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";
  const blogData = {
    title: isEnglish
      ? "About Us | Abnoos Jam Glass Industries"
      : "درباره ما | صنایع شیشه آبنوس جام",
    url: "/about",
    images: ["/assets/images/founderImage.png"],
    sections: [
      {
        heading: isEnglish
          ? "Abnoos Jam Glass Industries"
          : "صنایع شیشه آبنوس جام",
        content: isEnglish
          ? "Leading manufacturer of safety glass, double glazing, and silk screen printing since 1998, utilizing advanced European technology and precision craftsmanship."
          : "تولید کننده پیشرو در زمینه شیشه‌های ایمنی، دوجداره و چاپ سیلک از سال ۱۳۷۷، با بهره‌گیری از تکنولوژی پیشرفته اروپایی و دقت بالا در تولید.",
      },
      {
        heading: isEnglish ? "Our Manufacturing Process" : "فرآیند تولید ما",
        content: isEnglish
          ? "We combine modern technology with expert craftsmanship, using the latest German and Italian machinery to deliver premium quality glass products."
          : "ما تکنولوژی مدرن را با مهارت‌های تخصصی ترکیب می‌کنیم و از جدیدترین ماشین‌آلات آلمانی و ایتالیایی برای تولید محصولات شیشه‌ای با کیفیت برتر استفاده می‌کنیم.",
      },
      {
        heading: isEnglish ? "Our Achievements" : "دستاوردهای ما",
        content: isEnglish
          ? "With over 25 years of experience, 100,000+ glass panels produced, and 200+ satisfied clients, we maintain a 99% customer satisfaction rate."
          : "با بیش از ۲۵ سال تجربه، تولید بیش از ۱۰۰,۰۰۰ پنل شیشه‌ای و خدمت به بیش از ۲۰۰ مشتری، نرخ رضایت مشتریان ما ۹۹٪ است.",
      },
    ],
  };

  const content = {
    en: {
      hero: {
        title: "Abnoos Jam Glass Industries",
        description:
          "Leading manufacturer of safety glass, double glazing, and silk screen printing since 1998, utilizing advanced European technology and precision craftsmanship.",
      },
      stats: {
        title: "Our Achievements in Numbers",
        stats: [
          { number: "25+", label: "Years of Experience" },
          { number: "100000+", label: "Glass Panels Produced" },
          { number: "200+", label: "Clients Served" },
          { number: "99%", label: "Customer Satisfaction" },
        ],
      },
      process: {
        title: "Our Manufacturing Process",
        steps: [
          {
            title: "Planning",
            description: "Strategic planning to ensure quality and efficiency.",
            paragraph:
              "Our process begins with a comprehensive consultation to understand the client's requirements, ensuring every detail is planned precisely.",
          },
          {
            title: "Material Selection",
            description: "Sourcing high-quality wood and materials.",
            paragraph:
              "We carefully select the best materials, including premium wood and MDF, ensuring durability and elegance in every product.",
          },
          {
            title: "Production",
            description:
              "Advanced manufacturing with German and Italian machinery.",
            paragraph:
              "Using cutting-edge technology, we manufacture with precision and attention to detail, combining modern machinery with skilled craftsmanship.",
          },
          {
            title: "Quality Control",
            description: "Rigorous testing to maintain the highest standards.",

            paragraph:
              "Every product undergoes strict quality control, ensuring flawless finishing and long-lasting durability before delivery.",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What types of glass do you manufacture?",
            answer:
              "We specialize in safety glass, tempered glass, laminated glass, double glazing, and decorative printed glass.",
          },
          {
            question: "What makes Abnoos Jam unique?",
            answer:
              "With over 25 years of experience, we combine modern technology with expert craftsmanship, using the latest German and Italian machinery.",
          },
          {
            question: "Do you provide custom glass solutions?",
            answer:
              "Yes, we offer fully customized glass solutions, working closely with clients to meet their specific needs.",
          },
          {
            question: "What quality standards do you follow?",
            answer:
              "Our glass products meet international standards, and we have received national certifications for quality assurance.",
          },
          {
            question: "Do you offer installation services?",
            answer:
              "Yes, our professional team provides expert installation services, ensuring precision and durability in every project.",
          },
        ],
      },
    },
    fa: {
      hero: {
        title: "صنایع شیشه آبنوس جام",
        description:
          "تولید کننده پیشرو در زمینه شیشه‌های ایمنی، دوجداره و چاپ سیلک از سال ۱۳۷۷، با بهره‌گیری از تکنولوژی پیشرفته اروپایی و دقت بالا در تولید.",
      },
      stats: {
        title: "دستاوردهای ما در اعداد",
        stats: [
          { number: "25+", label: "سال تجربه" },
          { number: "100000+", label: "پنل شیشه‌ای تولید شده" },
          { number: "200+", label: "مشتریانی که به ما اعتماد کرده‌اند" },
          { number: "%89", label: "رضایت مشتریان" },
        ],
      },
      process: {
        title: "فرآیند تولید ما",
        steps: [
          {
            title: "برنامه‌ریزی",
            description: "برنامه‌ریزی استراتژیک برای تضمین کیفیت و بهره‌وری.",

            paragraph:
              "فرآیند ما با یک مشاوره جامع برای درک نیازهای مشتری آغاز می‌شود تا هر جزئیات با دقت برنامه‌ریزی شود.",
          },
          {
            title: "انتخاب مواد اولیه",
            description: "تهیه چوب و مواد اولیه با کیفیت بالا.",

            paragraph:
              "ما بهترین مواد اولیه از جمله چوب با کیفیت و MDF را با دقت انتخاب می‌کنیم تا دوام و زیبایی هر محصول را تضمین کنیم.",
          },
          {
            title: "تولید",
            description:
              "تولید پیشرفته با استفاده از ماشین‌آلات آلمانی و ایتالیایی.",

            paragraph:
              "با استفاده از تکنولوژی پیشرفته، تولید ما با دقت و توجه به جزئیات انجام می‌شود که ترکیبی از ماشین‌آلات مدرن و هنر صنعتگری است.",
          },
          {
            title: "کنترل کیفیت",
            description: "آزمایش‌های دقیق برای حفظ بالاترین استانداردها.",
            paragraph:
              "هر محصول تحت کنترل کیفی دقیق قرار می‌گیرد تا از تکمیل بی‌نقص و دوام طولانی مدت قبل از تحویل اطمینان حاصل شود.",
          },
        ],
      },
      faq: {
        title: "سوالات متداول",
        items: [
          {
            question: "چه نوع شیشه‌هایی تولید می‌کنید؟",
            answer:
              "ما در تولید شیشه‌های ایمنی، سکوریت، لمینت، دوجداره و شیشه‌های تزئینی چاپی تخصص داریم.",
          },
          {
            question: "چه چیزی آبنوس جم را متمایز می‌کند؟",
            answer:
              "با بیش از ۲۵ سال تجربه، ما تکنولوژی مدرن را با مهارت‌های تخصصی ترکیب می‌کنیم و از جدیدترین ماشین‌آلات آلمانی و ایتالیایی استفاده می‌کنیم.",
          },
          {
            question: "آیا خدمات شیشه سفارشی ارائه می‌دهید؟",
            answer:
              "بله، ما راه‌حل‌های کاملاً سفارشی برای نیازهای خاص مشتریان ارائه می‌دهیم.",
          },
          {
            question: "استانداردهای کیفی شما چیست؟",
            answer:
              "محصولات ما مطابق با استانداردهای بین‌المللی هستند و تأییدیه‌های ملی کیفیت را دریافت کرده‌اند.",
          },
          {
            question: "آیا خدمات نصب هم ارائه می‌دهید؟",
            answer:
              "بله، تیم حرفه‌ای ما خدمات نصب تخصصی را ارائه می‌دهد تا دقت و دوام هر پروژه تضمین شود.",
          },
        ],
      },
    },
  };

  const currentContent = isEnglish ? content.en : content.fa;

  return (
    <>
      <BlogSchema blogData={blogData} />

      <main className={isEnglish ? "" : "font-sahel"}>
        <HeroSection
          title={currentContent.hero.title}
          description={currentContent.hero.description}
          videoUrl="/assets/video/video.mp4"
        />
        <AbnousCompanyInfo />
        <Stats {...currentContent.stats} />
        <Process
          title={currentContent.process.title}
          steps={currentContent.process.steps}
        />

        <Certificates />

        <CollapseFaq
          title={currentContent.faq.title}
          faqItems={currentContent.faq.items}
        />
      </main>
    </>
  );
};
export default About;
