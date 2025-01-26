"use client";
import { useLanguage } from "../global/LanguageContext";
import {
  MdPrecisionManufacturing,
  MdSmartToy,
  MdDesignServices,
  MdBuildCircle,
  MdPeople,
  MdSpeed,
} from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const features = {
  en: [
    {
      icon: MdPrecisionManufacturing,
      title: "Standard Certificate Holder",
      description:
        "First holder of national standard certification in building glass production and ISO9001, ISO14001, OHSAS 18001, IMS Management systems certificates",
    },
    {
      icon: MdSmartToy,
      title: "Modern European Equipment",
      description:
        "Using modern and up-to-date glass industry equipment, manufactured in Germany, UK, Finland and Austria",
    },
    {
      icon: MdDesignServices,
      title: "Premium Raw Materials",
      description:
        "Using first-grade glass and other consumables including double-glazing materials, stone, drill bits, paint etc. is a priority for this factory",
    },
    {
      icon: MdPeople,
      title: "Human Resources",
      description:
        "Having experienced staff in production and sales that facilitates order receipt and preparation",
    },
    {
      icon: MdBuildCircle,
      title: "Production Leader",
      description:
        "Product variety and quality due to long history and sufficient production experience",
    },
    {
      icon: MdSpeed,
      title: "Quick Delivery",
      description:
        "Ability to produce glass in minimum possible time (three hours)",
    },
  ],
  fa: [
    {
      icon: MdPrecisionManufacturing,
      title: "دارنده نشان استاندارد",
      description:
        "اولین دارنده نشان استاندارد ملی در زمینه تولید شیشه های ساختمانی",
    },
    {
      icon: MdSmartToy,
      title: "دستگاه‌های به روز اروپایی",
      description:
        "استفاده از دستگاه‌های مدرن صنعت شیشه، ساخت کشورهای آلمان، انگلیس",
    },
    {
      icon: MdDesignServices,
      title: "مواد اولیه درجه یک",
      description: "استفاده از شیشه‌های درجه یک و سایر مواد مصرفی",
    },
    {
      icon: MdPeople,
      title: "منابع انسانی",
      description: "دارای کادری مجرب در زمینه تولید فروش و تولید",
    },
    {
      icon: MdBuildCircle,
      title: "پیشرو در تولید",
      description:
        "تنوع و کیفیت محصولات بواسطه قدمت طولانی و تجربه کافی در زمینه تولید",
    },
    {
      icon: MdSpeed,
      title: "تحویل در کوتاه‌ترین زمان",
      description: "امکان تولید شیشه‌ها با حداقل زمان ممکن (سه ساعته)",
    },
  ],
};

export default function FeaturesSection() {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentFeatures = features[state.currentLang === "en" ? "en" : "fa"];

  return (
    <div className="py-16 bg-white/20 backdrop-blur-md shadow-2xl rounded-3xl lg:-mt-36 z-[9999]  lg:mx-auto max-w-7xl">
      <div className=" lg:mx-auto lg:max-w-8xl px-6">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isRTL ? "rtl" : "ltr"
          }`}
        >
          {currentFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group  hover:bg-[#6FBDF5]/10 rounded-xl transition-all duration-500 p-16 relative min-h-[220px] overflow-hidden cursor-pointer"
            >
              {/* Icon and Title - Always Visible */}
              <div
                className={`flex flex-col ${
                  isRTL ? "items-end" : "items-start"
                } space-y-4`}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6FBDF5]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <feature.icon className="h-12 w-12 text-[#6FBDF5] relative z-0" />
                </div>

                <h3
                  className={`text-xl font-bold text-gray-800 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {feature.title}
                </h3>
                <button className="group flex items-center gap-2 px-4 py-2 text-blue-500 hover:text-white bg-transparent hover:bg-blue-500  rounded-lg transition-all duration-300 ease-in-out">
                  {isRTL ? "مشاهده بیشتر" : "View More"}
                  <BsArrowRight
                    className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 ${
                      isRTL ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Description - Hidden by Default, Shown on Hover */}
              <div
                className={`absolute inset-x-0 bottom-0 h-full bg-[#6FBDF5]
    opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out
    translate-y-full group-hover:translate-y-0 p-6
    ${isRTL ? "text-right" : "text-left"}`}
              >
                <p className="text-gray-50 leading-relaxed h-full flex items-center justify-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
