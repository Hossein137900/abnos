"use client";
import { useLanguage } from "@/components/global/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const { state } = useLanguage();
  const isEnglish = state.currentLang === "en";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Broken Glass SVG */}
          <svg
            className="w-48 h-48 mx-auto mb-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L4 7V17L12 21L20 17V7L12 3Z"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 7L12 11L20 7"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11V21"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {isEnglish
              ? "Oops! This page seems to have shattered"
              : "اوپس! این صفحه نامفهوم به نظر می‌رسد"}
          </h2>
          <p className="text-gray-600 mb-8">
            {isEnglish
              ? "The page you're looking for might have been moved, deleted, or possibly never existed."
              : "صفحه‌ای که به دنبال آن هستید ممکن است منتقل شده، حذف شده یا اصلاً وجود نداشته باشد."}
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-blue-700"
            >
              {isEnglish ? "Return Home" : "بازگشت به خانه"}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
