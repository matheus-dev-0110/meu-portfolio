"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { content } from "@/lib/content"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = content[language].hero

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 md:min-h-screen md:pt-0 md:pb-0"
    >
      {/* Background blur */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[140px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-500/20 blur-[140px] md:h-[500px] md:w-[500px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:min-h-screen md:flex-row md:justify-between md:gap-20">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          <span className="text-xs uppercase tracking-widest text-slate-400 sm:text-sm">
            {t.role}
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-6xl">
            Matheus Henrique <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Nóbrega Fernandes
            </span>
          </h1>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.description}
          </p>

          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-purple-600 px-6 py-4 text-sm font-medium text-white transition hover:bg-purple-500"
            >
              {t.projectsBtn}
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-4 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {t.contactBtn}
            </a>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] rounded-full bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-2xl overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Matheus Nóbrega"
              fill
              priority
              className="rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
