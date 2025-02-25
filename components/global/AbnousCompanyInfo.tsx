import React from "react";
import Image from "next/image";
import { useLanguage } from "../global/LanguageContext";
import MachineShowcase from './MachineShowcase';


interface AbnousCompanyInfoProps {
  className?: string;
}

const companyInfoContent = {
  en: {
    // ... existing content ...
    qualityPolicyTitle: "Quality Policy",
    qualityPolicyIntro:
      "Every glass product that leaves our factory undergoes a high-precision production process: from accurate computerized cutting to innovative safety processing and energy-efficient insulating glass production - this means architects can plan with confidence and enjoy quality that will last for decades.",
    equipmentTitle: "Equipment and Services",
    equipmentList: [
      "TAMGLASS Manufacturing (Finland/England)",
      "LWDY Machine (China)",
      "Our laminate and security furnaces guarantee safety glass with the highest resistance. Whether walkable glass or large windows, we provide certified solutions for the most complex construction projects.",
      "LISEC Fully Automatic Double Glazing Line (Austria)",
      "Using the latest European technology, we produce safety, insulating, and laminated glass of the highest quality. All our machines are designed for precision, durability, and aesthetics.",
      "THEIME Silk Screen Printing Machine (Germany)",
      "BURKLE Roller Printing Machine (Germany)",
      "Our advanced silk screen and roller printing equipment for glass painting is unique in Iran, providing new possibilities for architects, designers, and building planners in creative glass design.",
      "NATGRAPH Dryer (England)",
      "LISEC CNC Glass Cutting Machine (Austria)",
      "From precise cutting to safety enhancement, each piece of glass is manufactured with the highest precision to meet the needs of architecture, construction projects, and various industries.",
    ],
    qualityPolicy: {
      intro:
        "Abnos Jam Factory, as one of the pioneers in the glass industry, is committed to providing the best technical and engineering services in this field. The factory constantly strives to fully understand customer requirements and expectations and take effective measures to improve their satisfaction. Our objectives are:",
      points: [
        "Fulfilling customer requirements with maximum speed and precision",
        "Increasing productivity and optimizing project completion time using advanced technologies",
        "Continuously improving customer and employee satisfaction through constructive interaction and feedback",
        "Strengthening employee creativity and innovation through up-to-date scientific and specialized training",
        "Developing products and services in accordance with international standards and current market needs",
      ],
      conclusion:
        "We are committed to continuous quality improvement, flexibility in responding to customer needs, and innovation in production processes to remain at the forefront of the glass industry.",
    },

    title: "Abnos Jam Karaj Company",
    founderName: "Engineer Mohammad Reza Fakhri Darian",
    currentManagerName: "Mrs. Raheleh Sepehri Khamene",
    machineShowcase: {
      title: "Our Advanced Machinery",
      machines: [
        {
          name: "LISEC Double Glazing Line",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description:
            "State-of-the-art automated assembly line for perfect insulation",
          highlight: "Industry-leading precision",
        },
        {
          name: "THEIME Silk Print",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "Advanced silk screening for architectural glass",
          highlight: "Unmatched detail quality",
        },
        {
          name: "BURKLE Roller Printing",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "Industrial-scale pattern application",
          highlight: "Consistent excellence",
        },
        {
          name: "NATGRAPH Dryer",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "Professional curing system",
          highlight: "Perfect finish every time",
        },
        {
          name: "LISEC CNC Cutting",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "Precision cutting technology",
          highlight: "Millimeter accuracy",
        },
      ],
    },
    introduction: [
      "Abnos Jam Karaj Company, registered with number 4619 in 1998, was established in the Kamalshahr area of Karaj on a land of 6,050 square meters by the late Engineer Mohammad Reza Fakhri Darian.",
      "The company's activities focus on producing various types of architectural security glass, double-glazed glass, and silk printing. Obtaining the National Standard Mark for glass production, which the company was the first in the industry to achieve, is one of the factors that distinguishes its products from other similar companies.",
    ],

    qualityPolicyList: [
      "Fulfilling customer requests in the shortest possible time",
      "Improving service efficiency and reducing work time",
      "Increasing customer and employee satisfaction through continuous communication",
      "Enhancing creativity, innovation, and scientific and specialized capabilities of employees through training",
    ],
    slogan: "Collaborating with you is our honor.",
    managementTransition:
      "After the passing of Engineer Mohammad Reza Fakhri Darian on October 4, 2016, the management of the company was taken over by Mrs. Raheleh Sepehri Khamene, who continues to move forward with more power and effort in line with the factory's policies and strategies.",
  },
  fa: {
    qualityPolicyTitle: "خط مشی کیفی",
    qualityPolicyIntro:
      "هر محصولی شیشه‌ای که از کارخانه ما خارج می‌شود، یک فرآیند تولید با دقت بالا را طی می‌کند: از برش کامپیوتری دقیق تا فرآوری نوآورانه ایمنی و تولید شیشه‌های عایق با بهره‌وری انرژی – این بدان معناست که معماران می‌توانند با اطمینان برنامه‌ریزی کنند و از کیفیتی برخوردار شوند که برای دهه‌ها ماندگار خواهد بود.",
    equipmentTitle: "محصولات و خدمات",
    equipmentList: [
      "تولید کلیه محصولات شیشه های ساختمانی سکوریت در ضخامتهای گوناگون در کوتاهترین زمان ممکن با بهترین کیفیت ",
      "تولید محصولات شیشه ای چاپ شده مورد نیاز انواع نماهای ساختمان ، لوازم خانگی و صنعتی با استفاده از بهترین مواد اولیه ",
      "کوره‌های لمینت و سکوریت ما شیشه‌های ایمنی با بالاترین مقاومت را تضمین می‌کنند. چه شیشه‌های قابل راه رفتن، یا پنجره‌های بزرگ، ما راه‌حل‌های تأییدشده برای پیچیده‌ترین پروژه‌های ساختمانی ارائه می‌دهیم.",
" تولید شیشه های دوجداره و چند جداره با ساختارهای گوناگون و نماهای کرتین وال با کمترین ضریب انتقال حرارت و صوت ",
      "تولید شیشه های لمینت ، ضد گلوله ، هندریل و…. با بالاترین ضریب ایمنی ",],
    qualityPolicy: {
      intro:
        "کارخانه آبنوس جام، به عنوان یکی از پیشگامان صنعت شیشه، متعهد به ارائه بهترین خدمات فنی و مهندسی در این حوزه می‌باشد. این کارخانه همواره در تلاش است تا الزامات و انتظارات مشتریان خود را به طور کامل درک کرده و برای ارتقاء سطح رضایت آنها اقدامات موثری انجام دهد. اهداف ما به شرح زیر است:",
      points: [
        "تحقق خواسته‌های مشتریان با بالاترین سرعت و دقت",
        "افزایش بهره‌وری و بهینه‌سازی زمان انجام پروژه‌ها با استفاده از تکنولوژی‌های پیشرفته",
        "ارتقاء مستمر رضایت‌مندی مشتریان و کارکنان از طریق تعامل و بازخورد سازنده",
        "تقویت خلاقیت و نوآوری کارکنان با آموزش‌های علمی و تخصصی به‌روز",
        "توسعه محصولات و خدمات مطابق با استانداردهای بین‌المللی و نیازهای روز بازار",
      ],
      conclusion:
        "ما به ارتقاء مداوم کیفیت، انعطاف‌پذیری در پاسخگویی به نیازهای مشتریان و نوآوری در فرآیندهای تولید متعهد هستیم تا همیشه در صدر صنعت شیشه باقی بمانیم",
    },
    title: "شرکت آبنوس جام کرج",
    founderName: "مهندس محمدرضا فخری داریان",
    currentManagerName: "خانم راحله سپهری خامنه",
    introduction: [
      "شرکت آبنوس جام کرج به شماره ثبت 4619 درسال 1377 در منطقه کمالشهر کرج و در زمینی به وسعت 6050 مترمربع توسط مرحوم مهندس محمدرضا فخری داریان تأسیس گردید.",
      "فعالیت شرکت در زمینه تولید انواع شیشه های سکوریت ساختمانی، دوجداره و چاپ سیلک می باشد. دریافت نشان استاندارد ملی درزمینه تولید شیشه های ساختمانی که این شرکت برای اولین بار در این صنعت موفق به کسب آن شد از عوامل مؤثر در متمایز نمودن محصولات این شرکت با سایر شرکتهای مشابه می باشد.",
    ],

    machineShowcase: {
      title: "خ پیشرفته ما",
      machines: [
        {
          name: "خط دو جداره LISEC",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "خط مونتاژ اتوماتیک پیشرفته برای عایق‌بندی کامل",
          highlight: "دقت پیشرو در صنعت",
        },
        {
          name: "چاپ سیلک THEIME",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "چاپ سیلک پیشرفته برای شیشه معماری",
          highlight: "کیفیت بی‌نظیر در جزئیات",
        },
        {
          name: "چاپ غلتکی BURKLE",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "اعمال الگو در مقیاس صنعتی",
          highlight: "تعالی مداوم",
        },
        {
          name: "خشک‌کن NATGRAPH",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "سیستم خشک‌کن حرفه‌ای",
          highlight: "پرداخت کامل در هر بار",
        },
        {
          name: "برش CNC LISEC",
          image: "/assets/images/machines/Glasmaschine_THIEME-3000-GS.jpg",
          description: "تکنولوژی برش دقیق",
          highlight: "دقت میلیمتری",
        },
      ],
    },
    qualityPolicyList: [
      "تحقق خواسته هاي مشتريان در حداقل زمان ممكن",
      "ارتقاء بهره وري در ارائه خدمات و کاهش زمان انجام کار",
      "افزايش رضايتمندي مشتريان و کارکنان از طريق ارتباط مستمر با آنها",
      "ارتقاء خلاقيت، ابتکار و توانمندي علمي و تخصصي کارکنان از طريق آموزش",
    ],
    slogan: "همکاری با شما، افتخار ماست.",
    managementTransition:
      "مدیریت این شرکت پس از فوت مهندس محمدرضا فخری داریان در چهارم مهرماه سال 1395 بر عهده سرکار خانم راحله سپهری خامنه قرار گرفته و همچنان با قدرت و تلاش بیشتر در راستای خط مشی ها و سیاست های کارخانه که همانا حفظ و تداوم رضایت مشتریان از طریق بالابردن کیفیت خدمات و محصولات تولیدی خود می باشد قدم بر می دارد.",
  },
};

const AbnousCompanyInfo: React.FC<AbnousCompanyInfoProps> = ({
  className = "",
}) => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";
  const content = isEnglish ? companyInfoContent.en : companyInfoContent.fa;

  return (
    <div className={`container mx-auto px-4 py-12 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          {...(isEnglish ? {} : { dir: "rtl" })}
        >
          {content.title}
        </h2>

        {/* Founder Section with Image */}
        <section className="mb-8 flex items-center justify-center space-x-6 text-justify">
          <div className="w-1/3">
            <Image
              src="/assets/images/founderImage.png" // Replace with actual founder image path
              alt={content.founderName}
              width={300}
              height={300}
              className="rounded-md object-cover shadow-lg"
            />
            <p
              className="text-center mt-4 text-gray-700 font-semibold"
              {...(isEnglish ? {} : { dir: "rtl" })}
            >
              {content.founderName}
            </p>
          </div>
          <div className="w-2/3" {...(isEnglish ? {} : { dir: "rtl" })}>
            {content.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      


        {/* Management Transition Section */}
        <section
          className="mb-8 text-justify"
          {...(isEnglish ? {} : { dir: "rtl" })}
        >
          <p className="text-gray-700 leading-relaxed italic">
            {content.managementTransition}
          </p>
        </section>
       
              <section className="mb-8" {...(isEnglish ? {} : { dir: "rtl" })}>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          {content.equipmentTitle}
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {content.equipmentList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
      <MachineShowcase />

        <section className="mb-8">
          <h3
            className="text-2xl font-semibold text-gray-800 mb-4"
            {...(isEnglish ? {} : { dir: "rtl" })}
          >
            {content.qualityPolicyTitle}
          </h3>
          <p
            className="text-gray-700 leading-relaxed mb-4 text-justify"
            {...(isEnglish ? {} : { dir: "rtl" })}
          >
            {content.qualityPolicyIntro}
          </p>
          <ul
            className="list-disc list-inside text-gray-700 space-y-2 text-justify"
            {...(isEnglish ? {} : { dir: "rtl" })}
          >
            {content.qualityPolicyList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="text-center mt-8">
          <p className="text-gray-700 italic">{content.slogan}</p>
        </div>
      </div>
    </div>
  );
};

export default AbnousCompanyInfo;
