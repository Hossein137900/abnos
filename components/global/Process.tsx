"use client";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaClipboardList,
  FaTools,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

interface ProcessStep {
  title: string;
  description: string;

  paragraph: string;

  icon?: React.ReactNode;
}

interface ProcessProps {
  title: string;
  steps: ProcessStep[];
}

const Process = ({ title, steps }: ProcessProps) => {
  const { state } = useLanguage();
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const isEnglish = state.currentLang === "en";

  // Default icons for process steps
  const defaultIcons = [
    <FaClipboardList key="plan" className="text-4xl text-blue-500" />,
    <FaTools key="design" className="text-4xl text-green-500" />,
    <FaChartLine key="develop" className="text-4xl text-purple-500" />,
    <FaCheckCircle key="deliver" className="text-4xl text-yellow-500" />,
  ];

  // Enrich steps with default icons
  const enrichedSteps = steps.map((step, index) => ({
    ...step,
    icon: step.icon || defaultIcons[index % defaultIcons.length],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: isEnglish ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" dir={isEnglish ? "ltr" : "rtl"}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-16 ${
            isEnglish ? "" : "font-sahel"
          }`}
        >
          {title}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {enrichedSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover="hover"
              className="relative group"
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              {/* Step Card */}
              <div
                className={`
                  bg-white p-6 rounded-lg shadow-lg h-full 
                  transition-all duration-300
                  ${
                    activeStep === index
                      ? "border-2 border-primary scale-105"
                      : "hover:shadow-xl"
                  }
                `}
              >
                {/* Step Number and Icon */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>{step.icon}</div>
                </div>

                {/* Step Title */}
                <h3
                  className={`
                    text-xl font-bold mb-3 
                    ${isEnglish ? "" : "font-sahel"}
                    ${activeStep === index ? "text-primary" : ""}
                  `}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <motion.p
                  className={`
                    text-gray-600 mb-3
                    ${isEnglish ? "" : "font-sahel"}
                  `}
                >
                  {step.description}
                </motion.p>

                {/* Expandable Paragraph */}
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      variants={descriptionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className={`
                        text-sm text-gray-700 
                        ${isEnglish ? "" : "font-sahel"}
                      `}
                    >
                      {step.paragraph}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Connector Line */}
              {index < enrichedSteps.length - 1 && (
                <div
                  className={`
                    hidden lg:block absolute top-1/2 
                    ${isEnglish ? "-right-4" : "-left-4"} 
                    w-8 h-0.5 bg-primary 
                    transition-all duration-300
                    ${
                      activeStep === index || activeStep === index + 1
                        ? "opacity-100"
                        : "opacity-50"
                    }
                  `}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
