"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "../global/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

const content = {
  en: {
    title: "Excellence in Glass Manufacturing Since 1990",
    description:
      "With over three decades of expertise, Abnos Jam leads the glass industry through innovation and precision. Our state-of-the-art facilities and skilled craftsmen deliver premium glass solutions that meet international standards.",
    cta: "Discover More",
  },
  fa: {
    title: "برتری در صنعت شیشه از سال ۱۳۶۹",
    description:
      "آبنوس جام با بیش از سه دهه تجربه درخشان، پیشتاز صنعت شیشه در نوآوری و دقت است. کارخانه مجهز به فناوری‌های پیشرفته و متخصصان ماهر ما، محصولات شیشه‌ای با کیفیت برتر و مطابق با استانداردهای جهانی تولید می‌کنند.",
    cta: "بیشتر بدانید",
  },
};

const BannerText = ({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) => {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentContent = content[state.currentLang === "en" ? "en" : "fa"];

  return (
    <div className="relative w-full h-[650px] overflow-hidden  ">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full "
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent ">
        <div
          className={`container mx-auto h-full `}
          dir={`${isRTL ? "rtl" : "ltr"}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center h-full max-w-3xl px-8 space-y-8"
          >
            <div className="w-20 h-1 bg-[#6FBDF5]" />
            <h2
              className={`text-5xl font-bold text-white leading-tight ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {currentContent.title}
            </h2>
            <p
              className={`text-xl text-gray-200 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {currentContent.description}
            </p>
            <Link href="/about" className="w-fit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 bg-[#6FBDF5] text-white px-8 py-4 rounded-full w-fit hover:bg-blue-600 transition-colors duration-300 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <span>{currentContent.cta}</span>
                <svg
                  className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default BannerText;
