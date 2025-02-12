"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

interface FaqItem {
  question: string;
  answer: string;
}

interface CollapseFaqProps {
  title: string;
  faqItems: FaqItem[];
}

const CollapseFaq = ({ title, faqItems }: CollapseFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="lg:mx-20 min-h-svh px-4"
      dir={isEnglish ? "ltr" : "rtl"}
    >
      {/* Header Section */}
      <div className="flex lg:flex-row flex-col gap-4 justify-between items-center py-12">
        <div>
          <Image
            src="/assets/images/icontop.png"
            className="inline w-4 h-4"
            alt="FAQ Icon"
            width={50}
            height={50}
          />
          <span className="text-[#6FBDF5] mx-2 font-semibold text-xs">
            FAQS
          </span>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-center lg:text-left text-gray-900"
          >
            {title}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        ></motion.div>
      </div>

      {/* Content Section */}
      {/* Note: On mobile, we use items-start so the image remains at the top */}
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
        {/* Left Image */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative  w-full">
            <Image
              src={
                isEnglish
                  ? "/assets/images/enfaq.jpg"
                  : "/assets/images/perfaq.jpg"
              }
              alt="FAQ Illustration"
              width={1000}
              height={1000}
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </motion.div>

        {/* Right FAQ Collapse */}
        {/* The container here has a fixed max-width on mobile */}
        <div className="md:w-2/3 w-full max-w-md mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 w-full"
            >
              <motion.button
                onClick={() => toggleCollapse(index)}
                className="w-full flex justify-between group items-center text-black p-4 border border-[#6FBDF5] hover:bg-[#6FBDF5] rounded-lg transition-colors"
              >
                <span className="font-medium text-left group-hover:text-white">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="group-hover:text-white"
                >
                  ↓
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden w-full max-w-[100%]"
                  >
                    <div className="p-4 bg-white border border-gray-200 rounded-b-lg w-full">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="text-gray-600 break-words w-full"
                      >
                        {item.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseFaq;
