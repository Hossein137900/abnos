"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-2 left-2 md:bottom-2 md:left-2 z-[99]">
      <div className="flex flex-col-reverse gap-4">
        {/* Chat Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`
     
    text-white rounded-full border-2  ${
      isChatOpen ? "border-slate-500 bg-black bg-opacity-50" : "border-transparent"
    } shadow-lg transition-all duration-300 ease-in-out
    shadow-blue-400/50 hover:scale-105 flex items-center gap-2 overflow-hidden
    ${isChatOpen ? "px-4 py-3 md:px-6 md:py-4" : "p-2 md:p-3 w-fit"}
  `}
        >
          <div
            className="relative cursor-pointer"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <iframe
              className={`w-16 h-16 pointer-events-none ${
                isChatOpen ? "hidden" : ""
              }`}
              src="https://lottie.host/embed/c50d361f-46ab-442f-af43-0476ed0c4319/RzK4cWx0w2.lottie"
            ></iframe>
            <div className="absolute inset-0" />
          </div>
          {isChatOpen && (
            <span className="text-xs md:text-xs font-medium whitespace-nowrap animate-marquee">
              من ربات هوشمند آبنوس هستم. چطور می‌توانم به شما کمک کنم؟
            </span>
          )}
        </button>

        {/* Chat Window */}
        <div
          className={`
          transition-all duration-300 ease-in-out
          ${
            isChatOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
        >
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/02/16/20250202160040-EGNAZZJX.json"
            className={`w-[350px] h-[300px] md:w-[400px] md:h-[400px] ${isChatOpen ? "" : "hidden"} rounded-2xl shadow-2xl border border-gray-600 bg-gray-100 backdrop-blur-sm`}
             
          />
        </div>
      </div>
    </div>
  );
}
