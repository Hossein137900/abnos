"use client";

import { useLanguage } from "@/components/global/LanguageContext";

export default function FontWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useLanguage();

  return (
    <div
      className={`${
        state.currentLang === "fa" ? "font-sahel" : "font-manrope"
      }`}
    >
      {children}
    </div>
  );
}
