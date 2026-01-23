"use client"

import { useLanguage } from "@/context/language-context" // ou @/context/language-context, conforme sua pasta

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage() // ⚠️ use "lang" e "toggleLang"

  return (
    <button
      onClick={toggleLang}
      className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white transition hover:bg-white/10"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  )
}
