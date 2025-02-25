"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "../global/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
const works = {
  en: [
    {
      id: 1,
      title: "Tempered Glass",
      description: "Premium heat-treated safety glass for maximum durability",
      images: [
        {
          src: "/assets/images/tempered/temp1.webp",
          caption: "Heat-strengthened safety glass",
        },
        {
          src: "/assets/images/tempered/temp2.webp",
          caption: "Impact-resistant architectural glass",
        },
        {
          src: "/assets/images/tempered/temp3.webp",
          caption: "Thermal shock resistant glass",
        },
      ],
      category: "Tempered",
      features: [
        "4x Stronger than regular glass",
        "Safe fragmentation",
        "Thermal resistance",
      ],
    },
    {
      id: 2,
      title: "Double Glazed Glass",
      description: "Superior insulation with dual-pane technology",
      images: [
        {
          src: "/assets/images/double-glazed-glass/glaze1.webp",
          caption: "Energy efficient double glazing",
        },
        {
          src: "/assets/images/double-glazed-glass/glaze2.webp",
          caption: "Sound-proof window systems",
        },
        {
          src: "/assets/images/double-glazed-glass/glaze3.webp",
          caption: "Thermal insulation units",
        },
      ],
      category: "Double Glazed",
      features: ["Energy saving", "Sound insulation", "UV protection"],
    },
    {
      id: 3,
      title: "Printed Glass",
      description: "Custom designed architectural glass solutions",
      images: [
        {
          src: "/assets/images/printed-glasses/print1.webp",
          caption: "Digital printed facades",
        },
        {
          src: "/assets/images/printed-glasses/print2.webp",
          caption: "Ceramic frit patterns",
        },
        {
          src: "/assets/images/printed-glasses/print3.webp",
          caption: "Custom design prints",
        },
      ],
      category: "Printed",
      features: ["Custom designs", "Durable prints", "UV resistant"],
    },
    {
      id: 4,
      title: "Laminated Glass",
      description: "Multi-layer safety glass with PVB interlayer",
      images: [
        {
          src: "/assets/images/laminated-glasses/lamin1.webp",
          caption: "Security laminated glass",
        },
        {
          src: "/assets/images/laminated-glasses/lamin2.webp",
          caption: "Acoustic laminated units",
        },
      ],
      category: "Laminated",
      features: ["Enhanced security", "Sound reduction", "UV blocking"],
    },
    {
      id: 5,
      title: "Window Film Glass",
      description: "Advanced film coating for enhanced performance",
      images: [
        {
          src: "/assets/images/windowFilm-glasses/window1.webp",
          caption: "Solar control film",
        },
        {
          src: "/assets/images/windowFilm-glasses/window2.webp",
          caption: "Privacy window film",
        },
        {
          src: "/assets/images/windowFilm-glasses/window4.webp",
          caption: "Security film application",
        },
      ],
      category: "Window Film",
      features: ["Solar control", "Privacy enhancement", "Security upgrade"],
    },
    {
      id: 6,
      title: "Digital Kiln Printing",
      description:
        "Advanced digital printing technology for architectural glass",
      images: [
        {
          src: "/assets/images/digital-printin-on-glasses/dig1.webp",
          caption: "High-resolution facade printing",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig2.webp",
          caption: "Custom artistic glass prints",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig3.webp",
          caption: "Commercial signage solutions",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig4.webp",
          caption: "Decorative interior panels",
        },
      ],
      category: "Digital Print",
      features: [
        "High resolution",
        "Permanent ceramic inks",
        "Custom designs",
        "Weather resistant",
      ],
    },
  ],
  fa: [
    {
      id: 1,
      title: "شیشه سکوریت",
      description: "شیشه ایمنی با عملیات حرارتی برای حداکثر دوام",
      images: [
        {
          src: "/assets/images/tempered/temp1.webp",
          caption: "شیشه ایمنی مقاوم شده حرارتی",
        },
        {
          src: "/assets/images/tempered/temp2.webp",
          caption: "شیشه معماری مقاوم در برابر ضربه",
        },
        {
          src: "/assets/images/tempered/temp3.webp",
          caption: "شیشه مقاوم در برابر شوک حرارتی",
        },
      ],
      category: "سکوریت",
      features: [
        "۴ برابر مقاوم‌تر از شیشه معمولی",
        "خرد شدن ایمن",
        "مقاومت حرارتی",
      ],
    },
    {
      id: 2,
      title: "شیشه دوجداره",
      description: "عایق برتر با فناوری دو لایه",
      images: [
        {
          src: "/assets/images/double-glazed-glass/glaze1.webp",
          caption: "شیشه دوجداره با کارایی انرژی",
        },
        {
          src: "/assets/images/double-glazed-glass/glaze2.webp",
          caption: "سیستم پنجره ضد صدا",
        },
        {
          src: "/assets/images/double-glazed-glass/glaze3.webp",
          caption: "واحدهای عایق حرارتی",
        },
      ],
      category: "دوجداره",
      features: ["صرفه‌جویی در انرژی", "عایق صوتی", "محافظت در برابر اشعه UV"],
    },
    {
      id: 3,
      title: "شیشه چاپی",
      description: "راه‌حل‌های شیشه معماری با طراحی سفارشی",
      images: [
        {
          src: "/assets/images/printed-glasses/print1.webp",
          caption: "نمای چاپ دیجیتال",
        },
        {
          src: "/assets/images/printed-glasses/print2.webp",
          caption: "الگوهای سرامیکی",
        },
        {
          src: "/assets/images/printed-glasses/print3.webp",
          caption: "چاپ طرح‌های سفارشی",
        },
      ],
      category: "چاپی",
      features: ["طرح‌های سفارشی", "چاپ با دوام", "مقاوم در برابر UV"],
    },
    {
      id: 4,
      title: "شیشه لمینت",
      description: "شیشه ایمنی چند لایه با لایه میانی PVB",
      images: [
        {
          src: "/assets/images/laminated-glasses/lamin1.webp",
          caption: "شیشه لمینت امنیتی",
        },
        {
          src: "/assets/images/laminated-glasses/lamin2.webp",
          caption: "واحدهای لمینت آکوستیک",
        },
      ],
      category: "لمینیت",
      features: ["امنیت بالا", "کاهش صدا", "مسدود کردن UV"],
    },
    {
      id: 5,
      title: "شیشه ویندوفیلم",
      description: "پوشش فیلم پیشرفته برای عملکرد بهتر",
      images: [
        {
          src: "/assets/images/windowFilm-glasses/window1.webp",
          caption: "فیلم کنترل خورشید",
        },
        {
          src: "/assets/images/windowFilm-glasses/window2.webp",
          caption: "فیلم محافظ حریم خصوصی",
        },
        {
          src: "/assets/images/windowFilm-glasses/window4.webp",
          caption: "کاربرد فیلم امنیتی",
        },
      ],
      category: "ویندوفیلم",
      features: ["کنترل نور خورشید", "حفظ حریم خصوصی", "ارتقاء امنیت"],
    },
    {
      id: 6,
      title: "چاپ دیجیتال کوره‌ای",
      description: "فناوری پیشرفته چاپ دیجیتال برای شیشه‌های معماری",
      images: [
        {
          src: "/assets/images/digital-printin-on-glasses/dig1.webp",
          caption: "چاپ نمای ساختمان با کیفیت بالا",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig2.webp",
          caption: "چاپ هنری سفارشی روی شیشه",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig3.webp",
          caption: "راهکارهای تابلوهای تجاری",
        },
        {
          src: "/assets/images/digital-printin-on-glasses/dig4.webp",
          caption: "پنل‌های تزئینی داخلی",
        },
      ],
      category: "چاپ دیجیتال",
      features: [
        "وضوح بالا",
        "جوهر سرامیکی ماندگار",
        "طرح‌های سفارشی",
        "مقاوم در برابر شرایط جوی",
      ],
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
    "Digital Print",
  ],
  fa: [
    "همه",
    "سکوریت",
    "دوجداره",
    "چاپی",
    "لمینیت",
    "ویندوفیلم",
    "چاپ دیجیتال",
  ],
};

// Keep existing works and filters objects

const OurWork = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    caption: string;
  } | null>(null);
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";
  const currentWorks = works[state.currentLang === "en" ? "en" : "fa"];
  const currentFilters = filters[state.currentLang === "en" ? "en" : "fa"];

  const filteredWorks = currentWorks.filter((work) => {
    if (activeFilter === "all" || activeFilter === "همه") return true;
    return work.category.toLowerCase() === activeFilter.toLowerCase();
  });

 

  const handleNext = () => {
    const currentWork = filteredWorks.find((work) =>
      work.images.some((img) => img.src === selectedImage?.src)
    );
    if (!currentWork) return;

    const currentIndex = currentWork.images.findIndex(
      (img) => img.src === selectedImage?.src
    );
    const nextIndex = (currentIndex + 1) % currentWork.images.length;
    setSelectedImage(currentWork.images[nextIndex]);
  };

  const handlePrev = () => {
    const currentWork = filteredWorks.find((work) =>
      work.images.some((img) => img.src === selectedImage?.src)
    );
    if (!currentWork) return;

    const currentIndex = currentWork.images.findIndex(
      (img) => img.src === selectedImage?.src
    );
    const prevIndex =
      currentIndex === 0 ? currentWork.images.length - 1 : currentIndex - 1;
    setSelectedImage(currentWork.images[prevIndex]);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") setSelectedImage(null);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={() => setSelectedImage(null)}
      >
        <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative group">
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain rounded-lg"
                priority
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4"
              >
                <p className="text-white text-center">
                  {selectedImage.caption}
                </p>
              </motion.div>
            </div>

            <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-all"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full mx-auto px-4 py-16 bg-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">
          {isRTL ? "محصولات آبنوس" : "Our Products"}
        </h2>
        <div className="w-24 h-1 bg-[#6FBDF5] mx-auto mb-4"></div>
        <p className="text-gray-600">
          {isRTL
            ? "تولید کننده انواع شیشه‌های صنعتی و ساختمانی"
            : "Manufacturer of industrial and building glass"}
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          dir={`${isRTL ? "rtl" : "ltr"}`}
        >
          {currentFilters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.toLowerCase())}
              className={`md:px-6 md:py-3 px-3 py-1.5 rounded-full transition-all ${
                activeFilter === filter.toLowerCase()
                  ? "bg-[#6FBDF5] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className={`${
          activeFilter === "all" || activeFilter === "همه"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex overflow-x-auto justify-center snap-x snap-mandatory gap-6 pb-8 hide-scrollbar"
        }`}
      >
        {filteredWorks.map((work) => (
          <motion.div
            key={work.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${
              activeFilter === "all" || activeFilter === "همه"
                ? ""
                : "flex-none w-[85vw] md:w-[600px] snap-center"
            }`}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div
                className={`${
                  activeFilter === "all" || activeFilter === "همه"
                    ? ""
                    : "flex gap-4 p-4"
                }`}
              >
                {work.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer ${
                      activeFilter === "all" || activeFilter === "همه"
                        ? "h-64"
                        : "h-80 flex-1"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 
                      ${isRTL ? "items-end justify-end" : ""} flex items-end`}
                    >
                      <div className="p-4 text-white">
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-6 ${isRTL ? "text-right" : ""}`}>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <div className={`flex flex-row gap-2 ${isRTL ? "justify-end" : "justify-start"}`}>
                  {work.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-nowrap bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>{selectedImage && <ImageModal />}</AnimatePresence>
    </div>
  );
};

export default OurWork;
