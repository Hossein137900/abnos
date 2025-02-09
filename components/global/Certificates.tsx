'use client'
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Certificates = () => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";

  const certificates = [
    {
      en: { title: "ISO 9001:2015", description: "Quality Management System" },
      fa: { title: "ایزو ۹۰۰۱:۲۰۱۵", description: "سیستم مدیریت کیفیت" },
      image: "/assets/images/iso1.png"
    },
    {
      en: { title: "CE Certificate", description: "European Conformity" },
      fa: { title: "گواهینامه CE", description: "انطباق با استانداردهای اروپا" },
      image: "/assets/images/ce.jpg"
    },
    {
      en: { title: "National Standard", description: "Iranian National Standard" },
      fa: { title: "استاندارد ملی", description: "استاندارد ملی ایران" },
      image: "/assets/images/standard.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-16 ${isEnglish ? "" : "font-sahel"}`}>
          {isEnglish ? "Our Certificates" : "گواهینامه‌های ما"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={cert.image}
                  alt={isEnglish ? cert.en.title : cert.fa.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${isEnglish ? "" : "font-sahel"}`}>
                {isEnglish ? cert.en.title : cert.fa.title}
              </h3>
              <p className={`text-gray-600 ${isEnglish ? "" : "font-sahel"}`}>
                {isEnglish ? cert.en.description : cert.fa.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
