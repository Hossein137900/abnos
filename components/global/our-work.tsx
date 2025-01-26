"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../global/LanguageContext";
import { s } from "framer-motion/client";

const works = {
  en: [
    {
      id: 1,
      title: "Tempered Building Glass",
      description:
        "Tempering is a heat treatment process applicable to various types of glass including colored, plain, reflective, printed, etc., in different thicknesses.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 2,
      title: "Double Glazed Glass",
      description:
        "Double glazing consists of two or more glass layers of different thicknesses or colors, parallel-connected by spacers. The space between glasses is filled with inert, moisture-free gases like argon.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 3,
      title: "Printed Glass",
      description:
        "Abnos Jam uses both silk screen and roller printing methods, depending on customer sensitivity and precision requirements.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 4,
      title: "Laminated Glass",
      description:
        "Laminated glass is a safety glass made by layering two or more flat glass sheets connected by PVB interlayer.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 5,
      title: "Window Film Glass",
      description:
        "Window film is a thin coating layer composed of multiple thinner layers with various properties.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 6,
      title: "Digital Kiln Printing",
      description:
        "This modern system produces natural quality images compatible with computer designs through digital printing.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
    {
      id: 7,
      title: "Smart Glass",
      description:
        "Advanced glass technology with digital integration for modern architectural solutions.",
      image: "/assets/images/about.jpg",
      category: "Glass",
    },
  ],
  fa: [
    {
      id: 1,
      title: "شیشه‌های ساختمانی سکوریت",
      description:
        "سکوریت کردن یک فرایند حرارتی است که برروی انواع شیشه‌ها ی رنگی، ساده، رفلکتیو، چاپ شده و... با ضخامت‌های گوناگون قابل اجرا می‌باشد.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 2,
      title: "شیشه‌های دوجداره",
      description:
        "دوجداره قطعه‌ای شامل دو یا چند لایه شیشه درضخامت‌ها یا رنگ‌های مختلف می‌باشد که به صورت موازی به وسیله اسپیسر به یکدیگر متصل شده‌اند. فاصله بین شیشه‌ها با گازهای بی‌اثر و بدون رطوبت مانند آرگون پر می‌شود.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 3,
      title: "شیشه‌های چاپی",
      description:
        "شرکت آبنوس جام از دو روش چاپ سیلک اسکرین و چاپ غلطکی، بسته به حساسیت و دقت کار مشتری استفاده می‌کند.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 4,
      title: "شیشه‌های لمینیت",
      description:
        "شیشه لمینت یکی از انواع شیشه‌های ایمنی می‌باشد که از روی هم قرار گرفتن دو یا چند لایه شیشه تخت که توسط لایه میانی PVB بهم متصل شده‌اند، تهیه می‌شود.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 5,
      title: "شیشه‌های ویندوفیلم‌دار",
      description:
        "برچسب شیشه یا ویندوفیلم لایه پوشش نازکی است که از چند لایه نازک‌تر با خواص مختلف تشکیل شده است.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 6,
      title: "چاپ دیجیتال کوره‌ای",
      description:
        "این سیستم نوین با چاپ دیجیتال، تصاویر را با کیفیتی طبیعی و قابل انطباق با کامپیوتر ارائه می‌دهد.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
    {
      id: 7,
      title: "شیشه‌های هوشمند",
      description:
        "فناوری پیشرفته شیشه با قابلیت‌های دیجیتال برای راهکارهای معماری مدرن.",
      image: "/assets/images/about.jpg",
      category: "شیشه",
    },
  ],
};

const filters = {
  en: [
    "All",
    "Tempered",
    "Double Glazed",
    "Printed",
    "Laminated",
    "Window Film",
    "Smart Glass",
  ],
  fa: ["همه", "سکوریت", "دوجداره", "چاپی", "لمینیت", "ویندوفیلم", "هوشمند"],
};

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentWorks = works[state.currentLang === "en" ? "en" : "fa"];
  const currentFilters = filters[state.currentLang === "en" ? "en" : "fa"];

  const filteredWorks = currentWorks.filter((work) => {
    if (activeFilter === "all" || activeFilter === "همه") return true;
    return work.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-16">
      {/* Header with dotted line */}
      <div
        className={` gap-4 mb-8 ${
          state.currentLang === "fa" ? "text-right" : "text-left"
        }`}
        dir={` ${state.currentLang === "fa" ? "rtl" : "ltr"}`}
      >
        <h2
          className={`text-3xl font-bold whitespace-nowrap ${
            state.currentLang === "fa" ? "text-right" : "text-left"
          } `}
          dir={` ${state.currentLang === "fa" ? "rtl" : "ltr"}`}
        >
          {isRTL ? "محصولات ما" : "Our Products"}
        </h2>
        <p
          className="text-gray-600 whitespace-nowrap"
          dir={`${state.currentLang === "fa" ? "rtl" : "ltr"}`}
        >
          {isRTL
            ? "تولید کننده انواع شیشه‌های صنعتی و ساختمانی"
            : "Manufacturer of industrial and building glass"}
        </p>
      </div>

      {/* Minimal Filter Bar */}
      <div
        className={`flex flex-wrap lg:flex-row justify-center gap-8 mb-12 `}
        dir={`${state.currentLang === "fa" ? "rtl" : "ltr"}`}
      >
        {currentFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter.toLowerCase())}
            className={`text-sm font-medium transition-all border-b-2 pb-1 ${
              activeFilter === filter.toLowerCase()
                ? "border-[#6FBDF5] text-[#6FBDF5]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredWorks.map((work) => (
          <div key={work.id} className="group">
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3
              className={`text-lg font-medium text-center ${
                isRTL ? "rtl" : ""
              }`}
            >
              {work.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
