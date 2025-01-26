"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/assets/images/logo.png";
// import phone from "@/public/assets/images/phonesvg.svg";
import { useLanguage } from "./LanguageContext";

const navItemsEn = [
  { title: "Home", href: "/" },

  { title: "About", href: "/about" },
  { title: "Projects", href: "/Projects" },

  {
    title: "Products",
    href: "#",
    dropdown: [
      { title: "Tempered Glass", href: "/Manufacturing" },
      { title: "Double-glazed glass", href: "#" },
      { title: "Printed Glass", href: "#" },
      { title: "Laminated Glass", href: "#" },
      { title: "WindowFilm Glass", href: "#" },
      { title: "Digital printing on Glasses", href: "#" },
      { title: "Smart Glasses", href: "#" },
    ],
  },
  {
    title: "Production Lines",
    href: "#",
    dropdown: [
      { title: "Drilling machine", href: "/blogs" },
      { title: "Furnaces", href: "/resources/docs" },
      { title: "Cutting lines", href: "/resources/support" },
      { title: "Doubled-glazation lines", href: "/resources/support" },
      { title: "Industrial printing lines", href: "/resources/support" },
      { title: "Grinding lines", href: "/resources/support" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contactus",
    isButton: true,
  },
  // {
  //   svg: phone.src,
  //   title: "+1 (555) 123-4567",
  //   href: "tel:+15551234567",
  //   isButton: true,
  // },
];
const navItemsIr = [
  { title: "خانه", href: "/" },

  { title: "درباره ما", href: "/about" },
  { title: "پروژه‌ها", href: "/Projects" },

  {
    title: "محصولات",
    href: "#",
    dropdown: [
      { title: "شیشه سکوریت", href: "/Manufacturing" },
      { title: "شیشه دوجداره", href: "#" },
      { title: "شیشه چاپی", href: "#" },
      { title: "شیشه لمینت", href: "#" },
      { title: "شیشه فیلم‌دار", href: "#" },
      { title: "چاپ دیجیتال روی شیشه", href: "#" },
      { title: "شیشه هوشمند", href: "#" },
    ],
  },
  {
    title: "خط تولید",
    href: "#",
    dropdown: [
      { title: "دستگاه سوراخکاری", href: "/blogs" },
      { title: "کوره‌ها", href: "/resources/docs" },
      { title: "خط برش", href: "/resources/support" },
      { title: "خط تولید دوجداره", href: "/resources/support" },
      { title: "خط چاپ صنعتی", href: "/resources/support" },
      { title: "خط سنگ زنی", href: "/resources/support" },
    ],
  },
  {
    title: "تماس با ما",
    href: "/contactus",
    isButton: true,
  },
];

const Navbar = () => {
  const { state } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = state.currentLang === "fa";
  const currentNavItems = state.currentLang === "en" ? navItemsEn : navItemsIr;

  return (
    <>
      <nav
        className={`absolute w-full backdrop-blur-sm bg-white/10 shadow-sm z-50 items-center ${
          isRTL ? "rtl" : "ltr"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex space-x-8 items-center ${
                isRTL ? "order-1 flex-row-reverse space-x-reverse" : "order-2"
              }`}
            >
              {currentNavItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.dropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="text-gray-50 hover:text-[#6FBDF5] transition-colors px-3 py-0.5 text-sm font-medium flex items-center gap-1"
                    >
                      {item.title}
                      <svg
                        className={`w-3 h-3 ${isRTL ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className={`inline ${
                          item.isButton
                            ? "bg-transparent text-white hover:bg-[#dce8f089]"
                            : "text-gray-50 hover:text-[#6FBDF5]"
                        } transition-colors px-3 py-2 text-sm font-medium flex gap-x-2 ${
                          item.isButton ? "rounded-md" : ""
                        }`}
                      >
                        {/* {item.svg && (
                          <Image
                            src={item.svg}
                            alt="phone"
                            width={20}
                            height={20}
                            className="h-5 w-5 fill-sky-300"
                          />
                        )} */}
                        {item.title}
                      </Link>
                    </>
                  )}

                  {item.dropdown && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute ${
                        isRTL ? "right-0" : "left-0"
                      } w-48 border border-gray-400 bg-white/30 backdrop-blur-xl rounded-md z-[9999]`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-50 rounded-md hover:bg-[#6FBDF5] hover:text-white"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
           
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-50 hover:text-blue-600 hover:bg-gray-100"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-around"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="w-6 h-0.5 bg-current transform origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-current"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="w-6 h-0.5 bg-current transform origin-center"
                />
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden bg-white/20 border border-gray-200 backdrop-blur-2xl rounded-md shadow-lg"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {currentNavItems.map((item) => (
                    <div key={item.title}>
                      {item.dropdown ? (
                        <div className="space-y-1">
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.title
                                  ? null
                                  : item.title
                              )
                            }
                            className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-50 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          >
                            {item.title}
                            <motion.svg
                              animate={{
                                rotate: activeDropdown === item.title ? 180 : 0,
                              }}
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </motion.svg>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.title && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.title}
                                    href={dropdownItem.href}
                                    className="block px-3 py-2 text-base font-medium text-gray-50 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                  >
                                    {dropdownItem.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-3 py-2 rounded-md text-base font-medium ${
                            item.isButton
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "text-gray-50 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
