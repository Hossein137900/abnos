"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      id: 1,
      heading: "Advanced Glass Manufacturing",
      subheading: "solutions for modern architecture",
      image: "/assets/images/about2.jpg",
      services: [
        {
          id: 1,
          title: "Automated Production",
          description:
            "State-of-the-art automated glass cutting and processing.",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "Quality Assurance",
          description: "Rigorous testing and quality control standards.",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "Technical Excellence",
          description: "Advanced tempering and lamination processes.",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "Innovation",
          description: "Smart glass and digital printing solutions.",
          icon: FaLightbulb,
        },
      ],
    },
    {
      id: 2,
      heading: "Smart Manufacturing",
      subheading: "for tomorrow's needs",
      image: "/assets/images/about.jpg",
      services: [
        {
          id: 1,
          title: "Digital Integration",
          description: "Computer-controlled precision manufacturing.",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "Quality Monitoring",
          description: "Real-time quality control systems.",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "Process Control",
          description: "Advanced production monitoring.",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "Research & Development",
          description: "Continuous innovation in glass technology.",
          icon: FaLightbulb,
        },
      ],
    },
  ],
  fa: [
    {
      id: 1,
      heading: "تولید پیشرفته شیشه",
      subheading: "راهکارهای معماری مدرن",
      image: "/assets/images/about2.jpg",
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
      id: 2,
      heading: "تولید هوشمند",
      subheading: "برای نیازهای فردا",
      image: "/assets/images/about.jpg",
      services: [
        {
          id: 1,
          title: "یکپارچگی دیجیتال",
          description: "تولید دقیق با کنترل کامپیوتری",
          icon: FaRobot,
        },
        {
          id: 2,
          title: "نظارت کیفیت",
          description: "سیستم‌های کنترل کیفیت بلادرنگ",
          icon: FaCheckCircle,
        },
        {
          id: 3,
          title: "کنترل فرآیند",
          description: "نظارت پیشرفته بر تولید",
          icon: FaCogs,
        },
        {
          id: 4,
          title: "تحقیق و توسعه",
          description: "نوآوری مستمر در تکنولوژی شیشه",
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
    <div
      className="bg-black text-white min-h-screen flex gap-4 py-4 items-center justify-center"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="lg:flex flex-row-reverse lg:items-center">
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
                alt="Team"
                width={2000}
                height={2000}
                className={` rounded-2xl ${isRTL ? "pl-2" : "pr-2"} `}
              />
            </motion.div>
          </AnimatePresence>
          <div
            className={`absolute bottom-4 ${
              isRTL ? "left-4 flex-row-reverse" : "right-4 flex"
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

          <p className="text-gray-400">
            Lets make something great work together.{" "}
            <Link href="#" className="text-blue-500 underline">
              Get Free Quote
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
