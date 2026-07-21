"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function Navbar() {
  const { language = "pt", toggleLanguage } = useLanguage() // fallback "pt"
  const t = content[language]?.navbar ?? content.pt.navbar // fallback seguro
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: t.hero, href: "#hero" },
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.projects, href: "#projects" },
    { label: t.experience, href: "#experience" },
    { label: t.contact, href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/60 backdrop-blur-md shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6">

        {/* Logo / Nome */}
        <a href="#hero" className="text-xl font-bold text-white">
          Matheus Nóbrega Fernandes
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white transition hover:text-purple-400"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={toggleLanguage}
              className="rounded-lg border border-white/20 px-3 py-1 text-sm text-white transition hover:bg-white/10"
            >
              {language === "pt" ? "EN" : "PT"}
            </button>
          </li>
        </ul>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {isOpen && (
            <ul className="absolute right-4 top-16 flex w-48 flex-col gap-4 rounded-xl bg-black/90 p-4 shadow-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white transition hover:text-purple-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    toggleLanguage()
                    setIsOpen(false)
                  }}
                  className="w-full rounded-lg border border-white/20 px-3 py-1 text-sm text-white transition hover:bg-white/10"
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
