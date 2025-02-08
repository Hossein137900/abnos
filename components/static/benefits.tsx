'use client'
import { useLanguage } from "../global/LanguageContext";
import { IconType } from "react-icons";
import {  FiShield } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";
import { FaWrench, FaLeaf} from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";

type BenefitType = {
  icon: IconType;
  translations: {
    en: {
      title: string;
      description: string;
    };
    fa: {
      title: string;
      description: string;
    };
  };
};

const productBenefits: Record<string, BenefitType[]> = {
  temperedGlass: [
    {
      icon: FiShield,
      translations: {
        en: {
          title: "Enhanced Safety",
          description: "4-5 times stronger than regular glass with safe breakage pattern"
        },
        fa: {
          title: "ایمنی بالا",
          description: "۴ تا ۵ برابر مقاوم‌تر از شیشه معمولی با الگوی شکست ایمن"
        }
      }
    },
    {
      icon: MdOutlineHighQuality,
      translations: {
        en: {
          title: "Superior Quality",
          description: "Heat-treated for exceptional durability and strength"
        },
        fa: {
          title: "کیفیت برتر",
          description: "عملیات حرارتی برای دوام و استحکام استثنایی"
        }
      }
    },
    {
      icon: FaLeaf,
      translations: {
        en: {
          title: "Energy Efficient",
          description: "Excellent thermal insulation properties"
        },
        fa: {
          title: "بهره‌وری انرژی",
          description: "خواص عایق حرارتی عالی"
        }
      }
    },
    {
      icon: FaWrench,
      translations: {
        en: {
          title: "Customizable",
          description: "Available in various sizes, colors, and specifications"
        },
        fa: {
          title: "قابل سفارشی‌سازی",
          description: "قابل ارائه در اندازه‌ها، رنگ‌ها و مشخصات مختلف"
        }
      }
    }
  ],
  laminatedGlass: [
    {
      icon: FiShield,
      translations: {
        en: {
          title: "Maximum Security",
          description: "Interlayer prevents shattering and provides protection"
        },
        fa: {
          title: "امنیت حداکثری",
          description: "لایه میانی از خرد شدن جلوگیری کرده و محافظت ایجاد می‌کند"
        }
      }
    },
    // Add more benefits specific to laminated glass
  ],
  smartGlass: [
    {
      icon: BsLightbulb,
      translations: {
        en: {
          title: "Smart Control",
          description: "Instantly switch between transparent and opaque states"
        },
        fa: {
          title: "کنترل هوشمند",
          description: "تغییر آنی بین حالت‌های شفاف و مات"
        }
      }
    },
    // Add more benefits specific to smart glass
  ]
};

interface BenefitsProps {
  productType: string;
  className?: string;
}

export default function Benefits({ productType, className = "" }: BenefitsProps) {
  const { state } = useLanguage();
  const currentLang = state.currentLang;
  const isRTL = currentLang === "fa";

  const benefits = productBenefits[productType] || productBenefits.temperedGlass;

  return (
    <section className={`m-8 ${className}`} {...(isRTL ? { dir: "rtl" } : {})}>
      <h2 className="text-2xl font-bold mb-6 text-[#6FBDF5]">
        {currentLang === 'en' ? 'Key Benefits' : 'مزایای اصلی'}
      </h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#6FBDF5]/10 rounded-full mb-4">
              <benefit.icon className="text-2xl text-[#6FBDF5]" />
            </div>
            
            <h3 className="font-semibold text-gray-800 text-center mb-2">
              {benefit.translations[currentLang].title}
            </h3>
            
            <p className="text-sm text-gray-600 text-center">
              {benefit.translations[currentLang].description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
