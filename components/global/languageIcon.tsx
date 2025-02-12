'use client'
import Image from "next/image";
import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageIcon = () => {
  const { state, dispatch } = useLanguage();
  const isEnglish = state.currentLang === "en";

  const toggleLanguage = () => {
    dispatch({ type: "TOGGLE_LANGUAGE" });
  };

  return (
    <div
      onClick={toggleLanguage}
      className="relative cursor-pointer  w-[70px] h-[34px] rounded-full p-1 transition-all duration-300 bg-white/40"
    >
      <div
        className="absolute flex items-center justify-center w-[26px] h-[26px] bg-white rounded-full transition-all duration-300 shadow-md"
        style={{
          transform: isEnglish ? "translateX(0)" : "translateX(36px)",
        }}
      >
        <Image
          width={20}
          height={20}
          alt={isEnglish ? "english" : "persian"}
          src={
            isEnglish ? "/assets/svg/english.svg" : "/assets/svg/iran.svg"
          }
          className="w-4 h-4 object-contain"
        />
      </div>
    </div>
  );
};

export default LanguageIcon;
