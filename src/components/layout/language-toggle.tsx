"use client"

import { useLanguage } from "@/context/language-context"

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white transition hover:bg-white/10"
    >
      {language === "pt" ? "EN" : "PT"}
    </button>
  )
}
