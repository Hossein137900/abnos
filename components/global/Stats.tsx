'use client'
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaChartLine, FaUsers, FaIndustry, FaTrophy } from "react-icons/fa";

interface StatItem {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsProps {
  title: string;
  stats: StatItem[];
}

const Stats = ({ title, stats }: StatsProps) => {
  const { state } = useLanguage();
  const [animatedStats, setAnimatedStats] = useState<StatItem[]>([]);
  const isEnglish = state.currentLang === "en";
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Default icons for stats
  const defaultIcons = [
    <FaChartLine key="chart" className="text-4xl text-blue-500" />,
    <FaUsers key="users" className="text-4xl text-green-500" />,
    <FaIndustry key="industry" className="text-4xl text-purple-500" />,
    <FaTrophy key="trophy" className="text-4xl text-yellow-500" />
  ];

  // Convert number string to actual number, handling '+' and '%' signs
  const parseNumber = (numStr: string): number => {
    const cleanNum = numStr.replace(/[+%]/g, '');
    return parseFloat(cleanNum);
  };

  // Animate numbers
  const animateCountUp = (element: HTMLDivElement, start: number, end: number) => {
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentNumber = Math.floor(progress * (end - start) + start);

      // Format the number back to original string format
      const formattedNumber = stats[statsRef.current.indexOf(element)].number.includes('+') 
        ? `${currentNumber}+`
        : stats[statsRef.current.indexOf(element)].number.includes('%')
        ? `${currentNumber}%`
        : `${currentNumber}`;

      element.textContent = formattedNumber;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    // Add icons to stats if not provided
    const enrichedStats = stats.map((stat, index) => ({
      ...stat,
      icon: stat.icon || defaultIcons[index % defaultIcons.length]
    }));
    setAnimatedStats(enrichedStats);

    // Intersection Observer to trigger count animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const statElement = entry.target as HTMLDivElement;
            const endNumber = parseNumber(stats[index].number);
            animateCountUp(statElement, 0, endNumber);
            observer.unobserve(statElement);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe stat number elements
    statsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      statsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [stats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="py-20 bg-gray-50" 
      dir={isEnglish ? 'ltr' : 'rtl'}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-16 ${isEnglish ? "" : "font-sahel"}`}
        >
          {title}
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {animatedStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <motion.h3 
                ref={(el) => {
                  if (el) statsRef.current[index] = el
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className={`text-gray-600 ${isEnglish ? "" : "font-sahel"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
