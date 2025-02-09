import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../global/LanguageContext';

interface AbnousCompanyInfoProps {
  className?: string;
}

const companyInfoContent = {
  en: {
    title: 'Abnos Jam Karaj Company',
    founderName: 'Engineer Mohammad Reza Fakhri Darian',
    currentManagerName: 'Mrs. Raheleh Sepehri Khamene',
    introduction: [
      'Abnos Jam Karaj Company, registered with number 4619 in 1998, was established in the Kamalshahr area of Karaj on a land of 6,050 square meters by the late Engineer Mohammad Reza Fakhri Darian.',
      'The company\'s activities focus on producing various types of architectural security glass, double-glazed glass, and silk printing. Obtaining the National Standard Mark for glass production, which the company was the first in the industry to achieve, is one of the factors that distinguishes its products from other similar companies.'
    ],
    equipmentTitle: 'Equipment and Services',
    equipmentList: [
      'Manufactured in England by TAMGLASS, Finland',
      'Fully Automatic Double Glazing Line by LISEC Austria',
      'Silk Print Machine by THEIME Germany',
      'Roller Printing Machine by BURKLE Germany',
      'Dryer Machine by NATGRAPH England',
      'Glass Cutting with CNC Machine by LISEC Austria'
    ],
    qualityPolicyTitle: 'Quality Policy',
    qualityPolicyIntro: 'Abnos Jam Factory is one of the leading companies in providing comprehensive technical and engineering services in the glass sector. The company is committed to understanding and meeting customer requirements and expectations to increase their satisfaction, and always keeps this goal at the forefront of its activities.',
    qualityPolicyList: [
      'Fulfilling customer requests in the shortest possible time',
      'Improving service efficiency and reducing work time',
      'Increasing customer and employee satisfaction through continuous communication',
      'Enhancing creativity, innovation, and scientific and specialized capabilities of employees through training'
    ],
    slogan: 'Collaborating with you is our honor.',
    managementTransition: 'After the passing of Engineer Mohammad Reza Fakhri Darian on October 4, 2016, the management of the company was taken over by Mrs. Raheleh Sepehri Khamene, who continues to move forward with more power and effort in line with the factory\'s policies and strategies.'
  },
  fa: {
    title: 'شرکت آبنوس جام کرج',
    founderName: 'مهندس محمدرضا فخری داریان',
    currentManagerName: 'خانم راحله سپهری خامنه',
    introduction: [
      'شرکت آبنوس جام کرج به شماره ثبت 4619 درسال 1377 در منطقه کمالشهر کرج و در زمینی به وسعت 6050 مترمربع توسط مرحوم مهندس محمدرضا فخری داریان تأسیس گردید.',
      'فعالیت شرکت در زمینه تولید انواع شیشه های سکوریت ساختمانی، دوجداره و چاپ سیلک می باشد. دریافت نشان استاندارد ملی درزمینه تولید شیشه های ساختمانی که این شرکت برای اولین بار در این صنعت موفق به کسب آن شد از عوامل مؤثر در متمایز نمودن محصولات این شرکت با سایر شرکتهای مشابه می باشد.'
    ],
    equipmentTitle: 'تجهیزات و خدمات',
    equipmentList: [
      'ساخت انگلستان TAMGLASS ساخت فنلاند',
      'خط تمام اتوماتیک دو جداره LISEC اتریش',
      'دستگاه چاپ سیلک ساخت شرکت THEIME آلمان',
      'دستگاه چاپ با غلطک ساخت شرکت BURKLE آلمان',
      'دستگاه خشک کن ساخت NATGRAPH انگلستان',
      'برش شیشه با دستگاه CNC ساخت LISEC اتریش'
    ],
    qualityPolicyTitle: 'خط مشی کیفی',
    qualityPolicyIntro: 'کارخانه آبنوس جام به عنوان يکي از کارخانه های پيشرو در ارائه کليه خدمات فني و مهندسي، در حوزه شیشه فعاليت مينمايد. این کارخانه خود را در درک و تامين الزامات مشتريان و توجه به انتظارات آنها براي افزايش رضايت ايشان متعهد دانسته و همواره اين هدف را سر لوحه فعاليتهاي خود ميداند.',
    qualityPolicyList: [
      'تحقق خواسته هاي مشتريان در حداقل زمان ممكن',
      'ارتقاء بهره وري در ارائه خدمات و کاهش زمان انجام کار',
      'افزايش رضايتمندي مشتريان و کارکنان از طريق ارتباط مستمر با آنها',
      'ارتقاء خلاقيت، ابتکار و توانمندي علمي و تخصصي کارکنان از طريق آموزش'
    ],
    slogan: 'همکاری با شما، افتخار ماست.',
    managementTransition: 'مدیریت این شرکت پس از فوت مهندس محمدرضا فخری داریان در چهارم مهرماه سال 1395 بر عهده سرکار خانم راحله سپهری خامنه قرار گرفته و همچنان با قدرت و تلاش بیشتر در راستای خط مشی ها و سیاست های کارخانه که همانا حفظ و تداوم رضایت مشتریان از طریق بالابردن کیفیت خدمات و محصولات تولیدی خود می باشد قدم بر می دارد.'
  }
};

const AbnousCompanyInfo: React.FC<AbnousCompanyInfoProps> = ({ className = '' }) => {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === 'en';
  const content = isEnglish ? companyInfoContent.en : companyInfoContent.fa;

  return (
    <div className={`container mx-auto px-4 py-12 ${className}`} >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" {...(isEnglish ? {} : { dir: 'rtl' })}>
          {content.title}
        </h2>

        {/* Founder Section with Image */}
        <section className="mb-8 flex items-center justify-center space-x-6 text-justify" >
          <div className="w-1/3">
            <Image 
              src="/assets/images/founderImage.png"  // Replace with actual founder image path
              alt={content.founderName}
              width={300}
              height={300}
              className="rounded-md object-cover shadow-lg"
            />
            <p className="text-center mt-4 text-gray-700 font-semibold" {...(isEnglish ? {} : { dir: 'rtl' })}>
              {content.founderName}
            </p>
          </div>
          <div className="w-2/3" {...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.introduction.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Management Transition Section */}
        <section className="mb-8 text-justify" {...(isEnglish ? {} : { dir: 'rtl' })}>
          <p className="text-gray-700 leading-relaxed italic">
            {content.managementTransition}
          </p>
        </section>

        <section className="mb-8" {...(isEnglish ? {} : { dir: 'rtl' })}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" {...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.equipmentTitle}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2" {...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.equipmentList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4"{...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.qualityPolicyTitle}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify" {...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.qualityPolicyIntro}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify"{...(isEnglish ? {} : { dir: 'rtl' })}>
            {content.qualityPolicyList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="text-center mt-8">
          <p className="text-gray-700 italic">
            {content.slogan}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbnousCompanyInfo;
