"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function Navbar() {
  const { language = "pt", toggleLanguage } = useLanguage()
  const t = content[language]?.navbar ?? content.pt.navbar
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { label: t.hero, href: "#hero" },
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.experience, href: "#experience" },
    { label: t.contact, href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#060A12]/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-base font-semibold text-white tracking-tight">
          Matheus<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleLanguage}
              className="rounded-lg border border-white/15 px-3 py-1 text-xs text-slate-300 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xl">
            {isOpen ? "✕" : "☰"}
          </button>
          {isOpen && (
            <ul className="absolute right-4 top-16 flex w-48 flex-col gap-4 rounded-xl bg-[#0A101C]/95 border border-white/10 p-4 shadow-xl backdrop-blur-md">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm text-slate-300 transition hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { toggleLanguage(); setIsOpen(false) }}
                  className="w-full rounded-lg border border-white/15 px-3 py-1 text-xs text-slate-300"
                >
                  {language === "pt" ? "EN" : "PT"}
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}
