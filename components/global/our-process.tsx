"use client";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const processContent = {
  en: {
    title: "Our Manufacturing Process",
    description:
      "We follow a systematic approach to deliver premium quality glass products through advanced technology and expert craftsmanship",
    timelineItems: [
      {
        title: "Quality Inspection",
        description:
          "Initial material inspection and quality control of raw glass",
        number: "01",
      },
      {
        title: "Precision Cutting",
        description: "Computer-controlled cutting with advanced machinery",
        number: "02",
      },
      {
        title: "Heat Treatment",
        description: "Specialized tempering process for enhanced strength",
        number: "03",
      },
      {
        title: "Quality Assurance",
        description: "Final inspection and certification process",
        number: "04",
      },
    ],
  },
  fa: {
    title: "فرآیند تولید",
    description:
      "رویکرد نظام‌مند ما در تولید محصولات شیشه‌ای با کیفیت برتر از طریق تکنولوژی پیشرفته و مهارت متخصصان",
    timelineItems: [
      {
        title: "بازرسی کیفیت",
        description: "بازرسی اولیه مواد و کنترل کیفیت شیشه خام",
        number: "۰۱",
      },
      {
        title: "برش دقیق",
        description: "برش کنترل شده با دستگاه‌های پیشرفته کامپیوتری",
        number: "۰۲",
      },
      {
        title: "عملیات حرارتی",
        description: "فرآیند تخصصی سکوریت برای استحکام بیشتر",
        number: "۰۳",
      },
      {
        title: "تضمین کیفیت",
        description: "بازرسی نهایی و فرآیند صدور گواهی",
        number: "۰۴",
      },
    ],
  },
};

const OurProcess = () => {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const content = processContent[state.currentLang === "en" ? "en" : "fa"];

  return (
    <div className={`w-full px-4 sm:px-6 py-8 ${isRTL ? "rtl" : "ltr"}`}>
      <div
        className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-16 mx-4 sm:mx-8 lg:mx-36"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 lg:mb-0">
          {content.title}
        </h2>
        <p
          className={`text-base sm:text-lg text-gray-600 max-w-xl text-center  ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {content.description}
        </p>
      </div>

      <div
        className="flex flex-col lg:flex-row gap-8 items-center mx-4 sm:mx-8 lg:mx-36"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="w-full lg:w-1/2">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/about2.jpg"
              alt="Manufacturing Process"
              width={2000}
              height={2000}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="space-y-8 sm:space-y-12 relative before:absolute before:left-4 before:top-0 before:h-full">
            {content.timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative sm:pl-12 ${
                  isRTL ? "sm:pr-12 sm:pl-0" : ""
                }`}
              >
                <div className="rounded-2xl sm:rounded-[3rem] group hover:bg-[#6FBDF5] p-4 sm:p-6 lg:p-4 transition-all hover:shadow-xl relative flex items-center">
                  <span
                    className={`absolute ${
                      isRTL ? "-right-2" : "-left-2"
                    } flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full text-[#6FBDF5] text-2xl sm:text-3xl font-bold group-hover:text-[#ffffff]`}
                  >
                    {item.number}
                  </span>
                  <div
                    className={`${
                      isRTL ? "mr-16 sm:mr-20" : "ml-16 sm:ml-20"
                    } flex-1`}
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
