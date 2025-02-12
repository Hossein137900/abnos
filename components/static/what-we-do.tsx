"use client";
import { useState } from "react";
import Image from "next/image";
import { IconType } from "react-icons";
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
      id: 3,
      heading: "Shahr Tower Project",
      subheading: "Tabriz",
      image: "/assets/images/tabriz.webp",
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
      image: "/assets/images/almas.webp",
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
  ],
  fa: [
    {
      id: 1,
      heading: "تولید شیشه های سکوریت برای ",
      subheading: "پروژه شهرک ویلایی-انزلی",
      image: "/assets/images/anzali1.webp",
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
      id: 3,
      heading: "پروژه برج شهر",
      subheading: "تبریز",
      image: "/assets/images/tabriz.webp",
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
      image: "/assets/images/almas.webp",
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
  ],
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: IconType;
}) => (
  <div className="bg-gray-800 p-6 rounded-2xl">
    <div className="text-[#6FBDF5] mb-4">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default function WhatWeDo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentData =
    sliderData[state.currentLang === "en" ? "en" : "fa"][currentSlide];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev + 1) % sliderData[state.currentLang === "en" ? "en" : "fa"].length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev -
          1 +
          sliderData[state.currentLang === "en" ? "en" : "fa"].length) %
        sliderData[state.currentLang === "en" ? "en" : "fa"].length
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex gap-4 py-4 items-center justify-center">
      <div
        className={`lg:flex ${
          isRTL ? "flex-row" : "flex-row-reverse"
        }  lg:items-center`}
      >
        <div className="lg:w-1/2 mb-8 lg:mt-0 flex justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={currentData.image}
                alt="project image"
                width={2000}
                height={1000}
                quality={100}
                className={` max-h-[800px] rounded-2xl ${
                  isRTL ? "pl-2" : "pr-2"
                } `}
              />
            </motion.div>
          </AnimatePresence>
          <div
            className={`absolute bottom-4 ${
              isRTL ? "left-4 flex-row" : "right-4 flex"
            }  flex  gap-2`}
          >
            <button
              onClick={prevSlide}
              className="bg-[#6FBDF5] p-2 rounded-full hover:bg-[#5a9dd3] transition-colors"
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#6FBDF5] p-2 rounded-full hover:bg-[#5a9dd3] transition-colors"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-6 px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                {currentData.heading} <br />
                <span className="text-[#6FBDF5]">{currentData.subheading}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {currentData.services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: service.id * 0.1 }}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
