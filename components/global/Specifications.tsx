"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Specifications({
  specifications,
}: {
  specifications: any;
}) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#6FBDF5] mb-8">
          {specifications.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-2">
              {specifications.details.map((category: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center p-4 rounded-lg transition-all min-h-[50px] ${
                    activeCategory === index
                      ? "bg-[#6FBDF5] text-white shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <span className="w-full text-left">{category.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Specifications Display */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-6 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {specifications.details[activeCategory].category}
                </h3>
                <div className="grid gap-4">
                  {specifications.details[activeCategory].items.map(
                    (item: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-[#6FBDF5]/10 text-[#6FBDF5] rounded-full">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
