"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/assets/images/logo.png";
import { useLanguage } from "./LanguageContext";
import LanguageIcon from "./languageIcon";

interface NavItem {
  title: string;
  href: string;
  dropdown?: NavItem[];
  isButton?: boolean;
}

const specialItemsEn =
  "🎉 Special Offer: Get 20% off on all tempered glass products";
const specialItemsIr = "🎉 20 درصد تخفیف خرید روز ";
const navItemsEn: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },

  {
    title: "Products",
    href: "#",
    dropdown: [
      { title: "Tempered Glass", href: "/products/tempered-glasses" },
      { title: "Double-glazed glass", href: "/products/Double-glazed-glass" },
      { title: "Printed Glass", href: "/products/printed-glasses" },
      { title: "Laminated Glass", href: "/products/laminated-glasses" },
      { title: "WindowFilm Glass", href: "/products/windowFilm-glasses" },
      {
        title: "Digital printing on Glasses",
        href: "/products/digital-printin-on-glasses",
      },
    ],
  },
  {
    title: "Contact Us",
    href: "/contactus",
    isButton: true,
  },
];

const navItemsIr: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },

  {
    title: "محصولات",
    href: "#",
    dropdown: [
      { title: "شیشه سکوریت", href: "/products/tempered-glasses" },
      { title: "شیشه دوجداره", href: "/products/Double-glazed-glass" },
      { title: "شیشه چاپی", href: "/products/printed-glasses" },
      { title: "شیشه لمینت", href: "/products/laminated-glasses" },
      { title: "شیشه فیلم‌دار", href: "/products/windowFilm-glasses" },
      {
        title: "چاپ دیجیتال روی شیشه",
        href: "/products/digital-printin-on-glasses",
      },
    ],
  },
  {
    title: "تماس با ما",
    href: "/contactus",
    isButton: true,
  },
];

// Announcement component
const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { state } = useLanguage();
  const isRTL = state.currentLang === "fa";

  return isVisible ? (
    <div className="bg-[#6FBDF5]/80 backdrop-blur-lg text-white py-2 lg:h-[40px] h-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p
            className={`text-sm font-medium text-center flex-1 ${
              isRTL ? "rtl" : "ltr"
            }`}
          >
            {state.currentLang === "en" ? specialItemsEn : specialItemsIr}
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 ml-4"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};
// Enhanced Navbar component
const Navbar = () => {
  const { state } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRTL = state.currentLang === "fa";
  const currentNavItems = state.currentLang === "en" ? navItemsEn : navItemsIr;

  useEffect(() => {
    const handleScroll = () => {
      console.log(scrolled);
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnnouncementBar />
      <nav
        className={`absolute w-full transition-all duration-300 bg-transparent
       
      } z-50 ${isRTL ? "rtl" : "ltr"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={120}
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
                      className="text-gray-50 hover:text-[#6FBDF5] group transition-colors px-3 py-0.5 text-sm font-medium flex items-center gap-1"
                    >
                      {item.title}
                      <svg
                        className={`w-3 h-3 ${
                          isRTL
                            ? "group-hover:rotate-180 transition-all duration-300"
                            : ""
                        }`}
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
                            ? "bg-transparent text-gray-50 hover:text-[#6FBDF5] "
                            : "text-gray-50 hover:text-[#6FBDF5] "
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
                      } w-48 border border-gray-300 bg-white/30 backdrop-blur-xl rounded-md z-[9999]`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm ${
                            isRTL ? "text-right" : "text-left"
                          } text-gray-50 rounded-md hover:bg-[#6FBDF5]/60 transition-all duration-300 hover:text-white`}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}{" "}
            </div>
            <div className="md:absolute space-x-8 items-center z-[9999] absolute left-4  -top-9">
              <LanguageIcon />
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
                className={`md:hidden overflow-hidden bg-[#6FBDF5]/60 border border-gray-200 backdrop-blur-2xl rounded-md shadow-lg ${
                  state.currentLang === "fa" ? "text-right" : "text-left"
                }`}
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
                            className={`w-full  flex  ${
                              isRTL ? "flex-row-reverse" : "flex-row"
                            } justify-between px-3 py-2 text-base  font-medium text-gray-50 hover:text-blue-600 hover:bg-gray-50 rounded-md`}
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
                <div className="mb-4 mx-auto justify-center flex">
                  <LanguageIcon />
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
