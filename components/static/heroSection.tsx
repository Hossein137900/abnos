"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShieldAlt, FaIndustry, FaCertificate } from "react-icons/fa";

const HeroItems = [
  {
    icon: <FaShieldAlt className="w-5 h-5" />,
    description: "Highest grade materials ",
  },
  {
    icon: <FaIndustry className="w-5 h-5" />,
    description: "State-of-the-art ",
  },
  {
    icon: <FaCertificate className="w-5 h-5" />,
    description: "International quality ",
  },
];

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src={"/assets/images/hero.jpeg"}
        alt="Glass Factory Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 lg:bg-black/20 bg-black/30 z-1" />

      {/* Content Container */}
      <div className="relative z-10 mt-20 px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Leading Glass Manufacturing Excellence
          </motion.h1>

          <motion.p
            className="text-xl mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting premium quality glass solutions with cutting-edge
            technology and decades of expertise. Your vision, our precision.
          </motion.p>

          <button
            type="submit"
            className="flex justify-center gap-2 items-center text-white mx-auto shadow-xl text-lg bg-[#6FBDF5] backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#6FBDF5] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-4 overflow-hidden  rounded-full group"
          >
            Explore Our Products
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-200 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-[#fff] group-hover:fill-[#6FBDF5]"
              ></path>
            </svg>
          </button>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
            {HeroItems.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className=" bg-white/10 p-1 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex flex-row justify-center items-center gap-4">
                  <span className="text-[#6FBDF5]"> {feature.icon}</span>
                  <p className="text-gray-300 text-sm text-nowrap">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
