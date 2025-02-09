"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:mx-20 px-4 pb-28">
      {/* Header Section */}
      <div className="flex lg:flex-row flex-col gap-4 justify-between items-center py-12"  >
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
        >
         
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Image */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <div className="relative h-[400px] w-full">
            <Image
              src="/assets/images/image2.jpg"
              alt="FAQ Illustration"
              fill
              className="object-cover w-full rounded-lg"
              priority
            />
          </div>
        </motion.div>

        {/* Right FAQ Collapse */}
        <div className="md:w-2/3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleCollapse(index)}
                className="w-full flex justify-between group items-center text-black p-4 border border-[#6FBDF5] hover:bg-[#6FBDF5] rounded-lg transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
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
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="text-gray-600"
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
