"use client";
import Image from "next/image";
import { useLanguage } from "../global/LanguageContext";

const content = {
  en: {
    sectionTitle: "Our Story",
    mainTitle: "Transforming industries",
    subTitle: "with innovative efficient solutions",
    description: "Welcome to Abnos Jam Glass Factory, a pioneering force in the glass industry. We take pride in delivering comprehensive technical and engineering services in glass manufacturing. Our commitment lies in understanding and meeting customer requirements while exceeding their expectations. Through the dedicated efforts of our hardworking team and management, we've achieved industry standard certifications from the Iranian Institute of Standards and Industrial Research. We continue to innovate and excel, guided by our core values of quality, innovation, and customer satisfaction.",
    stats: {
      projects: {
        number: "10k+",
        label: "Completed Projects"
      },
      customers: {
        number: "15+",
        label: "Satisfied Customers"
      },
      experience: {
        number: "10k+",
        label: "Years of Mastery"
      }
    },
    cta: "Watch Intro"
  },
  fa: {
    sectionTitle: "داستان ما",
    mainTitle: "متحول کننده صنایع",
    subTitle: "با راهکارهای نوآورانه و کارآمد",
    description: "به کارخانه شیشه آبنوس جام خوش آمدید، پیشگام در صنعت شیشه. ما با افتخار، خدمات جامع فنی و مهندسی در زمینه تولید شیشه ارائه می‌دهیم. تعهد ما درک و برآورده‌سازی نیازهای مشتریان و فراتر رفتن از انتظارات آنهاست. با تلاش‌های مستمر تیم متخصص و مدیریت کارآمد، موفق به کسب گواهینامه‌های استاندارد از سازمان ملی استاندارد ایران شده‌ایم. ما همواره با تکیه بر ارزش‌های اصلی خود یعنی کیفیت، نوآوری و رضایت مشتری، به مسیر پیشرفت و تعالی ادامه می‌دهیم.",
    stats: {
      projects: {
        number: "+۱۰ هزار",
        label: "پروژه تکمیل شده"
      },
      customers: {
        number: "+۱۵",
        label: "مشتری راضی"
      },
      experience: {
        number: "+۱۰ هزار",
        label: "سال تجربه"
      }
    },
    cta: "مشاهده ویدیو"
  }
};

export default function OurStory() {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentContent = content[state.currentLang === "en" ? "en" : "fa"];

  return (
    <div className={`min-h-screen bg-white flex flex-col items-center justify-center py-10 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl w-full px-6 lg:px-16 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`space-y-4 text-center lg:text-${isRTL ? 'right' : 'left'}`}>
            <p className={`text-[#6FBDF5] font-semibold text-sm uppercase tracking-wide ${state.currentLang === 'fa' ? 'text-center' : 'text-base'}`}>
              {currentContent.sectionTitle}
            </p>
            <h1 className={`text-3xl lg:text-5xl mb-4 font-light text-gray-900 ${state.currentLang === 'fa' ? 'text-center ' : 'text-base'}`}>
              {currentContent.mainTitle}
             
            </h1>
            <br />
            <span className="text-gray-700 pt-4 text-3xl lg:text-5xl font-bold">
                {currentContent.subTitle}
              </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/assets/images/bannerText.jpg"}
              alt="Factory Workers"
              width={400}
              height={300}
              className="rounded-2xl h-full w-full object-cover"
            />
            <Image
              src={"/assets/images/herosection.jpg"}
              alt="Machinery"
              width={400}
              height={400}
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="">
            <Image
              src={"/assets/images/about.jpg"}
              alt="Workers"
              width={2000}
              height={2000}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <p className={`text-gray-600 lg:text-${isRTL ? 'right' : 'left'} text-center ml-auto`}>
              {currentContent.description}
            </p>
            
            <div className="flex items-center justify-center">
              {/* <Image
                src="/assets/images/logo.png"
                alt="Abnos Jam Logo"
                width={100}
                height={100}
                className="rounded-full mx-2"
              /> */}
              <button className="flex items-center space-x-2 bg-[#6FBDF5] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                <span>{currentContent.cta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
