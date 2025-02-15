import React from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

interface MachineShowcaseProps {
  className?: string;
}

const machineData = {
  en: {
    title: "Our Advanced Machinery",
    machines: [
      {
        name: "LISEC Double Glazing Line",
        image: "/assets/images/machines/LISECDoubleGlazingLine.jpg",
        description:
          "State-of-the-art automated assembly line for perfect insulation",
        pros: [
          "Fully automated production process",
          "High precision gas filling capability",
          "Advanced edge sealing technology",
          "Integrated quality control system",
        ],
      },
      {
        name: "THEIME Silk Print",
        image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
        description: "Advanced silk screening for architectural glass",
        pros: [
          "Ultra-fine detail printing capability",
          "Multi-color printing options",
          "Consistent color application",
          "High production speed",
        ],
      },
      {
        name: "BURKLE Roller Printing",
        image: "/assets/images/machines/BURKLERollerPrinting.jpg",
        description: "Industrial-scale pattern application",
        pros: [
          "Large format printing capability",
          "Uniform pattern distribution",
          "Quick pattern changeover",
          "Durable print quality",
        ],
      },
      {
        name: "NATGRAPH Dryer",
        image: "/assets/images/machines/NATGRAPHDryer.jpg",
        description: "Professional curing system",
        pros: [
          "Precise temperature control",
          "Energy-efficient operation",
          "Rapid drying cycles",
          "Even heat distribution",
        ],
      },
      {
        name: "LISEC CNC Cutting",
        image: "/assets/images/machines/LISECCNCCutting.jpg",
        description: "Precision cutting technology",
        pros: [
          "Millimeter-precise cuts",
          "Optimized material usage",
          "Complex shape capability",
          "Automated edge processing",
        ],
      },
    ],
  },
  fa: {
    title: "ماشین‌آلات پیشرفته ما",
    machines: [
      {
        name: "خط دوجداره LISEC",
        image: "/assets/images/machines/LISECDoubleGlazingLine.jpg",
        description: "خط تولید کاملاً خودکار برای عایق‌بندی بی‌نقص",
        pros: [
          "فرآیند تولید کاملاً خودکار",
          "قابلیت پر کردن گاز با دقت بالا",
          "فناوری پیشرفته درزگیری لبه‌ها",
          "سیستم کنترل کیفیت یکپارچه",
        ],
      },
      {
        name: "چاپ سیلک THEIME",
        image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
        description: "چاپ سیلک پیشرفته برای شیشه‌های معماری",
        pros: [
          "قابلیت چاپ با جزئیات فوق‌العاده ریز",
          "گزینه‌های چاپ چندرنگ",
          "توزیع یکنواخت رنگ",
          "سرعت تولید بالا",
        ],
      },
      {
        name: "چاپ غلتکی BURKLE",
        image: "/assets/images/machines/BURKLERollerPrinting.jpg",
        description: "کاربرد الگو در مقیاس صنعتی",
        pros: [
          "قابلیت چاپ در فرمت‌های بزرگ",
          "توزیع یکنواخت الگو",
          "تغییر سریع طرح‌ها",
          "کیفیت چاپ بادوام",
        ],
      },
      {
        name: "خشک‌کن NATGRAPH",
        image: "/assets/images/machines/NATGRAPHDryer.jpg",
        description: "سیستم حرفه‌ای پخت و خشک کردن",
        pros: [
          "کنترل دقیق دما",
          "عملکرد کم‌مصرف و بهینه",
          "چرخه‌های خشک کردن سریع",
          "توزیع یکنواخت حرارت",
        ],
      },
      {
        name: "برش CNC LISEC",
        image: "/assets/images/machines/LISECCNCCutting.jpg",
        description: "فناوری برش دقیق",
        pros: [
          "برش‌های دقیق در حد میلی‌متر",
          "بهینه‌سازی استفاده از مواد",
          "قابلیت ایجاد اشکال پیچیده",
          "پردازش خودکار لبه‌ها",
        ],
      },
    ],
  },
};

const MachineShowcase: React.FC = () => {
    const { state } = useLanguage();
    const content = state.currentLang === "en" ? machineData.en : machineData.fa;
    const isRTL = state.currentLang === "fa";
  
    return (
      <div className="bg-white py-16" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
            <h2 className="text-4xl font-bold tracking-tight">{content.title}</h2>
            
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {content.machines.map((machine, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-gray-50 transition-all duration-300 hover:bg-gray-100"
              >
                <div className="relative h-64">
                <Image
                  src={machine.image}
                  alt={content.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
                
                <div className={`p-6 ${isRTL ? 'rtl' : 'ltr'}`}>
                  <h3 className="text-xl font-semibold mb-2">{machine.name}</h3>
                  <p className="text-gray-600 mb-4">{machine.description}</p>
                  
                  <ul className="space-y-2">
                    {machine.pros.map((pro, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MachineShowcase;