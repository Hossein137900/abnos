'use client'
import Image from "next/image";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useLanguage } from "./LanguageContext";

const ClientTestimonial = () => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";

  const content = {
    en: {
      clientSay: "Our Client Say",
      title: "What our satisfied clients are saying",
      testimonial: "The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!",
      clientName: "Brooklyn Simmons",
      clientRole: "Homeowner"
    },
    fa: {
      clientSay: "مشتریان ما می‌گویند",
      title: "آنچه مشتریان راضی ما می‌گویند",
      testimonial: "توجه تیم به جزئیات و تعهد به کیفیت، انتظارات ما را فراتر گذاشت. آنها به موقع تحویل دادند و راه‌حل‌های نوآورانه آنها کارایی تولید ما را 30 درصد بهبود بخشیدند. بسیار توصیه می‌شود!",
      clientName: "بروکلین سیمونز",
      clientRole: "صاحب خانه"
    }
  };

  const currentContent = isEnglish ? content.en : content.fa;

  return (
    <div className="py-12 px-6 md:px-16" dir={isEnglish ? 'ltr' : 'rtl'}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/assets/images/clientSay.jpeg"
            alt={isEnglish ? "Engineer with robotic arm" : "مهندس با بازوی رباتیک"}
            className="rounded-2xl shadow-lg object-cover w-full"
            width={2000}
            height={2000}
          />
        </div>

        {/* Testimonial Section */}
        <div className={isEnglish ? 'text-left' : 'text-right'}>
          <p className="text-[#6FBDF5] uppercase font-semibold text-sm">
            {currentContent.clientSay}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            {currentContent.title}{" "}
            <span className="text-[#6FBDF5]">{isEnglish ? "are saying" : "می‌گویند"}</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            {currentContent.testimonial}
          </p>
          <div className="flex items-center mt-6">
            <Image
              src="/assets/images/logo.png"
              alt="Client Avatar"
              className="w-12 h-12 rounded-full object-cover shadow-lg"
              width={48}
              height={48}
            />
            <div className={`ml-4 ${isEnglish ? 'text-left' : 'text-right'}`}>
              <p className="text-gray-800 font-medium">{currentContent.clientName}</p>
              <p className="text-gray-500 text-sm">{currentContent.clientRole}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-8">
            <button
              className="p-3 rounded-full bg-blue-100 text-[#6FBDF5] hover:bg-blue-200"
              aria-label={isEnglish ? "Previous Testimonial" : "شهادت قبلی"}
            >
              <MdChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
              aria-label={isEnglish ? "Next Testimonial" : "شهادت بعدی"}
            >
              <MdChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center mt-12 gap-6">
        {[1, 2, 3, 4, 5].map((logo, index) => (
          <Image
            key={index}
            src={`/assets/images/company.png`}
            alt={isEnglish ? `Logo ${logo}` : `لوگو ${logo}`}
            className="h-10 object-contain"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientTestimonial;
