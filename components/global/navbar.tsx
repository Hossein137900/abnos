"use client";
import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/assets/images/logo.png";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "#",
    dropdown: [
      { title: "Software", href: "/products/software" },
      { title: "Hardware", href: "/products/hardware" },
      { title: "Services", href: "/products/services" },
    ],
  },
  {
    title: "Resources",
    href: "#",
    dropdown: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Documentation", href: "/resources/docs" },
      { title: "Support", href: "/resources/support" },
    ],
  },
  { title: "About", href: "/about" },
  {
    title: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    icon: <FaPhone />,
    isButton: true,
    
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full backdrop-blur-sm shadow-sm z-50">
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
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.title} className="relative">
                {item.dropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="text-gray-50 hover:text-blue-600 transition-colors px-3 py-0.5 text-sm font-medium flex items-center gap-1"
                  >
                    {item.title}
                    <svg
                      className="w-3 h-3"
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
                  <Link
                    href={item.href}
                    className={`${
                      item.isButton
                        ? "bg-transparent text-white hover:bg-[#6FBDF5]"
                        : "text-gray-50 hover:text-[#6FBDF5]"
                    } transition-colors px-3 py-2 text-sm font-medium ${
                      item.isButton ? "rounded-md" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {item.dropdown && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 w-48 bg-white/20 backdrop-blur-lg rounded-md shadow-lg"
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
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
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
              className="md:hidden overflow-hidden backdrop-blur-lg rounded-md shadow-lg"
              style={{
                borderRadius: '20px',
                background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'
              }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.dropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.title ? null : item.title
                            )
                          }
                          className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
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
                                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
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
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
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
  );
};

export default Navbar;