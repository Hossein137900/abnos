"use client";
import React from "react";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";

  const content = {
    en: {
      tagline:
        "Crafting excellence in glass manufacturing since 1990. Your premier destination for premium glass solutions and innovative designs.",
      products: [
        { name: "Tempered Glass", link: "/products/tempered-glasses" },
        { name: "Double-glazed Glass", link: "/products/Double-glazed-glass" },
        // { name: "Printed Glass", link: "/products/printed-glasses" },
        { name: "Laminated Glass", link: "/products/laminated-glasses" },
        { name: "Window Film Glass", link: "/products/windowFilm-glasses" },
        {
          name: "Digital Printing Glass",
          link: "/products/digital-printin-on-glasses",
        },
      ],
      // services: [
      //   { name: "Glass Cutting", link: "/services/glass-cutting" },
      //   { name: "Heat Treatment", link: "/services/heat-treatment" },
      //   { name: "Digital Printing", link: "/services/digital-printing" },
      //   { name: "Double Glazing", link: "/services/double-glazing" },
      //   { name: "Custom Design", link: "/services/custom-design" },
      //   { name: "Technical Consultation", link: "/services/consultation" },
      // ],
      company: [
        { name: "Home", link: "/" },

        { name: "About Abnos", link: "/about" },
        // { name: "Manufacturing Process", link: "/manufacturing" },
        // { name: "Quality Standards", link: "/quality" },
        { name: "Contact Us", link: "/contactus" },
      ],
      footerLinks: ["Terms & Conditions", "Privacy Policy", "Sitemap"],
      socialMedia: [
        {
          name: "Instagram",
          icon: <FaInstagram className="w-6 h-6" />,
          description: "Follow latest designs",
          href: "#",
        },
        {
          name: "Telegram",
          icon: <FaTelegram className="w-6 h-6" />,
          description: "Join our channel",
          href: "#",
        },
        {
          name: "Contact",
          icon: <MdEmail className="w-6 h-6" />,
          description: "Get in touch with us",
          href: "#",
        },
      ],
    },
    fa: {
      tagline:
        "پیشگام در تولید شیشه از سال ۱۳۶۹. مرجع تخصصی تولید شیشه‌های صنعتی و ساختمانی با طراحی‌های نوآورانه.",
      products: [
        { name: "شیشه سکوریت", link: "/products/tempered-glasses" },
        { name: "شیشه دوجداره", link: "/products/Double-glazed-glass" },
        // { name: "شیشه چاپی", link: "/products/printed-glasses" },
        { name: "شیشه لمینت", link: "/products/laminated-glasses" },
        { name: "شیشه ویندوفیلم", link: "/products/windowFilm-glasses" },
        {
          name: "شیشه چاپ دیجیتال",
          link: "/products/digital-printin-on-glasses",
        },
      ],
      // services: [
      //   { name: "برش شیشه", link: "/fa/services/glass-cutting" },
      //   { name: "عملیات حرارتی", link: "/fa/services/heat-treatment" },
      //   { name: "چاپ دیجیتال", link: "/fa/services/digital-printing" },
      //   { name: "تولید دوجداره", link: "/fa/services/double-glazing" },
      //   { name: "طراحی سفارشی", link: "/fa/services/custom-design" },
      //   { name: "مشاوره فنی", link: "/fa/services/consultation" },
      // ],
      company: [
        { name: "صفحه اصلی", link: "/" },
        { name: "درباره آبنوس", link: "/about" },
        // { name: "فرآیند تولید", link: "/fa/manufacturing" },
        // { name: "استانداردهای کیفی", link: "/fa/quality" },
        { name: "تماس با آبنوس", link: "/fa/contact" },
      ],
      footerLinks: ["قوانین و مقررات", "حریم خصوصی", "نقشه سایت"],
      socialMedia: [
        {
          name: "اینستاگرام",
          icon: <FaInstagram className="w-6 h-6" />,
          description: "آخرین طرح را دنبال کنید",
          href: "#",
        },
        {
          name: "تلگرام",
          icon: <FaTelegram className="w-6 h-6" />,
          description: "به کانال ما بپیوندید",
          href: "#",
        },
        {
          name: "تماس",
          icon: <MdEmail className="w-6 h-6" />,
          description: "با ما در ارتباط باشید",
          href: "#",
        },
      ],
    },
  };
  const currentContent = content[state.currentLang === "en" ? "en" : "fa"];
  const getProductLink = (link: string, lang: string) => {
    console.log(lang);

    return link; // URLs should be language-agnostic, handle language in routing config
  };

  return (
    <footer className="bg-[#000814]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center sm:justify-start">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <span
                className={`text-2xl font-bold text-white ${
                  isRTL ? "mr-2" : "ml-2"
                }`}
              >
                {isRTL ? "شیشه آبنوس" : "Abnos Glass"}
              </span>{" "}
            </div>
          </div>
          <div
            className={`flex justify-center sm:justify-start mt-4 lg:mt-0 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            <div className="flex items-center ">
              <span className="text-sm text-white/70 font-bold">
                {currentContent.tagline}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div
            className={` text-center   ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            <p className="text-lg font-bold text-gray-50">
              {isRTL ? "محصولات" : "Products"}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {currentContent.products.map(
                (item: { name: string; link: string }) => (
                  <li key={item.name}>
                    <Link
                      className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                      href={getProductLink(item.link, state.currentLang)}
                      target="_blank"
                    >
                      {isRTL ? (
                        <>
                          {item.name}
                          <span className="mr-2 group-hover:-translate-x-2 rotate-180 transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      ) : (
                        <>
                          {item.name}
                          <span className="ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* <div
            className={` text-center   ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            <p className="text-lg font-bold text-gray-50">
              {isRTL ? "خدمات" : "Services"}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {currentContent.services.map(
                (item: { name: string; link: string }) => (
                  <li key={item.name}>
                    <Link
                      className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                      href={item.link}
                    >
                      {isRTL ? (
                        <>
                          {item.name}
                          <span className="mr-2 group-hover:-translate-x-2 rotate-180  transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      ) : (
                        <>
                          {item.name}
                          <span className="ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div> */}

          <div
            className={` text-center   ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            <p className="text-lg font-bold text-gray-50">
              {isRTL ? "شرکت" : "Company"}
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              {currentContent.company.map(
                (item: { name: string; link: string }) => (
                  <li key={item.name}>
                    <Link
                      className="group flex justify-center lg:justify-start items-center text-gray-200 transition hover:text-[#6FBDF5]"
                      href={getProductLink(item.link, state.currentLang)}
                      target="_blank"
                    >
                      {isRTL ? (
                        <>
                          {item.name}
                          <span className="mr-2 group-hover:-translate-x-2 rotate-180  transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      ) : (
                        <>
                          {item.name}
                          <span className="ml-2 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                            →
                          </span>
                        </>
                      )}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div
            className={`text-center  md:col-span-4 lg:col-span-4 ${
              isRTL ? "md:text-right" : "md:text-left"
            }`}
          >
            <p className="text-lg md:inline font-bold text-gray-50">
              {isRTL ? "تماس با آبنوس" : "Contact Us"}
            </p>
            <>
              <span
                className={`text-gray-100 md:mr-12 ${isRTL ? "" : "md:ml-4"} `}
              >
                02634704990
              </span>
              <span className="text-gray-100 md:mr-12 mx-4">02634706969</span>
              <span className="text-gray-100 md:mr-12">02634714413-5</span>
            </>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-6">
              {currentContent.socialMedia.map(
                (item: {
                  name: string;
                  description: string;
                  href: string;
                  icon: React.ReactNode;
                }) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex flex-col items-center p-2 lg:p-4 border border-gray-600 hover:border-gray-800 rounded-lg hover:bg-gray-800/80 transition-all duration-300"
                  >
                    <div className="text-[#6FBDF5] mb-3">{item.icon}</div>
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      {item.description}
                    </p>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex flex-col sm:justify-center sm:text-left">
            <p className="text-sm mb-4 text-gray-400 text-center">
              Crystal Glass Works © {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <div className="my-6 flex justify-center gap-6 sm:mt-0">
              {currentContent.footerLinks.map((link: string) => (
                <Link
                  key={link}
                  className="text-gray-400 transition-all duration-200 hover:text-[#6FBDF5]"
                  href="#"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
