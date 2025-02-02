'use client'

import { useState } from 'react'

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="fixed top-12 left-8 z-[9998]">
      <div className="flex flex-col gap-4">
        {/* Chat Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                     text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out
                     hover:shadow-blue-400/50 hover:scale-105"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
        </button>

        {/* Chat Window */}
        <div className={`
          transition-all duration-300 ease-in-out
          ${isChatOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'}
        `}>
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/02/16/20250202160040-EGNAZZJX.json"
            className="w-[400px] h-[600px] rounded-2xl shadow-2xl border border-gray-200
                       bg-white backdrop-blur-sm"
          />
        </div>
      </div>
    </div>
  )
}
