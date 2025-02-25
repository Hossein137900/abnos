"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaRobot,
  FaCheckCircle,
  FaCogs,
  FaLightbulb,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../global/LanguageContext";

const sliderData = {
  en: [
    {
      id: 4,
      heading: "Baharan Project",
      subheading: "North",
      image: "/assets/images/baharan.webp",
      services: [
        {
          id: 1,
          title: "Coastal Construction",
          description: "Built on the Caspian Sea coastal road with 6 floors.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Extensive Area",
          description: "Covers an area of 8,369 square meters.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 5,
      heading: "Meraj Project",
      subheading: "Qeshm",
      image: "/assets/images/meraj.webp",
      services: [
        {
          id: 1,
          title: "Large-Scale Development",
          description:
            "A massive commercial, recreational, and tourism complex.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Strategic Location",
          description: "Located near the only sea entrance of Qeshm Island.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 6,
      heading: "Villa Town Project",
      subheading: "Anzali",
      image: "/assets/images/anzali3.webp",
      services: [
        {
          id: 1,
          title: "Double-Glazed Windows",
          description:
            "Utilization of double-glazed glass with air balance valves.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Pressure Management",
          description:
            "Prevents fogging due to pressure differences between Karaj and Anzali.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 7,
      heading: "Hamrah Shahr Project",
      subheading: "Chitgar",
      image: "/assets/images/chitgar.webp",
      services: [
        {
          id: 1,
          title: "Ongoing Development",
          description: "A massive project under construction in Chitgar.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Advanced Glazing",
          description:
            "Production and delivery of double-glazed and laminated glass in 2018.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 8,
      heading: "Almas Shargh ",
      subheading: "Mashhad",
      image: "/assets/images/almass.webp",
      services: [
        {
          id: 1,
          title: "Accurate Installation",
          description:
            "Utilization of AutoCAD files to minimize errors in glass placement.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Modern Aesthetics",
          description:
            "Implementation of sleek and contemporary glass staircases.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 9,
      heading: "Mavi Hotel Project",
      subheading: "Mako",
      image: "/assets/images/mavi2.webp",
      services: [
        {
          id: 1,
          title: "Ongoing Development",
          description: "A massive project under construction in Chitgar.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Advanced Glazing",
          description:
            "Production and delivery of double-glazed and laminated glass in 2018.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 10,
      heading: "Mammoth Industrial Town",
      subheading: "qazvin",
      image: "/assets/images/mamoot.webp",
      services: [
        {
          id: 1,
          title: "Ongoing Development",
          description: "A massive project under construction in Chitgar.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Advanced Glazing",
          description:
            "Production and delivery of double-glazed and laminated glass in 2018.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 11,
      heading: "Tejarat Bank Project",
      subheading: "Project",
      image: "/assets/images/tejarat.webp",
      services: [
        {
          id: 1,
          title: "Comprehensive Glazing",
          description: "Installation of glass in floors, shops, and facades.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Modern Design",
          description:
            "One of the most modern and luxurious buildings in Tabriz.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 12,
      heading: "garden of paradise ",
      subheading: "Zaferaniye",
      image: "/assets/images/zaferanie.webp",
      services: [
        {
          id: 1,
          title: "Coastal Construction",
          description: "Built on the Caspian Sea coastal road with 6 floors.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Extensive Area",
          description: "Covers an area of 8,369 square meters.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 13,
      heading: "Commercial Complex ",
      subheading: "Tabriz ",
      image: "/assets/images/bloor.webp",
      services: [
        {
          id: 1,
          title: "Large-Scale Development",
          description:
            "A massive commercial, recreational, and tourism complex.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
      ],
    },
    {
      id: 14,
      heading: " residential complex ",
      subheading: "Karaj ",
      image: "/assets/images/karaj.webp",
      services: [
        {
          id: 1,
          title: "Comprehensive Glazing",
          description: "Installation of glass in floors, shops, and facades.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Modern Design",
          description:
            "One of the most modern and luxurious buildings in Karaj .",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 15,
      heading: " building of the dream ",
      subheading: "Karaj ",
      image: "/assets/images/roya.webp",
      services: [
        {
          id: 1,
          title: "Comprehensive Glazing",
          description: "Installation of glass in floors, shops, and facades.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Modern Design",
          description:
            "One of the most modern and luxurious buildings in Karaj .",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 16,
      heading: "complex project",
      subheading: "Tehran",
      image: "/assets/images/abayi.webp",
      services: [
        {
          id: 1,
          title: "Double-Glazed Windows",
          description:
            "Utilization of double-glazed glass with air balance valves.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Pressure Management",
          description: "Prevents fogging due to pressure differences Tehran.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 17,
      heading: "complex project",
      subheading: "Tehran",
      image: "/assets/images/servati.webp",
      services: [
        {
          id: 1,
          title: "Double-Glazed Windows",
          description:
            "Utilization of double-glazed glass with air balance valves.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Pressure Management",
          description: "Prevents fogging due to pressure differences Tehran.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 18,
      heading: "Bagh Behesht residential complex",
      subheading: "Tehran",
      image: "/assets/images/saadat.webp",
      services: [
        {
          id: 1,
          title: "Double-Glazed Windows",
          description:
            "Utilization of double-glazed glass with air balance valves.",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "Pressure Management",
          description: "Prevents fogging due to pressure differences Tehran.",
          icon: FaLightbulb,
        },
      ],
    },
  ],
  fa: [
    {
      id: 1,
      heading: "تولید شیشه های سکوریت برای ",
      subheading: "پروژه شهرک ویلایی-انزلی",
      image: "/assets/images/anzali3.webp",
      services: [
        {
          id: 1,
          title: "تولید اتوماتیک",
          description: "برش و فرآوری شیشه با تجهیزات پیشرفته",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "تعالی فنی",
          description: "فرآیندهای پیشرفته سکوریت و لمینت",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "نوآوری",
          description: "راهکارهای شیشه هوشمند و چاپ دیجیتال",
          icon: FaLightbulb,
        },
      ],
    },

    {
      id: 4,
      heading: "پروژه بهاران",
      subheading: "شمال",
      image: "/assets/images/baharan.webp",
      services: [
        {
          id: 1,
          title: "ساخت در منطقه ساحلی",
          description: "ساخته شده در جاده ساحلی دریای خزر با ۶ طبقه",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "مساحت گسترده",
          description: "این پروژه دارای ۸,۳۶۹ متر مربع مساحت است",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 5,
      heading: "پروژه معراج",
      subheading: "قشم",
      image: "/assets/images/meraj.webp",
      services: [
        {
          id: 1,
          title: "توسعه بزرگ مقیاس",
          description: "یک مجتمع تجاری، تفریحی و گردشگری عظیم",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "موقعیت استراتژیک",
          description: "در نزدیکی تنها ورودی دریایی جزیره قشم",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 7,
      heading: "پروژه همراه شهر",
      subheading: "چیتگر",
      image: "/assets/images/chitgar.webp",
      services: [
        {
          id: 1,
          title: "پروژه در حال توسعه",
          description: "یکی از پروژه‌های بزرگ در حال ساخت در چیتگر",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "شیشه‌های پیشرفته",
          description: "تولید و ارسال شیشه‌های دوجداره و لمینت در سال ۲۰۱۸",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 8,
      heading: "پروژه الماس شرق",
      subheading: " مشهد",
      image: "/assets/images/almass.webp",
      services: [
        {
          id: 1,
          title: "نصب دقیق",
          description: "استفاده از فایل‌های اتوکد برای کاهش خطا در نصب شیشه",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "زیبایی مدرن",
          description: "اجرای راه‌پله‌های شیشه‌ای مدرن و شیک",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 9,
      heading: "پروژه هتل ماوی",
      subheading: "منطقه آزاد ماکو",
      image: "/assets/images/mavi2.webp",
      services: [
        {
          id: 1,
          title: "نصب دقیق",
          description: "استفاده از فایل‌های اتوکد برای کاهش خطا در نصب شیشه",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "زیبایی مدرن",
          description: "اجرای راه‌پله‌های شیشه‌ای مدرن و شیک",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 10,
      heading: "شهرک صنعتی ماموت",
      subheading: "قزوین",
      image: "/assets/images/mamoot.webp",
      services: [
        {
          id: 1,
          title: "نصب دقیق",
          description: "استفاده از فایل‌های اتوکد برای کاهش خطا در نصب شیشه",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "زیبایی مدرن",
          description: "اجرای راه‌پله‌های شیشه‌ای مدرن و شیک",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 11,
      heading: "بانک تجارت",
      subheading: "پروژه",
      image: "/assets/images/tejarat.webp",
      services: [
        {
          id: 1,
          title: "تولید اتوماتیک",
          description: "برش و فرآوری شیشه با تجهیزات پیشرفته",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "تعالی فنی",
          description: "فرآیندهای پیشرفته سکوریت و لمینت",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "نوآوری",
          description: "راهکارهای شیشه هوشمند و چاپ دیجیتال",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 12,
      heading: "باغ بهشت",
      subheading: "زعفرانیه",
      image: "/assets/images/zaferanie.webp",
      services: [
        {
          id: 1,
          title: "نمای شیشه‌ای",
          description: "نصب شیشه در طبقات، مغازه‌ها و نما",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "طراحی مدرن",
          description: "یکی از مدرن‌ترین و لوکس‌ترین ساختمان‌های تبریز",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 13,
      heading: " مجتمع تجاری",
      subheading: "تبریز",
      image: "/assets/images/bloor.webp",
      services: [
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
        {
          id: 2,
          title: "مساحت گسترده",
          description: "این پروژه دارای ۸,۳۶۹ متر مربع مساحت است",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 14,
      heading: " مجتمع مسکونی",
      subheading: "کرج",
      image: "/assets/images/karaj.webp",
      services: [
        {
          id: 1,
          title: "تولید اتوماتیک",
          description: "برش و فرآوری شیشه با تجهیزات پیشرفته",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "تعالی فنی",
          description: "فرآیندهای پیشرفته سکوریت و لمینت",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "نوآوری",
          description: "راهکارهای شیشه هوشمند و چاپ دیجیتال",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 15,
      heading: " ساختمان رویای زندگی ",
      subheading: "کرج",
      image: "/assets/images/roya.webp",
      services: [
        {
          id: 1,
          title: "تولید اتوماتیک",
          description: "برش و فرآوری شیشه با تجهیزات پیشرفته",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "تعالی فنی",
          description: "فرآیندهای پیشرفته سکوریت و لمینت",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "نوآوری",
          description: "راهکارهای شیشه هوشمند و چاپ دیجیتال",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 16,
      heading: "پروژه مجتمع",
      subheading: "تهران",
      image: "/assets/images/abayi.webp",
      services: [
        {
          id: 1,
          title: "توسعه بزرگ مقیاس",
          description: "یک مجتمع تجاری، مسکونی ",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
      ],
    },
    {
      id: 17,
      heading: "پروژه مجتمع",
      subheading: "تهران",
      image: "/assets/images/servati.webp",
      services: [
        {
          id: 1,
          title: "توسعه بزرگ مقیاس",
          description: "یک مجتمع تجاری، مسکونی ",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
      ],
    },
    {
      id: 18,
      heading: "مجتمع مسکونی باغ بهشت",
      subheading: "تهران",
      image: "/assets/images/saadat.webp",
      services: [
        {
          id: 1,
          title: "توسعه بزرگ مقیاس",
          description: "یک مجتمع تجاری، مسکونی ",
          icon: FaCogs,
        },
        {
          id: 2,
          title: "تضمین کیفیت",
          description: "آزمایش دقیق و استانداردهای کنترل کیفیت",
          icon: FaCheckCircle,
        },
      ],
    },
  ],
};

export default function WhatWeDo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { state } = useLanguage();
  const data = sliderData[state.currentLang === "en" ? "en" : "fa"];
  const isRTL = state.currentLang === "fa";

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const navigate = (direction: number) => {
    setCurrentIndex((prev) => (prev + direction + data.length) % data.length);
  };
  return (
    <div className="bg-black min-h-screen w-full relative overflow-hidden">
      <div className="absolute top-[42%] md:top-1/2 -translate-y-1/2 z-50 w-full">
        <div className="container mx-auto px-4 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="bg-[#6FBDF5]/80 hover:bg-[#6FBDF5] p-2 md:p-4 rounded-full transition-colors"
          >
            <FaArrowLeft className="lg:w-6 lg:h-6 w-3 h-3" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="bg-[#6FBDF5]/80 hover:bg-[#6FBDF5] p-2 md:p-4 rounded-full transition-colors"
          >
            <FaArrowRight className="lg:w-6 lg:h-6 w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <div className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={data[currentIndex].image}
                    alt={data[currentIndex].heading}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className={`space-y-8 ${isRTL ? "rtl" : "ltr"}`}>
                  <div className="space-y-2" dir={`${isRTL ? "rtl" : "ltr"}`}>
                    <h2 className="text-5xl font-bold text-white">
                      {data[currentIndex].heading}
                    </h2>
                    <p className="text-2xl text-[#6FBDF5]">
                      {data[currentIndex].subheading}
                    </p>
                  </div>

                  <div className="grid gap-6" dir={`${isRTL ? "rtl" : "ltr"}`}>
                    {data[currentIndex].services.map((service, index) => (
                      <div
                        key={`${data[currentIndex].id}-${index}`}
                        className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800 transition-colors"
                      >
                        <service.icon className="text-[#6FBDF5] w-7 h-7 mb-3" />
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
